"use client";

import { useEffect, useState, useMemo } from "react";
import styles from "./Gallery.module.css";
import useIsMobile from "@/components/hooks/useIsMobile";
import { useFilteredGallery } from "@/hooks/useFilteredGallery";
import dynamic from "next/dynamic";

const GalleryModal = dynamic(() => import("@/components/modals/GalleryModal"), { ssr: false });

export default function Gallery() {
  const isMobile = useIsMobile();
  // Початкове значення залежно від розміру екрану
  const [visibleItems, setVisibleItems] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768 ? 2 : 6;
    }
    return 2; // fallback для SSR
  });
  const { pairs, loading, error } = useFilteredGallery();

  // Стан модалки та поточного індексу
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  // На десктопі показуємо 6 карток за замовчуванням,
  // на мобільному — 2 картки. Оновлюємо при зміні брейкпоінту.
  useEffect(() => {
    setVisibleItems(isMobile ? 2 : 6);
  }, [isMobile]);

  // Fallback статичні дані якщо API не працює
  const fallbackItems = [
    { label: "Před", image: "/photo_2025-10-26 09.44.30.jpeg" },
    { label: "Před", image: "/photo_2025-10-26 09.44.59.jpeg" },
    { label: "Před", image: "/photo_2025-10-26 09.45.05.jpeg" },
    { label: "Po", image: "/photo_2025-10-26 09.44.50.jpeg" },
    { label: "Po", image: "/photo_2025-10-26 09.45.02.jpeg" },
    { label: "Po", image: "/photo_2025-10-26 09.45.08.jpeg" },
  ];

  const fallbackItems2 = [
    { label: "Před", image: "/photo_2025-10-26 09.44.30.jpeg" },
    { label: "Po", image: "/photo_2025-10-26 09.44.50.jpeg" },
    { label: "Před", image: "/photo_2025-10-26 09.44.59.jpeg" },
    { label: "Po", image: "/photo_2025-10-26 09.45.02.jpeg" },
    { label: "Před", image: "/photo_2025-10-26 09.45.05.jpeg" },
    { label: "Po", image: "/photo_2025-10-26 09.45.08.jpeg" },
  ];

  // Створюємо колекції по 3 пари "До/Після"
  const createPhotoCollections = () => {
    const collections: any[] = [];

    // Групуємо пари по 3
    for (let i = 0; i < pairs.length; i += 3) {
      const pairGroup = pairs.slice(i, i + 3);

      // Створюємо колекцію "До" (3 фото)
      const beforePhotos = pairGroup.map(
        (pair: {
          id: string;
          beforePhoto: { url: string; title?: string; description?: string };
          afterPhoto: { url: string; title?: string; description?: string };
          label?: string;
        }) => ({
          label: "Před",
          image: pair.beforePhoto?.url,
          pairId: pair.id,
          type: "before",
          title: pair.beforePhoto?.title || "Před",
          description: pair.beforePhoto?.description || "",
          pairLabel: pair.label || "",
        })
      );

      // Створюємо колекцію "Після" (3 фото)
      const afterPhotos = pairGroup.map(
        (pair: {
          id: string;
          beforePhoto: { url: string; title?: string; description?: string };
          afterPhoto: { url: string; title?: string; description?: string };
          label?: string;
        }) => ({
          label: "Po",
          image: pair.afterPhoto?.url,
          pairId: pair.id,
          type: "after",
          title: pair.afterPhoto?.title || "Po",
          description: pair.afterPhoto?.description || "",
          pairLabel: pair.label || "",
        })
      );

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

  // Використовуємо дані з API або fallback (різні для мобільного та десктопу)
  const allItems = apiItems.length > 0 ? apiItems : isMobile ? fallbackItems2 : fallbackItems;

  // Мемоізований масив для модалки (загальні поля)
  const modalItems = useMemo(
    () =>
      allItems.map((it) => ({
        label: it.label,
        image: it.image,
        title: it.title,
        description: it.description,
      })),
    [allItems]
  );

  // Обробка помилок API
  if (error) {
    console.error("Помилка завантаження галереї:", error);
  }

  const displayedItems = allItems.slice(0, visibleItems).filter(Boolean); // Фільтруємо null значення

  // Більш надійна перевірка для мобільної версії
  const isMobileDevice =
    typeof window !== "undefined" && window.innerWidth <= 768;

  // Для мобільної версії показуємо кнопку якщо більше 2 елементів, для десктопу - більше або рівно 6
  const hasMoreItems = isMobileDevice
    ? allItems.length > 2 && visibleItems < allItems.length
    : allItems.length >= 6 && visibleItems < allItems.length;

  // Клік по картці: відкриваємо модалку на індексі всієї послідовності
  const handleCardClick = (globalIndex: number) => {
    setModalIndex(globalIndex);
    setIsModalOpen(true);
  };

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

    // Глобальний індекс по allItems для коректного відкриття модалки з потрібного місця
    const globalIndex = allItems.findIndex((it, i) => i === index && it.image === item.image);

    return (
      <div
        className={`${styles.tile} ${item.pairId ? styles.pairTile : ""}`}
        key={`${item.pairId || index}-${item.type || index}`}
        data-pair-id={item.pairId}
        data-pair-type={item.type}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleCardClick(globalIndex >= 0 ? globalIndex : index);
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            handleCardClick(globalIndex >= 0 ? globalIndex : index);
          }
        }}
      >
        <div className={styles.imageContainer}>
          <img
            src={item.image}
            alt={item.title || `${item.label} - ${index + 1}`}
            className={styles.image}
            onError={(e) => {
              console.log("Image failed to load:", item.image);
              // Fallback to static image if API image fails (використовуємо відповідний масив для мобільного/десктопу)
              const currentFallbackItems = isMobile ? fallbackItems2 : fallbackItems;
              const fallbackImage =
                currentFallbackItems[index % currentFallbackItems.length]?.image;
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
          <div className={styles.loading}>Načítání...</div>
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

          {(hasMoreItems || visibleItems > (isMobileDevice ? 2 : 6)) && (
            <button className={styles.ctaBtn} onClick={handleShowMore}>
              {hasMoreItems ? "Zobrazit více" : "Sbalit"}
            </button>
          )}
        </div>
      </div>

      <GalleryModal
        isOpen={isModalOpen}
        items={modalItems}
        startIndex={modalIndex}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
