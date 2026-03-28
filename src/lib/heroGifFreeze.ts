import introGif from "@/components/CTLI INTRo.gif";
import { HERO_INTRO_GIF_LOOP_MS } from "@/config/heroIntroGifMeta";

/** URL empacotada pelo bundler (usada só para fetch completo ou fallback). */
export const HERO_INTRO_GIF_BUNDLE_SRC =
  typeof introGif === "string" ? introGif : introGif.src;

const CAPTURE_SLACK_MS = 24;
const MAX_SNAPSHOT_EDGE = 1920;

type FrozenWindow = Window & { __CTLI_HERO_GIF_FROZEN__?: string };

type Listener = () => void;

let frozenSrc: string | null = null;
const listeners = new Set<Listener>();

/**
 * URL mostrada no <img> antes do PNG: blob: após fetch integral (recomendado) ou a URL do bundle em fallback.
 * O fetch→blob evita o browser animar dados parciais e reiniciar quando o ficheiro grande termina (parece 2 plays).
 */
let playbackUrl: string | null = null;
let playbackIsObjectUrl = false;

let blobFetchStarted = false;

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

function revokePlayback() {
  if (playbackUrl && playbackIsObjectUrl) {
    try {
      URL.revokeObjectURL(playbackUrl);
    } catch {
      /* ok */
    }
  }
  playbackUrl = null;
  playbackIsObjectUrl = false;
}

export function heroGifGetSrc(): string {
  readWindowCache();
  if (frozenSrc) return frozenSrc;
  return playbackUrl ?? "";
}

/** SSR / hidratação: sem URL até o blob estar pronto no cliente. */
export function heroGifGetServerSnapshot(): string {
  return "";
}

export function heroGifSubscribe(onChange: Listener): () => void {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

export function heroGifRegisterImg(el: HTMLImageElement | null) {
  if (el) activeImg = el;
}

/**
 * Inicia download completo do GIF e só então expõe `blob:` no <img>.
 * Chamada única no mount do componente (cliente).
 */
export function heroGifStartBlobPlayback(): void {
  if (typeof window === "undefined") return;
  readWindowCache();
  if (frozenSrc || playbackUrl || blobFetchStarted) return;
  blobFetchStarted = true;

  fetch(HERO_INTRO_GIF_BUNDLE_SRC)
    .then((res) => {
      if (!res.ok) throw new Error(String(res.status));
      return res.blob();
    })
    .then((blob) => {
      revokePlayback();
      playbackUrl = URL.createObjectURL(blob);
      playbackIsObjectUrl = true;
      emit();
    })
    .catch(() => {
      playbackUrl = HERO_INTRO_GIF_BUNDLE_SRC;
      playbackIsObjectUrl = false;
      emit();
    });
}

function armTimer() {
  const ms = Math.max(0, HERO_INTRO_GIF_LOOP_MS - CAPTURE_SLACK_MS);
  if (timerId !== null) window.clearTimeout(timerId);
  timerId = window.setTimeout(() => {
    timerId = null;
    requestAnimationFrame(() => requestAnimationFrame(runSnapshot));
  }, ms);
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
  if (!img.complete || img.naturalWidth < 1) {
    freezeScheduled = false;
    return;
  }
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
    queueMicrotask(() => revokePlayback());
  } catch {
    freezeScheduled = false;
  }
}

export function heroGifNotifyLoaded() {
  readWindowCache();
  if (frozenSrc) {
    emit();
    return;
  }

  if (freezeScheduled) return;
  freezeScheduled = true;

  const img = activeImg;
  if (!img) {
    freezeScheduled = false;
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    requestAnimationFrame(() => requestAnimationFrame(runSnapshot));
    return;
  }

  const arm = () => armTimer();
  if (typeof img.decode === "function") {
    img.decode().then(arm).catch(arm);
  } else {
    arm();
  }
}
