"use client";

import { useState, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import styles from "./Reviews.module.css";
import { AsteriskIcon, QuotesIcon } from "@/components/Icons/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import useIsMobile from "@/components/hooks/useIsMobile";
import SliderNav from "@/components/ui/SliderNav/SliderNavActions";
import ConsultationModal from "@/components/modals/ConsultationModal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviewsData = [
  {
    avatar: "AN",
    quote: `„Maxim a jeho tým odvedli neuvěřitelnou práci! Náš starý byt se proměnil v moderní prostor snů. Všechno bylo hotové včas a ve vysoké kvalitě. Všem to doporučuji!"`,
    project: "Projekt: Kompletní rekonstrukce třípokojového bytu",
  },
  {
    avatar: "PS",
    quote: `"Profesionální přístup od začátku do konce. Fixní cena bez překvapení, kvalitní materiály a důraz na detail. Obzvláště jsem ohromen prací v koupelně."`,
    project: "Projekt: Rekonstrukce koupelny a kuchyně",
  },
  {
    avatar: "MC",
    quote: `„Pracoval jsem s mnoha dodavateli, ale RekoGrinik vyniká svým přístupem k práci. Rozumí konstrukčním řešením a bezchybně je realizují."`,
    project: "Projekt: Rekonstrukce designové kanceláře",
  },
  {
    avatar: "TK",
    quote: `„S renovací všech mých investičních nemovitostí svěřuji RekoGriniku. Vždy dodrží rozpočet a termíny. To je na trhu rarita!"`,
    project: "Projekt: Rekonstrukce 5 bytů k pronájmu",
  },
  {
    avatar: "OK",
    quote: `„Děkujeme za vaši trpělivost a pochopení! Často jsme měnili rozhodnutí, ale tým vždy našel ty nejlepší možnosti. Výsledek předčil očekávání."`,
    project: "Projekt: Evropská rekonstrukce dvoupokojového bytu",
  },
  {
    avatar: "MČ",
    quote: `"Rychle a efektivně zrekonstruovali naši restauraci mezi sezónami. Minimální prostoje, maximální výsledky. Určitě je znovu kontaktujeme!"`,
    project: "Projekt: Rekonstrukce restaurace",
  },
];

export default function Reviews() {
  const isMobile = useIsMobile();
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

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

  const renderCard = (review: (typeof reviewsData)[0], index: number) => (
    <div className={styles.card} key={index}>
      <div className={styles.cardTop}>
        <div className={styles.avatar}>{review.avatar}</div>
        <div className={styles.person}>
          <strong>Jméno Příjmení</strong>
          <span>Majitel bytu</span>
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

          <button
            className={styles.ctaBtn}
            onClick={() => setIsConsultationModalOpen(true)}
          >
            Získejte bezplatnou konzultaci
          </button>
        </div>
      </div>

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </section>
  );
}
