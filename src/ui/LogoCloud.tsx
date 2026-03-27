import type { ReactNode } from "react";

type LogoCloudProps = {
  children: ReactNode;
  /** Grade mais densa para listas longas de nomes (clientes). */
  variant?: "default" | "compact";
};

export function LogoCloud({ children, variant = "default" }: LogoCloudProps) {
  const grid =
    variant === "compact"
      ? "grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3"
      : "grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";

  return (
    <div className={`${grid} items-stretch`}>{children}</div>
  );
}

