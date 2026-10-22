/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../_shared/site.module.css";
import hub from "../page.module.css";
import loc from "../../lokace/page.module.css";
import byty from "../rekonstrukce-bytu-praha/page.module.css";
import domy from "../rekonstrukce-domu-praha/page.module.css";
import s from "./page.module.css";
import ScrollEffects from "../../_shared/ScrollEffects";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap";

const SITE_URL = "https://rekogrinik.cz/";
const HUB_URL = "https://rekogrinik.cz/sluzby";
const PAGE_URL = "https://rekogrinik.cz/sluzby/rekonstrukce-koupelen-praha";
const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const EMAIL = "rekogrinikcz@gmail.com";
const IMG = "/new";

// A file name is in /new; a path starting with "/" points elsewhere (e.g.
// project photos in /realizace).
const photo = (src: string) => (src.startsWith("/") ? src : `${IMG}/${src}`);

// Service pages live under /sluzby.
const service = (slug: string) => `/sluzby/${slug}`;

export const metadata: Metadata = {
  title: {
    absolute: "Rekonstrukce koupelen Praha | Obklady a jádra | RekoGrinik",
  },
  description:
    "Rekonstrukce koupelen Praha na klíč i částečně. Obklady, bytová jádra, instalace a dokončení. Bezplatné zaměření a pevný rozpočet předem.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

const turnkeyScope: { text: string; href?: string }[] = [
  { text: "Demontáž původní sanity a nábytku." },
  { text: "Odstranění starých obkladů a dlažby." },
  { text: "Bourací práce v rámci bytového jádra." },
  { text: "Zednické opravy a přípravu podkladů." },
  {
    text: "Nové příčky nebo sádrokartonové konstrukce."
  },
  { text: "Přípravu vody, odpadů a elektroinstalace." },
  { text: "Hydroizolaci namáhaných ploch." },
  { text: "Pokládku obkladů a dlažby." },
  { text: "Osazení vany, sprchového koutu nebo umyvadla." },
  { text: "Malířské a dokončovací práce." },
  { text: "Kontrolu a předání hotové koupelny." },
];

const showerChecks = [
  "Dostatek místa pro vstup.",
  "Směr otevírání nebo posuvu zástěny.",
  "Polohu baterie a sprchového vybavení.",
  "Návaznost dlažby a odvodnění.",
  "Vzdálenost od nábytku a dveří.",
  "Možnost čištění obtížně dostupných míst.",
];

const washerChecks = [
  "Přesné rozměry spotřebiče.",
  "Prostor pro připojení.",
  "Otevírání dvířek.",
  "Přístup k filtru a servisním bodům.",
  "Možnost umístění pracovní desky nebo skříně.",
  "Pohodlnou manipulaci s prádlem.",
];

const storageOptions = [
  "Ve skříňce pod umyvadlem.",
  "V závěsné skříňce.",
  "Ve vysoké skříni.",
  "V nice připravené během stavby.",
  "Nad pračkou.",
  "Za zrcadlovými dvířky.",
];

const stripPhotos = [
  {
    src: "/realizace/koupelna-na-klic-po-2.webp",
    alt: "Umyvadlo na dřevěné desce a sprchová zástěna v nové koupelně",
  },
  { src: "koupelna-pruhy-sprchovy-kout.webp", alt: "Sprchový kout se skleněnými dveřmi a žebříkovým radiátorem" },
  { src: "/realizace/byt-koupelna-zachod-po-1.webp", alt: "Koupelna s vanou a velkoformátovým obkladem" },
  { src: "koupelna-vana-dekor.webp", alt: "Koupelna s vanou, umyvadlem a dekorativním pásem obkladu" },
];

const twoBathrooms = [
  "Rozmístění vybavení v obou místnostech.",
  "Návaznost instalačních tras.",
  "Pořadí odstávek.",
  "Materiálové a barevné propojení.",
  "Možnost ponechat jednu koupelnu dočasně v provozu.",
  "Přístup mezi podlažími během realizace.",
];

const scopeParts = [
  ["Demontáž", "Sanita, nábytek, obklady, dlažba a vybrané konstrukce"],
  ["Stavební příprava", "Opravy, vyrovnání, příčky, niky a prostupy"],
  ["Instalace", "Voda, odpady, elektroinstalace a připravenost vývodů"],
  ["Ochrana proti vodě", "Hydroizolace a řešení kritických napojení"],
  ["Obkladačské práce", "Rozvržení, řezy, rohy, spáry a návaznosti"],
  ["Kompletace", "Sanita, baterie, zástěny, nábytek a doplňky"],
  ["Dokončení", "Malby, tmelení spojů, kontrola a úklid"],
];

const processSteps = [
  {
    title: "Konzultace",
    text: "Sdělíte nám místo, velikost koupelny a hlavní požadavky. Pokud můžete, pošlete fotografie současného stavu a jednoduchý půdorys.",
  },
  {
    title: "Zaměření na místě",
    text: "Mistr změří prostor, zkontroluje viditelné podklady a projde s vámi plánované rozmístění. Bezplatnou návštěvu, měření, fotodokumentaci a konzultaci na místě uvádí RekoGrinik jako součást standardního postupu.",
  },
  {
    title: "Výběr vybavení",
    text: "Před přípravou vývodů potřebujeme znát konkrétní výrobky nebo jejich přesné technické rozměry. Platí to zejména pro vanu, sprchu, umyvadlo, toaletu, nábytek a baterie.",
  },
  {
    title: "Rozpočet a harmonogram",
    text: "Rozpočet rozdělí realizaci na konkrétní položky. Součástí přípravy je specifikace materiálů a harmonogram; RekoGrinik uvádí podrobný rozpočet s pevnými cenami před podpisem smlouvy.",
  },
  {
    title: "Ochrana a demontáž",
    text: "Před bouráním chráníme přístupovou trasu a prvky, které mají zůstat. Následně odstraníme dohodnuté vybavení a povrchy.",
  },
  {
    title: "Kontrola odkrytého stavu",
    text: "Po demontáži ověříme podklady a upřesníme případné opravy, které nebylo možné předem vidět. Pokud se objeví problém mimo původní rozsah, nejdříve vám vysvětlíme jeho dopad.",
  },
  {
    title: "Příprava konstrukcí",
    text: "Následují zednické či sádrokartonářské práce, vyrovnání ploch a příprava instalačních vývodů. Před zakrytím kontrolujeme jejich polohu vůči skutečným rozměrům vybavení.",
  },
  {
    title: "Hydroizolace a povrchy",
    text: "Na připravených plochách se provede dohodnutá ochrana proti vodě a následně obklady a dlažba. Rozvržení obkladů potvrzujeme dříve, než se začne s pokládkou.",
  },
  {
    title: "Kompletace",
    text: "Osadí se sjednané vybavení, baterie, zástěny, nábytek a další prvky. Následují dokončovací práce a kontrola detailů.",
  },
  {
    title: "Kontrola a předání",
    text: "Ověříme sjednaný rozsah, viditelné dokončení a funkčnost dotčených systémů. Proces RekoGrinik počítá s technickou kontrolou, odstraněním zjištěných nedostatků, úklidem a protokolárním předáním.",
  },
];

const tileChecks = [
  "Výchozí výšku a osu obkladu.",
  "Umístění celých kusů na viditelných plochách.",
  "Šířku krajních dořezů.",
  "Napojení vnějších a vnitřních rohů.",
  "Vztah spár k bateriím a vývodům.",
  "Přechod mezi obkladem a malbou.",
  "Umístění revizních a servisních otvorů.",
  "Dokončení u dveří, vany a sprchové zástěny.",
];

const goals = [
  "Pohodlný vstup a dostatek místa k pohybu.",
  "Vybavení, které se vzájemně neblokuje.",
  "Úložné místo pro běžné potřeby.",
  "Dobře přístupné baterie a servisní body.",
  "Povrchy vhodné pro vlhké prostředí.",
  "Promyšlené osvětlení u zrcadla i v celé místnosti.",
  "Bezpečný vstup do vany nebo sprchy.",
  "Logicky umístěné zásuvky a ovládací prvky.",
  "Čisté přechody mezi jednotlivými materiály.",
];

// Each pair is the same bathroom from a real job (see /realizace).
const beforeAfter = [
  {
    before: {
      src: "/realizace/koupelna-na-klic-pred-1.webp",
      alt: "Koupelna na Murgašově ulici před rekonstrukcí, stěny bez obkladů",
    },
    after: {
      src: "/realizace/koupelna-na-klic-po-1.webp",
      alt: "Stejná koupelna po rekonstrukci se sprchovým koutem a závěsným WC",
    },
  },
  {
    before: { src: "koupelna-bojler-bourani.webp", alt: "Koupelna v bytě na Holečkově ulici po odstranění starých obkladů" },
    after: { src: "koupelna-umyvadlo-u-dveri.webp", alt: "Stejná koupelna s novým obkladem a umyvadlem se skříňkou" },
  },
  {
    before: {
      src: "/realizace/byt-prosek-pred-3.webp",
      alt: "Panelový byt na Proseku po odstranění původního bytového jádra",
    },
    after: { src: "koupelna-mozaika.webp", alt: "Nová koupelna se sprchovým koutem, pračkou a mozaikou v tomto bytě" },
  },
];

const budgetFactors = [
  "Stav po odstranění původních vrstev.",
  "Rozsah bouracích prací.",
  "Změna polohy sanity.",
  "Množství zednických oprav.",
  "Nové příčky, podhledy nebo niky.",
  "Formát a způsob rozvržení obkladů.",
  "Počet rohů, hran a prostupů.",
  "Typ vany, sprchy a nábytku.",
  "Rozsah instalačních prací.",
  "Přístup do bytu nebo domu.",
  "Odpovědnost za nákup a dopravu materiálů.",
];

const prepareList = [
  "Fotografie současné koupelny.",
  "Přibližný půdorys.",
  "Rozměry místnosti.",
  "Informaci, zda se mění dispozice.",
  "Představu o vaně nebo sprše.",
  "Rozměry pračky a sušičky.",
  "Vybrané nebo vytipované vybavení.",
  "Představu o formátu obkladů.",
  "Informaci o patře a výtahu.",
  "Pravidla domu pro hlučné práce.",
  "Požadovaný termín.",
  "Rozpočet, pokud máte stanovený rámec.",
];

const faqs = [
  {
    q: "Co zahrnuje rekonstrukce koupelny na klíč?",
    a: "Konkrétní rozsah stanovuje nabídka. Může zahrnovat demontáž, přípravu stěn a podlah, instalace, hydroizolaci, obklady, sanitu, nábytek a dokončovací práce.",
  },
  {
    q: "Rekonstruujete také bytová jádra?",
    a: "Ano. Rozsah stanovíme podle typu konstrukce, stavu jádra a plánovaného uspořádání koupelny a toalety.",
  },
  {
    q: "Mohu objednat pouze obkladačské práce?",
    a: "Ano. Před zahájením ale potřebujeme zkontrolovat podklad a vyjasnit, kdo odpovídá za jeho přípravu, hydroizolaci a navazující montáže.",
  },
  {
    q: "Jak dlouho bude koupelna mimo provoz?",
    a: "Doba závisí na rozsahu demontáže, stavu podkladů, instalačních změnách, technologických přestávkách a dostupnosti vybavení. Harmonogram připravíme pro konkrétní zakázku.",
  },
  {
    q: "Musím mít vybavení vybrané předem?",
    a: "Před stavební přípravou je potřeba znát minimálně technické rozměry zásadních prvků. Designové doplňky lze někdy vybrat později, ale vana, sprcha, toaleta, umyvadlo a nábytek ovlivňují polohu vývodů.",
  },
  {
    q: "Lze během rekonstrukce používat toaletu?",
    a: "Záleží na uspořádání a rozsahu práce. Pokud je toaleta součástí jednoho jádra, může být po část realizace mimo provoz. Konkrétní možnosti probereme před zahájením.",
  },
  {
    q: "Co když se po sundání obkladů objeví poškozená stěna?",
    a: "Stav zdokumentujeme a vysvětlíme potřebnou opravu. Pokud práce nebyla zahrnuta v původním rozsahu, cenu a postup nejprve odsouhlasíme.",
  },
  {
    q: "Musím rekonstrukci oznámit SVJ?",
    a: "Vlastník jednotky má stavební úpravu uvnitř bytu předem oznámit osobě odpovědné za správu domu. Při zásahu do společných nebo nosných částí mohou být požadovány další podklady.",
  },
  {
    q: "Potřebuji stavební povolení?",
    a: "Běžná úprava bez zásahu do nosných konstrukcí, změny vzhledu, způsobu užívání a ovlivnění požární bezpečnosti může spadat mezi drobné stavební úpravy. Jakmile některá z těchto podmínek splněna není, musí se konkrétní postup ověřit podle stavebního zákona a u příslušného úřadu.",
  },
  {
    q: "Ve kterých částech Prahy pracujete?",
    a: "Nejčastěji přijímáme zakázky na Praze 1, 2, 3, 8, 9 a 10. Jinou lokalitu posoudíme podle místa a rozsahu realizace.",
  },
];

// Districts for the bottom list; the other two are linked in the
// lokality text.
const otherAreas = ["1", "2", "8", "10"];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Rekonstrukce koupelen Praha",
  description:
    "Kompletní a částečné rekonstrukce koupelen, bytových jader a obkladačské práce v Praze.",
  serviceType: "Rekonstrukce koupelen na klíč",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}#business`,
    name: "RekoGrinik s.r.o.",
    url: SITE_URL,
    telephone: PHONE,
  },
  areaServed: ["Praha 1", "Praha 2", "Praha 3", "Praha 8", "Praha 9", "Praha 10"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Práce při rekonstrukci koupelny",
    itemListElement: [
      "Rekonstrukce koupelny na klíč",
      "Rekonstrukce bytového jádra",
      "Obkladačské práce",
      "Bourací a zednické práce",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Služby", item: HUB_URL },
    { "@type": "ListItem", position: 3, name: "Rekonstrukce koupelen Praha", item: PAGE_URL },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className={styles.bullets}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function RekonstrukceKoupelenPage() {
  return (
    <main className={styles.page} data-scroll-root>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      {[serviceJsonLd, breadcrumbJsonLd, faqJsonLd].map((json) => (
        <script
          key={json["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
        />
      ))}

      {/* Hero */}
      <header id="uvod" className={`${styles.hero} ${styles.heroBlend} ${hub.heroCompact}`}>
        <div className={styles.heroMedia}>
          <img
            fetchPriority="high"
            src={`${IMG}/hero-koupelna-pracka.webp`}
            alt="Hotová koupelna se sprchovým koutem, závěsným WC a pračkou pod deskou"
            style={{ objectPosition: "50% 58%" }}
          />
        </div>
        <div className={`${styles.heroInner} ${hub.heroInnerCompact}`}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <Link href="/sluzby">Služby</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Rekonstrukce koupelen</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>Rekonstrukce koupelen Praha</h1>
            <h2 className={styles.heroSub}>Koupelna na klíč i dílčí práce</h2>
            <p className={styles.heroText}>
              V koupelně záleží na každém centimetru. Dveře musí mít prostor k
              otevření, kolem umyvadla se potřebujete pohodlně pohybovat a sprchová
              zástěna nesmí narazit do skříňky nebo pračky. Pod viditelnými obklady se
              přitom skrývá příprava, která rozhoduje o spolehlivém používání celé
              místnosti.
            </p>
            <div className={loc.heroCta}>
              <a
                className={`${styles.btnGold} ${loc.heroCtaBtn}`}
                href={`tel:${PHONE}`}
                data-cta="koupelny_hero_phone"
              >
                Domluvit bezplatné zaměření koupelny
              </a>
            </div>
            <p className={loc.heroContact}>
              Domluvte si bezplatné zaměření na telefonu{" "}
              <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.
            </p>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section id="predstaveni" className={`${styles.intro} ${styles.split}`} style={{ alignItems: "start" }}>
        <p className={styles.introLead} data-reveal>
          Provádíme rekonstrukce koupelen v Praze na klíč i samostatné práce. Můžeme
          zajistit kompletní proměnu koupelny nebo jen obkladačské,{" "}
          bourací,{" "}
          zednické{" "}
          či{" "}
          sádrokartonářské práce{" "}
          podle konkrétního zadání.
        </p>
        <div className={styles.stack} data-reveal>
          <p>
            Na začátku přijedeme na místo, koupelnu zaměříme a probereme vaše
            představy. Zajímá nás nejen požadovaný vzhled, ale především to, kdo bude
            koupelnu používat, kolik věcí v ní potřebujete ukládat a zda se má změnit
            rozmístění vybavení.
          </p>
          <p>
            Na základě upřesněného rozsahu připravíme{" "}
            <strong className={styles.accent}>podrobný rozpočet</strong>. Před
            zahájením tak budete vědět, které práce, materiály a dokončovací detaily
            jsou součástí nabídky.
          </p>
        </div>
      </section>

      {/* What turnkey means */}
      <section id="na-klic" className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Co znamená koupelna na klíč</h2>
              <p>
                Rekonstrukce koupelny na klíč znamená, že dohodnuté fáze spojíme do
                jednoho koordinovaného projektu. Pohlídáme pořadí prací od demontáže
                původního vybavení přes stavební přípravu až po obklady a konečné
                dokončení.
              </p>
              <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18, lineHeight: 1.6 }}>
                Přesný obsah neurčuje samotné označení „na klíč“, ale odsouhlasený
                rozpočet. Je proto důležité předem potvrdit, kdo objednává sanitu,
                baterie, obklady, nábytek a další prvky a zda je jejich montáž
                zahrnuta v nabídce.
              </p>
              <p>
                RekoGrinik uvádí kompletní rekonstrukce koupelen s projektem, montáží,
                obklady a instalačními pracemi. Součástí firemního postupu je také
                specifikace materiálů a příprava harmonogramu.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>Podle zadání může realizace zahrnovat:</p>
              <ol className={domy.numList}>
                {turnkeyScope.map((item, i) => (
                  <li key={item.text}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {item.href ? <a href={item.href}>{item.text}</a> : item.text}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Planning every centimetre */}
      <section id="planovani" className={`${styles.dark} ${hub.anchor}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead} style={{ marginBottom: 56 }}>
            <h2 className={styles.h2} data-reveal>
              Nejdříve plánujeme každý centimetr
            </h2>
            <div className={byty.darkLeadStack} data-reveal>
              <p>
                Největší chyby v koupelně často nevznikají při pokládce posledního
                obkladu, ale při přípravě dispozice. Vybraný výrobek může být kvalitní
                a krásný, ale pokud se nevejde mezi dveře a topné těleso nebo
                znemožní otevření skříňky, koupelna nebude dobře fungovat.
              </p>
              <p className={s.leadStrong}>
                Před stavební přípravou proto potřebujeme znát konkrétní rozměry
                zásadního vybavení. Orientační údaj z fotografie nebo e-shopové
                kategorie nestačí.
              </p>
            </div>
          </div>
          <div className={s.planGrid} data-reveal-group>
            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>01</span>
              <h3 className={byty.scopeTitle}>Vana, nebo sprchový kout</h3>
              <p>
                Rozhodnutí mezi vanou a sprchou ovlivňuje více než vzhled. Zvažujeme
                velikost místnosti, způsob používání, pohodlí při vstupu, údržbu a
                polohu vody a odpadu.
              </p>
              <p className={byty.scopeListTitle}>U sprchového prostoru kontrolujeme:</p>
              <Bullets items={showerChecks} />
              <p className={byty.scopeNote}>
                U vany je důležitý její přesný rozměr, způsob obezdění nebo
                zakrytování, poloha baterie a přístup k částem, které mohou později
                vyžadovat servis.
              </p>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>02</span>
              <h3 className={byty.scopeTitle}>Umyvadlo, toaleta a pračka</h3>
              <p>
                Umyvadlo vybíráme společně se skříňkou a baterií. Jejich rozměry se
                vzájemně ovlivňují a je potřeba ověřit také kolizi s dveřmi,
                zásuvkami nebo vedlejším vybavením.
              </p>
              <p className={byty.scopeListTitle}>
                Pokud bude v koupelně pračka či sušička, řešíme:
              </p>
              <Bullets items={washerChecks} />
              <p className={byty.scopeNote}>
                U toalety je důležitá nejen její poloha, ale také prostor před ní a po
                stranách. Pokud se mění umístění, musí být nové řešení posouzeno s
                ohledem na návaznost odpadu a okolních konstrukcí.
              </p>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>03</span>
              <h3 className={byty.scopeTitle}>Úložné prostory a osvětlení</h3>
              <p>
                Koupelna bývá malá, ale ukládá se v ní překvapivě mnoho věcí. Předem
                proto promýšlíme, kam se vejdou ručníky, kosmetika, čisticí prostředky
                a běžné koupelnové potřeby.
              </p>
              <p className={byty.scopeListTitle}>Úložný prostor může vzniknout:</p>
              <Bullets items={storageOptions} />
              <p className={byty.scopeNote}>
                Také osvětlení je potřeba řešit dříve než obklady. Polohu kabelů,
                vypínačů, zásuvek a zrcadla nelze vhodně určit až po dokončení stěny.
                Elektroinstalaci v koupelně musí navrhnout a provést odborně způsobilá
                osoba s ohledem na prostředí a platné bezpečnostní požadavky.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <div className={styles.strip} data-reveal-group>
        {stripPhotos.map((p) => (
          <img key={p.src} loading="lazy" decoding="async" src={photo(p.src)} alt={p.alt} />
        ))}
      </div>

      {/* Bathroom in a flat vs. in a house */}
      <section id="byt-a-dum" className={styles.container}>
        <div className={styles.splitWide}>
          <article className={styles.stack} style={{ gap: 20 }} data-reveal>
            <h2 className={styles.h2}>Rekonstrukce koupelny v bytě</h2>
            <p>
              Při rekonstrukci koupelny v bytě neřešíme jen samotnou místnost.
              Důležitý je přístup přes chodbu, ochrana výtahu a společných prostor,
              možnost odvozu materiálu a pravidla konkrétního domu.
            </p>
            <p>
              Ve starších činžovních bytech na Žižkově, Vinohradech nebo ve
              Vršovicích se můžeme setkat s několika vrstvami původních úprav,
              nerovnými stěnami nebo koupelnou přestavovanou v minulosti. Skutečný
              rozsah opravy podkladu se někdy potvrdí až po odstranění starých
              obkladů.
            </p>
            <p>
              V panelových domech na Proseku, v Bohnicích nebo Strašnicích bývá
              častým tématem rekonstrukce bytového jádra. Zásah ale vždy plánujeme
              podle skutečného konstrukčního systému a návaznosti na společné části
              domu, ne pouze podle toho, že jde o panelový byt.
            </p>
            <p className={styles.darkCallout}>
              Vlastník jednotky má stavební úpravu uvnitř bytu předem oznámit osobě
              odpovědné za správu domu. Správa může požadovat ověření, že úpravy
              neohrožují, nepoškozují ani nemění společné části.
            </p>
            <p>
              Pokud se současně upravuje i zbytek bytu, začleníme koupelnu do
              celkového pořadí prací. Více informací najdete na stránce{" "}
              <Link className={s.inlineLink} href={service("rekonstrukce-bytu-praha")}>
                rekonstrukce bytů Praha
              </Link>
              .
            </p>
          </article>
          <article className={styles.stack} style={{ gap: 20 }} data-reveal="right">
            <h2 className={styles.h2}>Rekonstrukce koupelny v domě</h2>
            <p>
              V rodinném domě bývá větší prostor pro změnu dispozice, ale zároveň je
              potřeba sledovat vztah koupelny k dalším místnostem a podlažím. Koupelna
              v patře může mít přímou návaznost na strop místnosti pod ní, zatímco
              koupelna v přízemí může sousedit s technickým zázemím nebo prádelnou.
            </p>
            <p className={loc.checkTitle}>
              Pokud se rekonstruují dvě koupelny současně, plánujeme společně:
            </p>
            <ul className={`${styles.checklist} ${domy.checkFont}`}>
              {twoBathrooms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              U částečně obývaného domu může být praktické dokončit jednu koupelnu
              před zahájením druhé. U prázdné nemovitosti lze naopak lépe
              koordinovat hrubé zásahy a dokončení více prostorů.
            </p>
            <p>
              Pokud je koupelna součástí širší proměny objektu, naváže na ni stránka{" "}
              <Link className={s.inlineLink} href={service("rekonstrukce-domu-praha")}>
                rekonstrukce domů Praha
              </Link>
              .
            </p>
          </article>
        </div>
      </section>

      {/* What the job can include */}
      <section id="rozsah" className={styles.white}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2} data-reveal>
              Co může realizace zahrnovat
            </h2>
            <p className={styles.lead} data-reveal>
              Každou koupelnu skládáme z konkrétních prací. Ne všechny jsou potřeba u
              každé zakázky.
            </p>
          </div>
          <div className={s.tableScroll} data-reveal>
            <table className={`${byty.typeTable} ${s.tableFlush}`}>
              <thead>
                <tr>
                  <th>Část realizace</th>
                  <th>Co se při ní řeší</th>
                </tr>
              </thead>
              <tbody>
                {scopeParts.map(([part, what]) => (
                  <tr key={part}>
                    <td>{part}</td>
                    <td>{what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={s.plainNote} data-reveal>
            Samostatně lze objednat například odstranění původních obkladů, přípravu
            stěn nebo nové obkladačské práce. U dílčí zakázky si předem vyjasníme, v
            jakém stavu prostor přebíráme a který dodavatel odpovídá za předchozí a
            navazující vrstvy.
          </p>
        </div>
      </section>

      {/* Process */}
      <section id="postup" className={`${styles.container} ${hub.anchor}`}>
        <h2 className={styles.h2} data-reveal>
          Jak probíhá rekonstrukce koupelny
        </h2>
        <ol className={`${styles.steps} ${s.steps10}`} data-reveal-group>
          {processSteps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Tiles */}
      <section id="obklady" className={styles.dark}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.prepareText} data-reveal>
            <h2 className={styles.h2}>Obklady nejsou jen dekorace</h2>
            <p>
              Obklad zásadně ovlivňuje vzhled koupelny, ale jeho výběr nelze oddělit
              od rozměrů místnosti. Formát, orientace a výchozí bod rozhodují o tom,
              kde vzniknou řezy a jak budou spáry navazovat na sanitu, niky a hrany.
            </p>
            <p>
              Velkoformátový obklad nemusí být automaticky nejlepší volbou pro malou
              koupelnu. Může působit klidně a celistvě, ale vyžaduje vhodný podklad a
              promyšlené rozvržení. Menší formát zase umožňuje lépe řešit členité
              plochy, ale vytváří více spár.
            </p>
            <p className={hub.tip}>
              Pokud potřebujete pouze obklady bez kompletní rekonstrukce, nejdříve
              posoudíme připravenost podkladu. Nemůžeme garantovat finální rovinu nebo
              kvalitu návaznosti, pokud je předchozí vrstva nestabilní či nevhodně
              připravená.
            </p>
          </div>
          <div className={domy.listCol} data-reveal="right">
            <p className={`${loc.checkTitle} ${s.goldTitle}`}>Před pokládkou řešíme:</p>
            <ul className={s.darkList}>
              {tileChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Complete vs partial */}
      <section id="kompletni-nebo-castecna" className={styles.container}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2} data-reveal>
            Kompletní, nebo částečná rekonstrukce
          </h2>
          <p className={styles.lead} data-reveal>
            Kompletní rekonstrukce dává smysl, pokud chcete změnit rozmístění, obnovit
            většinu povrchů nebo řešit více navazujících částí. Částečná úprava je
            vhodná, když je stavební základ koupelny v dobrém stavu a potřebujete
            pouze konkrétní zásah.
          </p>
        </div>
        <div className={s.tableScroll} data-reveal>
          <table className={`${byty.typeTable} ${s.tableFlush}`}>
            <thead>
              <tr>
                <th>Potřeba</th>
                <th>Vhodný rozsah</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Změnit dispozici a všechno vybavení</td>
                <td>Kompletní koupelna na klíč</td>
              </tr>
              <tr>
                <td>Obnovit panelové bytové jádro</td>
                <td>Demontáž, nové konstrukce a kompletní dokončení</td>
              </tr>
              <tr>
                <td>Vyměnit pouze obklady</td>
                <td>Obkladačské práce po kontrole podkladu</td>
              </tr>
              <tr>
                <td>Vybudovat příčku nebo podhled</td>
                <td>
                  Sádrokartonářské{" "}
                  a{" "}
                  zednické práce
                </td>
              </tr>
              <tr>
                <td>Připravit koupelnu pro dalšího dodavatele</td>
                <td>Hrubá stavební příprava</td>
              </tr>
              <tr>
                <td>Dokončit prostor po instalacích</td>
                <td>Opravy, obklady, malování a kompletace</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={`${domy.whiteBox} ${s.boxNote}`} data-reveal>
          U dílčí realizace je obzvlášť důležité stanovit hranici odpovědnosti. Před
          zahájením musí být jasné, kdo připravuje podklad, kdo dodává materiál a kdo
          bude montovat navazující vybavení.
        </p>
      </section>

      {/* Goal */}
      <section id="cil" className={styles.white}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <img
            loading="lazy"
            decoding="async"
            data-reveal="left"
            src={`${IMG}/koupelna-pruhy-celek.webp`}
            alt="Praktická koupelna se sprchovým koutem, umyvadlem, WC a pračkou"
            className={styles.serviceImg}
          />
          <div className={styles.stack} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Jaký je cíl nové koupelny</h2>
            <p>
              Cílem není jen nahradit staré obklady modernější barvou. Nová koupelna
              má být bezpečná, praktická, snadno udržovatelná a přizpůsobená lidem,
              kteří ji používají.
            </p>
            <p>Dobře navržený prostor nabízí:</p>
            <ul className={`${styles.checklist} ${domy.goalGrid}`}>
              {goals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.callout}>
              U koupelny pro děti, seniory nebo osobu s omezenou pohyblivostí
              zohledníme jiné potřeby než u malé koupelny pro jednotlivce. Tyto
              požadavky je nejlepší probrat před výběrem sanity, nikoli až při
              montáži.
            </p>
          </div>
        </div>
      </section>

      {/* Before / after */}
      <section id="pred-a-po" className={`${styles.container} ${hub.anchor}`}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2} data-reveal>
            Koupelny před a po
          </h2>
          <p className={styles.lead} data-reveal>
            Před a po u koupelny neznamená jen dvě fotografie. Důvěryhodná realizace
            má ukázat také přípravu, která je po dokončení zakrytá.
          </p>
        </div>
        <div className={styles.pairs} data-reveal-group>
          {beforeAfter.map(({ before, after }) => (
            <div key={before.src} className={styles.pair}>
              <div className={styles.shot}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={photo(before.src)}
                  alt={before.alt}
                  className={styles.serviceImg}
                />
                <span className={styles.badgeBefore}>Před</span>
              </div>
              <div className={styles.shot}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={photo(after.src)}
                  alt={after.alt}
                  className={styles.serviceImg}
                />
                <span className={styles.badgeAfter}>Po</span>
              </div>
            </div>
          ))}
        </div>
        <Link className={`${loc.btnOutlineGreen} ${byty.inlineBtn}`} href="/realizace">
          Prohlédnout realizace koupelen →
        </Link>
      </section>

      {/* Budget */}
      <section id="cena" className={styles.white}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={`${styles.stack} ${domy.stickyCol}`} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Co ovlivňuje rozpočet</h2>
            <p>
              Cena koupelny se neodvíjí pouze od její podlahové plochy. Malá, členitá
              místnost může vyžadovat více řezů a detailů než větší koupelna s
              jednoduchým uspořádáním.
            </p>
            <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
              Nabídky porovnávejte podle stejného rozsahu. Nižší konečná částka nemusí
              zahrnovat demontáž, opravu podkladu, hydroizolaci, dopravu, montáž
              vybavení nebo odvoz odpadu.
            </p>
          </div>
          <div className={domy.listCol} data-reveal>
            <p className={loc.checkTitle}>Rozpočet ovlivňuje zejména:</p>
            <ol className={domy.numList}>
              {budgetFactors.map((item, i) => (
                <li key={item}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="lokality" className={`${styles.container} ${hub.anchor}`}>
        <div className={styles.splitWide}>
          <div className={`${styles.stack} ${domy.stickyCol}`} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Rekonstrukce koupelen v Praze</h2>
            <p>
              Koupelny nejčastěji rekonstruujeme na Praze 1, Praze 2, Praze 3, Praze 8,
              Praze 9 a Praze 10.
            </p>
          </div>
          <div className={styles.stack} data-reveal="right">
            <p>
              Na Žižkově, Vinohradech nebo ve Vršovicích pracujeme ve starší bytové
              zástavbě, kde je potřeba počítat s omezeným přístupem a možnými opravami
              původních podkladů. V centru Prahy bývá důležité načasování vykládky,
              ochrana společných prostor a pravidla domu.
            </p>
            <p>
              Na Proseku, v Bohnicích nebo Strašnicích se setkáváme také s panelovými
              byty a rekonstrukcemi bytových jader. Ve Vysočanech či Karlíně může jít
              o novější byty, kde zákazník požaduje především úpravu dispozice, výměnu
              povrchů nebo kvalitnější vybavení.
            </p>
            <p>
              Bytová jádra v panelových domech na Proseku a ve Vysočanech popisujeme u{" "}
              <Link className={s.inlineLink} href="/lokace/rekonstrukce-praha-9">
                rekonstrukcí na Praze 9
              </Link>. Kontaktní adresu máme na Žižkově, podívejte se proto i na{" "}
              <Link className={s.inlineLink} href="/lokace/rekonstrukce-praha-3">
                koupelny na Praze 3
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist before measuring */}
      <section id="priprava" className={styles.dark}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.prepareText} data-reveal>
            <h2 className={styles.h2}>Kontrolní seznam před zaměřením</h2>
            <p>
              Pro první návštěvu si nemusíte připravovat hotový projekt. Pomůže nám
              však, když budete mít:
            </p>
            <p className={hub.tip}>
              <strong>Praktický tip:</strong> Neobjednávejte vanu, sprchovou zástěnu
              ani nábytek pouze podle původních rozměrů. Finální rozměr se může po
              odstranění starých vrstev a přípravě nových povrchů změnit.
            </p>
          </div>
          <ul className={styles.boxes} data-reveal-group>
            {prepareList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${styles.container} ${styles.faq} ${hub.anchor}`}>
        <h2 className={styles.faqTitle} data-reveal>
          Časté otázky
        </h2>
        <div className={styles.faqList} data-reveal-group>
          {faqs.map(({ q, a }) => (
            <details key={q} className={styles.faqItem}>
              <summary>
                {q}
                <span className={styles.faqPlus}>+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related pages */}
      <nav aria-label="Další oblasti" className={byty.related} data-reveal-group>
        <span className={byty.relatedLabel}>Pracujeme také v</span>
        {otherAreas.map((d) => (
          <Link
            key={d}
            href={`/lokace/rekonstrukce-praha-${d}`}
            className={byty.relatedLink}
          >
            Koupelny na Praze {d}
          </Link>
        ))}
      </nav>

      {/* Contact */}
      <section id="kontakt" className={`${styles.contact} ${hub.anchor}`}>
        <img
          loading="lazy"
          decoding="async"
          src={`${IMG}/koupelna-umyvadlo-deska.webp`}
          alt="Umyvadlo na dřevěné desce a zrcadlo v nové koupelně"
          className={styles.cover}
          style={{ objectPosition: "50% 40%" }}
        />
        <div className={styles.contactOverlay} />
        <div className={styles.contactInner}>
          <div className={styles.contactText} data-reveal>
            <h2 className={styles.contactTitle}>Pojďme naplánovat vaši koupelnu</h2>
            <p>
              Ať už chcete kompletní koupelnu na klíč, nové bytové jádro nebo pouze
              obkladačské práce, začneme prohlídkou a přesným zaměřením.
            </p>
            <p>
              Pošlete nám fotografie současného stavu a stručně popište, co chcete
              změnit. Domluvíme bezplatnou návštěvu mistra, projdeme rozmístění
              vybavení a připravíme podrobný rozpočet.
            </p>
            <Link
              className={styles.contactBtn}
              href="/kontakt"
              data-cta="koupelny_contact_poptavka"
            >
              Domluvit bezplatné zaměření koupelny
            </Link>
          </div>
          <dl className={styles.contactList} data-reveal-group>
            <div>
              <dt>Telefon</dt>
              <dd>
                <a href={`tel:${PHONE}`} className={styles.contactBig}>
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href={`mailto:${EMAIL}`} className={styles.contactBig}>
                  {EMAIL}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <ScrollEffects />
    </main>
  );
}
