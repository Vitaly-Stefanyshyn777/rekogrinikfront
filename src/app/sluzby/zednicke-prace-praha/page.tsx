/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import styles from "../../_shared/site.module.css";
import hub from "../page.module.css";
import loc from "../../lokace/page.module.css";
import byty from "../rekonstrukce-bytu-praha/page.module.css";
import domy from "../rekonstrukce-domu-praha/page.module.css";
import koup from "../rekonstrukce-koupelen-praha/page.module.css";
import s from "./page.module.css";
import ScrollEffects from "../../_shared/ScrollEffects";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap";

const SITE_URL = "https://rekogrinik.cz/";
const HUB_URL = "https://rekogrinik.cz/sluzby";
const PAGE_URL = "https://rekogrinik.cz/sluzby/zednicke-prace-praha";
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
    absolute: "Zednické práce Praha | Zdivo, omítky a opravy | RekoGrinik",
  },
  description:
    "Zednické práce Praha: nové zdivo, omítky a opravy. Přesné zaměření, podrobný rozpočet a čisté předání. Domluvte si bezplatnou návštěvu mistra.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

const partitionChecks = [
  "Polohu vůči půdorysu a ostatním stěnám.",
  "Svislost, rovinu a pravoúhlost.",
  "Výšku a skladbu budoucí podlahy.",
  "Rozměr dveřního otvoru.",
  "Umístění kuchyňské linky a nábytku.",
  "Plánované rozvody a prostupy.",
  "Návaznost na strop a podhled.",
  "Povrchovou úpravu nové konstrukce.",
  "Zatížení, které má stěna přenášet.",
];

const masonryWorks = [
  "Vyzdění nových nenosných příček.",
  "Doplnění chybějících částí zdiva.",
  "Zazdění vybraných otvorů.",
  "Dozdívky u instalačních konstrukcí.",
  "Vytvoření nik a odkládacích ploch.",
  "Úpravy otvorů pro dveře.",
  "Podezdění a přípravu pod vybrané prvky.",
  "Napojení nového zdiva na stávající konstrukce.",
];

const plasterScope = [
  "Doplnění omítky na novém zdivu.",
  "Opravu po odstranění původních vrstev.",
  "Lokální vyrovnání nerovností.",
  "Obnovení poškozených hran.",
  "Vytvoření nových rohů a ostění.",
  "Přípravu pod štuk nebo stěrku.",
  "Přípravu pod malování.",
  "Přípravu roviny pod obklady.",
];

const repairs = [
  "Poškozené části zdiva.",
  "Otvory po demontáži vybavení.",
  "Drážky po instalacích.",
  "Místa po odstranění příček.",
  "Okraje a rohy stěn.",
  "Nerovnosti po odstranění obkladů.",
  "Lokálně uvolněnou omítku.",
  "Napojení starého a nového povrchu.",
];

const openingChecks = [
  "Šířku a výšku otvoru.",
  "Svislost bočních částí.",
  "Rovinu nadpraží.",
  "Tloušťku budoucích povrchů.",
  "Výšku finální podlahy.",
  "Požadavek výrobce dveří nebo jiného prvku.",
  "Napojení lišt, obkladů a soklů.",
  "Prostor pro montážní a dokončovací spáry.",
];

const tilePrep = [
  "Rovinnost podkladu.",
  "Svislost rohů.",
  "Rozměry prostoru po dokončení omítek.",
  "Napojení na vanu nebo sprchový kout.",
  "Pozice instalačních vývodů.",
  "Rozmístění nik a polic.",
  "Přechod mezi obkladem a malbou.",
  "Připravenost pro hydroizolaci.",
];

const stripPhotos = [
  { src: "/realizace/byt-prosek-behem-2.webp", alt: "Nově vyzděné stěny koupelny s hydroizolací před obkladem" },
  { src: "/realizace/byt-koupelna-zachod-pred-2.webp", alt: "Zdivo s vysekanými drážkami pro nové rozvody" },
  { src: "koupelna-pred-obklady-odstraneny.webp", alt: "Zdivo z tvárnic po odstranění původních obkladů" },
];

const wallCompare = [
  ["Pevná a masivní konstrukce", "Lehká suchá konstrukce"],
  ["Vyžaduje mokré procesy", "Umožňuje rychlejší suchou montáž"],
  ["Delší technologické přestávky", "Povrch lze rychleji připravit k dokončení"],
  ["Snadné běžné kotvení podle materiálu", "Těžké prvky vyžadují vhodnou výztuhu"],
  ["Vyšší zatížení původní konstrukce", "Nižší hmotnost"],
  ["Vhodná pro trvalé dozdívky", "Vhodná pro příčky a podhledy"],
];

const plasterChecks = [
  "Soudržnost původního povrchu.",
  "Dutá a odfouknutá místa.",
  "Praskliny a jejich průběh.",
  "Prašnost a savost podkladu.",
  "Stopy po vlhkosti.",
  "Zbytky barev nebo lepidel.",
  "Rozdílné materiály v jedné ploše.",
  "Hloubku potřebného vyrovnání.",
];

const processSteps: { title: string; text: ReactNode }[] = [
  {
    title: "Prohlídka a zadání",
    text: "Projdeme prostor, požadované konstrukce a dostupnou dokumentaci. Zajímá nás také to, co bude na zednické práce navazovat.",
  },
  {
    title: "Zaměření",
    text: "Změříme délky, výšky, stavební otvory a návaznosti na podlahu a strop. U nové dispozice kontrolujeme také průchody a využití okolních místností.",
  },
  {
    title: "Posouzení původního stavu",
    text: "Ověříme viditelný stav zdiva a omítek. Pokud je konstrukce zakrytá, upozorníme, které skutečnosti se mohou potvrdit až po odkrytí.",
  },
  {
    title: "Stanovení rozsahu",
    text: "Určíme, co se zachová, co se odstraní, kde vznikne nová konstrukce a do jaké fáze má být povrch dokončený.",
  },
  {
    title: "Příprava pracoviště",
    text: (
      <>
        Zakryjeme zachované povrchy a připravíme prostor pro materiál. Pokud před
        pracemi probíhá demontáž, můžeme zajistit také{" "}
        bourací práce.
      </>
    ),
  },
  {
    title: "Založení konstrukce",
    text: "Vyznačíme přesnou polohu nové stěny, otvorů a dalších prvků. Správné založení kontrolujeme ještě před pokračováním do výšky.",
  },
  {
    title: "Zdění a opravy",
    text: "Provedeme dohodnutou konstrukci, dozdívky nebo lokální opravy. Pohlídáme napojení na okolní povrchy a připravené prostupy.",
  },
  {
    title: "Omítky a povrchy",
    text: "Po potřebné technologické přestávce připravíme zdivo pro dohodnutý povrch. Rozsah může končit hrubou omítkou, jemnějším dokončením nebo rovinou připravenou pod obklad.",
  },
  {
    title: "Kontrola geometrie",
    text: "Prověříme svislost, rovinu, rozměry otvorů a návaznosti důležité pro další profese.",
  },
  {
    title: "Předání",
    text: "Prostor uklidíme v dohodnutém rozsahu a vysvětlíme, kdy může bezpečně pokračovat malování, obkládání nebo jiná práce.",
  },
];

const qualityChecks = [
  "Polohu konstrukce.",
  "Svislost stěn.",
  "Rovinnost povrchů.",
  "Pravoúhlost důležitých koutů.",
  "Rozměry stavebních otvorů.",
  "Kvalitu rohů a ostění.",
  "Napojení starého a nového povrchu.",
  "Připravenost prostupů.",
  "Rozsah dokončení podle nabídky.",
  "Stav prostoru pro další řemeslo.",
];

const priceFactors = [
  ["Druh konstrukce", "Určuje materiál, způsob založení a pracovní postup"],
  ["Tloušťka a délka zdiva", "Ovlivňuje spotřebu materiálu a čas"],
  ["Stavební otvory", "Vyžadují přesné rozměření a dokončení ostění"],
  ["Stav původního podkladu", "Může znamenat odstranění nesoudržných vrstev"],
  ["Rovinnost", "Větší odchylky vyžadují více přípravy a materiálu"],
  ["Přístup do objektu", "Ovlivňuje dopravu, manipulaci a odnos odpadu"],
  ["Požadované dokončení", "Hrubá omítka a finální povrch mají jiný rozsah"],
  ["Návazné práce", "Mohou vyžadovat přesnější přípravu a více detailů"],
];

const prepareList = [
  "Adresu a typ nemovitosti.",
  "Fotografie prostoru.",
  "Půdorys, pokud je k dispozici.",
  "Rozměry nebo polohu plánované konstrukce.",
  "Informaci, co se má na stěnu montovat.",
  "Rozměry dveří či vybavení.",
  "Požadovaný finální povrch.",
  "Informaci o rozvodech ve stěně.",
  "Představu o navazujících pracích.",
  "Termín realizace.",
  "Patro, výtah a možnost vykládky.",
  "Pravidla správce nebo SVJ.",
];

const faqs = [
  {
    q: "Jaké zednické práce provádíte?",
    a: "Stavíme nové nenosné příčky a dozdívky, zazdíváme vybrané otvory, opravujeme poškozené zdivo, provádíme omítky a připravujeme povrchy pro další práce.",
  },
  {
    q: "Postavíte novou příčku v bytě?",
    a: "Ano, pokud je navržené řešení vhodné pro konkrétní objekt. Před realizací ověříme polohu, rozměry, materiál a návaznost na podlahu, strop a dveře.",
  },
  {
    q: "Opravíte starou opadanou omítku?",
    a: "Ano. Nejprve ale zkontrolujeme rozsah nesoudržných částí a případné známky vlhkosti či dalších problémů.",
  },
  {
    q: "Lze novou omítku nanést na původní?",
    a: "Pouze pokud je původní podklad dostatečně pevný, čistý a kompatibilní s navrženou skladbou. Uvolněné vrstvy je potřeba odstranit.",
  },
  {
    q: "Řešíte také praskliny?",
    a: "Běžné povrchové praskliny lze opravit. U aktivních, hlubších nebo opakovaně vznikajících trhlin je nejdříve potřeba určit jejich příčinu.",
  },
  {
    q: "Zhotovíte stěnu připravenou pod obklad?",
    a: "Ano. Předem potřebujeme znát formát obkladu, členitost plochy a požadavky na rovinu a návaznosti.",
  },
  {
    q: "Jak dlouho musí omítka schnout?",
    a: "Záleží na materiálu, tloušťce vrstvy, podkladu, teplotě a vlhkosti. Další práce zahajujeme podle technologického postupu použitého výrobku.",
  },
  {
    q: "Provádíte i malé opravy?",
    a: "Ano, možnost samostatné menší zakázky posuzujeme podle lokality, rozsahu a návaznosti na další práce.",
  },
  {
    q: "Zajistíte také malování?",
    a: "Ano, po vyzrání a přípravě povrchu mohou navázat naše malířské a dokončovací práce.",
  },
  {
    q: "Ve kterých částech Prahy pracujete?",
    a: "Nejčastěji provádíme zednické práce na Praze 1, 2, 3, 8, 9 a 10. Další lokality posuzujeme podle místa a rozsahu zakázky.",
  },
];

// Districts for the bottom list; the other two are linked in the
// lokality text.
const otherAreas = ["2", "3", "8", "9"];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Zednické práce Praha",
  description:
    "Nové zdivo, nenosné příčky, omítky, opravy poškozených konstrukcí a příprava povrchů při rekonstrukcích v Praze.",
  serviceType: "Zednické práce",
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
    name: "Zednické práce",
    itemListElement: [
      "Zdění nenosných příček",
      "Omítky a vyrovnání stěn",
      "Opravy poškozeného zdiva",
      "Příprava povrchů pod obklady",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Služby", item: HUB_URL },
    { "@type": "ListItem", position: 3, name: "Zednické práce Praha", item: PAGE_URL },
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

export default function ZednickePracePage() {
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
            src={`${IMG}/hero-zdeni.webp`}
            alt="Nové příčky z pórobetonových tvárnic během rekonstrukce bytu"
            style={{ objectPosition: "50% 50%" }}
          />
        </div>
        <div className={`${styles.heroInner} ${hub.heroInnerCompact}`}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <Link href="/sluzby">Služby</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Zednické práce</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>Zednické práce Praha</h1>
            <h2 className={styles.heroSub}>Nové zdivo, omítky a opravy</h2>
            <p className={styles.heroText}>
              Rovná stěna, přesný otvor pro dveře a správně připravený podklad nejsou na
              první pohled nejvýraznější částí rekonstrukce. Právě na nich však závisí,
              zda budou dobře navazovat podlahy, obklady, nábytek i finální malba.
            </p>
            <div className={loc.heroCta}>
              <a
                className={`${styles.btnGold} ${loc.heroCtaBtn}`}
                href={`tel:${PHONE}`}
                data-cta="zednicke_hero_phone"
              >
                Domluvit bezplatnou návštěvu
              </a>
            </div>
            <p className={loc.heroContact}>
              Domluvte si bezplatnou návštěvu na telefonu{" "}
              <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.
            </p>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section id="predstaveni" className={`${styles.intro} ${styles.split}`} style={{ alignItems: "start" }}>
        <p className={styles.introLead} data-reveal>
          Provádíme zednické práce v Praze při rekonstrukcích bytů a domů i jako
          samostatnou službu. Stavíme nové příčky a dozdívky, opravujeme poškozené
          zdivo, obnovujeme omítky a připravujeme povrchy pro další řemesla.
        </p>
        <div className={styles.stack} data-reveal>
          <p>
            Než začneme, potřebujeme vědět, jak má prostor po dokončení fungovat. Jinou
            přesnost vyžaduje běžná stěna určená k malování, jinou plocha pod
            velkoformátový obklad a jinou otvor, do kterého se budou montovat dveře nebo
            vestavěná skříň.
          </p>
          <p>
            Mistr přijede přímo na místo, prostor zaměří a projde s vámi požadované
            úpravy. Na základě skutečného stavu připravíme rozsah prací a{" "}
            <strong className={styles.accent}>podrobný rozpočet</strong>.
          </p>
        </div>
      </section>

      {/* Precise construction */}
      <section id="presnost" className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Přesná konstrukce je základem rekonstrukce</h2>
              <p className={s.strongLead}>
                Zednické práce nejsou jen nanášení malty nebo omítky. Každá nová
                konstrukce musí být správně umístěná, napojená na okolní prvky a
                připravená pro to, co na ni přijde později.
              </p>
              <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
                Často nejde pouze o samotnou stěnu. Posunutí příčky o několik centimetrů
                může ovlivnit šířku chodby, polohu dveří, rozměr koupelnového nábytku
                nebo možnost otevřít skříňku. Proto rozměry ověřujeme dříve, než vznikne
                konstrukce, kterou by bylo nutné znovu upravovat.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>
                Před založením nové příčky kontrolujeme například:
              </p>
              <ol className={domy.numList}>
                {partitionChecks.map((item, i) => (
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

      {/* What we do */}
      <section id="prace" className={`${styles.dark} ${hub.anchor}`}>
        <div className={styles.container}>
          <h2 className={`${styles.h2} ${s.headGap}`} data-reveal>
            Jaké zednické práce provádíme
          </h2>
          <div className={`${byty.scopeGrid} ${s.cardStack}`} data-reveal-group>
            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>01</span>
              <h3 className={byty.scopeTitle}>Nové příčky a dozdívky</h3>
              <div className={s.cardWideBody}>
                <div className={s.cardCol}>
                  <p>
                    Nové zdivo vytváří dispozici bytu nebo domu. Používá se pro
                    rozdělení místností, úpravu koupelny, technického prostoru, komory
                    nebo zázemí kuchyně.
                  </p>
                  <p>
                    Materiál volíme podle tloušťky, umístění, požadovaného povrchu a
                    dalšího využití stěny. Před realizací musí být zároveň potvrzeno, že
                    jde o nenosnou konstrukci nebo o úpravu prováděnou podle odpovídající
                    dokumentace.
                  </p>
                  <p className={byty.scopeNote}>
                    Do nosných stěn a konstrukčně nejasných částí nezasahujeme jen na
                    základě vzhledu. Taková úprava může vyžadovat projekt, statické
                    posouzení a ověření povolovacího režimu.
                  </p>
                </div>
                <div className={s.cardCol}>
                  <p className={byty.scopeListTitle}>Podle konkrétního projektu provádíme:</p>
                  <Bullets items={masonryWorks} />
                </div>
              </div>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>02</span>
              <h3 className={byty.scopeTitle}>Omítky a vyrovnání stěn</h3>
              <div className={s.cardWideBody}>
                <div className={s.cardCol}>
                  <p>
                    Omítka chrání zdivo, sjednocuje povrch a vytváří podklad pro další
                    dokončení. Ne každá stěna však potřebuje stejnou skladbu.
                  </p>
                  <p>
                    Před nanesením nové vrstvy odstraníme uvolněné a nesoudržné části.
                    Technologické předpisy běžně požadují, aby byl podklad před další
                    povrchovou úpravou pevný, vyzrálý, vyschlý a zbavený nečistot;
                    poškozené nebo vyduté části se mají odstranit a vyspravit.
                  </p>
                  <p className={byty.scopeNote}>
                    Novou omítkou nezakrýváme povrch, který se od podkladu odděluje.
                    Nejprve potřebujeme určit, které části lze zachovat a které by
                    ohrozily životnost nové vrstvy.
                  </p>
                </div>
                <div className={s.cardCol}>
                  <p className={byty.scopeListTitle}>Rozsah může zahrnovat:</p>
                  <Bullets items={plasterScope} />
                </div>
              </div>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>03</span>
              <h3 className={byty.scopeTitle}>Opravy poškozeného zdiva</h3>
              <div className={s.cardWideBody}>
                <div className={s.cardCol}>
                  <p>
                    Starší konstrukce mohou být poškozené předchozími zásahy,
                    instalacemi, vlhkostí nebo nevhodně provedenou opravou. Před
                    zahájením potřebujeme rozlišit kosmetickou vadu od problému, který má
                    hlubší příčinu.
                  </p>
                  <p>
                    U prasklin sledujeme jejich polohu, směr a rozsah. Běžnou povrchovou
                    vadu lze opravit v rámci přípravy, ale aktivní nebo opakovaně
                    vznikající trhlina může vyžadovat další posouzení. Pouhé zakrytí
                    omítkou by neodstranilo její příčinu.
                  </p>
                  <p className={byty.scopeNote}>
                    Stejný princip platí u vlhkosti. Pokud do stěny stále zatéká nebo v
                    ní vzlíná voda, nemá smysl uzavřít ji novou vrstvou a očekávat trvalý
                    výsledek. Nejdříve je nutné řešit zdroj problému.
                  </p>
                </div>
                <div className={s.cardCol}>
                  <p className={byty.scopeListTitle}>Opravujeme například:</p>
                  <Bullets items={repairs} />
                </div>
              </div>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>04</span>
              <h3 className={byty.scopeTitle}>Ostění, otvory a zapravení</h3>
              <div className={s.cardWideBody}>
                <div className={s.cardCol}>
                  <p>
                    Přesný stavební otvor výrazně usnadní montáž dveří, okenních prvků,
                    revizních dvířek nebo vestavěného vybavení. Křivá ostění a rozdílné
                    šířky mohou naopak znamenat složité dodatečné úpravy.
                  </p>
                  <p className={byty.scopeNote}>
                    Pokud se má otvor zvětšovat, překládat nebo vytvářet v konstrukci s
                    možnou nosnou funkcí, musí se postup stanovit podle odborných
                    podkladů. Běžná zednická oprava nemůže nahrazovat statický návrh.
                  </p>
                </div>
                <div className={s.cardCol}>
                  <p className={byty.scopeListTitle}>Při práci kontrolujeme:</p>
                  <Bullets items={openingChecks} />
                </div>
              </div>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>05</span>
              <h3 className={byty.scopeTitle}>Příprava pod obklady a další povrchy</h3>
              <div className={s.cardWideBody}>
                <div className={s.cardCol}>
                  <p>
                    Stěna pod obkladem musí mít jiné vlastnosti než dekorativně nerovná
                    plocha určená k výmalbě. Zvlášť u větších formátů je důležité
                    připravit dostatečně přesnou rovinu.
                  </p>
                  <p className={byty.scopeNote}>
                    Stavební přípravu koordinujeme s plánem{" "}
                    <Link className={s.goldLink} href={service("rekonstrukce-koupelen-praha")}>
                      rekonstrukce koupelny v Praze
                    </Link>
                    , aby rozměry odpovídaly skutečně vybranému vybavení.
                  </p>
                </div>
                <div className={s.cardCol}>
                  <p className={byty.scopeListTitle}>V koupelnách a kuchyních řešíme:</p>
                  <Bullets items={tilePrep} />
                </div>
              </div>
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

      {/* Brick vs drywall */}
      <section id="zdena-nebo-sadrokartonova" className={styles.dark}>
        <div className={styles.container}>
          <div className={styles.sectionHead} style={{ marginBottom: 56 }}>
            <h2 className={styles.h2} data-reveal>
              Zděná, nebo sádrokartonová příčka
            </h2>
            <p className={styles.lead} data-reveal>
              Zděná a sádrokartonová příčka nejsou dvě zcela zaměnitelné možnosti. Každá
              se hodí pro jiné použití.
            </p>
          </div>
          <div className={koup.tableScroll} data-reveal>
            <table className={`${loc.serviceTable} ${s.compareTable}`}>
              <thead>
                <tr>
                  <th>Zděná příčka</th>
                  <th>Sádrokartonová příčka</th>
                </tr>
              </thead>
              <tbody>
                {wallCompare.map(([brick, drywall]) => (
                  <tr key={brick}>
                    <td>{brick}</td>
                    <td>{drywall}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={s.compareAfter}>
            <p data-reveal>
              Rozhodnutí závisí na místě, tloušťce konstrukce, požadavcích na instalace,
              budoucím zatížení a stavu domu. Někdy je nejlepší zděná příčka, jindy
              lehká konstrukce a v některých projektech se oba způsoby kombinují.
            </p>
            <p className={hub.tip} data-reveal>
              Pokud je pro prostor vhodnější lehká konstrukce, navážou naše{" "}
              sádrokartonářské práce.
            </p>
          </div>
        </div>
      </section>

      {/* Plaster must not hide problems */}
      <section id="omitky" className={styles.container}>
        <div className={styles.split} style={{ alignItems: "start" }}>
          <div className={styles.stack} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Omítka nemá zakrývat problém</h2>
            <p className={s.strongLead}>
              Nový hladký povrch působí dokončeně, ale kvalita se neposuzuje jen
              bezprostředně po nanesení. Důležité je, zda jednotlivé vrstvy drží,
              správně vysychají a odpovídají původní konstrukci.
            </p>
            <p>
              Penetraci nepoužíváme automaticky jako řešení všech problémů. Musí
              odpovídat podkladu a navazující vrstvě. Technické předpisy vyžadují
              aplikaci základního nátěru na vyzrálý, suchý a neznečištěný povrch, pokud
              ji daný systém předepisuje.
            </p>
            <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
              Omítky a opravné hmoty potřebují čas k vysychání a vyzrání. Přesná
              technologická přestávka se řídí konkrétním výrobkem, tloušťkou vrstvy,
              teplotou a vlhkostí v prostoru.
            </p>
          </div>
          <div className={domy.listCol} data-reveal>
            <p className={loc.checkTitle}>Před opravou omítek proto kontrolujeme:</p>
            <ul className={loc.checkLight}>
              {plasterChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="postup" className={`${styles.white} ${hub.anchor}`}>
        <div className={styles.container}>
          <h2 className={styles.h2} data-reveal>
            Jak zednické práce probíhají
          </h2>
          <ol className={`${styles.steps} ${koup.steps10}`} data-reveal-group>
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

      {/* Follow-up trades */}
      <section id="navaznost" className={styles.container}>
        <div className={styles.sectionHead} style={{ marginBottom: 56 }}>
          <h2 className={styles.h2} data-reveal>
            Návaznost na další řemesla
          </h2>
          <p className={styles.lead} data-reveal>
            Dobrá zednická práce musí připravit podmínky pro všechny následující
            profese.
          </p>
        </div>
        <div className={s.quad} data-reveal-group>
          <article className={s.quadCol}>
            <h3>Dveře</h3>
            <p>
              Otvor musí odpovídat zvolenému systému dveří, výšce podlahy a požadované
              tloušťce dokončené stěny. Dveře proto doporučujeme vybrat nebo technicky
              upřesnit dříve, než se otvor definitivně dokončí.
            </p>
          </article>
          <article className={s.quadCol}>
            <h3>Kuchyňská linka</h3>
            <p>
              Před přípravou stěn potřebujeme znát polohu skříněk, pracovní desky,
              obkladu a instalačních vývodů. Křivá nebo nevhodně umístěná stěna může
              později komplikovat montáž celé sestavy.
            </p>
          </article>
          <article className={s.quadCol}>
            <h3>Podlahy</h3>
            <p>
              Nová příčka ovlivňuje rozdělení místností, sokly i směr pokládky. Výška
              budoucí krytiny zase určuje konečnou výšku dveřních otvorů. Návaznost proto
              řešíme společně s{" "}
              podlahářskými pracemi.
            </p>
          </article>
          <article className={s.quadCol}>
            <h3>Malování</h3>
            <p>
              Malířské práce potřebují vyzrálý, suchý a vhodně připravený povrch. Rozsah
              zednického dokončení předem přizpůsobíme tomu, zda bude následovat štuk,
              stěrka nebo jiná úprava.
            </p>
            <p>
              <Link className={s.moreLink} href={service("malirske-prace-praha")}>
                Více o malířských pracích Praha →
              </Link>
            </p>
          </article>
        </div>
      </section>

      {/* Quality control */}
      <section id="kontrola-kvality" className={styles.dark}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.prepareText} data-reveal>
            <h2 className={styles.h2}>Kontrola přesnosti a kvality</h2>
            <p>
              Hotovou konstrukci neposuzujeme pouze pohledem z jednoho místa.
              Kontrolujeme vlastnosti důležité pro její další použití.
            </p>
            <p className={hub.tip}>
              Požadovanou přesnost je dobré stanovit podle budoucího použití. Plocha pod
              vysokou vestavěnou skříň, kuchyňskou sestavu nebo velkoformátový obklad má
              jiné nároky než běžná stěna ve skladu.
            </p>
          </div>
          <div className={domy.listCol} data-reveal="right">
            <p className={`${loc.checkTitle} ${koup.goldTitle}`}>Podle typu práce sledujeme:</p>
            <ul className={`${koup.darkList} ${s.darkGrid}`}>
              {qualityChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Before / after — gallery photos still to come */}
      <section id="pred-a-po" className={`${styles.white} ${hub.anchor}`}>
        <div className={`${styles.container} ${s.slimSection}`}>
          <div className={styles.sectionHead} style={{ marginBottom: 0 }}>
            <h2 className={styles.h2} data-reveal>
              Před a po zednických pracích
            </h2>
            <div className={domy.listCol} style={{ gap: 24 }} data-reveal>
              <p className={styles.lead}>
                U zednické realizace má galerie ukázat více než hotovou bílou stěnu.
                Důležitý je také původní problém, skladba opravy a přesnost nové
                konstrukce.
              </p>
              {/* TODO: doplnit fotografie skutečných zednických realizací (původní stav, detail poškození, založení, průběh, omítnutý povrch, detail ostění) */}
              <Link className={loc.btnOutlineGreen} href="/realizace">
                Prohlédnout realizace RekoGrinik →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Price */}
      <section id="cena" className={styles.container}>
        <h2 className={`${styles.h2} ${s.headGap}`} data-reveal>
          Co ovlivňuje cenu
        </h2>
        <div className={koup.tableScroll} data-reveal>
          <table className={`${byty.typeTable} ${koup.tableFlush}`}>
            <thead>
              <tr>
                <th>Faktor</th>
                <th>Vliv na realizaci</th>
              </tr>
            </thead>
            <tbody>
              {priceFactors.map(([factor, effect]) => (
                <tr key={factor}>
                  <td>{factor}</td>
                  <td>{effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={`${byty.darkBox} ${s.afterBox}`} style={{ fontSize: 18 }} data-reveal>
          Při porovnávání nabídek ověřte, zda obsahují materiál, dopravu, přípravu,
          ochranu prostoru, rohové profily, ostění, odvoz odpadu a požadovanou úroveň
          povrchu. Výraz „hotová stěna“ nemusí u všech dodavatelů znamenat stejný stav.
        </p>
      </section>

      {/* Locations */}
      <section id="lokality" className={`${styles.white} ${hub.anchor}`}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={`${styles.stack} ${domy.stickyCol}`} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Zednické práce v Praze</h2>
            <p>
              Nejčastěji pracujeme na Praze 1, Praze 2, Praze 3, Praze 8, Praze 9 a
              Praze 10.
            </p>
          </div>
          <div className={styles.stack} data-reveal="right">
            <p>
              Na Žižkově, Vinohradech a ve Vršovicích se často setkáváme se staršími
              omítkami, dodatečně upravovanými otvory a kombinací různých materiálů. V
              centru Prahy bývá důležitá především logistika, ochrana chodeb a doprava
              materiálu do vyšších podlaží.
            </p>
            <p>
              V Karlíně, Libni a Vysočanech pracujeme také v modernizovaných či
              novějších interiérech, kde se zednické práce často týkají přesných
              dozdívek, nik a přípravy pro nábytek. Na Proseku, v Bohnicích nebo
              Strašnicích realizujeme opravy a nové nenosné konstrukce v panelových a
              dalších bytových domech.
            </p>
            <p className={styles.callout}>
              Pravidla konkrétního SVJ mohou vyžadovat předchozí oznámení, vymezení doby
              hlučných prací nebo doložení podkladů při zásahu do společných částí.
            </p>
            <p>
              Staré omítky a dodatečně upravované otvory známe hlavně z domů v centru,
              podívejte se na{" "}
              <Link className={koup.inlineLink} href="/lokace/rekonstrukce-praha-1">
                naše práce na Praze 1
              </Link>. Ve Vršovicích a Strašnicích děláme dozdívky i opravy omítek, více na stránce{" "}
              <Link className={koup.inlineLink} href="/lokace/rekonstrukce-praha-10">
                rekonstrukce Praha 10
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist before the visit */}
      <section id="priprava" className={styles.dark}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.prepareText} data-reveal>
            <h2 className={styles.h2}>Kontrolní seznam před návštěvou</h2>
            <p>Před návštěvou si připravte:</p>
            <p className={hub.tip}>
              <strong>Praktický tip:</strong> Před vyzděním nové koupelny, kuchyně nebo
              šatny zakreslete do půdorysu otevřená dveřní křídla a hloubku nábytku.
              Snadno tak odhalíte kolize, které z pouhých rozměrů místnosti nemusí být
              zřejmé.
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
            Zednické práce na Praze {d}
          </Link>
        ))}
      </nav>

      {/* Contact */}
      <section id="kontakt" className={`${styles.contact} ${hub.anchor}`}>
        <img
          loading="lazy"
          decoding="async"
          src={`${IMG}/koupelna-mozaika.webp`}
          alt="Hotová koupelna v nově vyzděném bytovém jádře"
          className={styles.cover}
          style={{ objectPosition: "50% 40%" }}
        />
        <div className={styles.contactOverlay} />
        <div className={styles.contactInner}>
          <div className={styles.contactText} data-reveal>
            <h2 className={styles.contactTitle}>Domluvte si zaměření</h2>
            <p>
              Potřebujete postavit novou příčku, opravit poškozenou omítku nebo připravit
              stěny pro další fázi rekonstrukce? Pošlete nám fotografie a stručný popis
              požadovaného výsledku.
            </p>
            <p>
              Mistr přijede prostor zaměřit, zkontroluje viditelné konstrukce a projde s
              vámi důležité návaznosti. Poté připravíme podrobný rozpočet a jasně
              určíme, v jakém stavu budou práce předány.
            </p>
            <Link
              className={styles.contactBtn}
              href="/kontakt"
              data-cta="zednicke_contact_poptavka"
            >
              Domluvit bezplatnou návštěvu mistra
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
