"use client";
/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";

export type Photo = { src: string; alt: string };
export type PhotoGroup = { label: string; tone: "before" | "after"; photos: Photo[] };

// Before / after photo rows; any photo opens a full-screen viewer that steps
// through every photo of the project (arrows, Esc, or the on-screen buttons).
export default function ProjectGallery({ groups }: { groups: PhotoGroup[] }) {
  const all = groups.flatMap((g) => g.photos.map((p) => ({ ...p, label: g.label })));
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) => setOpen((i) => (i === null ? i : (i + dir + all.length) % all.length)),
    [all.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  let index = 0;
  return (
    <>
      {groups.map((g) => (
        <div key={g.label} className={styles.photoGroup}>
          <p className={`${styles.groupLabel} ${g.tone === "after" ? styles.groupAfter : ""}`}>
            {g.label}
          </p>
          <div className={styles.photoGrid}>
            {g.photos.map((p) => {
              const i = index++;
              return (
                <button
                  key={p.src}
                  type="button"
                  className={styles.photoBtn}
                  onClick={() => setOpen(i)}
                  aria-label={`Zvětšit fotografii: ${p.alt}`}
                >
                  <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {open !== null && (
        <div
          className={styles.viewer}
          role="dialog"
          aria-modal="true"
          aria-label="Fotografie z realizace"
          onClick={close}
        >
          <figure className={styles.viewerFigure} onClick={(e) => e.stopPropagation()}>
            <img src={all[open].src} alt={all[open].alt} />
            <figcaption>
              <span className={styles.viewerLabel}>{all[open].label}</span>
              {all[open].alt}
              <span className={styles.viewerCount}>
                {open + 1} / {all.length}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            className={`${styles.viewerBtn} ${styles.viewerPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Předchozí fotografie"
          >
            ‹
          </button>
          <button
            type="button"
            className={`${styles.viewerBtn} ${styles.viewerNext}`}
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Další fotografie"
          >
            ›
          </button>
          <button
            type="button"
            className={`${styles.viewerBtn} ${styles.viewerClose}`}
            onClick={close}
            aria-label="Zavřít"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
