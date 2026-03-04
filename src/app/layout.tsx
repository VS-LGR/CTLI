import type { ReactNode } from "react";
import "@/styles/globals.css";
import "@/styles/theme.css";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}


