"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Optional custom class on wrapper */
  className?: string;
  /** Start animation slightly before element hits viewport */
  rootMargin?: string;
  /** Ratio to consider as visible */
  threshold?: number | number[];
  /**
   * If true (default) – observe continuously and toggle visibility
   * when element enters/exits viewport (works both scrolling down & up).
   * If false – reveal once and keep visible.
   */
  repeat?: boolean;
};

/**
 * Lightweight IntersectionObserver wrapper that adds
 * a `reveal-visible` class once the element enters the viewport.
 * Works on mobile/desktop and respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.2,
  repeat = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    // Respect reduced motion: render visible immediately
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setIsVisible(true);
      return;
    }

    // Intersection observer for reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (repeat) {
            setIsVisible(entry.isIntersecting);
          } else if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin, threshold, repeat]);

  return (
    <div
      ref={ref}
      className={`${className ?? ""} reveal ${
        isVisible ? "reveal-visible" : ""
      }`.trim()}
    >
      {children}
    </div>
  );
}
