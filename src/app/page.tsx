/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./_shared/site.module.css";
import ScrollEffects from "./_shared/ScrollEffects";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap";

const SITE_URL = "https://rekogrinik.cz/";
const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const EMAIL = "rekogrinikcz@gmail.com";
const IMG = "/new";

export const metadata: Metadata = {
  title: {
    absolute:
      "Nejlepší Rekonstrukce Praha | RekoGrinik s.r.o. | hledáte rekonstrukce bytů, domů, nebo koupelen na klíč blízko mě? Nebo jednotlivé rekonstrukční práce blízko mě? Zrekonstrujeme vaši nemovitost.",
  },
  description:
    "Rekonstrukce Praha na klíč i jednotlivé práce. Byty, domy a koupelny od bourání po malování. Bezplatná návštěva mistra a pevný rozpočet předem.",
  // This page replaces the homepage. Absolute: the root layout's metadataBase
  // is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: "https://rekogrinik.cz/" },
};

const districts = ["Praha 3", "Praha 1", "Praha 2", "Praha 10", "Praha 9", "Praha 8"];

const stats = [
  { value: "127", suffix: "+", label: "Dokončených projektů", note: "Byty, domy a další" },
  { value: "5", suffix: "+", label: "Dlouholeté zkušenosti", note: "Na pražském trhu" },
  { value: "3", suffix: "roky", label: "Záruky", note: "na veškeré práce" },
];

const reasons = [
  { title: "Profesionalita", text: "Kvalifikovaní řemeslníci s dlouholetými zkušenostmi" },
  { title: "Dochvilnost", text: "Vždy dodržujeme dohodnuté termíny" },
  { title: "Kvalita", text: "Používáme pouze osvědčené materiály" },
];

const stripPhotos = [
  { src: "sprchovy-kout-mozaika.webp", alt: "Sprchový kout u mozaikové stěny a světlá dlažba" },
  { src: "koupelna-mozaika.webp", alt: "Sprchový kout, pračka a umyvadlo u mozaikové stěny" },
  { src: "koupelna-ctvrtkruhovy-kout.webp", alt: "Čtvrtkruhový sprchový kout a umyvadlo" },
  { src: "wc-a-sprcha.webp", alt: "Závěsné WC a sprchový kout" },
  { src: "koupelna-kamen.webp", alt: "Koupelna se závěsným WC a sprchou v kamenném dekoru" },
];

const helpSteps = [
  "Ujasnit rozsah požadovaných úprav.",
  "Stanovit logické pořadí prací.",
  "Připravit prostor na rekonstrukci.",
  "Zkoordinovat navazující stavební činnosti.",
  "Vyřešit důležité detaily před jejich zakrytím.",
  "Dokončit povrchy a připravit prostor k dalšímu používání.",
];

const apartmentScope = [
  "Demontáž původních prvků a povrchů.",
  "Bourací a zednické práce.",
  "Nové příčky nebo sádrokartonové konstrukce.",
  "Úpravy koupelny a kuchyňské části.",
  "Přípravu stěn a stropů.",
  "Pokládku podlah.",
  "Malování a dokončení interiéru.",
];

const housePhases = [
  "Nezbytné technické práce.",
  "Praktická vylepšení pro pohodlnější bydlení.",
  "Vzhledové změny a finální povrchy.",
];

const bathroomChecklist = [
  "Rozmístění vany nebo sprchového koutu.",
  "Velikost a umístění umyvadla.",
  "Prostor pro toaletu, pračku a nábytek.",
  "Otevírání dveří a skříněk.",
  "Přístup k uzávěrům a servisním místům.",
  "Rozměry obkladů a jejich návaznost.",
  "Větrání a každodenní údržbu.",
];

const beforeAfter = [
  {
    before: { src: "koupelna-bourani.webp", alt: "Úzká koupelna po vybourání obkladů" },
    after: { src: "koupelna-beton.webp", alt: "Úzká koupelna s novým obkladem, sprchou a skříňkou pod umyvadlo" },
  },
  {
    before: { src: "koupelna-bojler-bourani.webp", alt: "Koupelna s bojlerem během bourání" },
    after: { src: "koupelna-umyvadlo-u-dveri.webp", alt: "Koupelna s novým obkladem a umyvadlem před montáží baterií" },
  },
  {
    before: { src: "instalacni-sachta-pred.webp", alt: "Otevřená instalační šachta během bourání" },
    after: { src: "wc-zavesne-mozaika.webp", alt: "Závěsné WC u mozaikové stěny po rekonstrukci" },
  },
];

const trades = [
  {
    title: "Sádrokartonářské práce Praha",
    paragraphs: [
      "Provádíme sádrokartonové příčky, podhledy a zakrytí vybraných instalací. Sádrokarton lze využít při změně dispozice, snížení stropu nebo vytvoření rovného povrchu pro další dokončení.",
      "Skladbu konstrukce vybíráme podle místa použití a požadované funkce. Pokud má stěna nést kuchyňské skříňky, televizi, umyvadlo nebo jiné těžší vybavení, je potřeba vhodné výztuhy připravit ještě před jejím uzavřením.",
    ],
  },
  {
    title: "Malířské práce Praha",
    paragraphs: [
      "Kvalitní výmalba začíná přípravou podkladu. Staré nesoudržné vrstvy, praskliny, nerovnosti a lokální opravy mohou být viditelné i pod novou barvou.",
      "Před malováním proto zkontrolujeme stav stěn a stropů. Podle potřeby provedeme opravy, sjednocení povrchu a další přípravné práce. Malujeme jednotlivé místnosti i celé interiéry po rekonstrukci.",
      "Součástí domluvy je rozsah přípravy, ochrana okolních ploch, výběr odstínu a požadovaný výsledný vzhled.",
    ],
  },
  {
    title: "Bourací práce Praha",
    paragraphs: [
      "Bourání není jen rychlé odstranění původních konstrukcí. Je potřeba zjistit, co se může odstranit, kudy vedou instalace a jak budou chráněny části prostoru, které mají zůstat zachované.",
      "Provádíme demontáž starých povrchů, obkladů, vybraných příček a další bourací práce podle předem domluveného rozsahu. Součástí přípravy je také způsob manipulace s materiálem, ochrana společných prostor a domluva na odvozu vzniklého odpadu.",
      "Pokud plánovaná úprava může zasáhnout nosné nebo společné konstrukce domu, musí se před zahájením ověřit technické podmínky a potřebné souhlasy. Bez tohoto ověření se do takové konstrukce nezasahuje.",
    ],
  },
  {
    title: "Podlahářské práce Praha",
    paragraphs: [
      "Nová podlaha potřebuje pevný, rovný a správně připravený podklad. Před pokládkou proto kontrolujeme jeho stav a návaznost na okolní místnosti.",
      "Důležitá je také výsledná výška podlahy. Ta ovlivňuje dveře, přechodové profily, kuchyňskou linku i spojení s koupelnou nebo chodbou. Tyto detaily je vhodné vyřešit ještě před objednáním krytiny.",
      "Podlahářské práce provádíme jako součást kompletní rekonstrukce i jako samostatnou zakázku.",
    ],
  },
  {
    title: "Zednické práce Praha",
    paragraphs: [
      "Provádíme vyzdívky, opravy omítek, zapravení drážek a otvorů, srovnání vybraných povrchů a další zednickou přípravu.",
      "Zednické práce často tvoří základ pro další řemesla. Přesnost přípravy ovlivňuje vzhled obkladů, množství materiálu potřebného pro vyrovnání i kvalitu výsledné malby. Proto vždy sledujeme, co bude na upravovaný povrch dále navazovat.",
    ],
  },
];

const togetherBenefits = [
  "Jednotlivé kroky probíhají v logickém pořadí.",
  "Podklady se připravují pro konkrétní finální povrch.",
  "Prostupy a výztuhy lze zkontrolovat před zakrytím.",
  "Výšky podlah se porovnají mezi místnostmi.",
  "Materiály a vybavení se vybírají s ohledem na skutečné rozměry.",
  "Případné změny se řeší před provedením navazující práce.",
];

const processSteps = [
  {
    title: "Pošlete nám poptávku",
    text: "Zavolejte nebo napište e-mail. Uveďte typ nemovitosti, městskou část, přibližný rozsah a práce, které potřebujete provést. Pomohou také fotografie současného stavu a půdorys, pokud ho máte.",
  },
  {
    title: "Probereme vaše zadání",
    text: "Ujasníme si, čeho chcete rekonstrukcí dosáhnout. Podle charakteru zakázky domluvíme prohlídku prostoru a ověříme důležité podmínky na místě.",
  },
  {
    title: "Stanovíme rozsah prací",
    text: "Rozdělíme realizaci na bourací, přípravné, stavební a dokončovací práce. Současně si vyjasníme, které materiály a vybavení mají být součástí realizace a co si zajišťujete samostatně.",
  },
  {
    title: "Připravíme postup",
    text: "Před zahájením potvrdíme důležitá rozhodnutí, přístup do objektu a pravidla domu. U bytu je vhodné předem informovat správce nebo SVJ a ověřit podmínky používání výtahu a provádění hlučných prací.",
  },
  {
    title: "Provedeme domluvené práce",
    text: "Práce provádíme v dohodnutém pořadí. Před zakrytím kontrolujeme důležité konstrukce a přípravu pro následující řemesla. Pokud se objeví skrytý problém, domluvíme s vámi další postup.",
  },
  {
    title: "Dokončíme a předáme",
    text: "Po dokončení společně projdeme provedené práce. Zkontrolujeme dohodnutý rozsah a případné body, které je ještě potřeba dokončit.",
  },
];

const locations = [
  { area: "Praha 3", places: "Žižkov, Jarov, část Vinohrad" },
  { area: "Praha 1", places: "Staré Město, Nové Město, Malá Strana" },
  { area: "Praha 2", places: "Vinohrady, Nové Město, Nusle" },
  { area: "Praha 10", places: "Vršovice, Strašnice, Malešice, Záběhlice" },
  { area: "Praha 9", places: "Vysočany, Prosek, Hrdlořezy" },
  { area: "Praha 8", places: "Karlín, Libeň, Kobylisy" },
];

const prepareList = [
  "Kde se nemovitost nachází.",
  "Zda jde o byt, dům, koupelnu nebo jednotlivou místnost.",
  "Co chcete odstranit, změnit nebo nově vytvořit.",
  "Přibližnou velikost prostoru.",
  "Patro a dostupnost výtahu.",
  "Zda už máte vybrané materiály nebo vybavení.",
  "Jaké období realizace preferujete.",
  "Zda se během prací bude v prostoru bydlet.",
];

const faqs = [
  {
    q: "Provádíte kompletní rekonstrukce bytů na klíč?",
    a: "Ano. Provádíme kompletní rekonstrukce bytů i částečné úpravy jednotlivých místností. Rozsah stanovíme podle stavu bytu a vašeho zadání.",
  },
  {
    q: "Rekonstruujete také rodinné domy?",
    a: "Ano. Zajišťujeme rekonstrukce interiérů domů a související stavební práce. Větší realizaci lze podle potřeby rozdělit do navazujících etap.",
  },
  {
    q: "Je možné objednat pouze rekonstrukci koupelny?",
    a: "Ano. Koupelnu lze realizovat jako samostatnou zakázku. Před zahájením potřebujeme znát její rozměry, současný stav a požadované vybavení.",
  },
  {
    q: "Provádíte také jednotlivé řemeslné práce?",
    a: "Ano. Můžete si objednat sádrokartonářské, malířské, bourací, podlahářské nebo zednické práce bez kompletní rekonstrukce.",
  },
  {
    q: "Kolik stojí rekonstrukce v Praze?",
    a: "Cena závisí na velikosti prostoru, rozsahu bourání, stavu podkladů, náročnosti detailů, přístupu a vybraných materiálech. Konkrétní nabídku lze připravit po upřesnění zakázky.",
  },
  {
    q: "Jak dlouho rekonstrukce trvá?",
    a: "Délku ovlivňuje rozsah, stav nemovitosti, množství navazujících prací, technologické přestávky a dostupnost materiálů. Reálný postup stanovíme po prohlídce a upřesnění zadání.",
  },
  {
    q: "Musím rekonstrukci oznámit SVJ?",
    a: "Vlastník jednotky má stavební úpravu uvnitř bytu předem oznámit osobě odpovědné za správu domu. U zásahů do společných nebo nosných částí mohou být potřeba další souhlasy a odborné posouzení.",
  },
  {
    q: "Co když se při bourání objeví skrytý problém?",
    a: "Staré konstrukce mohou skrývat stav, který předem není vidět. Pokud se taková okolnost objeví, vysvětlíme její dopad a před pokračováním s vámi domluvíme řešení.",
  },
  {
    q: "Ve kterých částech Prahy pracujete?",
    a: "Nejčastěji pracujeme v Praze 3, Praze 1, Praze 2, Praze 10, Praze 9 a Praze 8. Realizaci v jiné části Prahy posoudíme podle konkrétní zakázky.",
  },
];

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}#business`,
  name: "RekoGrinik s.r.o.",
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Na Vackově 2895/5",
    postalCode: "130 00",
    addressLocality: "Praha 3",
    addressCountry: "CZ",
  },
  areaServed: districts,
  serviceType: [
    "Rekonstrukce bytů",
    "Rekonstrukce domů",
    "Rekonstrukce koupelen",
    "Sádrokartonářské práce",
    "Malířské práce",
    "Bourací práce",
    "Podlahářské práce",
    "Zednické práce",
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

export default function NewHomePage() {
  return (
    <main className={styles.page} data-scroll-root>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <header className={styles.hero}>
        <img
          fetchPriority="high"
          src={`${IMG}/koupelna-mramor-vana.webp`}
          alt="Koupelna s mramorovým obkladem a vanou po rekonstrukci"
          className={styles.cover}
          style={{ objectPosition: "50% 55%" }}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={styles.h1}>Rekonstrukce Praha</h1>
            <h2 className={styles.heroSub}>Byty, domy a koupelny na klíč</h2>
            <p className={styles.heroText}>
              Plánujete rekonstrukci bytu, rodinného domu nebo koupelny v Praze?
              Postaráme se o kompletní realizaci na klíč i jednotlivé stavební
              práce. Zajistíme bourání, zednickou přípravu, sádrokarton, malování
              a pokládku podlah tak, aby na sebe všechny kroky správně navazovaly.
            </p>
            <p className={styles.heroQuestion}>
              Chcete zjistit, jaký postup je vhodný pro váš prostor?
            </p>
            <div className={styles.heroCtas}>
              <Link className={styles.btnGold} href="/kontakt" data-cta="hero_poptavka">
                Nezávazně poptat rekonstrukci
              </Link>
              <a className={styles.btnGold} href={`tel:${PHONE}`} data-cta="hero_phone">
                Zavolat na {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className={`${styles.intro} ${styles.split}`}>
        <p className={styles.introLead} data-reveal>
          Každá rekonstrukce začíná jiným prostorem a jinou představou. Někdo
          potřebuje kompletně proměnit starší byt, jiný chce modernizovat koupelnu
          nebo dokončit několik konkrétních prací. Nejdříve proto probereme vaše
          požadavky, současný stav nemovitosti a předpokládaný rozsah realizace.
        </p>
        <div className={styles.stack} style={{ gap: 18 }} data-reveal>
          <p>
            Nejčastěji pracujeme v lokalitách{" "}
            <strong className={styles.accent}>
              Praha 3, Praha 1, Praha 2, Praha 10, Praha 9 a Praha 8
            </strong>
            . Zakázku v jiné části Prahy s námi můžete konzultovat individuálně.
          </p>
          <div className={styles.tags} data-reveal-group>
            {districts.map((d) => (
              <span key={d} className={styles.tag}>
                {d.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.dark}>
        <div className={styles.container}>
          <div className={styles.sectionHead} style={{ marginBottom: 56 }} data-reveal>
            <h2 className={styles.h2}>Rekonstrukce v číslech</h2>
            <p className={styles.lead}>
              Každé číslo odráží naši oddanost integritě a profesionalitě
            </p>
          </div>
          <div className={styles.stats} data-reveal-group>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>
                  <span data-count={s.value}>{s.value}</span>
                  <span className={styles.statSuffix}>{s.suffix}</span>
                </span>
                <span className={styles.statLabel}>{s.label}</span>
                <span className={styles.statNote}>{s.note}</span>
              </div>
            ))}
          </div>
          <div className={styles.reasons} data-reveal-group>
            <h3 className={styles.reasonsTitle}>
              Proč si zákazníci vybírají RekoGrinik?
            </h3>
            {reasons.map((r) => (
              <div key={r.title} className={styles.reason}>
                <span className={styles.squareGold} />
                <h4>{r.title}</h4>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <div className={styles.strip} data-reveal-group>
        {stripPhotos.map((p) => (
          <img
            key={p.src}
            loading="lazy"
            decoding="async"
            src={`${IMG}/${p.src}`}
            alt={p.alt}
          />
        ))}
      </div>

      {/* Complete renovation */}
      <section className={styles.container}>
        <div className={styles.split}>
          <h2 className={styles.h2} data-reveal>
            Kompletní rekonstrukce bez zbytečných komplikací
          </h2>
          <div className={styles.stack} data-reveal>
            <p>
              Dobrá rekonstrukce není pouze součtem jednotlivých řemesel. Výsledek
              ovlivňuje také jejich pořadí, kvalita přípravy podkladů a
              rozhodnutí, která je potřeba udělat ještě před zahájením prací.
            </p>
            <p>
              Nejdříve přicházejí demontáže a bourací práce. Následují potřebné
              stavební úpravy, rozvody, příčky a příprava povrchů. Teprve potom
              mají přijít obklady, podlahy, malování a další dokončovací práce.
              Správná návaznost pomáhá zabránit tomu, aby se nový povrch musel
              znovu otevírat nebo opravovat.
            </p>
            <p>
              Zajistíme kompletní i částečnou realizaci podle toho, co váš byt, dům
              nebo koupelna skutečně potřebuje. Můžete se na nás obrátit s celým
              projektem i jednou konkrétní prací.
            </p>
          </div>
        </div>
        <h3 className={styles.subhead} data-reveal>Pomůžeme vám:</h3>
        <ol className={styles.cards} data-reveal-group>
          {helpSteps.map((text, i) => (
            <li key={text} className={styles.card}>
              <span className={styles.cardNum}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{text}</span>
            </li>
          ))}
        </ol>
        <p className={styles.note} data-reveal>
          Pokud se po odstranění starých vrstev objeví problém, který předem nebyl
          vidět, nejdříve s vámi probereme jeho význam a možné řešení. Dodatečné
          práce by neměly vznikat bez vysvětlení a předchozí domluvy.
        </p>
      </section>

      {/* Services */}
      <section id="sluzby" className={styles.dark}>
        <div className={`${styles.container} ${styles.services}`}>
          <h2 className={styles.h2} data-reveal>Rekonstrukce, které v Praze provádíme</h2>

          <article className={styles.service}>
            <img
              loading="lazy"
              decoding="async"
              data-reveal="left"
              src={`${IMG}/lodzie-podlaha.webp`}
              alt="Zasklená lodžie s novou podlahou po rekonstrukci bytu"
              className={styles.serviceImg}
            />
            <div className={styles.serviceBody} data-reveal>
              <h3 className={styles.h3Gold}>Rekonstrukce bytů na klíč Praha</h3>
              <p>
                Byt by měl odpovídat tomu, jak v něm skutečně žijete. Rekonstrukce
                může přinést praktičtější dispozici, více využitelného prostoru,
                rovné povrchy, novou koupelnu i sjednocený vzhled celého interiéru.
              </p>
              <p>
                Při <strong>rekonstrukci bytu na klíč v Praze</strong> řešíme
                jednotlivé práce jako jeden navazující celek. Rozsah může zahrnovat:
              </p>
              <Bullets items={apartmentScope} />
              <p>
                Před zahájením probereme stav jednotlivých místností a výsledek,
                kterého chcete dosáhnout. Jiný postup vyžaduje kompletní proměna
                staršího bytu a jiný částečná úprava prostoru, ve kterém už některé
                konstrukce nebo povrchy zůstávají.
              </p>
              <p>
                U bytových domů je důležité zohlednit také společné prostory,
                přístup, výtah a pravidla pro hlučné práce. Vlastník jednotky má
                stavební úpravu uvnitř bytu předem oznámit osobě odpovědné za správu
                domu.
              </p>
              <Link className={styles.serviceLink} href="/sluzby/rekonstrukce-bytu-praha">
                Jak probíhá rekonstrukce bytu →
              </Link>
            </div>
          </article>

          <article className={styles.service}>
            <div className={styles.serviceBody} data-reveal>
              <h3 className={styles.h3Gold}>Rekonstrukce domů na klíč Praha</h3>
              <p>
                Rekonstrukce domu obvykle propojuje více místností, podlaží a
                stavebních činností. Je proto důležité stanovit priority a rozdělit
                realizaci do etap, které na sebe budou správně navazovat.
              </p>
              <p>
                Provádíme <strong>rekonstrukce domů na klíč v Praze</strong> i
                vybrané části větších projektů. Může jít o úpravu dispozice, nové
                příčky a podhledy, obnovu stěn, výměnu podlah nebo celkové dokončení
                interiéru.
              </p>
              <p>Před zahájením doporučujeme rozdělit plánované změny do tří skupin:</p>
              <ol className={styles.phases}>
                {housePhases.map((text, i) => (
                  <li key={text}>
                    <span className={styles.phaseNum}>{i + 1}.</span>
                    {text}
                  </li>
                ))}
              </ol>
              <p>
                Toto rozdělení pomůže určit, co je nutné provést současně a co lze
                případně ponechat na další etapu. Nejdříve je vhodné vyřešit
                stavební a technické základy. Barvu stěny lze později změnit snáze
                než nesprávně umístěnou příčku, otvor nebo vývod.
              </p>
              <Link className={styles.serviceLink} href="/sluzby/rekonstrukce-domu-praha">
                Rekonstrukce domu krok za krokem →
              </Link>
            </div>
            <img
              loading="lazy"
              decoding="async"
              data-reveal="right"
              src={`${IMG}/roubenka-dlazba.webp`}
              alt="Velkoformátová dlažba při rekonstrukci roubeného domu"
              className={styles.serviceImg}
            />
          </article>

          <article className={styles.service}>
            <img
              loading="lazy"
              decoding="async"
              data-reveal="left"
              src={`${IMG}/koupelna-zrcadlo.webp`}
              alt="Umyvadlová skříňka a podsvícené zrcadlo v nové koupelně"
              className={styles.serviceImg}
            />
            <div className={styles.serviceBody} data-reveal>
              <h3 className={styles.h3Gold}>Rekonstrukce koupelen na klíč Praha</h3>
              <p>
                Koupelna musí dobře vypadat, ale především každý den spolehlivě
                fungovat. Na malém prostoru se zde potkávají rozvody, hydroizolace,
                obklady, sanita, nábytek a často také pračka nebo úložné prostory.
              </p>
              <p>
                Při <strong>rekonstrukci koupelny na klíč v Praze</strong> zajistíme
                odstranění původních povrchů a vybavení, stavební přípravu i
                navazující dokončovací práce. Před realizací je potřeba promyslet:
              </p>
              <Bullets items={bathroomChecklist} />
              <p>
                Doporučujeme vybrat konkrétní zařizovací předměty nebo alespoň
                potvrdit jejich přesné rozměry ještě před přípravou konstrukcí a
                vývodů. Označení jako „standardní umyvadlo“ nebo „běžný sprchový
                kout“ neposkytuje dostatečně přesné zadání.
              </p>
              <p>
                U malé koupelny může několik centimetrů rozhodnout o pohodlném
                průchodu, otevírání dveří nebo umístění pračky. Proto před zahájením
                kontrolujeme nejen vzhled návrhu, ale také praktické používání celého
                prostoru.
              </p>
              <Link className={styles.serviceLink} href="/sluzby/rekonstrukce-koupelen-praha">
                Více o rekonstrukci koupelny →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Before / after */}
      <section id="realizace" className={styles.white}>
        <div className={styles.container}>
          <div className={styles.sectionHead} data-reveal>
            <h2 className={styles.h2}>Ukázky našich prací</h2>
            <p className={styles.lead}>
              Provádíme jak kompletní rekonstrukce bytů, tak i částečné
              rekonstrukce. Každý projekt realizujeme s maximálním důrazem na detail.
            </p>
          </div>
          <div className={styles.pairs} data-reveal-group>
            {beforeAfter.map(({ before, after }) => (
              <div key={before.src} className={styles.pair}>
                <div className={styles.shot}>
                  <img
                    loading="lazy"
                    decoding="async"
                    src={`${IMG}/${before.src}`}
                    alt={before.alt}
                    className={styles.serviceImg}
                  />
                  <span className={styles.badgeBefore}>Před</span>
                </div>
                <div className={styles.shot}>
                  <img
                    loading="lazy"
                    decoding="async"
                    src={`${IMG}/${after.src}`}
                    alt={after.alt}
                    className={styles.serviceImg}
                  />
                  <span className={styles.badgeAfter}>Po</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trades */}
      <section id="remesla" className={styles.container}>
        <div className={styles.sectionHead} style={{ marginBottom: 56 }} data-reveal>
          <h2 className={styles.h2}>Další stavební práce</h2>
          <p className={styles.lead}>
            Ne každý prostor potřebuje kompletní rekonstrukci. Pokud chcete
            dokončit jednu místnost nebo vyřešit konkrétní část interiéru, můžete si
            objednat také samostatné stavební práce.
          </p>
        </div>
        <div className={styles.trades} data-reveal-group>
          {trades.map((t) => (
            <article key={t.title} className={styles.trade}>
              <h3>{t.title}</h3>
              {t.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </article>
          ))}
          <div className={styles.tradePhoto}>
            <img
              loading="lazy"
              decoding="async"
              src={`${IMG}/koupelna-mozaika-wc-pracka.webp`}
              alt="Koupelna s mozaikou, závěsným WC a pračkou"
              className={styles.cover}
            />
          </div>
        </div>
      </section>

      {/* Why together */}
      <section className={styles.white}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.photoPair} data-reveal-group>
            <img
              loading="lazy"
              decoding="async"
              src={`${IMG}/roubenka-dlazba-sokl.webp`}
              alt="Dlažba se soklem u roubené stěny"
            />
            <img
              loading="lazy"
              decoding="async"
              src={`${IMG}/veranda-dlazba.webp`}
              alt="Nová dlažba na zasklené verandě"
            />
          </div>
          <div className={styles.stack} style={{ gap: 22 }} data-reveal-group>
            <h2 className={styles.h2}>Proč řešit práce společně</h2>
            <p>
              Při rekonstrukci se jednotlivá řemesla vzájemně ovlivňují. Umístění
              příčky ovlivní podlahu a dveře. Rozměry sanity ovlivní vývody a
              obklady. Příprava stěn ovlivní vzhled finální výmalby.
            </p>
            <p>Když se práce plánují společně, lze důležité detaily vyřešit včas:</p>
            <ul className={styles.checklist}>
              {togetherBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.callout}>
              Neslibujeme přesnou cenu nebo termín bez znalosti konkrétní zakázky.
              Nejdříve potřebujeme znát stav prostoru, rozsah, přístup, zvolené
              materiály a požadovaný výsledek. Díky tomu lze připravit reálnější
              další postup.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="postup" className={styles.container}>
        <h2 className={styles.h2} data-reveal>Jak probíhá spolupráce</h2>
        <ol className={styles.steps} data-reveal-group>
          {processSteps.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.stepNum}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Locations */}
      <section id="lokality" className={styles.white}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.stack} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Kde v Praze pracujeme</h2>
            <p>Nejčastěji realizujeme rekonstrukce v těchto částech Prahy:</p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Oblast</th>
                  <th>Časté lokality</th>
                </tr>
              </thead>
              <tbody>
                {locations.map((l) => (
                  <tr key={l.area}>
                    <td>
                      <Link
                        className={styles.areaLink}
                        href={`/lokace/rekonstrukce-praha-${l.area.replace("Praha ", "")}`}
                      >
                        {l.area}
                      </Link>
                    </td>
                    <td>{l.places}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={`${styles.stack} ${styles.locationsText}`} data-reveal="right">
            <p>
              V centru může být důležitá možnost zastavení a vykládky materiálu. U
              bytových domů na Žižkově, Vinohradech, ve Vršovicích nebo Karlíně
              často rozhoduje také patro, velikost výtahu a ochrana chodeb.
            </p>
            <p>
              Části Vinohrad, Žižkova a Vršovic se nacházejí v městské památkové
              zóně. Pokud se plánovaná změna může dotknout chráněných částí objektu
              nebo jeho vzhledu, je vhodné předem ověřit požadavky památkové péče.
            </p>
            <p className={styles.darkCallout}>
              Máte nemovitost v jiné části Prahy?{" "}
              <a href="#kontakt">Ozvěte se nám</a> a ověříme možnosti podle místa a
              rozsahu zakázky.
            </p>
          </div>
        </div>
      </section>

      {/* What to prepare */}
      <section className={styles.dark}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.prepareText} data-reveal>
            <h2 className={styles.h2}>Co si připravit</h2>
            <p>
              Pro první konzultaci nemusíte znát odborné názvy ani mít hotový
              projekt. Stačí nám sdělit:
            </p>
            <p>
              Přiložte několik fotografií a případně jednoduchý půdorys. Čím
              přesnější budou základní informace, tím rychleji dokážeme určit vhodný
              další krok.
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
      <section id="faq" className={`${styles.container} ${styles.faq}`}>
        <h2 className={styles.faqTitle} data-reveal>Časté otázky</h2>
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

      {/* Contact */}
      <section id="kontakt" className={styles.contact}>
        <img
          loading="lazy"
          decoding="async"
          src={`${IMG}/koupelna-dubova-skrinka.webp`}
          alt="Umyvadlo s dubovou skříňkou a sprcha"
          className={styles.cover}
          style={{ objectPosition: "50% 40%" }}
        />
        <div className={styles.contactOverlay} />
        <div className={styles.contactInner}>
          <div className={styles.contactText} data-reveal>
            <h2 className={styles.contactTitle}>Pojďme probrat vaši rekonstrukci</h2>
            <p>
              Chcete rekonstruovat byt, modernizovat dům, vytvořit novou koupelnu
              nebo objednat konkrétní stavební práci? Napište nám, co plánujete, a
              připojte fotografie současného stavu.
            </p>
            <p>Probereme vaše zadání a domluvíme vhodný další krok.</p>
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
            <div>
              <dt>Kontaktní adresa</dt>
              <dd>
                <a
                  href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x465c546cda720659:0x140985d460c24916?sa=X&ved=1t:8290&hl=cs&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactAddress}
                >
                  Na Vackově 2895/5, 130 00 Praha 3
                </a>
                <span className={styles.contactHint}>
                  Osobní schůzku na kontaktní adrese si prosím domluvte předem.
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <ScrollEffects />
    </main>
  );
}
