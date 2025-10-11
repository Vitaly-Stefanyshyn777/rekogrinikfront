"use client";

import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import useIsMobile from "@/components/hooks/useIsMobile";

export default function Gallery() {
  const [visibleItems, setVisibleItems] = useState(2);
  const isMobile = useIsMobile();

  // На десктопі показуємо 6 карток за замовчуванням,
  // на мобільному — 2 картки. Оновлюємо при зміні брейкпоінту.
  useEffect(() => {
    setVisibleItems(isMobile ? 2 : 6);
  }, [isMobile]);

  const allItems = [
    { label: "Na", image: "/Frame 35138.png" },
    { label: "Po", image: "/Frame 35139.png" },
    { label: "Na", image: "/Frame 35140.png" },
    { label: "Po", image: "/Frame 35141.png" },
    { label: "Na", image: "/Frame 35142.png" },
    { label: "Po", image: "/Frame 35143.png" },
    { label: "Na", image: "/Frame 35144.png" },
    { label: "Po", image: "/Frame 35145.png" },
    { label: "Na", image: "/Frame 35146.png" },
    { label: "Po", image: "/gallery/na1.jpg" },
    { label: "Na", image: "/gallery/na2.jpg" },
    { label: "Po", image: "/gallery/na3.jpg" },
  ];

  const displayedItems = allItems.slice(0, visibleItems);
  const hasMoreItems = visibleItems < allItems.length;

  const handleShowMore = () => {
    if (hasMoreItems) {
      if (isMobile) {
        // На мобільному показуємо по 2 картки за раз
        setVisibleItems((prev) => Math.min(prev + 2, allItems.length));
      } else {
        // На десктопі показуємо всі картки одразу
        setVisibleItems(allItems.length);
      }
    } else {
      // Повертаємо до початкового стану
      setVisibleItems(isMobile ? 2 : 6);
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
              {displayedItems.map((item, index) => renderCard(item, index))}
            </div>
          ) : (
            <div className={styles.gridPairs}>
              {displayedItems.map((item, index) => renderCard(item, index))}
            </div>
          )}

          <button className={styles.ctaBtn} onClick={handleShowMore}>
            {hasMoreItems ? "Zobrazit více" : "Zobrazit méně"}
          </button>
        </div>
      </div>
    </section>
  );
}
