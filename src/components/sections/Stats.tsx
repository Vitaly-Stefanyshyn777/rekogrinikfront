"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Stats.module.css";
import {
  ApartmentIcon,
  UsersIcon,
  TimeIcon,
  MedalIcon,
} from "@/components/Icons/Icons";
import useIsMobile from "@/components/hooks/useIsMobile";
import SliderNav from "@/components/ui/SliderNav/SliderNavActions";
import { Swiper as SwiperType } from "swiper";

export default function Stats() {
  const isMobile = useIsMobile();
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const statsData = [
    {
      icon: ApartmentIcon,
      number: "127",
      unit: "+",
      title: "Dokončené projekty",
      subtitle: "Byty a stánky",
    },
    {
      icon: UsersIcon,
      number: "98",
      unit: "%",
      title: "Spokojení klienti",
      subtitle: "Doporučte nás",
    },
    {
      icon: TimeIcon,
      number: "5",
      unit: "+",
      title: "Dlouholeté zkušenosti",
      subtitle: "Na pražském trhu",
    },
    {
      icon: MedalIcon,
      number: "3",
      unit: "roky",
      title: "Záruky",
      subtitle: "na veškeré práce",
    },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headline}>
          <h2>Naše úspěchy v číslech</h2>
          <p>Číslo skin odráží naši oddanost integritě a profesionalitě</p>
        </div>

        {isMobile ? (
          <div className={styles.swiperContainer}>
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              onSwiper={(s) => (swiperRef.current = s)}
              onSlideChange={(s) => setActiveSlide(s.activeIndex)}
              className={styles.swiper}
            >
              {statsData.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <SwiperSlide key={index} className={styles.slide}>
                    <div className={styles.card}>
                      <IconComponent />
                      <div className={styles.numberRow}>
                        <p className={styles.number}>{stat.number}</p>
                        <p className={styles.unit}>{stat.unit}</p>
                      </div>
                      <p className={styles.cardTitle}>{stat.title}</p>
                      <span>{stat.subtitle}</span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className={styles.swiperControls}>
              <SliderNav
                activeIndex={activeSlide}
                dots={statsData.length}
                onPrev={() => swiperRef.current?.slidePrev()}
                onNext={() => swiperRef.current?.slideNext()}
                onDotClick={(i) => swiperRef.current?.slideTo(i)}
              />
            </div>
          </div>
        ) : (
          <div className={styles.cards4}>
            {statsData.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className={styles.card}>
                  <IconComponent />
                  <div className={styles.numberRow}>
                    <p className={styles.number}>{stat.number}</p>
                    <p className={styles.unit}>{stat.unit}</p>
                  </div>
                  <p className={styles.cardTitle}>{stat.title}</p>
                  <span>{stat.subtitle}</span>
                </div>
              );
            })}
          </div>
        )}

        <div className={styles.reasonBox}>
          <h3>Proč si zákazníci vybírají RekoGrinik?</h3>
          <div className={styles.reasons}>
            <div className={styles.reason}>
              <h4>💼 Profesionalita</h4>
              <p>Kvalifikovaní řemeslníci s dlouholetými zkušenostmi</p>
            </div>
            <div className={styles.reason}>
              <h4>⏰ Dochvilnost</h4>
              <p>Vždy dodržujeme dohodnuté termíny</p>
            </div>
            <div className={styles.reason}>
              <h4>🔧 Kvalita</h4>
              <p>Používáme pouze osvědčené materiály</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
