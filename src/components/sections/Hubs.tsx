"use client";

import styles from "./Hubs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderNav from "@/components/ui/SliderNav/SliderNavActions";
import { useRef, useState } from "react";
import { useGeneralGallery } from "@/hooks/useGeneralGallery";

export default function Hubs() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState(0);
  const { photos, loading, error } = useGeneralGallery();

  // Fallback images якщо API не працює
  const fallbackImages = [
    "/Frame 35144.png",
    "/Frame 35145.png",
    "/Frame 35146.png",
  ];

  // Використовуємо дані з API або fallback
  const images =
    photos.length > 0
      ? photos.map((photo: { url: string }) => photo.url || fallbackImages[0])
      : fallbackImages;

  if (loading) {
    return (
      <section className={styles.section} id="hubs">
        <div className={styles.container}>
          <h2 className={styles.title}>Наші Хуби</h2>
          <div className={styles.sliderWrap}>
            <div className={styles.loading}>Завантаження...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Помилка завантаження галереї:", error);
  }

  // Дебаг логування
  console.log("Photos from API:", photos);
  console.log("Processed images:", images);

  return (
    <section className={styles.section} id="hubs">
      <div className={styles.container}>
        <h2 className={styles.title}>Наші Хуби</h2>
        <div className={styles.sliderWrap}>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            onSwiper={(s) => (swiperRef.current = s)}
            onSlideChange={(s) => setActive(s.activeIndex)}
            className={styles.swiper}
          >
            {images.map((src, i) => (
              <SwiperSlide key={i} className={styles.slide}>
                <img
                  src={src}
                  alt={`hub-${i + 1}`}
                  onError={(e) => {
                    console.log("Image failed to load:", src);
                    // Fallback to static image if API image fails
                    e.currentTarget.src =
                      fallbackImages[i] || fallbackImages[0];
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.navWrap}>
            <SliderNav
              activeIndex={active}
              dots={images.length}
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
              onDotClick={(i) => swiperRef.current?.slideTo(i)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
