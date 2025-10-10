"use client";
import { useState } from "react";
import styles from "./Faq.module.css";
import { CheckMarkIcon } from "@/components/Icons/Icons";

type FaqItem = {
  q: string;
  a: string;
};

const data: FaqItem[] = [
  {
    q: "Jak dlouho trvá rekonstrukce?",
    a: "Délka rekonstrukce závisí na rozsahu prací. Menší úpravy trvají obvykle 1–2 týdny, kompletní rekonstrukce bytu 4–8 týdnů.",
  },
  {
    q: "Kolik stojí oprava?",
    a: "Po úvodní konzultaci připravíme nezávazný rozpočet. Cena se odvíjí od materiálů, technologií a náročnosti projektu.",
  },
  {
    q: "Poskytujete záruku na provedenou práci?",
    a: "Ano, na všechny práce poskytujeme standardní záruku. Konkrétní délka se liší dle typu prací a použitých materiálů.",
  },
  {
    q: "Jak se určuje cena oprav?",
    a: "Cenu stanovujeme podle položkového rozpočtu – práce, materiály, doprava a případné vícepráce po odsouhlasení.",
  },
  {
    q: "Jak se provádí platba?",
    a: "Obvykle zálohou před začátkem a doplatkem po předání. U větších projektů probíhají průběžné milníky.",
  },
  {
    q: "Pracujete o víkendech?",
    a: "Podle domluvy a povahy projektu umíme naplánovat i víkendové práce, abychom minimalizovali prostoje.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <h2>Často kladené otázky</h2>
          <p>Odpovědi na nejčastější otázky týkající se našich služeb</p>
        </div>
        <div className={styles.list}>
          {data.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={styles.item} key={i}>
                <button
                  className={styles.trigger}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.qTitle}>{item.q}</span>
                  <span
                    className={isOpen ? styles.rightIconOpen : styles.rightIcon}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen(isOpen ? null : i);
                    }}
                    aria-hidden
                  >
                    <CheckMarkIcon />
                  </span>
                </button>
                {isOpen && <div className={styles.content}>{item.a}</div>}
              </div>
            );
          })}
        </div>
        <div className={styles.bottomNote}>
          <span>Nenašli jste odpověď na svou otázku?</span>
          <a href="#contacts">Kontaktujte nás</a>
        </div>
      </div>
    </section>
  );
}
