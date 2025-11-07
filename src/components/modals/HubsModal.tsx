"use client";

import { useEffect, useRef } from "react";
import styles from "./HubsModal.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";
import { CloseButtonIcon } from "@/components/Icons/Icons";

interface HubsModalProps {
  isOpen: boolean;
  images: string[];
  startIndex: number;
  onClose: () => void;
}

export default function HubsModal({
  isOpen,
  images,
  startIndex,
  onClose,
}: HubsModalProps) {
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
          aria-label="Закрити"
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
            initialSlide={Math.max(0, Math.min(startIndex, images.length - 1))}
            className={styles.swiper}
          >
            {images.map((src, i) => (
              <SwiperSlide key={`hub-${i}`}>
                <div className={styles.slideContent}>
                  <div className={`${styles.imageBox} swiper-zoom-container`}>
                    <img
                      src={src}
                      alt={`hub-${i + 1}`}
                      onError={(e) => {
                        console.log("Image failed to load:", src);
                        e.currentTarget.src = "/photo_2025-10-26 09.45.40.jpeg";
                      }}
                    />
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
