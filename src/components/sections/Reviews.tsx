"use client";

import { useState, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import Link from "next/link";
import styles from "./Reviews.module.css";
import { AsteriskIcon, QuotesIcon } from "@/components/Icons/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import useIsMobile from "@/components/hooks/useIsMobile";
import SliderNav from "@/components/ui/SliderNav/SliderNavActions";
import { reviewsData, type Review } from "./reviewsData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Reviews() {
  const isMobile = useIsMobile();
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleDotClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const renderCard = (review: Review, index: number) => (
    <div className={styles.card} key={index}>
      <div className={styles.cardTop}>
        <div className={styles.avatar}>{review.avatar}</div>
        <div className={styles.person}>
          <strong>{review.name}</strong>
          <span>{review.position}</span>
        </div>
        <div className={styles.stars}>
          <AsteriskIcon />
          <AsteriskIcon />
          <AsteriskIcon />
          <AsteriskIcon />
          <AsteriskIcon />
        </div>
      </div>
      <div className={styles.quoteRow}>
        <QuotesIcon />
        <p>{review.quote}</p>
      </div>
      <div className={styles.projectRow}>
        <span>{review.project}</span>
      </div>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <h2>Co říkají naši zákazníci</h2>
          <p>
            Reálné recenze od spokojených klientů, kteří nám svěřili své
            projekty
          </p>
        </div>

        {isMobile ? (
          <div className={styles.swiperContainer}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveSlide(swiper.activeIndex);
              }}
              className={styles.swiper}
            >
              {reviewsData.map((review, index) => (
                <SwiperSlide key={index}>
                  {renderCard(review, index)}
                </SwiperSlide>
              ))}
            </Swiper>

            <SliderNav
              activeIndex={activeSlide}
              dots={reviewsData.length}
              onPrev={handlePrev}
              onNext={handleNext}
              onDotClick={handleDotClick}
              buttonBgColor="#ffffff"
            />
          </div>
        ) : (
          <div className={styles.grid}>
            {reviewsData.map((review, index) => renderCard(review, index))}
          </div>
        )}

        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <h3>Jste připraveni se přidat k našim spokojeným zákazníkům?</h3>
            <p>
              Získejte bezplatnou konzultaci a zjistěte, jak můžeme proměnit váš
              prostor
            </p>
          </div>

          <Link
            href="/kontakt"
            className={styles.ctaBtn}
            data-cta="reviews_consultation"
          >
            Získejte bezplatnou konzultaci
          </Link>
        </div>
      </div>
    </section>
  );
}
