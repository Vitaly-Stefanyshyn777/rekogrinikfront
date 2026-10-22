/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../_shared/site.module.css";
import hub from "../page.module.css";
import loc from "../../lokace/page.module.css";
import s from "./page.module.css";
import koup from "../rekonstrukce-koupelen-praha/page.module.css";
import ScrollEffects from "../../_shared/ScrollEffects";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap";

const SITE_URL = "https://rekogrinik.cz/";
const HUB_URL = "https://rekogrinik.cz/sluzby";
const PAGE_URL = "https://rekogrinik.cz/sluzby/rekonstrukce-bytu-praha";
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
    absolute: "Rekonstrukce bytů Praha | Na klíč nebo částečné práce | RekoGrinik",
  },
  description:
    "Rekonstrukce bytů Praha na klíč nebo částečné práce. Bezplatné zaměření, podrobný rozpočet a realizace od bourání po podlahy a malování.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

const keyOnScope = [
  "Co se bude bourat a odstraňovat.",
  "Které konstrukce a vybavení zůstanou zachované.",
  "Jaké nové prvky se budou realizovat.",
  "Kdo vybírá a dodává materiály.",
  "Jaký standard dokončení očekáváte.",
  "Které položky jsou zahrnuté v rozpočtu.",
  "Jak se bude postupovat při zjištění skrytých vad.",
];

const demolitionItems = [
  "Demontáž vybavení a vybraných zařizovacích předmětů.",
  "Odstranění obkladů a dlažeb.",
  "Odstranění starých podlahových vrstev.",
  "Demontáž vybraných příček.",
  "Osekání nesoudržných omítek.",
  "Přípravu prostoru pro další řemesla.",
];

const bathroomChecks = [
  "Umístění vany nebo sprchového koutu.",
  "Rozměr umyvadla a koupelnového nábytku.",
  "Umístění toalety a pračky.",
  "Směr otevírání dveří.",
  "Výšku a formát obkladů.",
  "Napojení jednotlivých povrchů.",
  "Přístup k uzávěrům a servisním místům.",
];

// Whole flats, not just bathrooms.
const stripPhotos = [
  {
    src: "/realizace/byt-koupelna-zachod-po-6.webp",
    alt: "Pokoj s dřevěnou podlahou ve vzoru rybí kost po rekonstrukci bytu",
  },
  { src: "byt-kuchyn-laminat.webp", alt: "Obývací prostor s kuchyní a novou laminátovou podlahou" },
  { src: "byt-obyvaci-prostor-podlaha.webp", alt: "Obývací pokoj s novou podlahou po kompletní rekonstrukci" },
  {
    src: "/realizace/byt-koupelna-zachod-po-1.webp",
    alt: "Nová koupelna s vanou v rekonstruovaném bytě",
  },
];

const processSteps = [
  {
    title: "První kontakt",
    text: "Sdělíte nám adresu, velikost bytu, požadované změny a přibližný termín. Pokud můžete, pošlete fotografie a půdorys. Už z prvních podkladů lze určit, co bude potřeba ověřit na místě.",
  },
  {
    title: "Bezplatná návštěva mistra",
    text: "Přijedeme do bytu, projdeme jednotlivé místnosti a provedeme základní zaměření. Zajímá nás také přístup do domu, patro, výtah, možnosti vykládky a pravidla správce.",
  },
  {
    title: "Upřesnění rozsahu",
    text: "Společně rozdělíme požadavky na nezbytné práce, praktická zlepšení a vzhledové preference. Ujasníme si, které prvky zůstanou a které se mají odstranit.",
  },
  {
    title: "Podrobný rozpočet",
    text: "Na základě dohodnutého rozsahu připravíme přehled prací a cen. Rozpočet má umožnit porovnat, co přesně je zahrnuté, nikoli jen ukázat jedno konečné číslo bez vysvětlení.",
  },
  {
    title: "Příprava realizace",
    text: "Před zahájením potvrdíme materiály, dostupnost vybavení, postup prací a přístup do bytu. Pokud některé výrobky zajišťujete sami, domluvíme, kdy musí být připravené.",
  },
  {
    title: "Demontáže a hrubé práce",
    text: "Prostor ochráníme a odstraníme dohodnuté prvky. Následují hrubé stavební úpravy, nové konstrukce a příprava pro navazující profese.",
  },
  {
    title: "Povrchy a kompletace",
    text: "Po dokončení hrubých prací přicházejí obklady, podlahy, opravy stěn, malování a další dokončovací činnosti. Právě zde se projeví přesnost předchozí přípravy.",
  },
  {
    title: "Kontrola a předání",
    text: "Hotový rozsah společně projdeme. Cílem předání je ověřit dokončení sjednaných prací a vysvětlit případné informace důležité pro další používání prostoru.",
  },
];

const goals = [
  "Logické uspořádání místností.",
  "Dostatek místa pro průchod a otevírání dveří.",
  "Vhodné umístění vybavení a úložných prostorů.",
  "Odolnost povrchů odpovídající jejich použití.",
  "Snadnou údržbu.",
  "Přesné napojení jednotlivých materiálů.",
  "Zachování přístupu k místům, která mohou vyžadovat servis.",
];

// Each pair is the same room in a renovated flat (see /realizace).
const beforeAfter = [
  {
    before: {
      src: "/realizace/byt-koupelna-zachod-pred-1.webp",
      alt: "Záchod v bytě na Holečkově ulici po odstranění původních obkladů",
    },
    after: {
      src: "/realizace/byt-koupelna-zachod-po-3.webp",
      alt: "Stejný záchod po rekonstrukci se závěsným WC",
    },
  },
  {
    before: { src: "koupelna-bojler-bourani.webp", alt: "Koupelna v tomtéž bytě po odstranění starých obkladů" },
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

const priceFactors = [
  { factor: "Stav podkladů", why: "Po odstranění starých vrstev mohou být nutné opravy" },
  { factor: "Rozsah bourání", why: "Ovlivňuje práci, ochranu domu i odvoz materiálu" },
  { factor: "Změna dispozice", why: "Může vyžadovat nové příčky a návazné úpravy" },
  { factor: "Materiály", why: "Liší se cenou, způsobem montáže i dostupností" },
  { factor: "Formát a detaily", why: "Velké obklady nebo složité napojení zvyšují náročnost" },
  { factor: "Přístup do bytu", why: "Patro, výtah a možnost vykládky ovlivňují logistiku" },
  { factor: "Bydlení během prací", why: "Realizace může být rozdělena do více etap" },
];

const prepareList = [
  "Adresa a městská část.",
  "Velikost a dispozice bytu.",
  "Fotografie současného stavu.",
  "Půdorys, pokud jej máte.",
  "Seznam požadovaných změn.",
  "Informace o patře a výtahu.",
  "Pravidla domu pro hlučné práce.",
  "Preferovaný termín realizace.",
  "Informace, zda bude byt během prací obývaný.",
  "Představa o vybavení a materiálech.",
];

const reasons = [
  "Provádíme kompletní i částečné rekonstrukce.",
  "Zvládneme celý interiér i jednu konkrétní práci.",
  "Přijedeme na bezplatnou vstupní prohlídku.",
  "Provedeme zaměření a posoudíme viditelný stav.",
  "Připravíme podrobný rozpočet před zahájením.",
  "Vysvětlíme návaznost jednotlivých prací.",
  "Neprovedeme dodatečné práce bez předchozí domluvy.",
  "Působíme v několika částech Prahy.",
];

const faqs = [
  {
    q: "Co přesně znamená rekonstrukce bytu na klíč?",
    a: "Jde o realizaci dohodnutého rozsahu jako jednoho koordinovaného projektu. Konkrétní obsah vždy určuje rozpočet a smluvené zadání.",
  },
  {
    q: "Provádíte také částečné rekonstrukce?",
    a: "Ano. Můžete objednat úpravu jedné místnosti nebo samostatné bourací, zednické, sádrokartonářské, podlahářské či malířské práce.",
  },
  {
    q: "Je návštěva mistra zdarma?",
    a: "Ano. První návštěva sloužící k prohlídce, základnímu zaměření a upřesnění poptávky je bezplatná.",
  },
  {
    q: "Kolik stojí rekonstrukce bytu?",
    a: "Cena závisí na stavu, rozsahu bourání, změnách dispozice, materiálech, detailech a přístupu do bytu. Přesnější rozpočet připravíme po prohlídce a upřesnění zadání.",
  },
  {
    q: "Jak dlouho rekonstrukce trvá?",
    a: "Záleží na rozsahu, stavu podkladů, počtu profesí, technologických přestávkách a dostupnosti materiálů. Harmonogram proto stanovujeme individuálně.",
  },
  {
    q: "Lze během rekonstrukce v bytě bydlet?",
    a: "U menších úprav to někdy možné je. U kompletní rekonstrukce bývá praktičtější byt dočasně uvolnit. Pokud v něm potřebujete zůstat, posoudíme možnost rozdělení prací do etap.",
  },
  {
    q: "Musím rekonstrukci oznámit SVJ?",
    a: "Ano, vlastník má stavební úpravu uvnitř bytu předem oznámit osobě odpovědné za správu domu. U zásahů do společných nebo nosných konstrukcí mohou být potřeba další podklady.",
  },
  {
    q: "Co když se po bourání objeví skrytý problém?",
    a: "Situaci zdokumentujeme, vysvětlíme dopad a navrhneme řešení. Dodatečné práce se nejdříve projednají; neměly by se automaticky provádět bez souhlasu zákazníka.",
  },
  {
    q: "Ve kterých částech Prahy pracujete?",
    a: "Nejčastěji přijímáme zakázky na Praze 1, 2, 3, 8, 9 a 10. Jinou lokalitu posoudíme podle místa a rozsahu projektu.",
  },
];

// Districts for the bottom list; the other two are linked in the
// lokality text.
const otherAreas = ["1", "3", "8", "10"];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Rekonstrukce bytů Praha",
  serviceType: "Kompletní a částečné rekonstrukce bytů",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}#business`,
    name: "RekoGrinik s.r.o.",
    telephone: PHONE,
    url: SITE_URL,
  },
  areaServed: ["Praha 1", "Praha 2", "Praha 3", "Praha 8", "Praha 9", "Praha 10"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Práce při rekonstrukci bytu",
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
    { "@type": "ListItem", position: 3, name: "Rekonstrukce bytů Praha", item: PAGE_URL },
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

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className={styles.checklist}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function RekonstrukceBytuPage() {
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
            src={`${IMG}/hero-byt-parkety.webp`}
            alt="Pokoj s dřevěnou podlahou ve vzoru rybí kost po rekonstrukci bytu v Praze"
            style={{ objectPosition: "50% 62%" }}
          />
        </div>
        <div className={`${styles.heroInner} ${hub.heroInnerCompact}`}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <Link href="/sluzby">Služby</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Rekonstrukce bytů</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>Rekonstrukce bytů Praha</h1>
            <h2 className={styles.heroSub}>Kompletní i částečné rekonstrukce</h2>
            <p className={styles.heroText}>
              Byt už neodpovídá vašim potřebám, koupelna dosluhuje nebo chcete
              starší interiér připravit k novému bydlení? Postaráme se o
              rekonstrukci bytu v Praze od úvodní prohlídky až po dokončení
              sjednaných prací.
            </p>
            <div className={loc.heroCta}>
              <Link
                className={`${styles.btnGold} ${loc.heroCtaBtn}`}
                href="/kontakt"
                data-cta="byty_hero_poptavka"
              >
                Poptat rekonstrukci bytu
              </Link>
            </div>
            <p className={loc.heroContact}>
              Zavolejte na <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a> nebo nám{" "}
              <a href={`mailto:${EMAIL}`}>pošlete fotografie bytu</a>. První návštěva
              mistra a zaměření jsou bezplatné.
            </p>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section id="predstaveni" className={`${styles.intro} ${styles.split}`}>
        <p className={styles.introLead} data-reveal>
          Provádíme kompletní rekonstrukce na klíč i částečné úpravy. Nemusíte tedy
          měnit celý byt, pokud potřebujete pouze novou koupelnu, sádrokartonovou
          příčku, podlahu, opravu stěn nebo vymalování. Rozsah vždy přizpůsobíme
          současnému stavu bytu a výsledku, kterého chcete dosáhnout.
        </p>
        <p className={styles.lead} data-reveal>
          Na začátku přijede mistr přímo na místo. Byt si prohlédneme, provedeme
          potřebné zaměření a společně projdeme vaše priority. Na základě
          upřesněného zadání připravíme{" "}
          <strong className={styles.accent}>podrobný rozpočet</strong>, abyste před
          zahájením věděli, co realizace zahrnuje.
        </p>
      </section>

      {/* What turnkey means */}
      <section id="na-klic" className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Co pro nás znamená rekonstrukce na klíč</h2>
              <p>
                Rekonstrukce bytu na klíč znamená, že jednotlivé stavební práce
                nemusíte objednávat a koordinovat odděleně. Domluvíme rozsah,
                naplánujeme návaznosti a zajistíme realizaci sjednaných částí jako
                jeden celek.
              </p>
            </div>
            <div className={styles.stack} style={{ gap: 14 }} data-reveal>
              <p>
                Neznamená to však neurčitý balíček, ve kterém je automaticky
                zahrnuto úplně všechno. Před zahájením musí být jasně stanoveno:
              </p>
              <Checklist items={keyOnScope} />
            </div>
          </div>
          <div className={`${styles.split} ${s.splitTop}`}>
            <p className={styles.lead} data-reveal>
              Výhodou realizace na klíč je především koordinace. Novou podlahu nelze
              správně dokončit bez znalosti výšky dveří a přechodů. Přípravu
              koupelny ovlivňuje zvolená sanita a sádrokartonová konstrukce musí být
              připravena podle toho, co na ní bude později zavěšeno.
            </p>
            <p className={s.darkBox} data-reveal>
              Dobrá rekonstrukce proto není jen součtem řemesel. Jde o správné
              pořadí prací a kontrolu detailů, které na sebe navazují.
            </p>
          </div>
        </div>
      </section>

      {/* Complete or partial */}
      <section id="kompletni-nebo-castecna" className={styles.container}>
        <div className={styles.split}>
          <h2 className={styles.h2} data-reveal>
            Kompletní, nebo částečná rekonstrukce
          </h2>
          <p className={styles.lead} data-reveal>
            Ne každý byt potřebuje kompletní přestavbu. Někdy je technický stav
            dobrý a stačí obnovit pouze koupelnu, podlahy nebo povrchy. Jindy se
            úprava jedné místnosti dotkne rozvodů, příček a dalších částí natolik,
            že dává větší smysl řešit byt jako celek.
          </p>
        </div>
        <table className={s.typeTable} data-reveal>
          <thead>
            <tr>
              <th>Typ realizace</th>
              <th>Kdy je vhodný</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kompletní rekonstrukce</td>
              <td>Mění se více místností, dispozice, povrchy a několik navazujících profesí</td>
            </tr>
            <tr>
              <td>Částečná rekonstrukce</td>
              <td>Upravuje se jedna místnost nebo vybraná část bytu</td>
            </tr>
            <tr>
              <td>Samostatná práce</td>
              <td>
                Potřebujete například{" "}
                sádrokarton,{" "}
                bourání,{" "}
                podlahu,{" "}
                malování nebo{" "}
                zednickou opravu
              </td>
            </tr>
            <tr>
              <td>Rekonstrukce před nastěhováním</td>
              <td>Byt je prázdný a lze práce provést bez omezení běžného provozu</td>
            </tr>
            <tr>
              <td>Rekonstrukce obývaného bytu</td>
              <td>Práce je nutné rozdělit do etap a chránit používané části</td>
            </tr>
          </tbody>
        </table>
        <p className={styles.note} data-reveal>
          Pokud si nejste jistí vhodným rozsahem, projdeme s vámi současný stav i
          budoucí využití bytu. Cílem není doporučit co nejvíce prací, ale najít
          řešení, které dává smysl technicky, prakticky i finančně.
        </p>
      </section>

      {/* Scope */}
      <section id="rozsah" className={`${styles.dark} ${hub.anchor}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead} style={{ marginBottom: 56 }}>
            <h2 className={styles.h2} data-reveal>
              Co může rekonstrukce bytu zahrnovat
            </h2>
            <p className={styles.lead} data-reveal>
              Rozsah rekonstrukce se liší podle dispozice, stáří domu a vašich
              požadavků. RekoGrinik provádí kompletní i částečné rekonstrukce bytů a
              související řemeslné práce.
            </p>
          </div>
          <div className={s.scopeGrid} data-reveal-group>
            <article className={s.scopeCard}>
              <span className={s.scopeNum}>01</span>
              <h3 className={s.scopeTitle}>Bourací a přípravné práce</h3>
              <p>
                Na začátku se odstraní prvky, které už v novém interiéru nemají
                zůstat. Může jít o staré podlahové krytiny, obklady, kuchyňské
                sestavy, sanitární vybavení nebo vybrané nenosné konstrukce.
              </p>
              <p>
                Před bouráním ověříme, co lze bezpečně odstranit a které části je
                potřeba zachovat. Současně stanovíme způsob ochrany vstupních dveří,
                chodby, výtahu a dalších společných prostor.
              </p>
              <p className={s.scopeListTitle}>Bourací práce mohou zahrnovat:</p>
              <Bullets items={demolitionItems} />
              <p className={s.scopeNote}>
                U zásahu do nosných nebo společných konstrukcí se nepostupuje na
                základě pouhého odhadu. Nejdříve musí být ověřeno, zda je potřeba
                projekt, odborné posouzení, souhlas nebo příslušné povolení.
              </p>
            </article>

            <article className={s.scopeCard}>
              <span className={s.scopeNum}>02</span>
              <h3 className={s.scopeTitle}>Zednické a sádrokartonářské práce</h3>
              <p>
                Po odstranění původních prvků následuje vytvoření nového uspořádání a
                příprava povrchů. Zednické práce využíváme například při opravě
                omítek, zapravení otvorů, přípravě koupelny nebo vyzdění nových částí
                interiéru.
              </p>
              <p>
                Sádrokarton je vhodný pro nové příčky, podhledy, zakrytí některých
                instalací nebo vyrovnání vybraných ploch. Konkrétní skladbu volíme
                podle místa použití a budoucího zatížení.
              </p>
              <p>
                Pokud mají na nové příčce viset kuchyňské skříňky, televize, umyvadlo
                nebo těžší nábytek, musí se potřebné výztuhy připravit před uzavřením
                konstrukce. Pozdější dodatečné úpravy bývají složitější a mohou
                poškodit hotový povrch.
              </p>
            </article>

            <article className={s.scopeCard}>
              <span className={s.scopeNum}>03</span>
              <h3 className={s.scopeTitle}>Koupelna a bytové jádro</h3>
              <p>
                Rekonstrukce koupelny je jednou z nejnáročnějších částí úpravy bytu,
                protože se na malé ploše potkává mnoho detailů. Je třeba sladit
                rozmístění sanity, přípravu rozvodů, hydroizolaci, obklady, dlažbu,
                větrání, osvětlení a nábytek.
              </p>
              <p>
                Před zahájením potřebujeme znát alespoň základní rozměry vybraného
                vybavení. U malé koupelny mohou i centimetry rozhodovat o pohodlném
                průchodu, otevření dveří nebo umístění pračky.
              </p>
              <p className={s.scopeListTitle}>Při přípravě kontrolujeme zejména:</p>
              <Bullets items={bathroomChecks} />
              <a
                className={`${hub.btnOutline} ${s.pushDown}`}
                href={service("rekonstrukce-koupelen-praha")}
              >
                Zjistit více o rekonstrukcích koupelen v Praze →
              </a>
            </article>

            <article className={s.scopeCard}>
              <span className={s.scopeNum}>04</span>
              <h3 className={s.scopeTitle}>Podlahy, stěny a dokončení</h3>
              <p>
                Finální vzhled bytu ovlivňuje kvalita přípravy. Nová malba nezakryje
                hluboké nerovnosti a kvalitní podlaha nevynahradí nevhodný nebo
                nepřipravený podklad.
              </p>
              <p>
                Před pokládkou podlahy proto kontrolujeme rovnost, pevnost a
                návaznost na další místnosti. Celková výška skladby může ovlivnit
                dveře, sokly, prahy i přechod do koupelny.
              </p>
              <p>
                U stěn stanovíme, zda stačí lokální oprava, nebo je potřeba
                rozsáhlejší vyrovnání, broušení a penetrace. Teprve připravený povrch
                je vhodný pro finální malování.
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

      {/* Process */}
      <section id="postup" className={`${styles.container} ${hub.anchor}`}>
        <h2 className={styles.h2} data-reveal>
          Jak probíhá rekonstrukce bytu
        </h2>
        <ol className={`${styles.steps} ${hub.stepsTight}`} data-reveal-group>
          {processSteps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Goal */}
      <section id="cil" className={styles.white}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <img
            loading="lazy"
            decoding="async"
            data-reveal="left"
            src={`${IMG}/koupelna-pruhy-pracka-wc.webp`}
            alt="Praktická koupelna s pračkou a WC připravená pro každodenní používání"
            className={styles.serviceImg}
          />
          <div className={styles.stack} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Jaký je cíl rekonstrukce</h2>
            <p>
              Smyslem rekonstrukce není pouze vytvořit byt, který dobře vypadá na
              fotografii. Výsledek musí především dobře fungovat při každodenním
              používání.
            </p>
            <p>Při přípravě proto sledujeme:</p>
            <Checklist items={goals} />
            <p className={styles.callout}>
              Jinou prioritu má byt připravovaný pro rodinu, jinou menší byt k
              pronájmu a jinou interiér, ve kterém chce majitel zachovat původní
              prvky. Proto nezačínáme výběrem barvy stěn, ale otázkou, jak má byt po
              rekonstrukci fungovat.
            </p>
          </div>
        </div>
      </section>

      {/* Before / after */}
      <section id="pred-a-po" className={`${styles.container} ${hub.anchor}`}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2} data-reveal>
            Rekonstrukce před a po
          </h2>
          <p className={styles.lead} data-reveal>
            Fotografie před a po rekonstrukci nejlépe ukazují skutečný rozsah práce.
            Nejde však jen o viditelnou změnu barev, podlah nebo obkladů. Velká část
            důležité práce zůstane po dokončení skrytá pod povrchy.
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
        <Link className={`${loc.btnOutlineGreen} ${s.inlineBtn}`} href="/realizace">
          Prohlédnout skutečné realizace →
        </Link>
      </section>

      {/* Price and timing */}
      <section id="cena" className={styles.dark}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2} data-reveal>
              Co ovlivňuje cenu a termín
            </h2>
            <div className={s.darkLeadStack} data-reveal>
              <p>
                Cena rekonstrukce se nedá spolehlivě určit pouze podle velikosti
                bytu. Dva stejně velké byty mohou vyžadovat velmi odlišný rozsah
                přípravy.
              </p>
              <p>Rozpočet ovlivňuje zejména:</p>
            </div>
          </div>
          <table className={`${loc.serviceTable} ${s.factorTable}`} data-reveal>
            <thead>
              <tr>
                <th>Faktor</th>
                <th>Proč je důležitý</th>
              </tr>
            </thead>
            <tbody>
              {priceFactors.map((f) => (
                <tr key={f.factor}>
                  <td>{f.factor}</td>
                  <td>{f.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={s.creamNote} data-reveal>
            Termín ovlivňuje také technologické schnutí, návaznost profesí a
            dostupnost vybraného vybavení. Přesnější harmonogram proto dává smysl až
            po prohlídce a potvrzení rozsahu.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section id="lokality" className={`${styles.white} ${hub.anchor}`}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.stack} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Rekonstrukce bytů v Praze</h2>
            <p>
              Nejčastěji pracujeme na Praze 1, Praze 2, Praze 3, Praze 8, Praze 9 a
              Praze 10. Každá oblast přináší jiné praktické podmínky.
            </p>
          </div>
          <div className={styles.stack} data-reveal="right">
            <p>
              V centru řešíme především možnosti zásobování, odvoz materiálu a
              ochranu společných prostor. Na Žižkově, Vinohradech nebo ve
              Vršovicích se často pracuje ve starších činžovních domech. Části těchto
              čtvrtí leží v městské památkové zóně, takže u některých zásahů je
              vhodné předem ověřit podmínky památkové ochrany.
            </p>
            <p>
              Ve Vysočanech, Karlíně nebo u novějších žižkovských projektů se
              častěji setkáváme s provozními pravidly domu, rezervací výtahu a
              požadavky na ochranu hotových společných prostor. Na Proseku, v
              Bohnicích nebo Strašnicích se potkává panelová zástavba s dalšími typy
              bytových domů.
            </p>
            <p className={styles.darkCallout}>
              Vlastník jednotky musí stavební úpravu uvnitř bytu předem oznámit osobě
              odpovědné za správu domu. Správa může následně požadovat ověření, že
              práce neohrožují, nepoškozují ani nemění společné části.
            </p>
            <p>
              Máte byt ve starším činžovním domě na Vinohradech nebo v Nuslích? Přečtěte si,
              jak probíhá{" "}
              <Link className={koup.inlineLink} href="/lokace/rekonstrukce-praha-2">
                rekonstrukce bytu na Praze 2
              </Link>. Majitelům panelových bytů na Proseku a ve Vysočanech pomůže přehled{" "}
              <Link className={koup.inlineLink} href="/lokace/rekonstrukce-praha-9">
                rekonstrukcí na Praze 9
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* What to prepare */}
      <section id="priprava" className={styles.dark}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.prepareText} data-reveal>
            <h2 className={styles.h2}>Co připravit před poptávkou</h2>
            <p>
              Pro první kontakt nepotřebujete hotový projekt ani odborný popis.
              Pomůže nám však následující:
            </p>
            <p className={hub.tip}>
              <strong>Praktický tip:</strong> Požadavky si označte jako „nutné“,
              „chtěli bychom“ a „pokud dovolí rozpočet“. Při přípravě nabídky pak
              bude snadnější udržet správné priority.
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
            Proč svěřit byt RekoGrinik
          </h2>
          <ul className={s.reasonGrid} data-reveal-group>
            {reasons.map((r) => (
              <li key={r} className={s.reasonCard}>
                {r}
              </li>
            ))}
          </ul>
          <p className={styles.note} data-reveal>
            Naším cílem je, abyste před začátkem rozuměli rozsahu, postupu i ceně
            sjednaných položek.
          </p>
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
      <nav aria-label="Další oblasti" className={s.related} data-reveal-group>
        <span className={s.relatedLabel}>Pracujeme také v</span>
        {otherAreas.map((d) => (
          <Link
            key={d}
            href={`/lokace/rekonstrukce-praha-${d}`}
            className={s.relatedLink}
          >
            Byty na Praze {d}
          </Link>
        ))}
      </nav>

      {/* Contact */}
      <section id="kontakt" className={`${styles.contact} ${hub.anchor}`}>
        <img
          loading="lazy"
          decoding="async"
          src="/realizace/byt-koupelna-zachod-po-7.webp"
          alt="Pokoj s dřevěnou podlahou po rekonstrukci bytu"
          className={styles.cover}
          style={{ objectPosition: "50% 40%" }}
        />
        <div className={styles.contactOverlay} />
        <div className={styles.contactInner}>
          <div className={styles.contactText} data-reveal>
            <h2 className={styles.contactTitle}>Domluvme si prohlídku bytu</h2>
            <p>
              Plánujete kompletní rekonstrukci, novou koupelnu nebo jen vybranou část
              interiéru? Pošlete nám stručný popis, adresu a několik fotografií.
            </p>
            <p>
              Domluvíme bezplatnou návštěvu mistra, byt si prohlédneme a na základě
              upřesněného rozsahu připravíme podrobný rozpočet.
            </p>
            <Link
              className={styles.contactBtn}
              href="/kontakt"
              data-cta="byty_contact_poptavka"
            >
              Poptat rekonstrukci bytu
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
