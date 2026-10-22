/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "../_shared/site.module.css";
import hub from "../sluzby/page.module.css";
import loc from "../lokace/page.module.css";
import byty from "../sluzby/rekonstrukce-bytu-praha/page.module.css";
import r from "../realizace/page.module.css";
import e from "./page.module.css";
import ScrollEffects from "../_shared/ScrollEffects";
import { webPageSchema } from "@/utils/schema";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap";

const SITE_URL = "https://rekogrinik.cz/";
const PAGE_URL = "https://rekogrinik.cz/etapy-prace";
const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const IMG = "/new";

export const metadata: Metadata = {
  title: { absolute: "Jak probíhá rekonstrukce | etapy rekonstrukce domu, bytu | RekoGrinik" },
  description:
    "Jak probíhá rekonstrukce bytu nebo domu: konzultace, bezplatná prohlídka, rozpočet s pevnými cenami, realizace, kontrola kvality a předání se zárukou.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

type Step = {
  title: string;
  duration: string;
  text: string;
  items: string[];
};

// Same six steps as the home-page "Fáze práce" section.
const steps: Step[] = [
  {
    title: "Konzultace a poptávka",
    duration: "1 den",
    text: "Kontakt s klientem, projednání přání a předběžné posouzení projektu.",
    items: [
      "Telefonická konzultace",
      "Projednání rozpočtu a termínů",
      "Domluva termínu prohlídky",
    ],
  },
  {
    title: "Prohlídka a zaměření",
    duration: "1 až 2 dny",
    text: "Bezplatná návštěva mistra, který objekt podrobně zaměří a posoudí jeho stav.",
    items: [
      "Podrobné zaměření prostor",
      "Posouzení stavu rozvodů",
      "Fotodokumentace objektu",
      "Konzultace na místě",
    ],
  },
  {
    title: "Rozpočet a smlouva",
    duration: "2 až 3 dny",
    text: "Vypracování podrobného rozpočtu s pevnými cenami a podpis smlouvy.",
    items: [
      "Detailní rozpočet prací",
      "Specifikace materiálů",
      "Harmonogram prací",
      "Podpis smlouvy",
    ],
  },
  {
    title: "Realizace prací",
    duration: "2 až 8 týdnů",
    text: "Profesionální provedení všech fází rekonstrukce podle plánu a rozpočtu.",
    items: [
      "Bourací a demontážní práce",
      "Elektroinstalace a rozvody vody",
      "Stavební práce",
      "Dokončovací práce",
      "Pravidelné informace o průběhu",
    ],
  },
  {
    title: "Kontrola kvality",
    duration: "1 až 2 dny",
    text: "Závěrečná kontrola kvality provedené práce a odstranění nedostatků.",
    items: [
      "Technická kontrola prací",
      "Kontrola všech systémů",
      "Odstranění závad",
      "Generální úklid",
    ],
  },
  {
    title: "Předání hotového díla",
    duration: "1 den",
    text: "Podpis předávacího protokolu a předání objektu klientovi se zárukou.",
    items: [
      "Podpis předávacího protokolu",
      "Předání dokumentace",
      "Návod k obsluze",
      "Záruka na provedené práce",
    ],
  },
];

const promises = [
  {
    title: "Bezplatná prohlídka",
    text: "Mistr přijede na místo, prostor zaměří a posoudí stav ještě před nabídkou.",
  },
  {
    title: "Pevné ceny v rozpočtu",
    text: "Rozpočet obsahuje práce i materiály s pevnými cenami, které podepíšete ve smlouvě.",
  },
  {
    title: "Průběžné informace",
    text: "Během realizace vás pravidelně informujeme o postupu a každou fázi s vámi odsouhlasíme.",
  },
  {
    title: "Předání se zárukou",
    text: "Hotové dílo předáváme uklizené, s dokumentací, návodem k obsluze a zárukou.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Etapy práce", item: PAGE_URL },
  ],
};

const webPageJsonLd = webPageSchema({
  url: PAGE_URL,
  name: "Etapy práce: jak probíhá rekonstrukce",
  description:
    "Šest etap rekonstrukce s RekoGrinik od první konzultace po předání hotového díla se zárukou.",
});

// The six steps as a HowTo, each linking to its card on the page.
const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${PAGE_URL}#postup`,
  name: "Jak probíhá rekonstrukce s RekoGrinik",
  description:
    "Postup rekonstrukce bytu nebo domu: konzultace, bezplatná prohlídka a zaměření, rozpočet s pevnými cenami, realizace, kontrola kvality a předání se zárukou.",
  inLanguage: "cs-CZ",
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: `${s.text} Zahrnuje: ${s.items
      .map((item) => item.charAt(0).toLowerCase() + item.slice(1))
      .join(", ")}.`,
    url: `${PAGE_URL}#krok-${i + 1}`,
  })),
};

const stepNum = (i: number) => String(i + 1).padStart(2, "0");

export default function EtapyPracePage() {
  return (
    <main className={styles.page} data-scroll-root>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageJsonLd, howToJsonLd, breadcrumbJsonLd]),
        }}
      />

      {/* Hero */}
      <header id="uvod" className={`${styles.hero} ${styles.heroBlend} ${hub.heroCompact}`}>
        <div className={styles.heroMedia}>
          <img
            fetchPriority="high"
            src={`${IMG}/hero-hydroizolace.webp`}
            alt="Koupelna s hydroizolací během rekonstrukce, připravená pro obklady"
            style={{ objectPosition: "50% 50%" }}
          />
        </div>
        <div className={`${styles.heroInner} ${hub.heroInnerCompact}`}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Etapy práce</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>
              Etapy práce<span className={r.srOnly}>: </span>
              <span className={r.h1Sub}>Jak probíhá rekonstrukce</span>
            </h1>
            <p className={styles.heroText}>
              Transparentní proces od prvního zavolání až po předání hotového objektu.
              Každou fázi s vámi průběžně konzultujeme a odsouhlasíme.
            </p>
            <nav aria-label="Etapy" className={r.chips}>
              {steps.map((s, i) => (
                <a key={s.title} href={`#krok-${i + 1}`} className={r.chip}>
                  {stepNum(i)} {s.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Steps */}
      <section id="etapy">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2} data-reveal>
              Šest kroků od telefonátu po předání
            </h2>
            <p className={styles.lead} data-reveal>
              U každé etapy vidíte, co se v ní děje a jak dlouho obvykle trvá. Uvedené doby
              jsou orientační, skutečný harmonogram dostanete spolu s rozpočtem podle
              rozsahu vaší zakázky.
            </p>
          </div>

          <ol className={e.timeline}>
            {steps.map((s, i) => (
              <li
                key={s.title}
                id={`krok-${i + 1}`}
                className={`${e.step} ${hub.anchor}`}
                data-reveal
              >
                <div className={e.stepAside}>
                  <span className={e.stepNum}>{stepNum(i)}</span>
                  <span className={e.duration}>
                    <span className={r.srOnly}>Doba trvání: </span>
                    {s.duration}
                  </span>
                </div>
                <div className={e.stepBody}>
                  <h3 className={e.stepTitle}>{s.title}</h3>
                  <p className={e.stepText}>{s.text}</p>
                  <ul className={loc.checkLight}>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What the client can count on */}
      <section id="zaruky" className={styles.white}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2} data-reveal>
              Na co se můžete spolehnout
            </h2>
            <p className={styles.lead} data-reveal>
              Celý proces stavíme tak, abyste od začátku věděli, co se bude dít, kolik to
              bude stát a kdy bude hotovo.
            </p>
          </div>
          <ul className={e.promises} data-reveal-group>
            {promises.map((p) => (
              <li key={p.title} className={e.promise}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
          <nav aria-label="Související stránky" className={e.related} data-reveal>
            <Link href="/realizace" className={byty.relatedLink}>
              Naše realizace
            </Link>
            <Link href="/recenze" className={byty.relatedLink}>
              Recenze zákazníků
            </Link>
            <Link href="/sluzby" className={byty.relatedLink}>
              Naše služby
            </Link>
          </nav>
        </div>
      </section>

      {/* Call to action */}
      <section id="kontakt" className={styles.dark}>
        <div className={`${styles.container} ${r.cta}`}>
          <div data-reveal>
            <h2 className={styles.h2}>Začněme prvním krokem</h2>
            <p>
              Popište nám, co plánujete, nebo rovnou zavolejte. Domluvíme termín
              bezplatné prohlídky a připravíme rozpočet podle skutečného stavu.
            </p>
          </div>
          <div className={r.ctaBtns} data-reveal>
            <Link href="/kontakt" className={styles.btnGold} data-cta="etapy_poptavka">
              Poptat rekonstrukci
            </Link>
            <a href={`tel:${PHONE}`} className={styles.btnGold} data-cta="etapy_phone">
              Zavolat {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
      <ScrollEffects />
    </main>
  );
}
