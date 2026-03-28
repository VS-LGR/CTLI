import introGif from "@/components/CTLI INTRo.gif";
import { HERO_INTRO_GIF_LOOP_MS } from "@/config/heroIntroGifMeta";

/** URL do asset empacotado (snapshot estável para SSR/hidratação). */
export const HERO_INTRO_GIF_BUNDLE_SRC =
  typeof introGif === "string" ? introGif : introGif.src;

const CAPTURE_SLACK_MS = 24;
const MAX_SNAPSHOT_EDGE = 1920;

type FrozenWindow = Window & { __CTLI_HERO_GIF_FROZEN__?: string };

type Listener = () => void;

let frozenSrc: string | null = null;
const listeners = new Set<Listener>();

/** Último <img> registado: mantido após unmount para o timer do Strict Mode ainda conseguir capturar. */
let activeImg: HTMLImageElement | null = null;

let freezeScheduled = false;
let timerId: number | null = null;

function emit() {
  for (const l of listeners) l();
}

function readWindowCache(): void {
  if (typeof window === "undefined") return;
  const w = window as FrozenWindow;
  if (w.__CTLI_HERO_GIF_FROZEN__ && !frozenSrc) {
    frozenSrc = w.__CTLI_HERO_GIF_FROZEN__;
  }
}

export function heroGifGetSrc(): string {
  readWindowCache();
  return frozenSrc ?? HERO_INTRO_GIF_BUNDLE_SRC;
}

export function heroGifSubscribe(onChange: Listener): () => void {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

/** Só actualiza quando há elemento novo; não limpa em unmount (evita perder referência durante Strict Mode). */
export function heroGifRegisterImg(el: HTMLImageElement | null) {
  if (el) activeImg = el;
}

function runSnapshot() {
  timerId = null;
  readWindowCache();
  if (frozenSrc) return;

  const img = activeImg;
  if (!img?.isConnected) {
    freezeScheduled = false;
    return;
  }
  if (!img.complete || img.naturalWidth < 1) return;
  if (img.src.startsWith("data:image/")) return;

  const w = img.naturalWidth;
  const h = img.naturalHeight;
  let tw = w;
  let th = h;
  if (w > MAX_SNAPSHOT_EDGE) {
    tw = MAX_SNAPSHOT_EDGE;
    th = Math.round((h * MAX_SNAPSHOT_EDGE) / w);
  }

  try {
    const canvas = document.createElement("canvas");
    canvas.width = tw;
    canvas.height = th;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      freezeScheduled = false;
      return;
    }
    ctx.drawImage(img, 0, 0, w, h, 0, 0, tw, th);
    const url = canvas.toDataURL("image/png");
    if (!url.startsWith("data:image/png") || url.length < 200) {
      freezeScheduled = false;
      return;
    }
    frozenSrc = url;
    (window as FrozenWindow).__CTLI_HERO_GIF_FROZEN__ = url;
    emit();
  } catch {
    freezeScheduled = false;
  }
}

function armTimer() {
  const ms = Math.max(0, HERO_INTRO_GIF_LOOP_MS - CAPTURE_SLACK_MS);
  if (timerId !== null) window.clearTimeout(timerId);
  timerId = window.setTimeout(() => {
    timerId = null;
    requestAnimationFrame(() => requestAnimationFrame(runSnapshot));
  }, ms);
}

/**
 * Chamado uma vez por ciclo de vida útil do GIF (onLoad).
 * Garante um único agendamento global — mesmo com remounts do React.
 */
export function heroGifNotifyLoaded() {
  readWindowCache();
  if (frozenSrc) {
    emit();
    return;
  }

  if (freezeScheduled) return;
  freezeScheduled = true;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    requestAnimationFrame(() => requestAnimationFrame(runSnapshot));
    return;
  }

  armTimer();
}
