"use client";

import { useCallback, useSyncExternalStore } from "react";
import {
  HERO_INTRO_GIF_BUNDLE_SRC,
  heroGifGetSrc,
  heroGifNotifyLoaded,
  heroGifRegisterImg,
  heroGifSubscribe
} from "@/lib/heroGifFreeze";

export function HeroIntroFreezeGif() {
  const src = useSyncExternalStore(
    heroGifSubscribe,
    heroGifGetSrc,
    () => HERO_INTRO_GIF_BUNDLE_SRC
  );

  const setImgRef = useCallback((el: HTMLImageElement | null) => {
    heroGifRegisterImg(el);
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element -- drawImage + troca para PNG após um loop
    <img
      ref={setImgRef}
      src={src}
      alt=""
      className="absolute inset-0 h-full w-full object-cover object-[56%_30%]"
      loading="eager"
      decoding="async"
      draggable={false}
      onLoad={heroGifNotifyLoaded}
    />
  );
}
