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
const PAGE_URL = "https://rekogrinik.cz/sluzby/bouraci-prace-praha";
const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const EMAIL = "rekogrinikcz@gmail.com";
const IMG = "/new";

// Service pages live under /sluzby.
const service = (slug: string) => `/sluzby/${slug}`;

export const metadata: Metadata = {
  title: {
    absolute: "Bourací práce Praha | Demontáž příček a povrchů | RekoGrinik",
  },
  description:
    "Bourací práce Praha před rekonstrukcí. Demontáž příček, obkladů, podlah i vybavení, ochrana prostoru a odvoz suti. Domluvte si bezplatnou prohlídku.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

const planChecks = [
  "Přesný rozsah demontáže.",
  "Konstrukce a vybavení, které mají zůstat.",
  "Možné vedení instalací.",
  "Charakter odstraňovaných příček.",
  "Způsob ochrany okolních prostor.",
  "Trasu pro odnos materiálu.",
  "Možnost použití výtahu.",
  "Místo pro dočasné shromáždění odpadu.",
  "Pravidla domu pro hlučné práce.",
  "Návaznost dalšího řemesla.",
];

const equipment = [
  "Kuchyňské skříňky a pracovní desky.",
  "Vestavěné skříně.",
  "Vanu, umyvadlo a další sanitu.",
  "Sprchovou zástěnu.",
  "Dveřní křídla a vybrané zárubně.",
  "Radiátory po odborném odpojení.",
  "Staré spotřebiče.",
  "Police, garnýže a další pevné prvky.",
];

const partitionChecks = [
  "Materiál a tloušťku příčky.",
  "Napojení na strop a okolní stěny.",
  "Možné rozvody uvnitř konstrukce.",
  "Vztah k podlahovým vrstvám.",
  "Návaznost dveří a zárubní.",
  "Vliv na podhledy a vestavěné prvky.",
  "Požadavky projektové dokumentace.",
];

const underTiles = [
  "Nesoudržná nebo popraskaná omítka.",
  "Několik vrstev starých lepidel.",
  "Nerovný podklad.",
  "Dodatečně zazděné drážky.",
  "Poškození v okolí instalačních prostupů.",
  "Stopy po vlhkosti.",
  "Nevhodně provedená starší oprava.",
];

const floorLayers = [
  "Plovoucí podlahy.",
  "Vinylové a PVC krytiny.",
  "Koberce.",
  "Staré lišty a přechodové profily.",
  "Dlažbu.",
  "Vybrané dřevěné vrstvy.",
  "Nesoudržná lepidla a zbytky podkladu.",
];

const plasterReasons = [
  "Uvolněná od podkladu.",
  "Výrazně popraskaná.",
  "Nesoudržná nebo drolivá.",
  "Poškozená předchozím zatékáním.",
  "Nevhodná pro plánovanou úpravu.",
  "Zasažená problémem, jehož příčina už byla odstraněna.",
];

const checkAreas = [
  ["Nosnost konstrukcí", "Určuje, zda je možné bourat a jaké podklady jsou potřeba"],
  ["Elektřina, voda a plyn", "Instalace musí být identifikované a bezpečně odpojené"],
  ["Zachované povrchy", "Potřebují ochranu před nárazy, prachem a sutí"],
  ["Přístup do objektu", "Ovlivňuje odnos materiálu, pracovní postup a cenu"],
  ["Výtah a schodiště", "Mohou vyžadovat zakrytí nebo omezení používání"],
  ["Druh odpadu", "Určuje třídění, balení a způsob předání"],
  ["Návazné práce", "Bourání musí skončit ve stavu, který další řemeslo očekává"],
];

const protectedItems = [
  "Vstupní dveře a zárubně.",
  "Zachované podlahy.",
  "Okna a parapety.",
  "Radiátory.",
  "Vestavěné vybavení.",
  "Chodby a schodiště.",
  "Výtah.",
  "Společné vstupní prostory.",
  "Trasu pro odnos materiálu.",
];

const processSteps = [
  {
    title: "Prohlídka prostoru",
    text: "Mistr projde plánovaný rozsah, zaměří důležitá místa a pořídí fotodokumentaci. Bezplatná návštěva mistra a posouzení objektu jsou součástí standardního procesu RekoGrinik.",
  },
  {
    title: "Označení demontáže",
    text: "Přímo v prostoru označíme, co se odstraňuje a co zůstává. Ujasníme si také předměty určené k opětovnému použití.",
  },
  {
    title: "Technické ověření",
    text: "Prověříme dostupné podklady, vedení instalací a charakter konstrukcí. Spornou stěnu neoznačíme za nenosnou jen podle poklepu nebo její tloušťky.",
  },
  {
    title: "Rozpočet a logistika",
    text: "Stanovíme rozsah demontáže, ochranná opatření, předpokládané množství odpadu, odnosovou trasu a návaznost dalších prací. RekoGrinik uvádí podrobný rozpočet s pevnými cenami, specifikací materiálů a harmonogramem před zahájením realizace.",
  },
  {
    title: "Odpojení instalací",
    text: "Vodu, elektřinu, plyn nebo jiná napojení odpojí odpovídající odborník. Teprve potom se demontují připojené spotřebiče a zařizovací předměty.",
  },
  {
    title: "Zakrytí a oddělení zóny",
    text: "Ochráníme dohodnuté povrchy a připravíme trasu pro pohyb pracovníků a odvoz odpadu.",
  },
  {
    title: "Selektivní demontáž",
    text: "Postupujeme po částech. Nejdříve odstraňujeme prvky, které brání přístupu, následně povrchy a konstrukce podle stanoveného pořadí. Jednotlivé druhy odpadu průběžně oddělujeme, pokud to podmínky zakázky umožňují.",
  },
  {
    title: "Kontrola odkrytého stavu",
    text: "Po demontáži zkontrolujeme viditelné podklady, instalace a návaznosti. Neočekávaný stav zdokumentujeme dříve, než jej zakryjí další práce.",
  },
  {
    title: "Příprava pro řemesla",
    text: "Odstraníme volné zbytky, uvolníme pracovní plochy a předáme informace potřebné pro zedníky, instalatéry, elektrikáře, podlaháře nebo sádrokartonáře.",
  },
  {
    title: "Úklid a předání",
    text: "Prostor uklidíme v dohodnutém rozsahu a společně projdeme výsledek. Kontrola kvality, odstraňování nedostatků a generální úklid jsou součástí firemního procesu RekoGrinik.",
  },
];

const findings = [
  "Nezakreslené vedení instalací.",
  "Poškozená omítka pod obkladem.",
  "Rozdílná skladba podlah v sousedních místnostech.",
  "Dutiny nebo nesoudržné vrstvy.",
  "Starší otvor dodatečně zakrytý deskou.",
  "Stopy po zatékání.",
  "Koroze kovových prvků.",
  "Praskliny skryté pod povrchem.",
  "Materiál vyžadující zvláštní způsob nakládání.",
];

const wasteTypes = [
  "Minerální suť.",
  "Kovy.",
  "Dřevo.",
  "Sklo.",
  "Obalové materiály.",
  "Staré vybavení.",
  "Elektrospotřebiče.",
  "Odpad vyžadující zvláštní zacházení.",
];

const duringPhotos = [
  { src: "koupelna-bourani.webp", alt: "Úzká koupelna po vybourání obkladů" },
  { src: "koupelna-bojler-bourani.webp", alt: "Koupelna s bojlerem během bouracích prací" },
  { src: "instalacni-sachta-pred.webp", alt: "Otevřená instalační šachta během bouracích prací" },
];

const priceFactors = [
  "Druh a rozsah demontáže.",
  "Materiál příček a povrchů.",
  "Nutnost ručního šetrného postupu.",
  "Počet podlaží.",
  "Dostupnost výtahu.",
  "Délka odnosové trasy.",
  "Ochrana společných prostor.",
  "Objem a hmotnost odpadu.",
  "Třídění a způsob odvozu.",
  "Potřeba kontejneru.",
  "Zachování vybraných prvků.",
  "Potřebné odborné posouzení.",
  "Návazné přípravné práce.",
];

const prepareList = [
  "Adresu a městskou část.",
  "Fotografie celého prostoru.",
  "Půdorys nebo dostupnou dokumentaci.",
  "Označení prvků určených k odstranění.",
  "Seznam věcí, které mají zůstat.",
  "Informaci o patře a výtahu.",
  "Možnost parkování a vykládky.",
  "Pravidla SVJ nebo správce domu.",
  "Informaci o odstávce vody a elektřiny.",
  "Představu o navazující rekonstrukci.",
  "Preferovaný termín.",
  "Informaci o možných nebezpečných materiálech.",
];

const faqs = [
  {
    q: "Jaké bourací práce provádíte?",
    a: "Demontujeme vybrané vybavení, příčky, obklady, dlažby, podlahové krytiny a nesoudržné povrchy. Konkrétní rozsah určíme po prohlídce.",
  },
  {
    q: "Bouráte také nosné stěny?",
    a: "Do konstrukce s možnou nosnou funkcí nezasahujeme bez potřebných podkladů, odborného posouzení a splnění příslušných požadavků.",
  },
  {
    q: "Jak poznáte, zda je příčka nosná?",
    a: "Samotný vzhled nebo poklep nestačí. Vycházíme z dokumentace, skutečného konstrukčního řešení a v případě pochybností z odborného posouzení.",
  },
  {
    q: "Odpojíte před demontáží spotřebiče?",
    a: "Jednoduchou demontáž provedeme podle sjednaného rozsahu. Elektrická, vodovodní nebo plynová připojení musí bezpečně odpojit osoba s odpovídající odborností.",
  },
  {
    q: "Zajistíte odvoz suti?",
    a: "Ano, odvoz a způsob předání odpadu lze zahrnout do nabídky. Rozsah musí být potvrzen před zahájením.",
  },
  {
    q: "Je možné bourat v obývaném bytě?",
    a: "U menších zásahů někdy ano, pokud lze pracovní zónu bezpečně oddělit. U rozsáhlého bourání doporučíme byt nebo dotčenou část dočasně uvolnit.",
  },
  {
    q: "Co když se objeví azbest?",
    a: "Práce v dotčeném místě přerušíme a doporučíme odpovídající identifikaci a odborný postup. Azbest se nesmí míchat s běžnou sutí.",
  },
  {
    q: "Musím bourací práce oznámit SVJ?",
    a: "Vlastník musí stavební úpravu uvnitř bytu předem oznámit osobě odpovědné za správu domu. U zásahu do společných nebo nosných částí mohou být potřeba další podklady a souhlasy.",
  },
  {
    q: "Připravíte prostor také pro další firmu?",
    a: "Ano. Předem si však potřebujeme potvrdit, v jakém stavu má být prostor předán a co očekává následující řemeslo.",
  },
  {
    q: "Ve kterých částech Prahy pracujete?",
    a: "Nejčastěji realizujeme bourací práce v Praze 1, 2, 3, 8, 9 a 10. Další lokality posuzujeme podle místa a rozsahu zakázky.",
  },
];

// Districts for the bottom list; the other two are linked in the
// lokality text.
const otherAreas = ["1", "2", "3", "8"];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Bourací práce Praha",
  description:
    "Demontáž vybavení, odstranění příček, obkladů, dlažeb, podlahových vrstev a příprava prostoru před rekonstrukcí.",
  serviceType: "Bourací a přípravné práce",
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
    name: "Bourací a demontážní služby",
    itemListElement: [
      "Demontáž vybavení",
      "Odstranění nenosných příček",
      "Odstranění obkladů a dlažby",
      "Odstranění podlahových vrstev",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Služby", item: HUB_URL },
    { "@type": "ListItem", position: 3, name: "Bourací práce Praha", item: PAGE_URL },
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

function NumList({ items }: { items: string[] }) {
  return (
    <ol className={domy.numList}>
      {items.map((item, i) => (
        <li key={item}>
          <span>{String(i + 1).padStart(2, "0")}</span>
          {item}
        </li>
      ))}
    </ol>
  );
}

export default function BouraciPracePage() {
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
      <header className={`${styles.hero} ${hub.heroCompact}`}>
        <img
          fetchPriority="high"
          src={`${IMG}/koupelna-bourani.webp`}
          alt="Úzká koupelna po vybourání obkladů"
          className={styles.cover}
          style={{ objectPosition: "50% 50%" }}
        />
        <div className={styles.heroOverlay} />
        <div className={`${styles.heroInner} ${hub.heroInnerCompact}`}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <Link href="/sluzby">Služby</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Bourací práce</span>
          </nav>
          <div className={`${styles.heroContent} ${hub.heroContentWide}`}>
            <h1 className={`${styles.h1} ${hub.h1Compact}`}>Bourací práce Praha</h1>
            <h2 className={styles.heroSub}>Bezpečná demontáž před rekonstrukcí</h2>
            <p className={styles.heroText}>
              Kvalita nové rekonstrukce často závisí na tom, jak pečlivě byl odstraněn
              starý interiér. Nepřesná demontáž může poškodit zachovanou podlahu,
              rozvody, ostění nebo konstrukci, která měla zůstat. Správně provedené
              bourání naopak odhalí skutečný stav prostoru a vytvoří spolehlivý základ
              pro další práce.
            </p>
            <div className={loc.heroCta}>
              <a
                className={`${styles.btnGold} ${loc.heroCtaBtn}`}
                href={`tel:${PHONE}`}
                data-cta="bouraci_hero_phone"
              >
                Domluvit bezplatnou prohlídku
              </a>
            </div>
            <p className={loc.heroContact}>
              Domluvte si bezplatnou prohlídku na čísle{" "}
              <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.
            </p>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className={`${styles.intro} ${styles.split}`} style={{ alignItems: "start" }}>
        <p className={styles.introLead} data-reveal>
          Provádíme bourací práce v Praze před kompletní i částečnou rekonstrukcí bytů
          a domů. Demontujeme vybrané vybavení, odstraňujeme staré povrchy, obklady,
          podlahové vrstvy a příčky v rozsahu, který je možné bezpečně a oprávněně
          provést.
        </p>
        <div className={styles.stack} data-reveal>
          <p>
            Bourání u nás neznamená „vyklidit všechno až na cihlu“. Před zahájením
            jasně označíme, co se odstraní, co musí zůstat a které části vyžadují další
            posouzení. Prostor chráníme, práce provádíme ve stanoveném pořadí a po
            odkrytí konstrukcí zkontrolujeme jejich viditelný stav.
          </p>
          <p>
            Výsledkem není pouze prázdná místnost. Cílem je{" "}
            <strong className={styles.accent}>přehledný, bezpečně připravený prostor</strong>,
            na který mohou navázat zednické práce, nové příčky, instalace, podlahy nebo
            kompletní rekonstrukce.
          </p>
        </div>
      </section>

      {/* Plan first */}
      <section className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Bourání začíná plánem, ne kladivem</h2>
              <p className={s.strongLead}>
                Do příčky, podlahy ani obkladu nezasahujeme jen podle toho, jak
                konstrukce vypadá zvenku. Uvnitř mohou vést kabely, voda, odpady nebo
                jiné instalace. Zdánlivě jednoduchá příčka může současně navazovat na
                strop, podhled, vestavěný nábytek či povrchy, které se mají zachovat.
              </p>
              <p>
                Pokud se má zasahovat do konstrukce, u které není spolehlivě potvrzeno,
                zda je nosná, práce se nezahajuje pouze na základě odhadu. Nejdříve musí
                být dostupná dokumentace nebo odpovídající odborné posouzení.
              </p>
              <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
                Stavební úprava bez zásahu do nosných konstrukcí, změny vzhledu či
                způsobu užívání a bez vlivu na požární bezpečnost může podle stavebního
                zákona spadat mezi drobné stavební úpravy. Jakmile však některá z těchto
                podmínek splněna není, je potřeba ověřit příslušný povolovací režim.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>Před zahájením proto potřebujeme určit:</p>
              <NumList items={planChecks} />
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section id="prace" className={`${styles.dark} ${hub.anchor}`}>
        <div className={styles.container}>
          <h2 className={`${styles.h2} ${s.headGap}`} data-reveal>
            Jaké bourací práce provádíme
          </h2>
          <div className={byty.scopeGrid} data-reveal-group>
            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>01</span>
              <h3 className={byty.scopeTitle}>Demontáž vybavení a starých spotřebičů</h3>
              <p>
                Před rekonstrukcí můžeme odstranit starý nábytek, kuchyňskou sestavu,
                sanitární vybavení a další dohodnuté prvky. Nejdříve určíme, které části
                jsou napojené na elektřinu, vodu, odpad nebo plyn a kdo zajistí jejich
                odborné odpojení.
              </p>
              <p className={byty.scopeListTitle}>Demontáž může zahrnovat například:</p>
              <Bullets items={equipment} />
              <p className={byty.scopeNote}>
                Pokud chcete některé vybavení znovu použít, musí to být označeno před
                zahájením. Demontáž určená k zachování vyžaduje pomalejší postup,
                šetrnou manipulaci a předem domluvené místo pro uložení.
              </p>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>02</span>
              <h3 className={byty.scopeTitle}>Odstranění příček</h3>
              <p>
                Odstranění příčky může otevřít kuchyň do obývacího pokoje, zvětšit
                koupelnu nebo připravit prostor pro novou dispozici. Ne každá stěna je
                však nenosná a ne každou nenosnou příčku lze odstranit bez řešení dalších
                návazností.
              </p>
              <p className={byty.scopeListTitle}>Před bouráním ověřujeme:</p>
              <Bullets items={partitionChecks} />
              <p className={byty.scopeNote}>
                Po odstranění příčky často nezůstane automaticky hotový strop a podlaha.
                V místě původní stěny může být rozdílná výška podlah, chybějící krytina
                nebo nerovnoměrně dokončený strop. S těmito návaznostmi je potřeba
                počítat už při přípravě rozpočtu.
              </p>
              <p>
                Pokud se původní dispozice nahrazuje lehkou konstrukcí, mohou navázat
                naše{" "}
                sádrokartonářské práce.
              </p>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>03</span>
              <h3 className={byty.scopeTitle}>Odstranění obkladů a dlažby</h3>
              <p>
                Staré obklady a dlažbu odstraňujeme zejména při rekonstrukcích koupelen,
                kuchyní, toalet a vstupních prostor. Rozsah opravy podkladu lze přesněji
                určit teprve po odkrytí.
              </p>
              <p className={byty.scopeListTitle}>Pod obkladem se může objevit:</p>
              <Bullets items={underTiles} />
              <p className={byty.scopeNote}>
                Obklady proto neodstraňujeme s příslibem, že podklad bude automaticky
                připravený pro okamžité nalepení nové vrstvy. Po demontáži jeho stav
                zdokumentujeme a určíme potřebnou stavební přípravu.
              </p>
            </article>

            <article className={byty.scopeCard}>
              <span className={byty.scopeNum}>04</span>
              <h3 className={byty.scopeTitle}>Odstranění podlahových vrstev</h3>
              <p>
                Podlahu mohou tvořit krytina, lepidlo, podložka, dřevěné desky, staré
                parkety, zásyp nebo další vrstvy. Před odstraněním proto potřebujeme
                vědět, která část skladby se má skutečně demontovat a jaký podklad
                potřebuje následující dodavatel.
              </p>
              <p className={byty.scopeListTitle}>Odstraňujeme například:</p>
              <Bullets items={floorLayers} />
              <p className={byty.scopeNote}>
                Po odkrytí kontrolujeme viditelné nerovnosti, praskliny a návaznost výšek
                mezi místnostmi. Teprve poté lze rozhodnout, zda bude potřeba lokální
                oprava, vyrovnání nebo jiná příprava pro nové{" "}
                podlahy.
              </p>
            </article>

            <article className={`${byty.scopeCard} ${s.cardWide}`}>
              <span className={byty.scopeNum}>05</span>
              <h3 className={byty.scopeTitle}>Osekání omítek a příprava stěn</h3>
              <div className={s.cardWideBody}>
                <div className={s.cardCol}>
                  <p>
                    Starou omítku neodstraňujeme automaticky z celé místnosti. Pokud je
                    pevná a vhodná pro další úpravu, může být hospodárnější zachovat ji a
                    opravit jen poškozená místa.
                  </p>
                  <p className={byty.scopeNote}>
                    Po odstranění nesoudržných částí převezmou povrch{" "}
                    <Link className={s.goldLink} href={service("zednicke-prace-praha")}>
                      zednické práce Praha
                    </Link>
                    , které zajistí potřebnou opravu a přípravu pro další dokončení.
                  </p>
                </div>
                <div className={s.cardCol}>
                  <p className={byty.scopeListTitle}>
                    Osekání dává smysl zejména tam, kde je omítka:
                  </p>
                  <Bullets items={plasterReasons} />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* What we check */}
      <section className={styles.container}>
        <div className={styles.sectionHead} style={{ marginBottom: 56 }}>
          <h2 className={styles.h2} data-reveal>
            Co před bouráním ověřujeme
          </h2>
          <p className={styles.lead} data-reveal>
            Kontrolní prohlídka neslouží jen k odhadu objemu suti. Pomáhá určit
            riziková místa a připravit pořadí prací.
          </p>
        </div>
        <div className={koup.tableScroll} data-reveal>
          <table className={`${byty.typeTable} ${koup.tableFlush}`}>
            <thead>
              <tr>
                <th>Kontrolovaná oblast</th>
                <th>Proč je důležitá</th>
              </tr>
            </thead>
            <tbody>
              {checkAreas.map(([area, why]) => (
                <tr key={area}>
                  <td>{area}</td>
                  <td>{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={`${byty.darkBox} ${s.afterTable}`} style={{ fontSize: 18 }} data-reveal>
          V bytovém domě má vlastník stavební úpravu uvnitř jednotky předem oznámit
          osobě odpovědné za správu domu. Správce může požadovat ověření, zda úpravy
          neohrožují, nepoškozují nebo nemění společné části.
        </p>
      </section>

      {/* Protection */}
      <section className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={styles.stack} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Co chráníme a zachováváme</h2>
              <p className={s.strongLead}>
                Bourací práce jsou hlučné a prašné. Úplně bezprašné bourání neexistuje,
                ale vhodnou přípravou lze omezit šíření nečistot a chránit části, které
                mají zůstat.
              </p>
              <p>
                Dveřní otvory mezi pracovní a zachovanou částí lze oddělit dočasnou
                prachovou bariérou. Materiál nehážeme nekontrolovaně z vyšších podlaží a
                suť nepřesouváme přes nezakryté hotové povrchy.
              </p>
              <p className={styles.callout}>
                Pokud se v bytě během prací bydlí, předem stanovíme, která část zůstane
                použitelná. U rozsáhlejšího bourání však bývá bezpečnější a praktičtější
                pracovní zónu dočasně uvolnit.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>Podle zakázky chráníme:</p>
              <ul className={loc.checkLight}>
                {protectedItems.map((item) => (
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
          Jak bourací práce probíhají
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

      {/* What demolition can reveal */}
      <section className={styles.dark}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.prepareText} data-reveal>
            <h2 className={styles.h2}>Co může odhalit demontáž</h2>
            <p>
              Bourání je okamžik, kdy se původní předpoklady setkají se skutečným
              stavem. Některé závady nejsou před odkrytím povrchů viditelné.
            </p>
            <p>
              Nález automaticky neopravujeme bez domluvy. Nejprve jej zdokumentujeme,
              vysvětlíme jeho vliv a navrhneme další postup.
            </p>
            <p className={hub.tip}>
              <strong>Azbest:</strong> Pokud vznikne podezření na materiál s obsahem
              azbestu, práce v dotčeném místě se nemají provádět jako běžné bourání.
              Ministerstvo životního prostředí upozorňuje, že azbestový odpad vyžaduje
              oddělené zacházení, omezení uvolňování vláken, neprodyšné zabalení a
              předání oprávněnému zařízení.
            </p>
          </div>
          <div className={domy.listCol} data-reveal="right">
            <p className={`${loc.checkTitle} ${koup.goldTitle}`}>
              Může se objevit například:
            </p>
            <ul className={koup.darkList}>
              {findings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Waste */}
      <section className={styles.container}>
        <div className={styles.split} style={{ alignItems: "start" }}>
          <div className={styles.stack} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Kam se stavebním odpadem</h2>
            <p className={s.strongLead}>
              Suť nepatří do běžné domovní popelnice. Před zahájením plánujeme, kde se
              bude shromažďovat, jak se dostane z objektu a komu bude předána.
            </p>
            <p>
              Praha provozuje síť sběrných dvorů, například v Malešické ulici na Praze 3,
              Perucké na Praze 2 nebo v ulici U Plynárny na Praze 10. Aktuální podmínky,
              limity a druh přijímaného odpadu je nutné ověřit předem; městské bezplatné
              limity jsou určené pro oprávněné fyzické osoby, ne automaticky pro odpad
              podnikatele provádějícího zakázku.
            </p>
            <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
              U většího množství je možné domluvit kontejner nebo odvoz do zařízení
              oprávněného převzít daný druh odpadu. Umístění kontejneru na ulici je
              potřeba řešit s ohledem na konkrétní veřejný prostor a místní podmínky.
            </p>
          </div>
          <div className={domy.listCol} data-reveal>
            <p className={loc.checkTitle}>Podle zakázky oddělujeme například:</p>
            <NumList items={wasteTypes} />
          </div>
        </div>
      </section>

      {/* Flat, house, bathroom */}
      <section className={styles.white}>
        <div className={styles.container}>
          <h2 className={`${styles.h2} ${s.headGap}`} data-reveal>
            Bourací práce v bytě, domě a koupelně
          </h2>
          <div className={s.trio} data-reveal-group>
            <article className={s.trioCol}>
              <h3>Bourání v bytě</h3>
              <p>
                V bytovém domě věnujeme zvláštní pozornost sousedům, společným prostorům,
                výtahu a provozním pravidlům domu. Předem domlouváme hlučné práce a
                trasu, po které bude materiál odnášen.
              </p>
              <p>
                Při kompletní{" "}
                <Link className={koup.inlineLink} href={service("rekonstrukce-bytu-praha")}>
                  rekonstrukci bytu v Praze
                </Link>{" "}
                sladíme demontáž s budoucí dispozicí, instalacemi, podlahami a
                dokončením stěn.
              </p>
            </article>
            <article className={s.trioCol}>
              <h3>Bourání v rodinném domě</h3>
              <p>
                V domě bývá více prostoru pro skladování materiálu, ale rozsah může
                zahrnovat několik podlaží, technické zázemí nebo konstrukce různého
                stáří. Důležité je určit, která část domu zůstane během prací přístupná.
              </p>
              <p>
                Při širším projektu navážeme bourání na plán{" "}
                rekonstrukce domu.
              </p>
            </article>
            <article className={s.trioCol}>
              <h3>Bourání koupelny</h3>
              <p>
                U koupelny se na malé ploše potkávají voda, odpady, elektřina, obklady a
                sanita. Před demontáží musí být jasné, co se odpojuje, co zůstává a zda
                se mění poloha vybavení.
              </p>
              <p>
                Starou vanu, obklady nebo bytové jádro odstraňujeme s ohledem na sousední
                místnosti a společné instalace. Po odkrytí lze teprve přesněji určit
                potřebnou opravu stěn a podlah.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Before / after */}
      <section id="pred-a-po" className={`${styles.container} ${hub.anchor}`}>
        <div className={styles.sectionHead} style={{ marginBottom: 56 }}>
          <h2 className={styles.h2} data-reveal>
            Před a po bourání
          </h2>
          <p className={styles.lead} data-reveal>
            „Po“ u bouracích prací neznamená hotový designový interiér. Znamená
            přehledně připravený prostor bez konstrukcí a povrchů, které měly být
            odstraněny.
          </p>
        </div>
        {/* TODO: doplnit fotografie skutečných zakázek (původní stav, označení, zakrytí, průběh, odkrytý stav, vytříděný materiál, prostor pro další profesi) */}
        <div className={s.shots} data-reveal-group>
          {duringPhotos.map((p) => (
            <div key={p.src} className={styles.shot}>
              <img loading="lazy" decoding="async" src={`${IMG}/${p.src}`} alt={p.alt} />
              <span className={styles.badgeBefore}>Během bourání</span>
            </div>
          ))}
        </div>
        <Link className={`${loc.btnOutlineGreen} ${s.galleryBtn}`} href="/realizace">
          Prohlédnout realizace RekoGrinik →
        </Link>
      </section>

      {/* Price */}
      <section className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split} style={{ alignItems: "start" }}>
            <div className={`${styles.stack} ${domy.stickyCol}`} style={{ gap: 22 }} data-reveal>
              <h2 className={styles.h2}>Co ovlivňuje cenu</h2>
              <p>
                Cena bouracích prací se neurčuje jen podle podlahové plochy. Důležitý je
                materiál, tloušťka konstrukce, přístup i množství odpadu.
              </p>
              <p className={`${byty.darkBox} ${domy.boxGap}`} style={{ fontSize: 18 }}>
                Při porovnávání nabídek ověřte, zda zahrnují zakrytí, odnos, naložení,
                odvoz, poplatky za převzetí odpadu a závěrečný úklid. Nízká cena za
                samotné bourání nemusí představovat konečnou cenu připraveného prostoru.
              </p>
            </div>
            <div className={domy.listCol} data-reveal>
              <p className={loc.checkTitle}>Rozpočet ovlivňuje:</p>
              <NumList items={priceFactors} />
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="lokality" className={`${styles.container} ${styles.splitWide} ${hub.anchor}`}>
        <div className={`${styles.stack} ${domy.stickyCol}`} style={{ gap: 22 }} data-reveal>
          <h2 className={styles.h2}>Bourací práce v Praze</h2>
          <p>
            Nejčastěji pracujeme v Praze 1, Praze 2, Praze 3, Praze 8, Praze 9 a Praze
            10.
          </p>
        </div>
        <div className={styles.stack} data-reveal="right">
          <p>
            V centru Prahy plánujeme především vykládku, umístění vozidla a odnos
            materiálu přes společné prostory. Na Žižkově, Vinohradech nebo ve
            Vršovicích často pracujeme ve starších domech s užšími schodišti, vysokými
            stropy a několika vrstvami předchozích úprav.
          </p>
          <p>
            Ve Vysočanech, Karlíně a novějších rezidenčních projektech mohou platit
            pravidla pro rezervaci výtahu a ochranu hotových chodeb. Na Proseku, v
            Bohnicích nebo Strašnicích se může jednat o panelové byty, kde konstrukční
            systém nelze posuzovat pouze podle vzhledu stěny.
          </p>
          <p>
            U panelových bytů na Proseku a ve Vysočanech je nejdřív potřeba ověřit
            konstrukční systém, více najdete u{" "}
            <Link className={koup.inlineLink} href="/lokace/rekonstrukce-praha-9">
              rekonstrukcí v Praze 9
            </Link>. Ve Vršovicích a Strašnicích plánujeme bourání i podle pravidel domu,
            podívejte se na{" "}
            <Link className={koup.inlineLink} href="/lokace/rekonstrukce-praha-10">
              práce v Praze 10
            </Link>.
          </p>
        </div>
      </section>

      {/* Checklist before the visit */}
      <section className={styles.dark}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.prepareText} data-reveal>
            <h2 className={styles.h2}>Kontrolní seznam před prohlídkou</h2>
            <p>Před návštěvou si připravte:</p>
            <p className={hub.tip}>
              <strong>Praktický tip:</strong> Před zahájením označte prvky barevnou
              páskou — jinou barvou to, co se odstraňuje, a jinou to, co zůstává.
              Označení následně projděte s mistrem přímo na místě.
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
            Bourání v Praze {d}
          </Link>
        ))}
      </nav>

      {/* Contact */}
      <section id="kontakt" className={`${styles.contact} ${hub.anchor}`}>
        <img
          loading="lazy"
          decoding="async"
          src={`${IMG}/koupelna-bojler-bourani.webp`}
          alt="Koupelna s bojlerem během bouracích prací"
          className={styles.cover}
          style={{ objectPosition: "50% 40%" }}
        />
        <div className={styles.contactOverlay} />
        <div className={styles.contactInner}>
          <div className={styles.contactText} data-reveal>
            <h2 className={styles.contactTitle}>Připravme prostor pro rekonstrukci</h2>
            <p>
              Plánujete rekonstrukci a potřebujete odstranit staré vybavení, příčku,
              obklady nebo podlahu? Pošlete nám fotografie a stručně označte, co má z
              prostoru zmizet a co naopak potřebujete zachovat.
            </p>
            <p>
              Mistr přijede na bezplatnou prohlídku, zkontroluje přístup, rozsah
              demontáže a návaznost dalších prací. Poté připravíme podrobný rozpočet
              včetně dohodnuté ochrany, manipulace s odpadem a úklidu.
            </p>
            <Link
              className={styles.contactBtn}
              href="/kontakt"
              data-cta="bouraci_contact_poptavka"
            >
              Domluvit prohlídku prostoru
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
