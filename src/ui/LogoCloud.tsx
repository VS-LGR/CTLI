import type { ReactNode } from "react";

type LogoCloudProps = {
  children: ReactNode;
};

export function LogoCloud({ children }: LogoCloudProps) {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 items-center">
      {children}
    </div>
  );
}

