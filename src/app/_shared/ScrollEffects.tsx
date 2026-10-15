"use client";

import { useEffect } from "react";

const COUNT_DURATION = 1800;
const STAGGER_MS = 90;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target)) return;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min((now - start) / COUNT_DURATION, 1);
    el.textContent = String(Math.round(target * easeOutCubic(t)));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/**
 * Scroll-reveal + number count-up for the page it is rendered in.
 * Markup stays fully visible without JS; animation is opt-in via
 * data-reveal / data-reveal-group / data-count attributes.
 */
export default function ScrollEffects() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-scroll-root]");
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Children of a group reveal one after another.
    root.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
      Array.from(group.children).forEach((child, i) => {
        const el = child as HTMLElement;
        if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "");
        el.style.setProperty("--reveal-delay", `${i * STAGGER_MS}ms`);
      });
    });

    const counters = root.querySelectorAll<HTMLElement>("[data-count]");
    counters.forEach((el) => (el.textContent = "0"));

    root.setAttribute("data-anim", "");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (el.hasAttribute("data-count")) countUp(el);
          else el.setAttribute("data-shown", "");
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    );

    root.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    counters.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
