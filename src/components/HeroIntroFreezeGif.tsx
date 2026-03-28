"use client";

import {
  heroGifGetServerSnapshot,
  heroGifGetSrc,
  heroGifNotifyLoaded,
  heroGifRegisterImg,
  heroGifSubscribe
} from "@/lib/heroGifFreeze";
import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore
} from "react";

/** Fade-out do GIF animado antes de mostrar o PNG congelado (ms). */
const FREEZE_FADE_MS = 560;

export function HeroIntroFreezeGif() {
  const src = useSyncExternalStore(
    heroGifSubscribe,
    heroGifGetSrc,
    heroGifGetServerSnapshot
  );

  const prevSrcRef = useRef(src);
  const [displaySrc, setDisplaySrc] = useState(src);
  const [fadingOut, setFadingOut] = useState(false);

  useLayoutEffect(() => {
    const prev = prevSrcRef.current;
    if (src === prev) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      prevSrcRef.current = src;
      setDisplaySrc(src);
      setFadingOut(false);
      return;
    }

    if (src.startsWith("data:image/") && !prev.startsWith("data:image/")) {
      setFadingOut(true);
      const tid = window.setTimeout(() => {
        prevSrcRef.current = src;
        setDisplaySrc(src);
        setFadingOut(false);
      }, FREEZE_FADE_MS);
      return () => window.clearTimeout(tid);
    }

    prevSrcRef.current = src;
    setDisplaySrc(src);
    setFadingOut(false);
  }, [src]);

  const setImgRef = useCallback((el: HTMLImageElement | null) => {
    heroGifRegisterImg(el);
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element -- snapshot para PNG após um loop
    <img
      ref={setImgRef}
      src={displaySrc}
      alt=""
      className="absolute inset-0 h-full w-full object-cover object-[56%_30%]"
      style={{
        transitionProperty: "opacity",
        transitionTimingFunction: "cubic-bezier(0.45, 0, 0.55, 1)",
        transitionDuration: fadingOut ? `${FREEZE_FADE_MS}ms` : "0ms",
        opacity: fadingOut ? 0 : 1
      }}
      loading="eager"
      decoding="async"
      draggable={false}
      onLoad={heroGifNotifyLoaded}
    />
  );
}
