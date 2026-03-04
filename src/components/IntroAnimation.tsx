"use client";

import { useEffect, useState, type ReactNode } from "react";

type IntroAnimationProps = {
  children: ReactNode;
};

export function IntroAnimation({ children }: IntroAnimationProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setVisible(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`page-intro${visible ? " page-intro-visible" : ""}`}
    >
      {children}
    </div>
  );
}
