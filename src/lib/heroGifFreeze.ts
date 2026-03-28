import introGif from "@/components/ctli_intro.gif";
import { HERO_INTRO_GIF_LOOP_MS } from "@/config/heroIntroGifMeta";

export const HERO_INTRO_GIF_BUNDLE_SRC =
  typeof introGif === "string" ? introGif : introGif.src;

const CAPTURE_SLACK_MS = 24;
const MAX_SNAPSHOT_EDGE = 1920;

type FrozenWindow = Window & { __CTLI_HERO_GIF_FROZEN__?: string };

type Listener = () => void;

let frozenSrc: string | null = null;
const listeners = new Set<Listener>();

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
  if (frozenSrc) return frozenSrc;
  return HERO_INTRO_GIF_BUNDLE_SRC;
}

/** Mesma URL no servidor e no cliente: o GIF começa a carregar de imediato. */
export function heroGifGetServerSnapshot(): string {
  return HERO_INTRO_GIF_BUNDLE_SRC;
}

export function heroGifSubscribe(onChange: Listener): () => void {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

export function heroGifRegisterImg(el: HTMLImageElement | null) {
  if (el) activeImg = el;
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
