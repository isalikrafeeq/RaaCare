"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "emerald" | "navy" | "glass" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full tracking-wide",
        size === "sm" && "px-3 py-1 text-xs",
        size === "md" && "px-4 py-1.5 text-sm",
        variant === "default" &&
          "bg-slate-800/60 text-slate-300 border border-slate-700/50",
        variant === "emerald" &&
          "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
        variant === "navy" &&
          "bg-blue-600/15 text-blue-400 border border-blue-500/25",
        variant === "glass" &&
          "glass text-white/80",
        variant === "outline" &&
          "border border-white/20 text-white/70 bg-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
