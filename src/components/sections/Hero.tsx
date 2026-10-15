"use client";

import Link from "next/link";
import styles from "./Hero.module.css";
import { useHero } from "@/hooks/useHero";
import { useState } from "react";
import CallModal from "@/components/modals/CallModal";

export default function Hero() {
  const { heroData, loading, error } = useHero();
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  // Fallback дані якщо API не працює
  const fallbackData = {
    title: "RekoGrinik – Rekonstrukce bytů a domů v Praze",
    subtitle: "Kompletní rekonstrukce na klíč, pevné rozpočty a termíny",
    primaryButtonText: "Bezplatná konzultace",
    secondaryButtonText: "Více informací",
    primaryButtonLink: "#consult",
    secondaryButtonLink: "#more",
    logoUrl: "/vector-2.svg",
  };

  // Використовуємо дані з API або fallback
  // Якщо heroData існує, використовуємо його, інакше fallback
  const data = heroData
    ? {
        title:
          (heroData as { title?: string; subtitle?: string }).title ||
          fallbackData.title,
        subtitle:
          (heroData as { title?: string; subtitle?: string }).subtitle ||
          fallbackData.subtitle,
        primaryButtonText: fallbackData.primaryButtonText,
        secondaryButtonText: fallbackData.secondaryButtonText,
        primaryButtonLink: fallbackData.primaryButtonLink,
        secondaryButtonLink: fallbackData.secondaryButtonLink,
        logoUrl: fallbackData.logoUrl,
      }
    : fallbackData;

  if (loading) {
    return (
      <section
        className={styles.hero}
        style={{ height: "812px", minHeight: "812px" }}
      >
        <div className={styles.overlay}>
          <div className={styles.centerText}>
            <div className={styles.loading}>Načítání...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Помилка завантаження Hero:", error);
  }

  return (
    <section
      className={styles.hero}
      style={{ height: "812px", minHeight: "812px" }}
    >
      <div className={styles.overlay}>
        <div className={styles.centerText}>
          <div className={styles.logo}>
            <img
              src={data.logoUrl || fallbackData.logoUrl}
              alt="RekoGrinik"
              width="94"
              height="94"
            />
          </div>
          <div className={styles.textBlock}>
            <h1>{data.title || fallbackData.title}</h1>
            <p>{data.subtitle || fallbackData.subtitle}</p>
          </div>

          <div className={styles.actions}>
            <Link
              href="/kontakt"
              className={styles.primaryBtn}
              data-cta="hero_consultation"
            >
              {data.primaryButtonText || fallbackData.primaryButtonText}
            </Link>
            <button
              className={styles.secondaryBtn}
              data-cta="hero_call"
              onClick={() => setIsCallModalOpen(true)}
            >
              {data.secondaryButtonText || fallbackData.secondaryButtonText}
            </button>
          </div>
        </div>
      </div>

      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />
    </section>
  );
}
