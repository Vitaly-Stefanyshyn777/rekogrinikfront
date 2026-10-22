/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "../_shared/site.module.css";
import hub from "../sluzby/page.module.css";
import loc from "../lokace/page.module.css";
import byty from "../sluzby/rekonstrukce-bytu-praha/page.module.css";
import k from "../kontakt/page.module.css";
import t from "./page.module.css";
import ScrollEffects from "../_shared/ScrollEffects";
import ThankYouTracking from "./ThankYouTracking";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap";

const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const IMG = "/new";

export const metadata: Metadata = {
  title: { absolute: "Děkujeme za poptávku | RekoGrinik" },
  description: "Vaši poptávku jsme přijali. Ozveme se vám a domluvíme další postup.",
  // Thank-you page: never in search results.
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    title: "Projdeme vaši poptávku",
    text: "Podíváme se na typ práce, adresu a popis toho, co plánujete změnit.",
  },
  {
    title: "Ozveme se vám",
    text: "Zavoláme nebo napíšeme na kontakt, který jste uvedli, a domluvíme termín prohlídky.",
  },
  {
    title: "Přijedeme na místo",
    text: "Při bezplatné návštěvě mistra prostor zaměříme a poté připravíme nabídku podle skutečného stavu.",
  },
];

const backLinks = [
  { label: "Zpět na úvod", href: "/" },
  { label: "Naše služby", href: "/sluzby" },
  { label: "Oblasti působnosti", href: "/lokace" },
];

export default function DekujemePage() {
  return (
    <main className={styles.page} data-scroll-root>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />

      {/* Hero */}
      <header id="uvod" className={`${styles.hero} ${styles.heroBlend} ${k.hero}`}>
        <div className={styles.heroMedia}>
          <img
            fetchPriority="high"
            src={`${IMG}/hero-koupelna-pracka.webp`}
            alt=""
            style={{ objectPosition: "50% 58%" }}
          />
        </div>
        <div className={`${styles.heroInner} ${hub.heroInnerCompact} ${k.heroInner}`}>
          <div className={`${styles.heroContent} ${k.heroCenter}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>
              Děkujeme<span className={k.srOnly}> – </span>
              <span className={k.h1Sub}>Vaši poptávku jsme přijali</span>
            </h1>
            <p className={`${styles.heroText} ${t.heroText}`}>
              Ozveme se vám co nejdříve na uvedený telefon nebo e-mail a domluvíme další
              postup.
            </p>
          </div>
        </div>
      </header>

      {/* What happens next */}
      <section id="dalsi-kroky" className={styles.container}>
        <h2 className={`${styles.h2} ${t.sectionTitle}`} data-reveal>
          Co bude následovat
        </h2>
        <ol className={`${styles.steps} ${t.steps3}`} data-reveal-group>
          {nextSteps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Call + way back */}
      <section id="kontakt" className={styles.white}>
        <div className={`${styles.container} ${t.next}`}>
          <div className={t.callBox} data-reveal>
            <h2>Spěcháte?</h2>
            <p>
              Pokud potřebujete něco doplnit nebo se chcete domluvit hned, zavolejte nám.
            </p>
            <a className={styles.btnGold} href={`tel:${PHONE}`} data-cta="dekujeme_phone">
              Zavolat {PHONE_DISPLAY}
            </a>
          </div>
          <div className={t.back} data-reveal>
            <p className={loc.checkTitle}>Mezitím si můžete prohlédnout</p>
            <p>
              Podívejte se, jaké práce provádíme a ve kterých částech Prahy jezdíme na
              zaměření a realizace.
            </p>
            <nav aria-label="Pokračovat na" className={t.backLinks}>
              {backLinks.map((l) => (
                <Link key={l.href} href={l.href} className={byty.relatedLink}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>
      <ScrollEffects />
      <ThankYouTracking />
    </main>
  );
}
