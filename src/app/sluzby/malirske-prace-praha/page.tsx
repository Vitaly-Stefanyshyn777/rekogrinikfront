/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
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
const PAGE_URL = "https://rekogrinik.cz/sluzby/malirske-prace-praha";
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
    absolute: "Malířské práce Praha | Malování, štukování a opravy | RekoGrinik",
  },
  description:
    "Malířské práce Praha pro byty i domy. Malování, štukování a opravy stěn, pečlivé zakrytí a čisté předání. Domluvte si bezplatnou prohlídku.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

type Item = { text: string; href?: string };

const prepSteps = [
  "Odstranění uvolněných vrstev.",
  "Omytí nebo očištění povrchu.",
  "Lokální opravy děr a rýh.",
  "Opravu vybraných prasklin.",
  "Přebroušení nerovností.",
  "Štukování nebo nanesení stěrky.",
  "Odstranění prachu po broušení.",
  "Penetraci podle typu a savosti podkladu.",
  "Izolaci problematických skvrn.",
  "Základní a finální nátěr.",
];

const visitQuestions = [
  "Které místnosti se budou malovat.",
  "Zda se mění původní odstín.",
  "Jaké vybavení v prostoru zůstane.",
  "Které povrchy vyžadují opravu.",
  "Zda požadujete běžnou, nebo omyvatelnou malbu.",
  "Jaké části se malovat nemají.",
  "Zda na práce navazuje montáž nábytku či podlahových lišt.",
];

const plasterOptions = [
  "Lokální štukování opravených míst.",
  "Nový štuk na vhodně připravené ploše.",
  "Vyrovnání vybraných nerovností.",
  "Celoplošnou stěrku.",
  "Broušení a odstranění prachu.",
  "Přípravu povrchu pro finální nátěr.",
];

const crackChecks = [
  "Umístění a průběh praskliny.",
  "Zda jde pouze o povrchovou vrstvu.",
  "Stav okolní omítky.",
  "Rozdílnost napojených materiálů.",
  "Předchozí neúspěšné opravy.",
  "Případné známky pohybu nebo vlhkosti.",
];

const drywallChecks = [
  "Kvalitu vytmelení spojů.",
  "Hlavy upevňovacích prvků.",
  "Vnitřní a vnější rohy.",
  "Místa napojení na okolní konstrukce.",
  "Stopy po broušení.",
  "Požadovaný vzhled při denním a umělém světle.",
];

const afterWorks: Item[] = [
  { text: "Bourání příček a zapravení otvorů." },
  { text: "Nových elektroinstalačních drážkách." },
  { text: "Montáži sádrokartonu." },
  { text: "Výměně dveří." },
  { text: "Zednických opravách." },
  { text: "Rekonstrukci koupelny nebo kuchyně." },
  { text: "Úpravě podlah a soklů." },
];

const stripPhotos = [
  { src: "/realizace/byt-koupelna-zachod-po-6.webp", alt: "Nově vymalovaný pokoj s bílými stěnami a parketami" },
  { src: "byt-obyvaci-prostor-podlaha.webp", alt: "Obývací pokoj se stěnami v dekorativní úpravě" },
  { src: "byt-kuchyn-laminat.webp", alt: "Vymalovaný obývací prostor s kuchyní" },
  { src: "/realizace/byt-koupelna-zachod-po-7.webp", alt: "Pokoj s nově vymalovanými stěnami po rekonstrukci bytu" },
];

const surfaceStates = [
  ["Pevný a čistý původní nátěr", "Očištění, lokální opravy a vhodná příprava"],
  ["Sprašující nebo nestejně savý povrch", "Očištění a penetrace zvolená podle podkladu"],
  ["Odlupující se malba", "Odstranění nesoudržných vrstev"],
  ["Díry a lokální nerovnosti", "Vyspravení, broušení a sjednocení"],
  ["Rozsáhle nerovný povrch", "Štukování nebo stěrkování"],
  ["Skvrny po vodě, rzi či nikotinu", "Odstranění příčiny a případný izolační nátěr"],
  ["Plíseň nebo aktivní vlhkost", "Nejdříve řešení příčiny a odborné ošetření"],
];

const covered = [
  "Podlahové krytiny.",
  "Vestavěný a nepřemístitelný nábytek.",
  "Okna a parapety.",
  "Dveřní křídla a zárubně.",
  "Vypínače, zásuvky a další prvky.",
  "Radiátory.",
  "Kuchyňské skříňky a pracovní plochy.",
  "Přístupovou trasu do místnosti.",
];

const processSteps = [
  {
    title: "Konzultace a fotografie",
    text: "Sdělíte nám počet místností, přibližnou plochu, stav stěn a požadovaný výsledek. Fotografie pomohou připravit první otázky, konečný rozsah však určíme až na místě.",
  },
  {
    title: "Bezplatná prohlídka",
    text: "Mistr posoudí povrch, změří potřebné plochy a prohlédne praskliny, skvrny i předchozí vrstvy. Součástí standardního postupu RekoGrinik je bezplatná návštěva, zaměření, fotodokumentace a konzultace v objektu.",
  },
  {
    title: "Návrh rozsahu",
    text: "Rozlišíme samotné malování od oprav, štukování, stěrkování a dalších přípravných prací. Ujasníme si také odstíny, vlastnosti barev a požadované dokončení.",
  },
  {
    title: "Rozpočet",
    text: "Dostanete podrobný rozpočet s rozsahem prací, specifikací materiálů a dohodnutými cenami. Pokud se po odstranění původních vrstev ukáže skrytý problém, další postup s vámi nejdříve probereme.",
  },
  {
    title: "Příprava prostoru",
    text: "Přesuneme dohodnuté vybavení, zakryjeme chráněné plochy a připravíme pracovní prostor.",
  },
  {
    title: "Oprava podkladu",
    text: "Odstraníme nesoudržné části, provedeme sjednané opravy, štuky nebo stěrky a povrch přebrousíme. Jednotlivé vrstvy necháme podle použitého materiálu vyschnout a vyzrát.",
  },
  {
    title: "Základní příprava",
    text: "Podle podkladu a nátěrového systému použijeme odpovídající penetraci nebo základní nátěr. Univerzální postup pro každou stěnu neexistuje.",
  },
  {
    title: "Finální malování",
    text: "Nanášení proběhne v počtu vrstev potřebném pro sjednaný výsledek a podle pokynů výrobce. Mezi vrstvami dodržujeme potřebné vysychání.",
  },
  {
    title: "Detaily a kontrola",
    text: "Zkontrolujeme rohy, napojení, okolí zásuvek, stropní linku a rovnoměrnost povrchu. Výsledek hodnotíme při běžném osvětlení místnosti.",
  },
  {
    title: "Úklid a předání",
    text: "Odstraníme zakrytí, uklidíme pracovní nečistoty a hotové plochy s vámi projdeme. Na provedené práce poskytujeme záruku podle sjednaných podmínek; RekoGrinik na webu uvádí tříletou záruku na veškeré práce.",
  },
];

const roomPaints = [
  ["Ložnice", "Klidný vzhled a běžné provozní namáhání"],
  ["Obývací pokoj", "Světlo, barevnost zařízení a velké pohledové plochy"],
  ["Dětský pokoj", "Možnost čištění a odolnost exponovaných míst"],
  ["Chodba", "Vyšší riziko dotyků, šmouh a mechanického namáhání"],
  ["Kuchyně", "Čistitelnost a vystavení provozním nečistotám"],
  ["Koupelna", "Vlhkost, větrání a vhodnost nátěru pro dané prostředí"],
  ["Pracovna", "Odlesky, denní světlo a barevný komfort"],
];

const shadeTips = [
  "Prohlédnout vzorek ráno, odpoledne i večer.",
  "Posoudit jej při zapnutém umělém osvětlení.",
  "Umístit vzorek na více stěn.",
  "Porovnat jej s podlahou a nábytkem.",
  "Nevybírat odstín pouze podle displeje.",
  "Ověřit barvu na dostatečně velké zkušební ploše.",
];

const priceFactors = [
  "Počet a velikost místností.",
  "Výška stropů.",
  "Množství dveří, oken a výklenků.",
  "Stav a soudržnost původního nátěru.",
  "Rozsah prasklin a lokálních oprav.",
  "Potřeba štukování nebo celoplošné stěrky.",
  "Broušení a množství vznikajícího prachu.",
  "Změna tmavého odstínu na světlý.",
  "Požadovaná odolnost nátěru.",
  "Množství nábytku a náročnost zakrytí.",
  "Přístup, patro a možnost parkování.",
  "Návaznost na další řemesla.",
];

const prepareList = [
  "Adresu a městskou část.",
  "Počet místností.",
  "Přibližnou výšku stropů.",
  "Fotografie celých stěn i poškozených detailů.",
  "Informaci o předchozím malování, pokud ji znáte.",
  "Požadované odstíny.",
  "Představu o omyvatelnosti povrchu.",
  "Informaci, zda v bytě zůstává nábytek.",
  "Popis případných skvrn nebo vlhkosti.",
  "Termín dokončení.",
  "Informaci o dalších plánovaných řemeslech.",
  "Pravidla domu a možnosti parkování.",
];

const faqs = [
  {
    q: "Jaké malířské práce provádíte?",
    a: "Provádíme malování interiérů, štukování, stěrkování, opravy povrchů a dokončovací práce po rekonstrukci nebo montáži sádrokartonu.",
  },
  {
    q: "Vymalujete pouze jeden pokoj?",
    a: "Ano. Přijímáme kompletní zakázky i malování jednotlivých pokojů podle lokality a rozsahu.",
  },
  {
    q: "Musí se stará barva vždy oškrábat?",
    a: "Ne. Rozhoduje její soudržnost, čistota a kompatibilita s novým systémem. Uvolněné nebo špatně přilnavé vrstvy je ale potřeba odstranit.",
  },
  {
    q: "Je penetrace nutná před každým malováním?",
    a: "Ne automaticky. Záleží na typu, savosti a stavu podkladu i použité barvě. Nevhodně aplikovaná penetrace může být stejně problematická jako její vynechání.",
  },
  {
    q: "Odstraní nová malba skvrny po vodě?",
    a: "Nejdříve musí být odstraněna příčina zatečení a povrch musí vyschnout. Podle charakteru skvrny může být následně potřeba speciální izolační nátěr.",
  },
  {
    q: "Umíte opravit praskliny?",
    a: "Běžné povrchové praskliny opravujeme v rámci přípravy. U opakujících se, aktivních nebo konstrukčních trhlin je nejdříve potřeba zjistit jejich příčinu.",
  },
  {
    q: "Jak dlouho po štukování lze malovat?",
    a: "Záleží na materiálu, tloušťce vrstvy, teplotě, vlhkosti a větrání. Malujeme až po potřebném vyschnutí a vyzrání podle technického postupu výrobce.",
  },
  {
    q: "Musím vystěhovat všechen nábytek?",
    a: "Menší předměty doporučujeme odnést. U většího nábytku se podle prostoru domluvíme na přesunutí a zakrytí, aby zůstal přístup ke stěnám.",
  },
  {
    q: "Uklidíte po dokončení?",
    a: "Ano, odstraníme použité zakrytí a pracovní nečistoty v rozsahu sjednaném v nabídce. Závěrečná kontrola a generální úklid jsou součástí pracovního procesu RekoGrinik.",
  },
  {
    q: "Ve kterých částech Prahy pracujete?",
    a: "Nejčastěji realizujeme malířské práce na Praze 1, 2, 3, 8, 9 a 10. Jinou lokalitu posoudíme podle místa a velikosti zakázky.",
  },
];

// Districts for the bottom list; the other two are linked in the
// lokality text.
const otherAreas = ["3", "8", "9", "10"];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Malířské práce Praha",
  description:
    "Malování, štukování, opravy povrchů a dokončovací práce pro byty, domy a jednotlivé místnosti v Praze.",
  serviceType: "Malířské a dokončovací práce",
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
    name: "Malířské a dokončovací služby",
    itemListElement: [
      "Malování bytů a domů",
      "Štukování a stěrkování",
      "Opravy prasklin a povrchů",
      "Malování sádrokartonu",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Služby", item: HUB_URL },
    { "@type": "ListItem", position: 3, name: "Malířské práce Praha", item: PAGE_URL },
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

function Bullets({ items }: { items: (string | Item)[] }) {
  return (
    <ul className={styles.bullets}>
      {items.map((item) => {
        const { text, href } = typeof item === "string" ? { text: item, href: undefined } : item;
        return (
          <li key={text}>
            {href ? (
              <a className={s.bulletLink} href={href}>
                {text}
              </a>
            ) : (
              text
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function MalirskePracePage() {
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
            src={`${IMG}/hero-schodiste.webp`}
            alt="Schodiště v rodinném domě a stěny s dekorativní omítkou"
            style={{ objectPosition: "50% 40%" }}
          />
        </div>
        <div className={`${styles.heroInner} ${hub.heroInnerCompact}`}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <Link href="/sluzby">Služby</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Malířské práce</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>Malířské práce Praha</h1>
            <h2 className={styles.heroSub}>Malování, štukování a čisté dokončení</h2>
            <p className={styles.heroText}>
              Nová barva může místnost projasnit během několika hodin. O tom, jak bude
              stěna vypadat za několik měsíců, však rozhoduje především práce
              provedená ještě před otevřením nádoby s finálním nátěrem.
            </p>
            <div className={loc.heroCta}>
              <a
                className={`${styles.btnGold} ${loc.heroCtaBtn}`}
                href={`tel:${PHONE}`}
                data-cta="malirske_hero_phone"
              >
                Domluvit bezplatnou prohlídku
              </a>
            </div>
            <p className={loc.heroContact}>
              Domluvte si bezplatnou návštěvu mistra na čísle{" "}
              <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.
            </p>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section id="predstaveni" className={`${styles.intro} ${styles.split}`} style={{ alignItems: "start" }}>
        <p className={styles.introLead} data-reveal>
          Provádíme malířské práce v Praze pro byty, rodinné domy i jednotlivé
          pokoje. Zajistíme malování, štukování, opravy povrchů a dokončení stěn po
          stavebních úpravách. Můžete nás oslovit kvůli samostatnému vymalování i
          závěrečné fázi kompletní rekonstrukce.
        </p>
        <div className={styles.stack} data-reveal>
          <p>
            Než připravíme nabídku, prohlédneme stěny a stropy přímo na místě.
            Zjistíme, zda je původní nátěr soudržný, jak je povrch rovný a zda se na
            něm nacházejí praskliny, skvrny nebo jiná poškození. Poté navrhneme rozsah
            přípravy a vhodný způsob dokončení.
          </p>
          <p>
            Chráníme podlahy, okna, dveře, vypínače i vybavení, které v místnosti
            zůstává. Po dokončení provedeme kontrolu povrchů, odstraníme použité
            zakrytí a předáme <strong className={styles.accent}>uklizený prostor</strong>.
          </p>
        </div>
      </section>

      {/* Durability starts under the paint */}
      <section id="priprava-povrchu" className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Dlouhá životnost začíná pod barvou</h2>
              <p className={s.strongLead}>
                Výsledná malba je pouze poslední viditelnou vrstvou. Pokud se nanese na
                prašný, mastný, vlhký nebo nesoudržný povrch, ani kvalitní barva
                nezajistí dobrý výsledek.
              </p>
              <p>
                Podklad před malováním musí být podle technických doporučení suchý,
                pevný, soudržný, vyzrálý a zbavený prachu, nečistot a odlupujících se
                vrstev. Starý nátěr proto nejdříve prověříme a teprve potom určíme
                potřebný postup.
              </p>
              <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
                Penetrace není automatický lék na každý problém. Používá se tehdy, když
                odpovídá konkrétnímu podkladu a následnému nátěrovému systému. Může
                povrch částečně zpevnit, sjednotit jeho savost a zlepšit přídržnost
                dalších vrstev.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>Podle stavu může příprava zahrnovat:</p>
              <ol className={domy.numList}>
                {prepSteps.map((item, i) => (
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
            Jaké malířské práce provádíme
          </h2>
          <div className={byty.scopeGrid} data-reveal-group>
            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>01</span>
              <h3 className={byty.scopeTitle}>Malování bytů, domů a jednotlivých pokojů</h3>
              <p>
                Vymalujeme celý byt, několik místností i samostatný pokoj. Rozsah může
                zahrnovat stěny, stropy, ostění, výklenky nebo další dohodnuté plochy.
              </p>
              <p className={byty.scopeListTitle}>Při prohlídce si ujasníme:</p>
              <Bullets items={visitQuestions} />
              <p className={byty.scopeNote}>
                V obývacím pokoji nebo ložnici bývá důležitý klidný a rovnoměrný vzhled.
                V chodbě, kuchyni nebo dětském pokoji se více uplatní povrch odolnější
                vůči běžnému znečištění a čištění. Omyvatelný nátěr je vhodný zejména
                tam, kde se stěny často dotýkají nebo je potřeba je opakovaně čistit.
              </p>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>02</span>
              <h3 className={byty.scopeTitle}>Štukování a celoplošné stěrky</h3>
              <p>
                Samotná barva nevyrovná hrubou omítku, hlubší škrábance ani výrazně
                rozdílné struktury. Pokud má být povrch hladší a sjednocený, je potřeba
                nejdříve upravit jeho podklad.
              </p>
              <p className={byty.scopeListTitle}>Podle výchozího stavu můžeme provést:</p>
              <Bullets items={plasterOptions} />
              <p>
                Štukování a stěrkování nejsou totéž co malování. Jde o samostatnou
                přípravnou fázi, která ovlivňuje rovinnost, strukturu a vzhled stěny při
                dopadu světla.
              </p>
              <p className={byty.scopeNote}>
                Nový minerální podklad musí před malováním dostatečně vyzrát. Přesná
                doba závisí na použitém materiálu, tloušťce vrstvy a podmínkách v
                interiéru; postupujeme proto podle technického listu konkrétního
                výrobku. Předčasné uzavření nevyzrálého podkladu může způsobit skvrny,
                snížit přídržnost nebo vytvořit další vzhledové vady.
              </p>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>03</span>
              <h3 className={byty.scopeTitle}>Opravy prasklin, děr a poškozených míst</h3>
              <p>
                Ne každá prasklina má stejnou příčinu. Drobná povrchová prasklina ve
                starém nátěru vyžaduje jiný postup než trhlina, která se opakovaně
                otevírá nebo pokračuje konstrukcí.
              </p>
              <p className={byty.scopeListTitle}>Při prohlídce hodnotíme:</p>
              <Bullets items={crackChecks} />
              <p>
                Běžné otvory po policích, obrazech a instalacích lze před malováním
                lokálně opravit. U aktivních nebo rozsáhlejších trhlin však může být
                nutné nejdříve určit jejich příčinu. Přetření bez potřebné opravy by
                problém pouze dočasně zakrylo.
              </p>
              <p className={byty.scopeNote}>
                Pokud opravy vyžadují větší zásah do omítky nebo zdiva, mohou malířským
                pracím předcházet{" "}
                <a className={s.goldLink} href={service("zednicke-prace-praha")}>
                  zednické práce v Praze
                </a>
                .
              </p>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>04</span>
              <h3 className={byty.scopeTitle}>Malování nového sádrokartonu</h3>
              <p>
                Nový sádrokarton má jinou savost než tmelené spáry. Bez vhodné přípravy
                se proto mohou po malování objevit rozdíly ve struktuře nebo odstínu.
              </p>
              <p className={byty.scopeListTitle}>Před nátěrem kontrolujeme:</p>
              <Bullets items={drywallChecks} />
              <p>
                Povrch zbavíme prachu a připravíme podle zvoleného nátěrového systému.
                Penetrační nebo základní nátěr může sjednotit různou savost desek a
                tmelených míst a podpořit kryvost následných vrstev.
              </p>
              <p className={byty.scopeNote}>
                Pokud konstrukce ještě není hotová, podívejte se také na naše{" "}
                <Link className={s.goldLink} href={service("sadrokartonarske-prace-praha")}>
                  sádrokartonářské práce Praha
                </Link>
                .
              </p>
            </article>

            <article className={`${byty.scopeCard} ${s.cardWide}`}>
              <span className={byty.scopeNum}>05</span>
              <h3 className={byty.scopeTitle}>Dokončovací práce po rekonstrukci</h3>
              <div className={s.cardWideBody}>
                <div className={s.cardCol}>
                  <p>
                    Malování bývá jednou z posledních fází rekonstrukce. Před jeho
                    zahájením je potřeba ověřit, že jsou dokončeny prašné a mokré práce
                    a že podklady mají potřebné podmínky pro finální úpravu.
                  </p>
                  <p className={byty.scopeNote}>
                    Správné pořadí omezuje riziko, že novou malbu poškodí další řemeslo.
                    Pokud je malování součástí{" "}
                    rekonstrukce bytu, harmonogram sladíme s ostatními pracemi.
                  </p>
                </div>
                <div className={s.cardCol}>
                  <p className={byty.scopeListTitle}>Dokončujeme například povrchy po:</p>
                  <Bullets items={afterWorks} />
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

      {/* Wall condition first */}
      <section id="stav-sten" className={styles.container}>
        <div className={styles.sectionHead} style={{ marginBottom: 56 }}>
          <h2 className={styles.h2} data-reveal>
            Nejdříve zjistíme stav stěn
          </h2>
          <p className={styles.lead} data-reveal>
            Původní povrch nemusí být vždy kompletně odstraněn. Rozhoduje jeho
            soudržnost, čistota a kompatibilita s plánovanými vrstvami.
          </p>
        </div>
        <div className={koup.tableScroll} data-reveal>
          <table className={`${byty.typeTable} ${koup.tableFlush}`}>
            <thead>
              <tr>
                <th>Stav povrchu</th>
                <th>Možný postup</th>
              </tr>
            </thead>
            <tbody>
              {surfaceStates.map(([state, how]) => (
                <tr key={state}>
                  <td>{state}</td>
                  <td>{how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={`${styles.split} ${s.afterTable}`}>
          <p className={byty.darkBox} style={{ fontSize: 18 }} data-reveal>
            U plísní nestačí pouze použít bílou barvu. Nejdříve je potřeba hledat
            příčinu — například vlhkost, kondenzaci, netěsnost nebo nedostatečné
            větrání. Napadený povrch se ošetřuje vhodným postupem a nechává vyschnout;
            mechanické odstraňování plísně nasucho se nedoporučuje kvůli šíření částic
            do vzduchu.
          </p>
          <p className={styles.lead} data-reveal>
            Ani skvrny po zatečení nelze spolehlivě řešit, dokud není odstraněn zdroj
            vody. Po vyschnutí se podle charakteru skvrny volí vhodná izolace a až
            následně finální malba.
          </p>
        </div>
      </section>

      {/* Covering */}
      <section id="zakryti" className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Čistý výsledek začíná zakrytím</h2>
              <p className={s.strongLead}>
                „Čisté malování“ neznamená tvrdit, že při broušení nebo opravách
                nevznikne žádný prach. Znamená připravit prostor tak, aby se nečistoty
                co nejméně šířily a aby zůstaly chráněné všechny povrchy, které se
                nemají upravovat.
              </p>
              <p>
                Menší a citlivé předměty doporučujeme předem odnést. Nábytek, který lze
                přesunout, se zpravidla shromáždí tak, aby kolem stěn zůstal dostatek
                pracovního prostoru.
              </p>
              <p className={styles.callout}>
                Ochranné pásky a fólie odstraňujeme ve vhodný okamžik, aby se
                nepoškodila nová malba ani okolní povrchy. Po dokončení prostor
                uklidíme v rozsahu dohodnutém v nabídce. Kontrola kvality, odstranění
                zjištěných nedostatků a generální úklid patří do procesu RekoGrinik.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>Před zahájením podle rozsahu zakrýváme:</p>
              <ul className={loc.checkLight}>
                {covered.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="postup" className={`${styles.container} ${hub.anchor}`}>
        <h2 className={styles.h2} data-reveal>
          Jak probíhají malířské práce
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
      </section>

      {/* Choosing paint */}
      <section id="vyber-barvy" className={styles.dark}>
        <div className={styles.container}>
          <div className={styles.sectionHead} style={{ marginBottom: 56 }}>
            <h2 className={styles.h2} data-reveal>
              Jak vybíráme vhodnou barvu
            </h2>
            <p className={styles.lead} data-reveal>
              Nejdražší barva není automaticky nejlepší volbou pro každou místnost.
              Důležité je, jak bude povrch používán, jak často se bude čistit a jaké
              podmínky v prostoru panují.
            </p>
          </div>
          <table className={`${loc.serviceTable} ${byty.factorTable}`} data-reveal>
            <thead>
              <tr>
                <th>Místnost</th>
                <th>Co při výběru sledujeme</th>
              </tr>
            </thead>
            <tbody>
              {roomPaints.map(([room, what]) => (
                <tr key={room}>
                  <td>{room}</td>
                  <td>{what}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={`${hub.tip} ${s.tipAfterTable}`} data-reveal>
            Do prostor s vyššími nároky na mokré čištění se volí odpovídající
            omyvatelný nátěr. Ve vlhčích místnostech je současně potřeba řešit větrání
            a stav podkladu; samotná „protiplísňová“ barva neodstraní stavební příčinu
            vlhkosti.
          </p>
        </div>
      </section>

      {/* White or coloured walls */}
      <section id="bile-nebo-barevne" className={styles.container}>
        <div className={styles.split} style={{ alignItems: "start" }}>
          <div className={styles.stack} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Bílé, nebo barevné stěny</h2>
            <p className={s.strongLead}>
              Bílá barva prostor prosvětlí, ale sama nezaručí, že místnost bude působit
              větší nebo příjemnější. Výsledek ovlivňuje denní světlo, světelné
              zdroje, podlaha, nábytek i okolní barvy.
            </p>
            <p>
              V bytě na Vinohradech s vysokými okny se odstín může chovat jinak než v
              menší místnosti v žižkovském vnitrobloku. Stejná barva může působit
              odlišně také v novějším bytě ve Vysočanech nebo Karlíně, kde jsou jiné
              podlahy, okna i typ osvětlení.
            </p>
          </div>
          <div className={domy.listCol} data-reveal>
            <p className={loc.checkTitle}>Před výběrem výraznějšího odstínu doporučujeme:</p>
            <ul className={loc.checkLight}>
              {shadeTips.map((item) => (
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
              Před a po malování
            </h2>
            <div className={domy.listCol} style={{ gap: 24 }} data-reveal>
              <p className={styles.lead}>
                Fotografie před a po mají ukazovat skutečný rozsah práce, nikoli jen
                dva odlišně nasvícené snímky. Největší hodnotu má dokumentace, která
                zachytí přípravu podkladu.
              </p>
              {/* TODO: doplnit fotografie skutečných malířských realizací (před / příprava / po) */}
              <Link className={loc.btnOutlineGreen} href="/realizace">
                Prohlédnout realizace RekoGrinik →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Price */}
      <section id="cena" className={styles.container}>
        <div className={styles.split} style={{ alignItems: "start" }}>
          <div className={`${styles.stack} ${domy.stickyCol}`} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Co ovlivňuje cenu</h2>
            <p>
              Cena malířských prací nezávisí pouze na ploše podlahy. Rozhodující je
              celková plocha stěn a stropů, stav povrchu a množství přípravy.
            </p>
            <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
              Při porovnávání nabídek ověřte, zda obě obsahují stejnou přípravu
              podkladu, zakrytí, počet vrstev, materiál a úklid. Cena za metr čtvereční
              bez popisu rozsahu nemusí vypovídat o konečném výsledku.
            </p>
          </div>
          <div className={domy.listCol} data-reveal>
            <p className={loc.checkTitle}>Rozpočet ovlivňuje:</p>
            <ol className={domy.numList}>
              {priceFactors.map((item, i) => (
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
      <section id="lokality" className={`${styles.white} ${hub.anchor}`}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={`${styles.stack} ${domy.stickyCol}`} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Malířské práce v Praze</h2>
            <p>
              Nejčastěji pracujeme na Praze 1, Praze 2, Praze 3, Praze 8, Praze 9 a
              Praze 10.
            </p>
          </div>
          <div className={styles.stack} data-reveal="right">
            <p>
              Na Žižkově, Vinohradech a ve Vršovicích se často setkáváme se staršími
              omítkami, vysokými stropy a několika vrstvami předchozích nátěrů. Stav je
              však vždy potřeba posoudit přímo na místě — samotné stáří domu neříká,
              zda bude stačit běžné malování, nebo rozsáhlejší oprava.
            </p>
            <p>
              V Karlíně, Libni či Vysočanech pracujeme také v novějších a dříve
              modernizovaných bytech. Zde může být hlavním tématem oprava lokálních
              poškození po nábytku, sjednocení nového sádrokartonu nebo výměna
              původního odstínu.
            </p>
            <p>
              V centru Prahy řešíme především přístup, parkování a ochranu společných
              prostor. Na Proseku, ve Strašnicích nebo v Bohnicích často malujeme celé
              byty i samostatné místnosti po dílčích stavebních úpravách.
            </p>
            <p>
              V historických domech v centru pracujeme se štuky a původními omítkami,
              podívejte se na{" "}
              <Link className={koup.inlineLink} href="/lokace/rekonstrukce-praha-1">
                rekonstrukce na Praze 1
              </Link>. Starší byty na Vinohradech a v Nuslích často malujeme i s opravou omítek,
              více u{" "}
              <Link className={koup.inlineLink} href="/lokace/rekonstrukce-praha-2">
                malování na Praze 2
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
            <p>Pro přesnější posouzení si připravte:</p>
            <p className={hub.tip}>
              <strong>Praktický tip:</strong> Pokud si nejste jistí rovností stěn,
              prohlédněte je večer při světle vedeném šikmo podél povrchu. Boční
              osvětlení zvýrazní nerovnosti, opravy i přechody, které při běžném
              rozptýleném světle nemusí být patrné.
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
            Malování na Praze {d}
          </Link>
        ))}
      </nav>

      {/* Contact */}
      <section id="kontakt" className={`${styles.contact} ${hub.anchor}`}>
        <img
          loading="lazy"
          decoding="async"
          src={`${IMG}/dum-schodiste-dekorativni-omitka.webp`}
          alt="Stěny s dekorativní omítkou u schodiště v rodinném domě"
          className={styles.cover}
          style={{ objectPosition: "50% 40%" }}
        />
        <div className={styles.contactOverlay} />
        <div className={styles.contactInner}>
          <div className={styles.contactText} data-reveal>
            <h2 className={styles.contactTitle}>Poptat malířské práce</h2>
            <p>
              Potřebujete vymalovat byt, obnovit starší omítky nebo dokončit stěny po
              rekonstrukci? Pošlete nám fotografie místností a stručně popište
              požadovaný výsledek.
            </p>
            <p>
              Přijedeme povrchy prohlédnout, navrhneme potřebnou přípravu a připravíme
              podrobný rozpočet. Před zahájením budete vědět, co zahrnuje oprava,
              zakrytí, malování i závěrečný úklid.
            </p>
            <Link
              className={styles.contactBtn}
              href="/kontakt"
              data-cta="malirske_contact_poptavka"
            >
              Domluvit bezplatnou prohlídku
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
