"use client";

import { useState, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import styles from "./Services.module.css";
import {
  HomeIcon,
  WrenchIcon,
  PaintIcon,
  BrushIcon,
  HammerIcon,
  NetIcon,
  ApartmentIcon,
} from "@/components/Icons/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import useIsMobile from "@/components/hooks/useIsMobile";
import SliderNav from "@/components/ui/SliderNav/SliderNavActions";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const servicesData = [
  {
    icon: <HomeIcon />,
    title: "Byty",
    subtitle: "Komplexní rekonstrukce na klíč",
    description:
      "Celková rekonstrukce bytů od projektu po předání. Zahrnuje všechny druhy prací: elektrika, instalatérství, dokončovací práce.",
  },
  {
    icon: <WrenchIcon />,
    title: "Koupelny",
    subtitle: "Projekt, montáž, obklady",
    description:
      "Kompletní rekonstrukce koupelen s moderním designem, kvalitními obklady a spolehlivými instalacemi.",
  },
  {
    icon: <PaintIcon />,
    title: "Sádrokarton",
    subtitle: "Příčky, podhledy, zvuková izolace",
    description:
      "Profesionální sádrokartonářské práce, vytváření příček, víceúrovňových podhledů a kvalitní zvuková izolace.",
  },
  {
    icon: <BrushIcon />,
    title: "Malířské práce",
    subtitle: "Malování, štukování, dokončovací práce",
    description:
      "Profesionální malířské a dokončovací práce se zárukou čistého výsledku a dlouhé trvanlivosti.",
  },
  {
    icon: <HammerIcon />,
    title: "Bourací práce",
    subtitle: "Demontáž a přípravné práce",
    description:
      "Rychlé a bezpečné bourací práce, odstranění příček a starých povrchů. Připravíme prostor pro novou rekonstrukci.",
  },
  {
    icon: <NetIcon />,
    title: "Podlahářské práce",
    subtitle: "Laminát, parkety, vinyl, dlažba",
    description:
      "Pokládka všech typů podlahových krytin s důrazem na přesnost a dlouhou životnost.",
  },
  {
    icon: <ApartmentIcon />,
    title: "Zednické práce",
    subtitle: "Zdivo, omítky, opravy",
    description:
      "Spolehlivé zednické práce včetně oprav a nových konstrukcí se špičkovým provedením.",
  },
];

export default function Services() {
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

  const renderCard = (service: (typeof servicesData)[0]) => (
    <div className={styles.card}>
      {service.icon}
      <div className={styles.cardHead}>
        <h6>{service.title}</h6>
        <p>{service.subtitle}</p>
      </div>
      <div className={styles.cardDesc}>
        <p>{service.description}</p>
      </div>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <h5>Naše služby</h5>
          <p>Poskytujeme kompletní škálu stavebních a opravárenských služeb</p>
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
              {servicesData.map((service, index) => (
                <SwiperSlide key={index}>{renderCard(service)}</SwiperSlide>
              ))}
            </Swiper>

            <SliderNav
              activeIndex={activeSlide}
              dots={servicesData.length}
              onPrev={handlePrev}
              onNext={handleNext}
              onDotClick={handleDotClick}
              buttonBgColor="#ffffff"
            />
          </div>
        ) : (
          <div className={styles.rows}>
            <div className={styles.rowFour}>
              {servicesData.slice(0, 4).map((service, index) => (
                <div key={index}>{renderCard(service)}</div>
              ))}
            </div>

            <div className={styles.rowThree}>
              {servicesData.slice(4, 7).map((service, index) => (
                <div key={index}>{renderCard(service)}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
