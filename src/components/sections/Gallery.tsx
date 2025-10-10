"use client";

import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import useIsMobile from "@/components/hooks/useIsMobile";

export default function Gallery() {
  const [visiblePairs, setVisiblePairs] = useState(1);
  const isMobile = useIsMobile();

  // На десктопі показуємо 3 пари (6 карток) за замовчуванням,
  // на мобільному — 1 пару. Оновлюємо при зміні брейкпоінту.
  useEffect(() => {
    setVisiblePairs(isMobile ? 1 : 3);
  }, [isMobile]);

  const allPairs = [
    [
      { label: "Na", image: "/Frame 35138.png" },
      { label: "Po", image: "/Frame 35139.png" },
    ],
    [
      { label: "Na", image: "/Frame 35140.png" },
      { label: "Po", image: "/Frame 35141.png" },
    ],
    [
      { label: "Na", image: "/Frame 35142.png" },
      { label: "Po", image: "/Frame 35143.png" },
    ],
  ];

  const visibleItems = allPairs.slice(0, visiblePairs).flat();
  const hasMorePairs = visiblePairs < allPairs.length;

  const handleShowMore = () => {
    if (hasMorePairs) {
      setVisiblePairs((prev) => prev + 1);
    } else {
      setVisiblePairs(1); // Reset to first pair
    }
  };

  const renderCard = (
    item: { label: string; image: string },
    index: number
  ) => (
    <div className={styles.tile} key={index}>
      <div className={styles.imageContainer}>
        <img
          src={item.image}
          alt={`${item.label} - ${index + 1}`}
          className={styles.image}
        />
      </div>
      <span className={styles.badge}>{item.label}</span>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <h2>Ukázky našich prací</h2>
          <p>
            Provádíme jak kompletní rekonstrukce bytů, tak i částečné
            rekonstrukce. Každý projekt realizujeme s maximálním důrazem na
            detail.
          </p>
        </div>

        <div className={styles.gridBlock}>
          {isMobile ? (
            <div className={styles.mobileGrid}>
              {visibleItems.map((item, index) => renderCard(item, index))}
            </div>
          ) : (
            <div className={styles.gridPairs}>
              {allPairs.slice(0, visiblePairs).map((pair, colIdx) => (
                <div className={styles.pairCol} key={colIdx}>
                  {pair.map((item, idx) => renderCard(item, colIdx * 2 + idx))}
                </div>
              ))}
            </div>
          )}

          <button className={styles.ctaBtn} onClick={handleShowMore}>
            {hasMorePairs ? "Zobrazit více" : "Zobrazit méně"}
          </button>
        </div>
      </div>
    </section>
  );
}
