"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { BurgerMenuIcon, CloseIcon } from "@/components/Icons/Icons";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
            <Link href="#stats" className={styles.navLink}>
              Statistiky
            </Link>
            <Link href="#services" className={styles.navLink}>
              Naše služby
            </Link>
            <Link href="#steps" className={styles.navLink}>
              Fáze práce
            </Link>
            <Link href="#reviews" className={styles.navLink}>
              Posudky
            </Link>
            <Link href="#gallery" className={styles.navLink}>
              Galerie
            </Link>
            <Link href="#faq" className={styles.navLink}>
              FAQ
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
          <Link href="#request" className={styles.cta}>
            Odeslat žádost
          </Link>
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
            <Link href="#stats" onClick={() => setIsMobileMenuOpen(false)}>
              Statistiky
            </Link>
            <Link href="#services" onClick={() => setIsMobileMenuOpen(false)}>
              Naše služby
            </Link>
            <Link href="#steps" onClick={() => setIsMobileMenuOpen(false)}>
              Fáze práce
            </Link>
            <Link href="#reviews" onClick={() => setIsMobileMenuOpen(false)}>
              Posudky
            </Link>
            <Link href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>
              Galerie
            </Link>
            <Link href="#faq" onClick={() => setIsMobileMenuOpen(false)}>
              FAQ
            </Link>
            <Link href="#contacts" onClick={() => setIsMobileMenuOpen(false)}>
              Kontakty
            </Link>
            <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>
              O nás
            </Link>
          </nav>

          <Link
            href="#request"
            className={styles.mobileCta}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Odeslat žádost
          </Link>
        </div>
      )}
    </header>
  );
}
