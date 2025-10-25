"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { BurgerMenuIcon, CloseIcon } from "@/components/Icons/Icons";
import { useEffect, useState } from "react";
import RequestModal from "@/components/modals/RequestModal";
import CallModal from "@/components/modals/CallModal";
import ConsultationModal from "@/components/modals/ConsultationModal";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/" aria-label="RekoGrinik" className={styles.brand}>
            <Image
              src="/Logo.svg"
              alt="RekoGrinik"
              width={63}
              height={63}
              priority
            />
          </Link>
        </div>
        <div className={styles.middle}>
          <nav className={styles.nav} aria-label="Main Navigation">
            <Link href="#hubs" className={styles.navLink}>
              Naše realizace
            </Link>
            <Link href="#stats" className={styles.navLink}>
              Statistiky
            </Link>
            <Link href="#services" className={styles.navLink}>
              Naše služby
            </Link>
            <Link href="#steps" className={styles.navLink}>
              Etapy práce
            </Link>
            <Link href="#reviews" className={styles.navLink}>
              Recenze
            </Link>
            <Link href="#gallery" className={styles.navLink}>
              Galerie
            </Link>
            <Link href="#faq" className={styles.navLink}>
              Nejčastější otázky
            </Link>
            <Link href="#contacts" className={styles.navLink}>
              Kontakty
            </Link>
            <Link href="#about" className={styles.navLink}>
              O nás
            </Link>
          </nav>
        </div>
        <div className={styles.right}>
          <button
            className={styles.cta}
            onClick={() => setIsRequestModalOpen(true)}
          >
            Odeslat žádost
          </button>
          <button
            className={`${styles.burger} no-vw`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Menu"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ width: "40px", height: "40px" }}
          >
            {isMobileMenuOpen ? (
              <CloseIcon className={styles.icon34} />
            ) : (
              <BurgerMenuIcon className={styles.icon24} />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <Link href="#hubs" onClick={() => setIsMobileMenuOpen(false)}>
              Naše realizace
            </Link>
            <Link href="#stats" onClick={() => setIsMobileMenuOpen(false)}>
              Statistiky
            </Link>
            <Link href="#services" onClick={() => setIsMobileMenuOpen(false)}>
              Naše služby
            </Link>
            <Link href="#steps" onClick={() => setIsMobileMenuOpen(false)}>
              Etapy práce
            </Link>
            <Link href="#reviews" onClick={() => setIsMobileMenuOpen(false)}>
              Recenze
            </Link>
            <Link href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>
              Galerie
            </Link>
            <Link href="#faq" onClick={() => setIsMobileMenuOpen(false)}>
              Nejčastější otázky
            </Link>
            <Link href="#contacts" onClick={() => setIsMobileMenuOpen(false)}>
              Kontakty
            </Link>
            <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>
              O nás
            </Link>
            <Link href="/privacy" onClick={() => setIsMobileMenuOpen(false)}>
              Privacy
            </Link>
          </nav>

          <button
            className={styles.mobileCta}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsRequestModalOpen(true);
            }}
          >
            Odeslat žádost
          </button>
        </div>
      )}

      <RequestModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
      />
      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </header>
  );
}
