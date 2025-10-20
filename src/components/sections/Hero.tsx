"use client";

import Link from "next/link";
import styles from "./Hero.module.css";
import { useHero } from "@/hooks/useHero";

export default function Hero() {
  const { heroData, loading, error } = useHero();

  // Fallback дані якщо API не працює
  const fallbackData = {
    title: "RekoGrinik – Rekonstrukce bytů a domů v Praze",
    subtitle: "Kompletní rekonstrukce na klíč, pevné rozpočty a termíny",
    primaryButtonText: "Bezplatná konzultace",
    secondaryButtonText: "Více informací",
    primaryButtonLink: "#consult",
    secondaryButtonLink: "#more",
    logoUrl: "/Logo-Hero.svg?v=hero",
  };

  // Використовуємо дані з API або fallback
  // Якщо heroData існує, використовуємо його, інакше fallback
  const data = heroData
    ? {
        title: (heroData as any).title || fallbackData.title,
        subtitle: (heroData as any).subtitle || fallbackData.subtitle,
        primaryButtonText: fallbackData.primaryButtonText,
        secondaryButtonText: fallbackData.secondaryButtonText,
        primaryButtonLink: fallbackData.primaryButtonLink,
        secondaryButtonLink: fallbackData.secondaryButtonLink,
        logoUrl: fallbackData.logoUrl,
      }
    : fallbackData;

  // Дебаг логування
  console.log("=== Hero Debug Info ===");
  console.log("Loading state:", loading);
  console.log("Error state:", error);
  console.log("Hero data from API:", heroData);
  console.log("Final data being used:", data);
  console.log(
    "Using fallback:",
    !heroData || (!(heroData as any)?.title && !(heroData as any)?.subtitle)
  );
  console.log("=========================");

  if (loading) {
    return (
      <section
        className={styles.hero}
        style={{ height: "812px", minHeight: "812px" }}
      >
        <div className={styles.overlay}>
          <div className={styles.centerText}>
            <div className={styles.loading}>Завантаження...</div>
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
              href={data.primaryButtonLink || fallbackData.primaryButtonLink}
              className={styles.primaryBtn}
            >
              {data.primaryButtonText || fallbackData.primaryButtonText}
            </Link>
            <Link
              href={
                data.secondaryButtonLink || fallbackData.secondaryButtonLink
              }
              className={styles.secondaryBtn}
            >
              {data.secondaryButtonText || fallbackData.secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
