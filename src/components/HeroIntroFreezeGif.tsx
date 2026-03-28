"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import {
  heroGifGetServerSnapshot,
  heroGifGetSrc,
  heroGifNotifyLoaded,
  heroGifRegisterImg,
  heroGifStartBlobPlayback,
  heroGifSubscribe
} from "@/lib/heroGifFreeze";

export function HeroIntroFreezeGif() {
  const src = useSyncExternalStore(
    heroGifSubscribe,
    heroGifGetSrc,
    heroGifGetServerSnapshot
  );

  useEffect(() => {
    heroGifStartBlobPlayback();
  }, []);

  const setImgRef = useCallback((el: HTMLImageElement | null) => {
    heroGifRegisterImg(el);
  }, []);

  if (!src) {
    return <div className="absolute inset-0 bg-transparent" aria-hidden />;
  }

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
