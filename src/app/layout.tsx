import type { ReactNode } from "react";
import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/theme.css";

export const metadata: Metadata = {
  title: "CTLI | Institutional",
  description:
    "CTLI – Centro Tecnológico em Liderança e Inovação. Institutional website."
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

