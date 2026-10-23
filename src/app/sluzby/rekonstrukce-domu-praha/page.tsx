/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../_shared/site.module.css";
import hub from "../page.module.css";
import loc from "../../lokace/page.module.css";
import byty from "../rekonstrukce-bytu-praha/page.module.css";
import s from "./page.module.css";
import koup from "../rekonstrukce-koupelen-praha/page.module.css";
import ScrollEffects from "../../_shared/ScrollEffects";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap";

const SITE_URL = "https://rekogrinik.cz/";
const HUB_URL = "https://rekogrinik.cz/sluzby";
const PAGE_URL = "https://rekogrinik.cz/sluzby/rekonstrukce-domu-praha";
const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const EMAIL = "rekogrinikcz@gmail.com";
const IMG = "/new";

// Service pages live under /sluzby.
const service = (slug: string) => `/sluzby/${slug}`;

export const metadata: Metadata = {
  title: {
    absolute: "Rekonstrukce domů Praha | Na klíč i po etapách | RekoGrinik",
  },
  description:
    "Rekonstrukce domů Praha na klíč i po etapách. Bezplatné zaměření, pevný rozpočet a realizace od bourání po dokončovací práce.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

const whenComplete = [
  "Dispozice neodpovídá současnému způsobu bydlení.",
  "Jednotlivá podlaží byla upravována v různých obdobích.",
  "Povrchy, koupelny a technické zázemí dosluhují současně.",
  "Podlahy mají rozdílné výšky a nevhodné přechody.",
  "Potřebujete propojit nebo naopak oddělit určité části domu.",
  "V přízemí, sklepě nebo u obvodových stěn se objevují známky vlhkosti.",
  "Do domu se stěhuje vícegenerační rodina.",
  "Chcete přestavět nevyužívanou místnost nebo celé podlaží.",
  "Dům je před nastěhováním prázdný a práce lze provést najednou.",
];

const inspectionFocus = [
  "Uspořádání podlaží a komunikační trasy.",
  "Stav viditelných stěn, stropů a podlah.",
  "Praskliny, mapy po vlhkosti a nesoudržné povrchy.",
  "Umístění koupelen, kuchyně a technických prostor.",
  "Předchozí přístavby nebo dispoziční změny.",
  "Přístup do sklepa, půdy a dalších méně využívaných částí.",
  "Možnosti přísunu a uskladnění materiálu.",
  "Místa, která mají zůstat během rekonstrukce v provozu.",
];

const groundFloor = [
  "Výšky prahů a návaznosti podlah.",
  "Umístění úložných prostorů.",
  "Pohyb mezi vstupem, kuchyní a obývací částí.",
  "Napojení na terasu nebo zahradu.",
  "Odolnost a snadnou údržbu povrchů.",
  "Přístup ke schodišti a technickému zázemí.",
];

const floorsAndStairs = [
  "Hrany a ukončení podlah u schodiště.",
  "Osvětlení schodišťového prostoru.",
  "Směr otevírání dveří na podestách.",
  "Přístup k hornímu podlaží během realizace.",
  "Bezpečné oddělení rozpracované části.",
  "Ochrana schodů, které mají zůstat zachované.",
];

const bathroomInputs = [
  "Rozměry a umístění sanitárního vybavení.",
  "Polohu pračky, sušičky a úložných skříní.",
  "Požadavky na osvětlení a zásuvky.",
  "Výšku a formát obkladů.",
  "Přístup k uzávěrům a servisním místům.",
  "Napojení podlah na chodby a sousední místnosti.",
];

// Houses only: entrance, living area, staircase, bathroom.
const stripPhotos = [
  { src: "veranda-schody-dlazba.webp", alt: "Nové vstupní schody s dlažbou u zasklené verandy rodinného domu" },
  { src: "roubenka-dlazba.webp", alt: "Velkoformátová dlažba v obytné části roubeného domu" },
  { src: "dum-schodiste-dekorativni-omitka.webp", alt: "Schodiště v rodinném domě a stěny s dekorativní omítkou" },
  { src: "roubenka-sprchovy-kout.webp", alt: "Sprchový kout s velkoformátovým obkladem v roubeném domě" },
];

const turnkeyScope: { text: string; href?: string }[] = [
  { text: "Ochranu zachovaných částí domu." },
  { text: "Demontáž původního vybavení." },
  { text: "Bourací práce podle schváleného zadání." },
  { text: "Nové příčky a zednické úpravy." },
  { text: "Sádrokartonové konstrukce a podhledy." },
  { text: "Přípravu koupelen a technických prostorů." },
  { text: "Opravy a vyrovnání podkladů." },
  { text: "Pokládku podlah." },
  { text: "Malířské a dokončovací práce." },
  { text: "Průběžnou kontrolu návazností." },
  { text: "Závěrečnou kontrolu a předání dohodnutého rozsahu." },
];

const budgetClarity = [
  "Co je v ceně.",
  "Jaký materiál zajišťujeme my a jaký zákazník.",
  "Která rozhodnutí musí padnout před konkrétní etapou.",
  "Co může termín ovlivnit.",
  "Jak se budou schvalovat případné změny.",
];

const processSteps = [
  {
    title: "Poznání domu",
    text: "Nejprve projdeme nemovitost, dokumentaci a vaše priority. Zajímá nás, které části domu fungují dobře, co vás omezuje a jak se má způsob bydlení v budoucnu změnit.",
  },
  {
    title: "Rozdělení na zóny",
    text: "Dům rozdělíme na smysluplné celky, například přízemí, horní patro, koupelny, schodiště a technické zázemí. Díky tomu lze určit, které práce musí probíhat společně a které mohou následovat později.",
  },
  {
    title: "Rozpočet a rozhodnutí",
    text: "Po upřesnění rozsahu připravíme podrobný rozpočet. Oddělíme jasně definované práce od položek, jejichž přesný rozsah může být potvrzen až po odkrytí.",
  },
  {
    title: "Hrubé zásahy",
    text: "Nejdříve provedeme dohodnuté demontáže a práce vytvářející nejvíce prachu a odpadu. Následují zednické zásahy, nové konstrukce a příprava tras, které musí zůstat ukryté pod povrchem.",
  },
  {
    title: "Uzavření konstrukcí",
    text: "Před zakrytím zkontrolujeme důležité polohy, výztuhy, prostupy a připravenost pro navazující prvky. Teprve poté se konstrukce uzavírají a připravují pro finální povrchy.",
  },
  {
    title: "Dokončení po zónách",
    text: "Podlahy, stěny a další povrchy dokončujeme v pořadí, které minimalizuje riziko jejich poškození dalšími pracemi. Hotové části chráníme, pokud se v sousední zóně stále pracuje.",
  },
  {
    title: "Kontrola domu",
    text: "Při závěrečné kontrole neprocházíme jen jednotlivé pokoje. Sledujeme také přechody mezi nimi, návaznost podlaží, schodiště, dveře a dokončení míst, kde se setkávají různé materiály.",
  },
];

const stages = [
  ["Vhodná pro prázdný dům", "Umožňuje ponechat část domu v provozu"],
  ["Jednodušší koordinace podlaží", "Výdaje lze rozdělit v čase"],
  ["Méně opakovaného zakrývání a stěhování", "Vyžaduje pečlivé oddělení pracovních zón"],
  ["Snazší sjednocení materiálů", "Část úprav může být dočasná"],
  ["Kratší celkový zásah do provozu domu", "Některé činnosti se mohou opakovat"],
];

const riskSteps = [
  "Viditelné a měřitelné práce popíšeme co nejpřesněji.",
  "Riziková místa označíme už při prohlídce.",
  "U nejasných konstrukcí doporučíme potřebné posouzení.",
  "Stav po odkrytí zdokumentujeme.",
  "Vysvětlíme, co zjištěný problém znamená pro další postup.",
  "Dodatečnou práci a cenu odsouhlasíme před provedením.",
];

const goals = [
  "Srozumitelné uspořádání místností.",
  "Přirozený pohyb mezi podlažími.",
  "Bezpečné a logické schodiště.",
  "Sjednocené výšky a přechody podlah.",
  "Dostatek úložných prostorů.",
  "Praktické koupelny a technické zázemí.",
  "Odolné povrchy na namáhaných místech.",
  "Přístup k uzávěrům a servisním bodům.",
  "Materiály, které spolu fungují vzhledově i technicky.",
  "Zachování hodnotných prvků, pokud jsou v dobrém stavu.",
];

const gallery = [
  { src: "veranda-dlazba.webp", alt: "Nová dlažba na zasklené verandě rodinného domu" },
  { src: "roubenka-dlazba-sokl.webp", alt: "Dlažba se soklem u roubené stěny" },
];

const prepareList = [
  "Adresa a městská část.",
  "Přibližná plocha a počet podlaží.",
  "Půdorysy nebo původní dokumentace.",
  "Fotografie místností, sklepa a půdy.",
  "Informace o předchozích úpravách.",
  "Seznam problémů, které chcete vyřešit.",
  "Představa o budoucím využití domu.",
  "Informace, zda se bude během prací v domě bydlet.",
  "Preferované období realizace.",
  "Rozpočtový rámec, pokud jej máte stanovený.",
  "Informace o případné památkové ochraně.",
  "Dostupné posudky nebo rozhodnutí úřadů.",
];

const reasons = [
  "Dům posuzujeme jako propojený celek.",
  "Můžeme rekonstruovat celý objekt i jedno podlaží.",
  "Přijedeme na bezplatnou vstupní prohlídku.",
  "Provedeme potřebné zaměření.",
  "Připravíme podrobný rozpočet před zahájením.",
  "Naplánujeme návaznost jednotlivých prací.",
  "Zohledníme bydlení v části domu během realizace.",
  "Skryté problémy nejprve zdokumentujeme a projednáme.",
  "Kontrolujeme přechody a detaily mezi jednotlivými zónami.",
  "Nabízíme také samostatné řemeslné práce.",
];

const faqs = [
  {
    q: "Je lepší rekonstruovat celý dům najednou?",
    a: "Pokud je dům prázdný a úpravy se týkají více podlaží, bývá jednorázová realizace jednodušší na koordinaci. Etapová rekonstrukce je vhodná, když potřebujete část domu používat nebo rozdělit investici v čase.",
  },
  {
    q: "Můžeme během rekonstrukce bydlet v horním patře?",
    a: "Někdy ano, ale záleží na přístupu, rozsahu bourání a dostupnosti vody, toalety a elektřiny. Používaná část musí být bezpečně oddělena od pracovního prostoru.",
  },
  {
    q: "Lze rekonstruovat jen přízemí?",
    a: "Ano. Před zahájením ovšem ověříme, zda plánované změny neovlivní schodiště, horní podlaží nebo společné trasy instalací.",
  },
  {
    q: "Jaké dokumenty máme připravit?",
    a: "Pomohou půdorysy, původní projekt, dokumentace pozdějších úprav a případné posudky. Pokud některé podklady nemáte, řekněte nám alespoň, co o historii domu víte.",
  },
  {
    q: "Kdy je potřeba statik?",
    a: "Statické posouzení může být nutné při zásahu do nosné konstrukce, vytváření nového otvoru, závažných trhlinách nebo nejasném stavu konstrukce. Potřebu odborného posouzení je vhodné určit před bouráním.",
  },
  {
    q: "Jak řešíte skryté vady?",
    a: "Po odkrytí problém zdokumentujeme, vysvětlíme jeho vliv na projekt a navrhneme postup. Dodatečné práce se nerealizují bez předchozí domluvy rozsahu a ceny.",
  },
  {
    q: "Zrekonstruujete koupelny v obou podlažích?",
    a: "Ano, pokud odpovídají dohodnutému rozsahu. Jejich společné plánování může usnadnit koordinaci instalací, materiálů a pořadí prací.",
  },
  {
    q: "Kdo zajišťuje odvoz stavebního odpadu?",
    a: "Způsob naložení a odvozu odpadu stanovíme podle rozsahu bourání, přístupu k domu a možností umístění vhodného kontejneru nebo vozidla.",
  },
  {
    q: "Potřebuje rekonstrukce domu povolení?",
    a: "Záleží na konkrétním záměru. Zásah do nosných konstrukcí, změna vzhledu nebo změna užívání mohou vyžadovat dokumentaci a postup u příslušného stavebního úřadu.",
  },
  {
    q: "Provádíte i samostatné práce?",
    a: "Ano. Objednat lze například bourací, zednické, sádrokartonářské, podlahářské nebo malířské práce bez kompletní rekonstrukce.",
  },
];

// Districts for the bottom list; the other two are linked in the
// lokality text.
const otherAreas = ["1", "2", "3", "9"];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Rekonstrukce domů Praha",
  description: "Kompletní a částečné rekonstrukce rodinných a řadových domů v Praze.",
  serviceType: "Rekonstrukce domů na klíč",
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
    name: "Práce při rekonstrukci domu",
    itemListElement: [
      "Bourací práce",
      "Zednické práce",
      "Sádrokartonářské práce",
      "Podlahářské práce",
      "Malířské práce",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Služby", item: HUB_URL },
    { "@type": "ListItem", position: 3, name: "Rekonstrukce domů Praha", item: PAGE_URL },
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

export default function RekonstrukceDomuPage() {
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
            src={`${IMG}/hero-roubenka.webp`}
            alt="Nová velkoformátová dlažba se soklem v rodinném domě"
            style={{ objectPosition: "50% 62%" }}
          />
        </div>
        <div className={`${styles.heroInner} ${hub.heroInnerCompact}`}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <Link href="/sluzby">Služby</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Rekonstrukce domů</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>Rekonstrukce domů Praha</h1>
            <h2 className={styles.heroSub}>Proměna domu jako jednoho celku</h2>
            <p className={styles.heroText}>
              Starší dům často nevykazuje jen jeden izolovaný problém. Nepraktická
              dispozice souvisí s umístěním příček, rozdílné výšky podlah ovlivňují
              dveře a schodiště a nová koupelna může vyžadovat úpravy v místnostech
              pod ní nebo vedle ní. Právě proto přistupujeme k rekonstrukci domu v
              Praze jako k jednomu propojenému projektu.
            </p>
            <div className={loc.heroCta}>
              <a
                className={`${styles.btnGold} ${loc.heroCtaBtn}`}
                href={`tel:${PHONE}`}
                data-cta="domy_hero_phone"
              >
                Domluvit prohlídku domu
              </a>
            </div>
            <p className={loc.heroContact}>
              Domluvte si bezplatnou návštěvu mistra na telefonu{" "}
              <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.
            </p>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section id="predstaveni" className={`${styles.intro} ${styles.split}`}>
        <p className={styles.introLead} data-reveal>
          Provádíme kompletní rekonstrukce domů na klíč i částečné úpravy vybraných
          podlaží a místností. Postaráme se o bourací, zednické, sádrokartonářské,
          podlahářské, malířské a další dohodnuté práce. Rozsah přizpůsobíme stavu
          nemovitosti, vašim prioritám a tomu, zda bude dům během realizace prázdný,
          nebo částečně obývaný.
        </p>
        <p className={styles.lead} data-reveal>
          Než navrhneme postup, přijedeme přímo na místo. Projdeme jednotlivá
          podlaží, zaměříme důležité části a probereme, jak má dům po dokončení
          fungovat. Naším cílem není pouze nový vzhled, ale{" "}
          <strong className={styles.accent}>logické, odolné a příjemné bydlení</strong>.
        </p>
      </section>

      {/* When a house needs a complete renovation */}
      <section id="kdy-rekonstruovat" className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Kdy dům potřebuje celkovou rekonstrukci</h2>
              <p>
                Jedna poškozená stěna ještě není důvodem rekonstruovat celý dům.
                Pokud se však problémy opakují v několika místnostech nebo se
                jednotlivé úpravy vzájemně ovlivňují, bývá účelnější připravit
                společný plán.
              </p>
              <p className={`${byty.darkBox} ${s.boxGap}`} style={{ fontSize: 18, lineHeight: 1.6 }}>
                Kompletní rekonstrukce umožňuje řešit souvislosti dříve, než se
                začnou objednávat finální materiály. Neznamená ale, že se automaticky
                musí změnit všechno. Zachovat lze funkční konstrukce, kvalitní
                podlahu, schodiště nebo jiné prvky, které mají pro dům praktickou či
                osobní hodnotu.
              </p>
            </div>
            <div className={s.listCol} data-reveal>
              <p className={loc.checkTitle}>
                O celkové rekonstrukci má smysl uvažovat zejména tehdy, když:
              </p>
              <ul className={`${styles.checklist} ${s.checkFont}`}>
                {whenComplete.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection first */}
      <section id="stav-domu" className={styles.container}>
        <div className={styles.split} style={{ alignItems: "start" }}>
          <div className={styles.stack} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Nejdříve poznáme skutečný stav domu</h2>
            <p>
              Před rozhodnutím o rozsahu potřebujeme porozumět tomu, jak byl dům
              postaven a jaké změny prodělal. Původní dokumentace je cenná, ale vždy
              ji porovnáváme se skutečným stavem.
            </p>
            <p>
              Vizuální prohlídka nedokáže potvrdit stav všech zakrytých konstrukcí.
              Pokud se objeví trhlina, dlouhodobá vlhkost, nejasný překlad nebo
              plánovaný zásah do nosné části domu, může být před konečným rozhodnutím
              potřeba projektant, statik nebo jiný specialista.
            </p>
            <p className={styles.note} style={{ marginTop: 0 }}>
              To není zbytečné prodlužování přípravy. Správně položená otázka před
              zahájením bývá výrazně jednodušší než oprava hotového povrchu.
            </p>
          </div>
          <div className={s.listCol} data-reveal>
            <p className={loc.checkTitle}>Při vstupní prohlídce se zaměřujeme na:</p>
            <ul className={loc.checkLight}>
              {inspectionFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* One house, one plan */}
      <section id="plan" className={`${styles.dark} ${hub.anchor}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead} style={{ marginBottom: 56 }}>
            <h2 className={styles.h2} data-reveal>
              Jeden dům, jeden promyšlený plán
            </h2>
            <p className={styles.lead} data-reveal>
              Dům nevnímáme jako seznam samostatných pokojů. Rozhodnutí v jedné části
              může ovlivnit sousední místnost, patro nad ní i prostory v přízemí. Při
              plánování proto sledujeme horizontální i svislé návaznosti.
            </p>
          </div>
          <div className={byty.scopeGrid} data-reveal-group>
            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>01</span>
              <h3 className={byty.scopeTitle}>Přízemí a vstupní část</h3>
              <p>
                Vstupní část dostává každý den zabrat. Podlaha musí zvládnout
                nečistoty a vlhkost přinesenou zvenku, dveře se musí pohodlně
                otevírat a mezi zádveřím, chodbou a obytným prostorem musí zůstat
                dostatek místa.
              </p>
              <p className={byty.scopeListTitle}>Při úpravě přízemí řešíme například:</p>
              <Bullets items={groundFloor} />
              <p className={byty.scopeNote}>
                Pokud se má dispozice přízemí otevřít, nejdříve se ověří charakter
                dotčených konstrukcí. Příčku nelze označit za nenosnou pouze podle
                její tloušťky nebo materiálu.
              </p>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>02</span>
              <h3 className={byty.scopeTitle}>Patra a schodiště</h3>
              <p>
                Při rekonstrukci více podlaží hlídáme především návaznost podlah,
                schodiště a průchodů. Nová podlahová skladba nesmí vytvořit
                nebezpečný rozdíl u prvního nebo posledního stupně.
              </p>
              <p className={byty.scopeListTitle}>Důležité jsou také:</p>
              <Bullets items={floorsAndStairs} />
              <p className={byty.scopeNote}>
                Pokud bude rodina během prací využívat horní patro, plán musí počítat
                s bezpečnou přístupovou trasou. Nelze současně rozebrat vstup,
                schodiště a všechny navazující podlahy bez náhradního řešení.
              </p>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>03</span>
              <h3 className={byty.scopeTitle}>Koupelny a technické zázemí</h3>
              <p>
                Dům může mít několik koupelen, samostatnou toaletu, prádelnu nebo
                technickou místnost. Tyto prostory je výhodné plánovat společně,
                zejména pokud leží nad sebou nebo sdílejí trasy instalací.
              </p>
              <p className={byty.scopeListTitle}>Před stavební přípravou potřebujeme znát:</p>
              <Bullets items={bathroomInputs} />
              <p>
                Menší koupelna nemusí být nepraktická, pokud je její vybavení správně
                rozmístěné. Naopak velká místnost může fungovat špatně, když se dveře,
                nábytek a sanita vzájemně blokují.
              </p>
              <a
                className={`${hub.btnOutline} ${byty.pushDown}`}
                href={service("rekonstrukce-koupelen-praha")}
              >
                Podívejte se na rekonstrukce koupelen v Praze →
              </a>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>04</span>
              <h3 className={byty.scopeTitle}>Sklep, půda a problematická místa</h3>
              <p>
                Sklep a půda často odhalí více o stavu domu než nově vymalovaný pokoj.
                Před zakrytím poškozené omítky proto hledáme možnou příčinu problému.
              </p>
              <p>
                Zvýšená vlhkost může souviset s více zdroji a samotný nový nátěr
                příčinu neodstraní. Stejně tak není vhodné automaticky zakrýt
                problematickou plochu sádrokartonem bez posouzení podkladu a podmínek
                v konstrukci.
              </p>
              <p className={byty.scopeNote}>
                Pokud se má sklep, půda nebo jiný dosud neobytný prostor začít
                používat novým způsobem, je potřeba předem prověřit technické i
                administrativní požadavky. Změna užívání stavby nebo její části může
                vyžadovat rozhodnutí stavebního úřadu a příslušnou dokumentaci.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <div className={styles.strip} data-reveal-group>
        {stripPhotos.map((p) => (
          <img key={p.src} loading="lazy" decoding="async" src={`${IMG}/${p.src}`} alt={p.alt} />
        ))}
      </div>

      {/* What turnkey means */}
      <section id="na-klic" className={styles.container}>
        <div className={styles.split} style={{ alignItems: "start" }}>
          <div className={styles.stack} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Co pro nás znamená rekonstrukce na klíč</h2>
            <p>
              U domu pro nás realizace na klíč znamená, že dohodnuté práce sjednotíme
              do jednoho plánu. Určíme jejich pořadí, návaznosti mezi podlažími a
              kontrolní body, ve kterých je potřeba před pokračováním potvrdit
              rozměry nebo konkrétní řešení.
            </p>
            <p className={s.whiteBox}>
              „Na klíč“ neznamená, že lze cenu určit bez znalosti domu nebo že jsou
              automaticky zahrnuté všechny myslitelné práce. Přesný rozsah stanovuje
              položkový rozpočet a dohoda před zahájením.
            </p>
          </div>
          <div className={s.listCol} data-reveal>
            <p className={loc.checkTitle}>Rozsah může zahrnovat:</p>
            <ol className={s.numList}>
              {turnkeyScope.map((item, i) => (
                <li key={item.text}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {item.href ? <a href={item.href}>{item.text}</a> : item.text}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="postup" className={`${styles.white} ${hub.anchor}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead} style={{ marginBottom: 56 }}>
            <h2 className={styles.h2} data-reveal>
              Jak rekonstrukci domu realizujeme
            </h2>
            <p className={styles.lead} data-reveal>
              U celého domu rozdělujeme přípravu a realizaci do navazujících milníků.
            </p>
          </div>
          <ol className={`${styles.steps} ${s.stepsFlush}`} data-reveal-group>
            {processSteps.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
            <li className={s.stepCard}>
              <span className={s.stepCardTag}>K bodu 03</span>
              <p className={s.stepSub}>Před zahájením by mělo být zřejmé:</p>
              <ul className={s.stepBullets}>
                {budgetClarity.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* All at once or in stages */}
      <section id="najednou-nebo-po-etapach" className={styles.dark}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2} data-reveal>
              Najednou, nebo po etapách
            </h2>
            <p className={styles.lead} data-reveal>
              Ne každý dům musí být rekonstruován v jediném kroku. Správná volba
              závisí na rozpočtu, možnosti náhradního bydlení a technických
              souvislostech projektu.
            </p>
          </div>
          <table className={s.etapTable} data-reveal>
            <thead>
              <tr>
                <th>Rekonstrukce najednou</th>
                <th>Rekonstrukce po etapách</th>
              </tr>
            </thead>
            <tbody>
              {stages.map(([once, staged]) => (
                <tr key={once}>
                  <td>{once}</td>
                  <td>{staged}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={`${styles.split} ${s.etapFoot}`}>
            <p className={s.etapLead} data-reveal>
              Etapizace musí respektovat technické návaznosti. Není vhodné dokončit
              novou podlahu v chodbě, pokud se přes ni později bude nosit materiál do
              celého horního patra.
            </p>
            <p className={`${hub.tip} ${s.etapTip}`} data-reveal>
              Při bydlení v domě doporučujeme určit jednu skutečně obyvatelnou zónu.
              Nestačí pouze slíbit, že „jedna místnost zůstane volná“. Je třeba řešit
              přístup, prašnost, vodu, toaletu a bezpečný pohyb mezi používanou a
              pracovní částí.
            </p>
          </div>
        </div>
      </section>

      {/* Risks of an older house */}
      <section id="rizika" className={styles.container}>
        <div className={styles.splitWide}>
          <div className={styles.stack} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Jak pracujeme s riziky staršího domu</h2>
            <p>
              U starší nemovitosti se skutečný stav některých částí ukáže až po
              odstranění podlah, obkladů nebo nesoudržných omítek. Seriózní rozpočet
              by proto neměl předstírat jistotu tam, kde ji před odkrytím nelze mít.
            </p>
            <p className={`${byty.darkBox} ${s.boxGap}`} style={{ fontSize: 18 }}>
              Zejména u vlhkosti, závažných trhlin nebo nejasných nosných konstrukcí
              nevolíme kosmetické zakrytí jako náhradu odborného řešení.
            </p>
          </div>
          <div className={s.listCol} data-reveal>
            <p className={loc.checkTitle}>Postupujeme takto:</p>
            <ol className={`${s.numList} ${s.riskList}`}>
              {riskSteps.map((item, i) => (
                <li key={item}>
                  <span>{i + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Result */}
      <section id="vysledek" className={styles.white}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <img
            loading="lazy"
            decoding="async"
            data-reveal="left"
            src={`${IMG}/roubenka-chodba-sprcha.webp`}
            alt="Chodba a nový sprchový kout v roubeném domě"
            className={styles.serviceImg}
          />
          <div className={styles.stack} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Jaký má být výsledek</h2>
            <p>
              Úspěšná rekonstrukce domu se nepozná jen podle nových barev a podlah.
              Dům musí po dokončení působit jako jeden celek a zároveň se pohodlně
              používat.
            </p>
            <p>Cílem je:</p>
            <ul className={`${styles.checklist} ${s.goalGrid}`}>
              {goals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.callout}>
              Dobrý výsledek nevzniká tím, že každý pokoj navrhneme zvlášť. Vzniká
              rozhodnutími, která respektují fungování celého domu.
            </p>
          </div>
        </div>
      </section>

      {/* Before / after */}
      <section id="pred-a-po" className={`${styles.container} ${hub.anchor}`}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2} data-reveal>
            Před a po – celý příběh domu
          </h2>
          <p className={styles.lead} data-reveal>
            U realizací domů nechceme ukazovat pouze jednu dokončenou koupelnu nebo
            čerstvě vymalovanou stěnu. Galerie by měla dokumentovat proměnu napříč
            podlažími a ukázat také práci, která později nebude vidět.
          </p>
        </div>
        <div className={s.gallery} data-reveal-group>
          {gallery.map((p) => (
            <img key={p.src} loading="lazy" decoding="async" src={`${IMG}/${p.src}`} alt={p.alt} />
          ))}
        </div>
        <Link className={`${loc.btnOutlineGreen} ${byty.inlineBtn}`} href="/realizace">
          Prohlédnout realizace RekoGrinik →
        </Link>
      </section>

      {/* Locations */}
      <section id="lokality" className={`${styles.white} ${hub.anchor}`}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={`${styles.stack} ${s.stickyCol}`} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Rekonstrukce domů v Praze</h2>
            <p>
              Nejčastěji pracujeme na Praze 1, Praze 2, Praze 3, Praze 8, Praze 9 a
              Praze 10. S rekonstrukcemi domů se setkáváme například ve Strašnicích,
              Záběhlicích, Hrdlořezích, na Proseku, v Kobylisích, Bohnicích nebo na
              Jarově.
            </p>
          </div>
          <div className={styles.stack} data-reveal="right">
            <p>
              V řadové zástavbě je důležité řešit místo pro vykládku, ochranu
              sousedních částí a načasování hlučnějších prací. U samostatně stojícího
              domu může být přístup jednodušší, ale stále je potřeba určit, kde lze
              bezpečně skladovat materiál, aniž by se poškodila zahrada, brána nebo
              venkovní povrchy.
            </p>
            <p>
              V některých pražských ulicích může logistiku ovlivnit úzký vjezd,
              parkovací režim nebo omezený prostor pro kontejner. Tyto podmínky proto
              řešíme ještě před zahájením, ne až při příjezdu první dodávky.
            </p>
            <p className={styles.darkCallout}>
              Části Vinohrad, Žižkova a Vršovic patří mezi památkově chráněná území.
              Pokud se plánovaná rekonstrukce dotýká vzhledu domu nebo jiných
              chráněných prvků, je potřeba před zahájením prověřit požadavky památkové
              péče.
            </p>
            <p>
              U změn nosných konstrukcí, vzhledu, způsobu užívání nebo dalších
              podstatných parametrů může být nutné stavební povolení či jiný správní
              postup. Konkrétní požadavky je vhodné ověřit podle dokumentace a
              zamýšleného zásahu; formuláře lze podat také prostřednictvím Portálu
              stavebníka.
            </p>
            <p>
              Rekonstruujete dům ve Strašnicích nebo Záběhlicích? Podívejte se,{" "}
              <Link className={koup.inlineLink} href="/lokace/rekonstrukce-praha-10">
                jak pracujeme na Praze 10
              </Link>. Pro Kobylisy a Bohnice najdete podrobnosti u{" "}
              <Link className={koup.inlineLink} href="/lokace/rekonstrukce-praha-8">
                rekonstrukcí na Praze 8
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* What to prepare */}
      <section id="priprava" className={styles.dark}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.prepareText} data-reveal>
            <h2 className={styles.h2}>Co připravit před návštěvou</h2>
            <p>
              Nemusíte mít připravený kompletní projekt. Pro první smysluplnou
              konzultaci ale pomůže:
            </p>
            <p className={hub.tip}>
              <strong>Praktický tip:</strong> Vytvořte si tři seznamy – „musí se
              udělat“, „výrazně nám to pomůže“ a „bylo by hezké mít“. Při plánování
              pak snadněji ochráníte nejdůležitější část rozpočtu.
            </p>
          </div>
          <ul className={styles.boxes} data-reveal-group>
            {prepareList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why us */}
      <section id="proc-my" className={styles.white}>
        <div className={styles.container}>
          <h2 className={styles.h2} data-reveal>
            Proč svěřit dům RekoGrinik
          </h2>
          <ul className={byty.reasonGrid} data-reveal-group>
            {reasons.map((r) => (
              <li key={r} className={byty.reasonCard}>
                {r}
              </li>
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
            Domy na Praze {d}
          </Link>
        ))}
      </nav>

      {/* Contact */}
      <section id="kontakt" className={`${styles.contact} ${hub.anchor}`}>
        <img
          loading="lazy"
          decoding="async"
          src={`${IMG}/koupelna-pruhy-celek.webp`}
          alt="Nová koupelna se sprchovým koutem, umyvadlem a pračkou"
          className={styles.cover}
          style={{ objectPosition: "50% 40%" }}
        />
        <div className={styles.contactOverlay} />
        <div className={styles.contactInner}>
          <div className={styles.contactText} data-reveal>
            <h2 className={styles.contactTitle}>Začněme prohlídkou domu</h2>
            <p>
              Každý dům má jinou historii, konstrukci i potenciál. Proto nezačínáme
              univerzálním ceníkem, ale prohlídkou prostoru a rozhovorem o tom, jak
              má výsledné bydlení fungovat.
            </p>
            <p>
              Pošlete nám adresu, několik fotografií a stručnou představu o rozsahu.
              Domluvíme bezplatnou návštěvu mistra, provedeme potřebné zaměření a
              připravíme podrobný rozpočet.
            </p>
            <Link
              className={styles.contactBtn}
              href="/kontakt"
              data-cta="domy_contact_poptavka"
            >
              Domluvit prohlídku domu
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
