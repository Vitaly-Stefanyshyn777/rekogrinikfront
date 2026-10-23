/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../_shared/site.module.css";
import hub from "../../sluzby/page.module.css";
import loc from "../page.module.css";
import byty from "../../sluzby/rekonstrukce-bytu-praha/page.module.css";
import domy from "../../sluzby/rekonstrukce-domu-praha/page.module.css";
import koup from "../../sluzby/rekonstrukce-koupelen-praha/page.module.css";
import d from "../district.module.css";
import ScrollEffects from "../../_shared/ScrollEffects";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap";

const SITE_URL = "https://rekogrinik.cz/";
const HUB_URL = "https://rekogrinik.cz/lokace";
const PAGE_URL = "https://rekogrinik.cz/lokace/rekonstrukce-praha-2";
const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const ADDRESS = "Na Vackově 2895/5, 130 00 Praha 3";
const IMG = "/new";

// A file name is in /new; a path starting with "/" points elsewhere (e.g.
// project photos in /realizace).
const photo = (src: string) => (src.startsWith("/") ? src : `${IMG}/${src}`);

// Service pages live under /sluzby.
const service = (slug: string) => `/sluzby/${slug}`;

export const metadata: Metadata = {
  title: {
    absolute: "Rekonstrukce Praha 2 | Domy, byty a koupelny | RekoGrinik",
  },
  description:
    "Rekonstrukce Praha 2 pro domy, byty a koupelny. Vinohrady, Nusle i Vyšehrad. Na klíč i jednotlivé práce, od bourání po malování. Bezplatné zaměření.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

type Item = { text: string };

const offered: Item[] = [
  { text: "Kompletní rekonstrukci bytu nebo domu." },
  { text: "Rekonstrukci koupelny a bytového jádra." },
  { text: "Demontáž vybavení a bourací práce." },
  { text: "Nové příčky a sádrokartonové konstrukce." },
  { text: "Zednické opravy a nové omítky." },
  { text: "Pokládku vinylu, laminátu nebo parket." },
  { text: "Štukování, malování a dokončení povrchů." },
  { text: "Přípravu interiéru pro další řemeslo." },
];

const firstVisitChecks = [
  "Stav stěn, stropů a podlah.",
  "Viditelné praskliny a nesoudržné vrstvy.",
  "Návaznost původních a nových konstrukcí.",
  "Přístup do domu, patro a výtah.",
  "Možnost vykládky a odnosu odpadu.",
  "Pravidla domu pro hlučné práce.",
  "Prvky, které chcete zachovat.",
  "Požadovaný stav při předání.",
];

type Area = {
  id: string;
  title: string;
  paragraphs: string[];
  note: string;
  listTitle?: string;
  list?: string[];
};

const areas: Area[] = [
  {
    id: "vinohrady",
    title: "Vinohrady",
    paragraphs: [
      "Na Vinohradech přijímáme zakázky v okolí náměstí Míru, Francouzské, Bělehradské, Vinohradské, Americké i v přilehlých ulicích. Typickým zadáním bývá modernizace staršího bytu, obnova koupelny, oprava omítek nebo sjednocení podlah mezi místnostmi.",
      "V činžovním bytě se mohou objevit vysoké stropy, několik generací maleb, původní dřevěné podlahy a různé dodatečné úpravy. Tyto vlastnosti však nikdy nepředpokládáme pouze podle adresy. Rozhodující je prohlídka konkrétního interiéru.",
    ],
    note: "Pokud se zakázka nachází blízko náměstí Míru nebo Tylova náměstí, vykládku plánujeme podle konkrétní ulice a místního provozu. Neslibujeme univerzální čas příjezdu bez ověření podmínek před domem.",
    listTitle: "Před zahájením řešíme zejména:",
    list: [
      "Ochranu schodiště a výtahu.",
      "Manipulaci s dlouhým nebo těžkým materiálem.",
      "Umístění odpadu během práce.",
      "Zachování původních prvků.",
      "Povolenou dobu hlučných činností.",
      "Návaznost nové podlahy na původní parkety.",
    ],
  },
  {
    id: "nove-mesto",
    title: "Nové Město",
    paragraphs: [
      "V části Nového Města spadající do Prahy 2 pracujeme například v okolí I. P. Pavlova, Karlova náměstí, Ječné, Vyšehradské a Rašínova nábřeží.",
      "Zde se setkáváme s byty určenými pro vlastní bydlení, investičními jednotkami i interiéry, které se upravují před pronájmem. U každého projektu si proto nejdříve ujasníme požadovaný standard, budoucí používání a rozpočet.",
    ],
    note: "V blízkosti Rašínova nábřeží a Náplavky je potřeba zohlednit hustý provoz a pravidelné akce. Farmářské trhy na Náplavce se běžně konají v sobotu, takže větší závoz materiálu může být praktičtější naplánovat na jiný termín.",
    listTitle: "Provádíme zde kompletní rekonstrukce i rychleji vymezené práce, například:",
    list: [
      "Malování bytu před nastěhováním.",
      "Opravu stěn po výměně instalací.",
      "Odstranění původní podlahy.",
      "Pokládku nové krytiny.",
      "Rekonstrukci koupelny.",
      "Zazdění nebo úpravu vybraných otvorů.",
    ],
  },
  {
    id: "vysehrad",
    title: "Vyšehrad",
    paragraphs: [
      "V okolí Vyšehradu se starší bytové domy setkávají s klidnějšími rezidenčními ulicemi a historickým charakterem lokality. U rekonstrukcí zde věnujeme pozornost nejen interiéru, ale také cestě materiálu domem a ochraně společných prostor.",
    ],
    note: "U úprav, které mohou ovlivnit chráněné prvky, vzhled domu nebo společné konstrukce, je potřeba požadavky ověřit před zahájením. Samotná interiérová rekonstrukce neznamená automaticky, že lze bez dalšího odstranit jakoukoli konstrukci.",
    listTitle: "Při plánování se ptáme:",
    list: [
      "Je v domě dostatečně velký výtah?",
      "Vejdou se nové dveře nebo dlouhé podlahové dílce na schodiště?",
      "Které původní povrchy mají zůstat?",
      "Kde lze materiál dočasně uložit?",
      "Jak bude probíhat odnos demontovaných částí?",
      "Je objekt nebo jeho část památkově chráněná?",
    ],
  },
  {
    id: "nusle",
    title: "Nusle",
    paragraphs: [
      "V části Nuslí náležející do Prahy 2 pracujeme například v okolí Folimanky, Bělehradské a navazujících rezidenčních ulic.",
      "Poptávky se zde mohou týkat jak celkové rekonstrukce staršího bytu, tak jedné konkrétní místnosti. Častým cílem je praktičtější koupelna, obnova podlah, úprava dispozice nebo oprava stěn po předchozích stavebních zásazích.",
    ],
    note: "U objektů ve svahu nebo v ulicích s obtížnějším zastavením je důležité předem promyslet dopravu materiálu. Potřebujeme vědět, zda lze krátkodobě přistavit vozidlo k domu a kudy se budou těžší prvky vynášet.",
  },
];

const situations = [
  { need: "Byt je v původním stavu", label: "Kompletní rekonstrukce od demontáže" },
  { need: "Máte hotový návrh dispozice", label: "Bourání, nové konstrukce a dokončení" },
  { need: "Potřebujete novou koupelnu", label: "Kompletní rekonstrukce koupelny" },
  { need: "Hrubé práce jsou hotové", label: "Podlahy, štuky, malování a detaily" },
  { need: "Potřebujete pouze jednu profesi", label: "Samostatné zednické, malířské či jiné práce" },
  { need: "Nevíte, kde začít", label: "Prohlídka prostoru a upřesnění rozsahu" },
];

const serviceCards = [
  {
    title: "Kompletní rekonstrukce",
    text: "Kompletní realizace je vhodná, pokud se současně mění několik místností, povrchů nebo profesí. Projekt může začít demontáží původního vybavení a skončit novými podlahami, malbou a čistým předáním.",
    links: [{ label: "Více o rekonstrukcích bytů Praha →", href: service("rekonstrukce-bytu-praha") }],
  },
  {
    title: "Rekonstrukce koupelny",
    text: "Zajistíme stavební přípravu koupelny, úpravu příček, podkladů, obkladů a navazujících prvků podle dohodnutého zadání. Před zahájením potřebujeme znát rozměry vany, sprchy, umyvadla, nábytku a dalších zásadních prvků.",
    links: [{ label: "Rekonstrukce koupelen Praha →", href: service("rekonstrukce-koupelen-praha") }],
  },
  {
    title: "Bourací práce",
    text: "Demontujeme staré vybavení, obklady, podlahové vrstvy a vybrané nenosné konstrukce. Před zahájením označíme, co se odstraní a které prvky musí zůstat chráněné.",
    links: [],
  },
  {
    title: "Zednické a sádrokartonářské práce",
    text: "Postavíme nové nenosné příčky, provedeme dozdívky, opravíme omítky nebo připravíme lehkou sádrokartonovou konstrukci. Řešení volíme podle prostoru, budoucího zatížení a požadovaného výsledku.",
    links: [],
  },
  {
    title: "Podlahy a malování",
    text: "Po dokončení hrubých prací připravíme podklad, položíme zvolenou podlahu a dokončíme stěny. Před pokládkou kontrolujeme rovinnost, stav podkladu, výšku dveří a přechody mezi místnostmi.",
    links: [
      { label: "Podlahářské práce Praha →", href: service("podlaharske-prace-praha") },
    ],
  },
];

const stripPhotos = [
  { src: "byt-kuchyn-laminat.webp", alt: "Obývací prostor s kuchyní a novou podlahou po rekonstrukci bytu" },
  { src: "/realizace/koupelna-na-klic-po-2.webp", alt: "Umyvadlo na dřevěné desce a sprchová zástěna v nové koupelně" },
  { src: "instalacni-sachta-pred.webp", alt: "Instalační šachta před zahájením rekonstrukce" },
];

const olderFlatTypes = [
  "Práce, které lze určit předem.",
  "Stav, který se potvrdí až po odkrytí.",
  "Volitelné úpravy pro vyšší komfort.",
  "Nezbytné opravy pro pokračování realizace.",
];

const logistics = [
  {
    title: "Doprava a vykládka",
    text: "Náměstí Míru, I. P. Pavlova, Ječná a Rašínovo nábřeží mají odlišné dopravní podmínky. Předem proto ověříme, kde lze materiál vyložit a jak dlouhá bude cesta do bytu.",
  },
  {
    title: "Schodiště a výtah",
    text: "Menší výtah může být vhodný pro běžný přesun, ale ne pro dlouhé dílce, dveře nebo desky. Rozměry a trasu kontrolujeme před objednáním problematických prvků.",
  },
  {
    title: "Hluk",
    text: "Bourání, vrtání a broušení plánujeme podle pravidel domu. Zákazník by měl správci nebo SVJ včas oznámit termín a předpokládaný rozsah prací.",
  },
  {
    title: "Stavební odpad",
    text: "Odpad nenecháváme bez domluvy ve společné chodbě. Způsob balení, odnosu a odvozu stanovíme podle druhu a množství materiálu.",
  },
];

const processSteps = [
  { title: "Ozvete se nám", text: "Sdělíte adresu, typ nemovitosti a požadovanou změnu." },
  { title: "Pošlete fotografie", text: "Pomůže také půdorys a přibližná výměra." },
  { title: "Přijedeme na místo", text: "Prostor zaměříme a zkontrolujeme přístupové podmínky." },
  { title: "Upřesníme zadání", text: "Rozlišíme zachované, odstraňované a nově realizované části." },
  { title: "Připravíme rozpočet", text: "Nabídka popíše dohodnuté práce a způsob dokončení." },
  { title: "Naplánujeme návaznosti", text: "Potvrdíme materiály, termín a pořadí jednotlivých profesí." },
  { title: "Provedeme realizaci", text: "Důležité změny řešíme před provedením." },
  { title: "Práce předáme", text: "Hotový rozsah společně projdeme." },
];

const reasons = [
  "Přijedeme přímo do bytu nebo domu na Praze 2.",
  "Zvládneme kompletní rekonstrukci i jednu dílčí práci.",
  "Propojíme bourání, nové konstrukce a dokončení.",
  "Předem si vyjasníme stav, ve kterém prostor převezmeme a předáme.",
  "Myslíme na výtah, schodiště, vykládku i sousedy.",
  "Zachované prvky označíme před zahájením.",
  "Neočekávané nálezy nejdříve zdokumentujeme.",
  "Nevytváříme falešnou provozovnu na Praze 2.",
];

const faqs = [
  {
    q: "Provádíte rekonstrukce bytů na Vinohradech?",
    a: "Ano. Na místo nejdříve přijedeme, zkontrolujeme stav bytu, přístup do domu a rozsah požadovaných prací.",
  },
  {
    q: "Pracujete také u I. P. Pavlova a Karlova náměstí?",
    a: "Ano. Část Nového Města na Praze 2 patří mezi obsluhované lokality. Dopravu a vykládku řešíme podle konkrétní ulice.",
  },
  {
    q: "Přijedete na Vyšehrad a do Nuslí?",
    a: "Ano. Zakázky přijímáme také na Vyšehradě a v části Nuslí spadající do Prahy 2.",
  },
  {
    q: "Máte na Praze 2 pobočku?",
    a: "Ne. Kontaktní adresa je Na Vackově 2895/5 na Praze 3. Do Prahy 2 za zákazníky vyjíždíme.",
  },
  {
    q: "Zajistíte celou rekonstrukci od bourání?",
    a: "Ano. Dohodnutý rozsah může zahrnovat demontáž, bourání, nové příčky, zednické práce, koupelnu, podlahy, malování a závěrečné předání.",
  },
  {
    q: "Mohu objednat jen částečnou práci?",
    a: "Ano. Můžete poptat například pouze sádrokarton, opravu omítek, malování, odstranění staré podlahy nebo pokládku nové krytiny.",
  },
  {
    q: "Umíte zachovat původní parkety nebo dveře?",
    a: "Možnost zachování posoudíme podle jejich stavu a návaznosti na plánovanou rekonstrukci. Prvky, které mají zůstat, před zahájením jednoznačně označíme.",
  },
  {
    q: "Jak řešíte odvoz suti?",
    a: "Způsob odnosu, třídění a odvozu zahrneme do přípravy zakázky podle množství odpadu a podmínek domu.",
  },
  {
    q: "Musím rekonstrukci oznámit SVJ?",
    a: "Plánované stavební úpravy je vhodné předem oznámit správci nebo SVJ. U zásahů do společných nebo nosných konstrukcí mohou být vyžadovány další podklady.",
  },
  {
    q: "Co když se po bourání objeví poškozená konstrukce?",
    a: "Stav zdokumentujeme, vysvětlíme jeho vliv a navrhneme řešení. Práce mimo původní rozsah nejdříve projednáme.",
  },
];

// Services for the bottom list; the other three are linked in the text.
const related = [
  { label: "Rekonstrukce domů", href: service("rekonstrukce-domu-praha") },
  { label: "Bourací práce", href: service("bouraci-prace-praha") },
  { label: "Sádrokartonářské práce", href: service("sadrokartonarske-prace-praha") },
  { label: "Zednické práce", href: service("zednicke-prace-praha") },
  { label: "Malířské práce", href: service("malirske-prace-praha") },
];

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}#business`,
  name: "RekoGrinik",
  url: SITE_URL,
  telephone: PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Na Vackově 2895/5",
    postalCode: "130 00",
    addressLocality: "Praha 3",
    addressCountry: "CZ",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Praha 2" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Rekonstrukce Praha 2",
  description: "Kompletní a částečné rekonstrukce bytů, domů a koupelen na Praze 2.",
  serviceType: "Rekonstrukce na klíč a jednotlivé stavební práce",
  provider: { "@id": `${SITE_URL}#business` },
  areaServed: { "@type": "AdministrativeArea", name: "Praha 2" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Rekonstrukční práce na Praze 2",
    itemListElement: [
      "Rekonstrukce bytů",
      "Rekonstrukce koupelen",
      "Bourací a zednické práce",
      "Podlahářské a malířské práce",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Oblasti působnosti", item: HUB_URL },
    { "@type": "ListItem", position: 3, name: "Rekonstrukce Praha 2", item: PAGE_URL },
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

export default function RekonstrukcePraha2Page() {
  return (
    <main className={styles.page} data-scroll-root>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      {[businessJsonLd, serviceJsonLd, breadcrumbJsonLd, faqJsonLd].map((json) => (
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
            src={`${IMG}/hero-koupelna-pracka-wc.webp`}
            alt="Nová koupelna s pračkou, WC a obkladem s pruhy"
            style={{ objectPosition: "50% 58%" }}
          />
        </div>
        <div className={`${styles.heroInner} ${hub.heroInnerCompact}`}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <Link href="/lokace">Oblasti působnosti</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Praha 2</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>
              Rekonstrukce Praha 2<span className={d.srOnly}> – </span>
              <span className={d.h1Sub}>kompletní realizace i jednotlivé práce</span>
            </h1>
            <p className={styles.heroText}>
              Byt s vysokými stropy na Vinohradech, koupelna poblíž I. P. Pavlova nebo
              starší interiér pod Vyšehradem – každý prostor vyžaduje jiný přístup.
              Jedno ale mají společné: dobrá rekonstrukce nezačíná bouráním, ale
              prohlídkou skutečného stavu a přesným vymezením toho, co se má změnit.
            </p>
            <div className={loc.heroCta}>
              <a
                className={`${styles.btnGold} ${loc.heroCtaBtn}`}
                href={`tel:${PHONE}`}
                data-cta="praha2_hero_phone"
              >
                Domluvit prohlídku prostoru
              </a>
            </div>
            <p className={loc.heroContact}>
              Zavolejte na <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a> a domluvte si
              prohlídku prostoru.
            </p>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section id="predstaveni" className={`${styles.intro} ${styles.split}`} style={{ alignItems: "start" }}>
        <div className={d.introCol} data-reveal>
          <p className={styles.introLead}>
            Provádíme rekonstrukce na Praze 2 od prvotního zaměření až po kompletní
            předání. Můžeme převzít celý projekt na klíč, nebo se postarat jen o
            konkrétní fázi, kterou máte právě před sebou.
          </p>
          <p className={byty.darkBox} style={{ fontSize: 18 }}>
            Nemáme pobočku na Praze 2 a nevytváříme dojem, že sídlíme na každém rohu.
            Naše kontaktní adresa je na Praze 3 a za zákazníky na Praze 2 přijíždíme přímo
            do bytu nebo domu, kde se mají práce provádět.
          </p>
        </div>
        <div className={domy.listCol} data-reveal>
          <p className={loc.checkTitle}>Zajistíme například:</p>
          <ul className={`${loc.checkLight} ${d.checkLinks}`}>
            {offered.map((item) => (
              <li key={item.text}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* House by house */}
      <section id="typy-domu" className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Praha 2 dům od domu</h2>
              <p className={d.strongLead}>
                Praha 2 není jeden typ zástavby. V jedné ulici může stát činžovní dům s
                původními parketami a vysokými stropy, o několik bloků dál modernizovaný
                bytový dům nebo menší prostor upravený už několika předchozími
                rekonstrukcemi.
              </p>
              <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
                Původní parkety, dveře nebo štukové prvky nemusí být automaticky určeny k
                odstranění. Pokud je chcete zachovat, označíme je před zahájením prací a
                přizpůsobíme tomu ochranu prostoru.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>
                Proto nenabízíme univerzální řešení založené pouze na velikosti bytu. Při
                první návštěvě kontrolujeme také:
              </p>
              <ol className={domy.numList}>
                {firstVisitChecks.map((item, i) => (
                  <li key={item}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Districts */}
      <section id="lokality" className={`${styles.dark} ${hub.anchor}`}>
        <div className={styles.container}>
          <div className={loc.areasHead}>
            <h2 className={styles.h2} data-reveal>
              Kde na Praze 2 pracujeme
            </h2>
            <nav aria-label="Čtvrti Prahy 2" className={d.goldChips} data-reveal>
              {areas.map((a) => (
                <a key={a.id} className={d.goldChip} href={`#${a.id}`}>
                  {a.title}
                </a>
              ))}
            </nav>
          </div>
          <div className={`${byty.scopeGrid} ${d.cardStack}`} data-reveal-group>
            {areas.map((a, i) => (
              <article key={a.id} id={a.id} className={`${byty.scopeCard} ${d.areaCard}`}>
                <span className={byty.scopeNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={byty.scopeTitle}>{a.title}</h3>
                <div className={d.cardWideBody}>
                  <div className={d.cardCol}>
                    {a.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    {a.list && <p className={byty.scopeNote}>{a.note}</p>}
                  </div>
                  {a.list ? (
                    <div className={d.cardCol}>
                      <p className={byty.scopeListTitle}>{a.listTitle}</p>
                      <Bullets items={a.list} />
                    </div>
                  ) : (
                    <p className={byty.scopeNote}>{a.note}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* From demolition to handover */}
      <section id="rozsah" className={`${styles.container} ${hub.anchor}`}>
        <div className={styles.sectionHead} style={{ marginBottom: 48 }}>
          <h2 className={styles.h2} data-reveal>
            Od bourání po čisté předání
          </h2>
          <p className={`${styles.lead} ${d.strongLead}`} data-reveal>
            Je jedno, zda jste úplně na začátku, nebo už máte některé práce hotové.
            Rozsah přizpůsobíme fázi, ve které se projekt nachází.
          </p>
        </div>
        <div className={koup.tableScroll} data-reveal>
          <table className={`${byty.typeTable} ${koup.tableFlush} ${d.needTable}`}>
            <thead>
              <tr>
                <th>Vaše situace</th>
                <th>S čím můžeme pomoci</th>
              </tr>
            </thead>
            <tbody>
              {situations.map((n) => (
                <tr key={n.need}>
                  <td>{n.need}</td>
                  <td>
                    {n.label}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={koup.plainNote} data-reveal>
          U kompletní realizace koordinujeme návaznost jednotlivých činností. U
          částečné zakázky si jasně stanovíme, v jakém stavu prostor převezmeme a co
          přesně bude výsledkem naší práce.
        </p>
      </section>

      {/* Services */}
      <section id="sluzby" className={`${styles.white} ${hub.anchor}`}>
        <div className={styles.container}>
          <h2 className={`${styles.h2} ${d.headGap}`} data-reveal>
            Služby podle vašeho projektu
          </h2>
          <div className={d.cols} data-reveal-group>
            {serviceCards.map((c) => (
              <article key={c.title} className={d.colGreen}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <div className={d.colLinks}>
                  {c.links.map((l) => (
                    <Link key={l.href} href={l.href}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip — TODO: nahradit skutečnými realizacemi z Prahy 2 */}
      <div className={styles.strip} data-reveal-group>
        {stripPhotos.map((p) => (
          <img key={p.src} loading="lazy" decoding="async" src={photo(p.src)} alt={p.alt} />
        ))}
      </div>

      {/* Older flats */}
      <section id="starsi-byty" className={styles.container}>
        <div className={styles.split} style={{ alignItems: "start" }}>
          <div className={styles.stack} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Na co myslíme u starších bytů</h2>
            <p className={d.strongLead}>
              Ve starším bytě nemusí skutečný stav odpovídat tomu, co je vidět na
              povrchu. Pod obkladem může být poškozená omítka, pod krytinou několik
              starších vrstev a za nábytkem trhlina nebo stopa po dřívějším zatékání.
            </p>
            <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
              Pokud po demontáži objevíme neočekávaný problém, zdokumentujeme jej a
              vysvětlíme jeho vliv. Dodatečné řešení s vámi nejdříve projednáme.
            </p>
          </div>
          <div className={domy.listCol} data-reveal>
            <p className={loc.checkTitle}>Proto rozlišujeme:</p>
            <ul className={loc.checkLight}>
              {olderFlatTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Local logistics */}
      <section id="logistika" className={styles.dark}>
        <div className={styles.container}>
          <h2 className={`${styles.h2} ${d.headGap}`} data-reveal>
            Logistika na Praze 2
          </h2>
          <div className={d.cols} data-reveal-group>
            {logistics.map((l) => (
              <article key={l.title} className={d.colGold}>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="postup" className={`${styles.white} ${hub.anchor}`}>
        <div className={styles.container}>
          <h2 className={styles.h2} data-reveal>
            Jak spolupráce probíhá
          </h2>
          <ol className={`${styles.steps} ${d.steps8}`} data-reveal-group>
            {processSteps.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why us */}
      <section id="proc-my" className={styles.container}>
        <h2 className={styles.h2} data-reveal>
          Proč si místní vybírají RekoGrinik
        </h2>
        <ul className={byty.reasonGrid} data-reveal-group>
          {reasons.map((r) => (
            <li key={r} className={`${byty.reasonCard} ${d.reasonWhite}`}>
              {r}
            </li>
          ))}
        </ul>
        {/* TODO: doplnit skutečné realizace z Prahy 2 (fotografie před a po, lokalita, rozsah, nalezený problém, řešení). */}
      </section>

      {/* Contact point + map */}
      <section id="mapa" className={`${styles.white} ${hub.anchor}`}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={loc.mapCol} data-reveal>
            <h2 className={styles.h2}>Kontakt a mapa</h2>
            <div className={loc.contactCard}>
              <p className={loc.contactName}>RekoGrinik</p>
              <dl>
                <div className={loc.contactRow}>
                  <dt>Kontaktní adresa</dt>
                  <dd>{ADDRESS}</dd>
                </div>
                <div className={loc.contactRow}>
                  <dt>Telefon</dt>
                  <dd>
                    <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
                  </dd>
                </div>
              </dl>
            </div>
            <p className={loc.mapHint}>
              Kontaktní adresa se nachází na Praze 3. Praha 2 je obsluhovaná oblast – na
              prohlídku a zaměření přijedeme za vámi.
            </p>
            <a
              className={loc.btnOutlineGreen}
              href="https://www.google.com/maps/dir/?api=1&destination=Na+Vackov%C4%9B+2895%2F5%2C+130+00+Praha+3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zobrazit trasu ke kontaktní adrese →
            </a>
          </div>
          <figure className={d.mapFigure} data-reveal="zoom">
            <iframe
              title="Mapa – RekoGrinik, Na Vackově 2895/5, Praha 3"
              // Embedded by the Google Business Profile place ID (cid) so the listing card shows.
              src="https://maps.google.com/maps?cid=1443832302751861014&z=16&hl=cs&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={loc.map}
            />
            <figcaption className={d.mapCaption}>
              Rekonstrukce realizujeme po celé Praze 2 – Vinohrady, Nové Město, Vyšehrad
              a Nusle.
            </figcaption>
          </figure>
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
      <nav aria-label="Služby v této oblasti" className={byty.related} data-reveal-group>
        <span className={byty.relatedLabel}>Služby, které zde nabízíme</span>
        {related.map((r) => (
          <Link key={r.href} href={r.href} className={byty.relatedLink}>
            {r.label}
          </Link>
        ))}
      </nav>

      {/* Contact */}
      <section id="kontakt" className={`${styles.contact} ${hub.anchor}`}>
        <img
          loading="lazy"
          decoding="async"
          src={`${IMG}/koupelna-vana-dekor.webp`}
          alt="Koupelna s vanou a dekorativním pásem obkladu"
          className={styles.cover}
          style={{ objectPosition: "50% 40%" }}
        />
        <div className={styles.contactOverlay} />
        <div className={styles.contactInner}>
          <div className={styles.contactText} data-reveal>
            <h2 className={styles.contactTitle}>Poptat rekonstrukci na Praze 2</h2>
            <p>
              Plánujete rekonstrukci na Vinohradech, Novém Městě, Vyšehradě nebo v
              Nuslích? Pošlete nám adresu, fotografie prostoru a stručný popis
              požadovaného výsledku.
            </p>
            <p>
              Přijedeme na místo, provedeme zaměření a zkontrolujeme přístup, výtah i
              možnosti vykládky. Poté připravíme nabídku odpovídající skutečnému rozsahu
              zakázky.
            </p>
            <Link
              className={styles.contactBtn}
              href="/kontakt"
              data-cta="praha2_contact_poptavka"
            >
              Poptat rekonstrukci na Praze 2
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
          </dl>
        </div>
      </section>
      <ScrollEffects />
    </main>
  );
}
