"use client";

import { useEffect, useRef } from "react";
import styles from "./GalleryModal.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";
import { CloseButtonIcon } from "@/components/Icons/Icons";

type GalleryItem = {
  label: string;
  image: string;
  title?: string;
  description?: string;
};

interface GalleryModalProps {
  isOpen: boolean;
  items: GalleryItem[];
  startIndex: number;
  onClose: () => void;
}

export default function GalleryModal({
  isOpen,
  items,
  startIndex,
  onClose,
}: GalleryModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeBtn}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Zavřít"
        >
          <CloseButtonIcon />
        </button>
        <div className={styles.sliderWrap}>
          <Swiper
            modules={[Navigation, Keyboard, Zoom]}
            slidesPerView={1}
            spaceBetween={16}
            navigation
            keyboard={{ enabled: true }}
            zoom={{ maxRatio: 3 }}
            initialSlide={Math.max(0, Math.min(startIndex, items.length - 1))}
            className={styles.swiper}
          >
            {items.map((item, i) => (
              <SwiperSlide key={`${item.image}-${i}`}>
                <div className={styles.slideContent}>
                  <div className={`${styles.imageBox} swiper-zoom-container`}>
                    <img
                      src={item.image}
                      alt={item.title || item.label || `image-${i}`}
                    />
                    {item.label && (
                      <span className={styles.badge}>{item.label}</span>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
