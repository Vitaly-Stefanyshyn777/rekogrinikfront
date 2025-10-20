"use client";

import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import useIsMobile from "@/components/hooks/useIsMobile";
import { useFilteredGallery } from "@/hooks/useFilteredGallery";

export default function Gallery() {
  const [visibleItems, setVisibleItems] = useState(2);
  const isMobile = useIsMobile();
  const { pairs, loading, error } = useFilteredGallery();

  // На десктопі показуємо 6 карток за замовчуванням,
  // на мобільному — 2 картки. Оновлюємо при зміні брейкпоінту.
  useEffect(() => {
    setVisibleItems(isMobile ? 2 : 6);
  }, [isMobile]);

  // Fallback статичні дані якщо API не працює
  const fallbackItems = [
    { label: "До", image: "/Frame 35138.png" },
    { label: "Після", image: "/Frame 35139.png" },
    { label: "До", image: "/Frame 35140.png" },
    { label: "Після", image: "/Frame 35141.png" },
    { label: "До", image: "/Frame 35142.png" },
    { label: "Після", image: "/Frame 35143.png" },
    { label: "До", image: "/Frame 35144.png" },
    { label: "Після", image: "/Frame 35145.png" },
    { label: "До", image: "/Frame 35146.png" },
    { label: "Після", image: "/Frame 35138.png" },
    { label: "До", image: "/Frame 35139.png" },
    { label: "Після", image: "/Frame 35140.png" },
  ];

  // Створюємо колекції по 3 пари "До/Після"
  const createPhotoCollections = () => {
    const collections = [];

    // Групуємо пари по 3
    for (let i = 0; i < pairs.length; i += 3) {
      const pairGroup = pairs.slice(i, i + 3);

      // Створюємо колекцію "До" (3 фото)
      const beforePhotos = pairGroup.map((pair: any) => ({
        label: "До",
        image: pair.beforePhoto?.url,
        pairId: pair.id,
        type: "before",
        title: pair.beforePhoto?.title || "До",
        description: pair.beforePhoto?.description || "",
        pairLabel: pair.label || "",
      }));

      // Створюємо колекцію "Після" (3 фото)
      const afterPhotos = pairGroup.map((pair: any) => ({
        label: "Після",
        image: pair.afterPhoto?.url,
        pairId: pair.id,
        type: "after",
        title: pair.afterPhoto?.title || "Після",
        description: pair.afterPhoto?.description || "",
        pairLabel: pair.label || "",
      }));

      // Додаємо колекцію "До"
      collections.push({
        type: "before-collection",
        photos: beforePhotos,
        collectionId: `before-${Math.floor(i / 3)}`,
      });

      // Додаємо колекцію "Після"
      collections.push({
        type: "after-collection",
        photos: afterPhotos,
        collectionId: `after-${Math.floor(i / 3)}`,
      });
    }

    return collections;
  };

  const photoCollections = createPhotoCollections();

  // Перетворюємо колекції в плоский масив для відображення
  const apiItems = photoCollections.flatMap((collection) => collection.photos);

  // Використовуємо дані з API або fallback
  const allItems = apiItems.length > 0 ? apiItems : fallbackItems;

  // Обробка помилок API
  if (error) {
    console.error("Помилка завантаження галереї:", error);
  }

  const displayedItems = allItems.slice(0, visibleItems).filter(Boolean); // Фільтруємо null значення
  const hasMoreItems = visibleItems < allItems.length;

  // Дебаг логування
  console.log("=== Gallery Debug Info ===");
  console.log("Loading state:", loading);
  console.log("Error state:", error);
  console.log("Pairs from API:", pairs);
  console.log("Pairs length:", pairs.length);
  console.log("Photo collections:", photoCollections);
  console.log("Collections count:", photoCollections.length);
  console.log("API items:", apiItems);
  console.log("All items:", allItems);
  console.log("Displayed items:", displayedItems);
  console.log("Using fallback:", apiItems.length === 0);
  console.log("=========================");

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
    item: {
      label: string;
      image: string;
      pairId?: number;
      type?: string;
      title?: string;
      description?: string;
      pairLabel?: string;
    },
    index: number
  ) => {
    // Перевіряємо чи є валідне зображення
    if (!item.image) {
      console.warn("Empty image URL for item:", item);
      return null;
    }

    return (
      <div
        className={`${styles.tile} ${item.pairId ? styles.pairTile : ""}`}
        key={`${item.pairId || index}-${item.type || index}`}
        data-pair-id={item.pairId}
        data-pair-type={item.type}
      >
        <div className={styles.imageContainer}>
          <img
            src={item.image}
            alt={item.title || `${item.label} - ${index + 1}`}
            className={styles.image}
            onError={(e) => {
              console.log("Image failed to load:", item.image);
              // Fallback to static image if API image fails
              const fallbackImage =
                fallbackItems[index % fallbackItems.length]?.image;
              if (fallbackImage && e.currentTarget.src !== fallbackImage) {
                e.currentTarget.src = fallbackImage;
              } else {
                // Якщо fallback також не завантажився, приховуємо зображення
                e.currentTarget.style.display = "none";
              }
            }}
          />
        </div>
        <span className={styles.badge}>{item.label}</span>
        {item.title && item.title !== item.label && (
          <div className={styles.title}>{item.title}</div>
        )}
        {item.description && (
          <div className={styles.description}>{item.description}</div>
        )}
        {item.pairLabel && (
          <div className={styles.pairLabel}>{item.pairLabel}</div>
        )}
      </div>
    );
  };

  // Показуємо індикатор завантаження якщо дані ще завантажуються
  if (loading) {
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
          <div className={styles.loading}>Завантаження...</div>
        </div>
      </section>
    );
  }

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
              {displayedItems.map((item, index) =>
                item ? renderCard(item, index) : null
              )}
            </div>
          ) : (
            <div className={styles.gridPairs}>
              {displayedItems.map((item, index) =>
                item ? renderCard(item, index) : null
              )}
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
