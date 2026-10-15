"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { BurgerMenuIcon, CloseIcon } from "@/components/Icons/Icons";
import { useEffect, useState } from "react";
import { mainNav } from "./navLinks";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Which sub-list (Služby / Lokace) is expanded in the mobile menu
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };
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
              src="/vector-2.svg"
              alt="RekoGrinik"
              width={56}
              height={56}
              priority
            />
            <span className={styles.brandName}>RekoGrinik s.r.o.</span>
          </Link>
        </div>
        <div className={styles.middle}>
          <nav className={styles.nav} aria-label="Main Navigation">
            {mainNav.map((link) =>
              link.children ? (
                <div key={link.href} className={styles.navItem}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                    <span className={styles.chevron} aria-hidden="true" />
                  </Link>
                  <div className={styles.dropdown}>
                    <ul className={styles.dropdownList}>
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={styles.dropdownLink}
                            // Drop focus so :focus-within doesn't keep the menu open after navigating
                            onClick={(e) => e.currentTarget.blur()}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link key={link.href} href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
        <div className={styles.right}>
          <Link href="/kontakt" className={styles.cta} data-cta="header_request">
            Odeslat žádost
          </Link>
          <button
            className={`${styles.burger} no-vw`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Menu"}
            onClick={() => (isMobileMenuOpen ? closeMobileMenu() : setIsMobileMenuOpen(true))}
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
            {mainNav.map((link) => {
              if (!link.children) {
                return (
                  <Link key={link.href} href={link.href} onClick={closeMobileMenu}>
                    {link.label}
                  </Link>
                );
              }
              const isOpen = openSubmenu === link.href;
              return (
                <div key={link.href} className={styles.mobileGroup}>
                  <div className={styles.mobileGroupHead}>
                    <Link href={link.href} onClick={closeMobileMenu}>
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      className={styles.mobileToggle}
                      aria-expanded={isOpen}
                      aria-label={`${isOpen ? "Skrýt" : "Zobrazit"}: ${link.label}`}
                      onClick={() => setOpenSubmenu(isOpen ? null : link.href)}
                    >
                      <span
                        className={`${styles.chevron} ${isOpen ? styles.chevronUp : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  {isOpen && (
                    <ul className={styles.mobileSubList}>
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} onClick={closeMobileMenu}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
            <Link href="/privacy" onClick={closeMobileMenu}>
              Privacy
            </Link>
          </nav>

          <Link
            href="/kontakt"
            className={styles.mobileCta}
            data-cta="mobile_menu_request"
            onClick={closeMobileMenu}
          >
            Odeslat žádost
          </Link>
        </div>
      )}
    </header>
  );
}
