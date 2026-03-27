"use client";

import { useCallback, useEffect, useRef } from "react";
import introGif from "@/components/CTLI INTRo.gif";
import { HERO_INTRO_GIF_LOOP_MS } from "@/config/heroIntroGifMeta";

const CAPTURE_BEFORE_LOOP_MS = 56;
const MAX_SNAPSHOT_EDGE = 1920;

function gifSrc(): string {
  return typeof introGif === "string" ? introGif : introGif.src;
}

export function HeroIntroFreezeGif() {
  const imgRef = useRef<HTMLImageElement>(null);
  const doneRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const snapshot = useCallback(() => {
    const img = imgRef.current;
    if (!img || doneRef.current || !img.complete || img.naturalWidth < 1) return;

    try {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      let tw = w;
      let th = h;
      if (w > MAX_SNAPSHOT_EDGE) {
        tw = MAX_SNAPSHOT_EDGE;
        th = Math.round((h * MAX_SNAPSHOT_EDGE) / w);
      }
      const canvas = document.createElement("canvas");
      canvas.width = tw;
      canvas.height = th;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, w, h, 0, 0, tw, th);
      img.src = canvas.toDataURL("image/png");
      doneRef.current = true;
    } catch {
      /* canvas tainted / memória — mantém o GIF a animar */
    }
  }, []);

  const onLoad = useCallback(() => {
    if (doneRef.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      requestAnimationFrame(() => requestAnimationFrame(snapshot));
      return;
    }

    const ms = Math.max(0, HERO_INTRO_GIF_LOOP_MS - CAPTURE_BEFORE_LOOP_MS);
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      timeoutRef.current = null;
      snapshot();
    }, ms);
  }, [snapshot]);

  return (
    // eslint-disable-next-line @next/next/no-img-element -- precisamos de <img> para drawImage e troca de src após o loop
    <img
      ref={imgRef}
      src={gifSrc()}
      alt=""
      className="absolute inset-0 h-full w-full object-cover object-[56%_30%]"
      loading="lazy"
      decoding="async"
      draggable={false}
      onLoad={onLoad}
    />
  );
}
