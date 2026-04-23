"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

type AnimateProps = {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "zoom-in";
  delay?: number; // ms
  threshold?: number;
};

export default function Animate({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: AnimateProps) {
  const { ref, isVisible } = useScrollAnimation(threshold);

  const base = "transition-all duration-700 ease-out";

  const hidden: Record<string, string> = {
    "fade-up": "opacity-0 translate-y-10",
    "fade-in": "opacity-0",
    "slide-left": "opacity-0 -translate-x-10",
    "slide-right": "opacity-0 translate-x-10",
    "zoom-in": "opacity-0 scale-95",
  };

  const visible = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      className={cn(base, isVisible ? visible : hidden[animation], `delay-[${delay}ms]`, className)}
    >
      {children}
    </div>
  );
}