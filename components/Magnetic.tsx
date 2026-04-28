"use client";

import { ReactNode } from "react";
import { useMagnetic } from "./hooks";

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export default function Magnetic({ children, className = "", strength }: Props) {
  const ref = useMagnetic(strength);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: "inline-block",
        transition: "transform .5s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {children}
    </div>
  );
}
