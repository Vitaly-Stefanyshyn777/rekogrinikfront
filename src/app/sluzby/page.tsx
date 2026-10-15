/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "../_shared/site.module.css";
import s from "./page.module.css";
import ScrollEffects from "../_shared/ScrollEffects";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap";

const SITE_URL = "https://rekogrinik.cz/";
const PAGE_URL = "https://rekogrinik.cz/sluzby";
const PHONE = "+420776352237";
const PHONE_DISPLAY = "+420 776 352 237";
const EMAIL = "rekogrinikcz@gmail.com";
const IMG = "/new";

export const metadata: Metadata = {
  title: {
    absolute: "Stavební a rekonstrukční služby Praha | Kompletní přehled služeb | RekoGrinik",
  },
  description:
    "Stavební a rekonstrukční služby Praha: rekonstrukce bytů, domů a koupelen, sádrokarton, malování, bourání, podlahy i zednické práce na jednom místě.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

const districts = ["Praha 3", "Praha 1", "Praha 2", "Praha 10", "Praha 9", "Praha 8"];

const needToService = [
  { need: "Kompletně proměnit byt", label: "Rekonstrukce bytu na klíč", href: "#rekonstrukce-bytu" },
  { need: "Modernizovat rodinný dům", label: "Rekonstrukce domu na klíč", href: "#rekonstrukce-domu" },
  { need: "Vybudovat novou koupelnu", label: "Rekonstrukce koupelny na klíč", href: "#rekonstrukce-koupelny" },
  { need: "Změnit dispozici nebo snížit strop", label: "Sádrokartonářské a zednické práce", href: "#sadrokartonarske-prace" },
  { need: "Obnovit povrchy interiéru", label: "Malířské a podlahářské práce", href: "#malirske-prace" },
  { need: "Odstranit staré konstrukce", label: "Bourací práce", href: "#bouraci-prace" },
];

const situationToService = [
  { need: "Starší byt před nastěhováním", label: "Kompletní rekonstrukce bytu", href: "#rekonstrukce-bytu" },
  { need: "Dům s více plánovanými změnami", label: "Rekonstrukce domu nebo realizace po etapách", href: "#rekonstrukce-domu" },
  { need: "Nefunkční nebo zastaralá koupelna", label: "Rekonstrukce koupelny na klíč", href: "#rekonstrukce-koupelny" },
  { need: "Potřeba nové příčky či podhledu", label: "Sádrokartonářské práce", href: "#sadrokartonarske-prace" },
  { need: "Opotřebené stěny a podlahy", label: "Malířské a podlahářské práce", href: "#malirske-prace" },
  { need: "Příprava prostoru před další montáží", label: "Bourací a zednické práce", href: "#bouraci-prace" },
];

const apartmentScope = [
  "Vyklizení a demontáž vybraných prvků.",
  "Bourací a zednické práce.",
  "Sádrokartonové příčky nebo podhledy.",
  "Stavební příprava koupelny a kuchyně.",
  "Vyrovnání a příprava povrchů.",
  "Pokládka podlah.",
  "Malování a dokončovací práce.",
];

const houseFocus = [
  "Rozsah a pořadí stavebních prací.",
  "Vztah mezi jednotlivými místnostmi a podlažími.",
  "Demontáže a ochranu zachovaných částí.",
  "Příčky, podhledy, omítky a podlahy.",
  "Návaznost hrubých a dokončovacích prací.",
  "Možnost rozdělení realizace do etap.",
];

const bathroomConfirm = [
  "Rozměr vany nebo sprchového koutu.",
  "Umístění umyvadla, toalety a pračky.",
  "Směr otevírání dveří a nábytku.",
  "Výběr nebo formát obkladů.",
  "Požadované úložné prostory.",
  "Přístup k uzávěrům a servisním bodům.",
];

const trades = [
  {
    id: "sadrokartonarske-prace",
    title: "Sádrokartonářské práce Praha",
    href: "/sluzby/sadrokartonarske-prace-praha",
    paragraphs: [
      "Sádrokarton umožňuje vytvořit nové příčky, podhledy nebo zakrytí vybraných instalací. Využívá se při změně dispozice, snížení stropu i přípravě interiéru pro další dokončení.",
      "Konstrukci je nutné navrhnout podle místa použití a toho, co na ní bude později umístěno. Pokud má stěna nést kuchyňské skříňky, televizi, umyvadlo nebo jiné těžší vybavení, výztuhy se připravují ještě před uzavřením konstrukce.",
      "V koupelnách a dalších namáhaných prostorech je potřeba zvolit vhodnou skladbu a sladit sádrokarton s navazující hydroizolací či obkladem.",
    ],
  },
  {
    id: "malirske-prace",
    title: "Malířské práce Praha",
    href: "/sluzby/malirske-prace-praha",
    paragraphs: [
      "Kvalitní malování nezačíná barvou, ale kontrolou podkladu. Praskliny, staré nesoudržné vrstvy, stopy po demontáži nebo rozdílná savost mohou zůstat viditelné i pod novým nátěrem.",
      "Před malováním proto stanovíme potřebný rozsah přípravy. Může jít o lokální opravy, sjednocení povrchu, broušení, penetraci a ochranu okolních ploch. Malujeme jednotlivé místnosti i celé interiéry po rekonstrukci.",
      "Při výběru barvy doporučujeme posuzovat odstín přímo v dané místnosti. Denní světlo na Vinohradech, menší pokoj v činžovním domě na Žižkově nebo moderní interiér ve Vysočanech mohou stejný odstín zobrazit odlišně.",
    ],
  },
  {
    id: "bouraci-prace",
    title: "Bourací práce Praha",
    href: "/sluzby/bouraci-prace-praha",
    paragraphs: [
      "Bourací práce musí být připravené stejně pečlivě jako následná výstavba. Nejdříve je potřeba určit, co lze odstranit, kde mohou vést instalace a které části prostoru musí zůstat chráněné.",
      "Provádíme demontáže původních povrchů, obkladů, vybraných příček a dalších interiérových prvků podle dohodnutého rozsahu. Součástí přípravy je ochrana zachovaných ploch, výtahu a společných chodeb i domluva na způsobu odvozu odpadu.",
      "U zásahů, které mohou ovlivnit nosné nebo společné konstrukce, je před zahájením nutné ověřit technické a případné povolovací podmínky. Do konstrukce se nezasahuje pouze na základě odhadu.",
    ],
  },
  {
    id: "podlaharske-prace",
    title: "Podlahářské práce Praha",
    href: "/sluzby/podlaharske-prace-praha",
    paragraphs: [
      "Výslednou kvalitu podlahy ovlivňuje především podklad. Před pokládkou kontrolujeme jeho rovnost, pevnost, připravenost a návaznost na okolní místnosti.",
      "Důležitá je také celková výška nové skladby. Ovlivňuje dveře, přechody, sokly a napojení na koupelnu nebo chodbu. Výšky je proto vhodné porovnat ještě před objednáním materiálu.",
      "Podlahářské práce provádíme v rámci kompletní rekonstrukce i jako samostatnou službu. Konkrétní příprava se vždy přizpůsobuje podkladu a zvolené krytině.",
    ],
  },
  {
    id: "zednicke-prace",
    title: "Zednické práce Praha",
    href: "/sluzby/zednicke-prace-praha",
    paragraphs: [
      "Zednické práce tvoří základ mnoha dalších částí rekonstrukce. Patří sem vyzdívky, opravy omítek, zapravení drážek a otvorů, srovnání vybraných povrchů a příprava pro obklady, malování nebo podlahy.",
      "Přesnost hrubé přípravy ovlivňuje množství materiálu i vzhled finálního výsledku. Zednickou práci proto plánujeme s ohledem na to, co na ni bude navazovat.",
      "Samostatné zednické práce jsou vhodné například při úpravě jedné místnosti, opravě stěn po demontáži nebo jako příprava pro dalšího dodavatele. U poptávky je důležité přesně uvést, zda požadujete pouze hrubou opravu, nebo také finální povrch.",
    ],
  },
];

const processSteps = [
  { title: "Kontaktujete nás", text: "Sdělíte nám místo, typ nemovitosti a požadované práce." },
  { title: "Pošlete podklady", text: "Pomohou fotografie, přibližné rozměry a půdorys, pokud ho máte." },
  { title: "Upřesníme zadání", text: "Probereme očekávaný výsledek a potřebný rozsah." },
  { title: "Prohlédneme prostor", text: "Pokud to zakázka vyžaduje, ověříme stav a podmínky na místě." },
  { title: "Domluvíme realizaci", text: "Vyjasníme práce, materiály, přístup a návaznosti." },
  { title: "Provedeme práce", text: "Postupujeme v dohodnutém pořadí a řešíme důležité změny předem." },
  { title: "Projdeme výsledek", text: "Po dokončení zkontrolujeme sjednaný rozsah." },
];

const checklist = [
  "Adresu nebo městskou část realizace.",
  "Informaci, zda jde o byt, dům nebo jednu místnost.",
  "Přibližnou velikost prostoru.",
  "Seznam toho, co chcete odstranit nebo změnit.",
  "Fotografie současného stavu.",
  "Půdorys, pokud ho máte.",
  "Patro, dostupnost výtahu a možnosti vykládky.",
  "Informaci, zda se bude během realizace v prostoru bydlet.",
  "Představu o materiálech a vybavení.",
  "Preferované období realizace.",
];

const faqs = [
  {
    q: "Provádíte kompletní rekonstrukce domů a bytů?",
    a: "Ano. Můžete nás oslovit s kompletní rekonstrukcí na klíč i s částečnou úpravou vybraných místností.",
  },
  {
    q: "Je možné objednat pouze jednu stavební práci?",
    a: "Ano. Samostatně provádíme sádrokartonářské, malířské, bourací, podlahářské a zednické práce.",
  },
  {
    q: "Zajišťujete rekonstrukce koupelen na klíč?",
    a: "Ano. Rozsah může zahrnovat demontáže, stavební přípravu, hydroizolaci, obklady a navazující dokončení podle konkrétního zadání.",
  },
  {
    q: "Jak poznám, zda potřebuji kompletní rekonstrukci?",
    a: "Kompletní realizace dává smysl, pokud se současně mění více místností nebo na sebe navazuje několik profesí. U jednoho izolovaného problému může stačit samostatná služba.",
  },
  {
    q: "Kolik stojí rekonstrukce v Praze?",
    a: "Cena závisí na velikosti, stavu podkladů, rozsahu demontáží, náročnosti detailů, přístupu a vybraných materiálech. Konkrétní nabídku lze připravit po upřesnění zakázky.",
  },
  {
    q: "Jak dlouho rekonstrukce trvá?",
    a: "Délku ovlivňuje rozsah, současný stav prostoru, počet navazujících profesí, technologické přestávky a dostupnost materiálů. Harmonogram proto stanovujeme podle konkrétní realizace.",
  },
  {
    q: "Musím rekonstrukci oznámit SVJ?",
    a: "Vlastník jednotky má stavební úpravu uvnitř bytu předem oznámit osobě odpovědné za správu domu. U zásahů do společných nebo nosných částí mohou být potřebné další souhlasy a odborné posouzení.",
  },
  {
    q: "Co když se během bourání objeví skrytý problém?",
    a: "Pokud se objeví stav, který před odkrytím nebyl viditelný, vysvětlíme vám jeho dopad a domluvíme další postup před provedením dodatečných prací.",
  },
  {
    q: "Ve kterých částech Prahy pracujete?",
    a: "Nejčastěji realizujeme zakázky v Praze 3, Praze 1, Praze 2, Praze 10, Praze 9 a Praze 8. Jinou lokalitu posoudíme podle místa a rozsahu zakázky.",
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
  areaServed: ["Praha 1", "Praha 2", "Praha 3", "Praha 8", "Praha 9", "Praha 10"],
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Služby", item: PAGE_URL },
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

function ChooserTable({
  head,
  rows,
}: {
  head: [string, string];
  rows: { need: string; label: string; href: string }[];
}) {
  return (
    <table className={s.chooser} data-reveal>
      <thead>
        <tr>
          <th>{head[0]}</th>
          <th>{head[1]}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.need}>
            <td>{r.need}</td>
            <td>
              <a href={r.href}>{r.label}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function SluzbyPage() {
  return (
    <main className={styles.page} data-scroll-root>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      {[businessJsonLd, breadcrumbJsonLd, faqJsonLd].map((json) => (
        <script
          key={json["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
        />
      ))}

      {/* Hero */}
      <header className={`${styles.hero} ${s.heroCompact}`}>
        <img
          fetchPriority="high"
          src={`${IMG}/roubenka-dlazba.webp`}
          alt="Velkoformátová dlažba při rekonstrukci roubeného domu"
          className={styles.cover}
          style={{ objectPosition: "50% 55%" }}
        />
        <div className={styles.heroOverlay} />
        <div className={`${styles.heroInner} ${s.heroInnerCompact}`}>
          <nav aria-label="Drobečková navigace" className={s.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Služby</span>
          </nav>
          <div className={`${styles.heroContent} ${s.heroContentWide}`}>
            <h1 className={`${styles.h1} ${s.h1Compact}`}>
              Rekonstrukce domů a bytů Praha
            </h1>
            <h2 className={styles.heroSub}>Kompletní přehled služeb</h2>
            <p className={styles.heroText}>
              Plánujete kompletní rekonstrukci, novou koupelnu nebo jen jednu
              konkrétní stavební práci? Na této stránce najdete přehled služeb,
              které nabízíme v Praze. Pomůže vám vybrat řešení podle typu
              nemovitosti, současného stavu a výsledku, kterého chcete dosáhnout.
            </p>
            <p className={s.heroPrompt}>
              Nevíte, kterou službu potřebujete? Popište nám svůj záměr a pošlete
              několik fotografií současného stavu. Pomůžeme vám určit vhodný další
              krok.
            </p>
            <div className={styles.heroCtas}>
              <Link className={styles.btnGold} href="/kontakt" data-cta="sluzby_hero_poptavka">
                Poptat rekonstrukci
              </Link>
              <a className={styles.btnGold} href={`tel:${PHONE}`} data-cta="sluzby_hero_phone">
                Zavolat na {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className={`${styles.intro} ${styles.split}`}>
        <p className={styles.introLead} data-reveal>
          Provádíme rekonstrukce domů a bytů v Praze, rekonstrukce koupelen a
          navazující řemeslné práce. Obrátit se na nás můžete s realizací na klíč i
          se samostatným sádrokartonem, malováním, bouráním, pokládkou podlah nebo
          zednickou přípravou.
        </p>
        <div className={styles.stack} style={{ gap: 18 }} data-reveal>
          <p>
            Nejčastěji pracujeme v lokalitách{" "}
            <strong className={styles.accent}>
              Praha 3, Praha 1, Praha 2, Praha 10, Praha 9 a Praha 8
            </strong>
            . Zakázky v dalších částech Prahy posuzujeme podle místa a rozsahu
            realizace.
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

      {/* From full renovation to single trades */}
      <section className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split}>
            <h2 className={styles.h2} data-reveal>
              Od kompletní rekonstrukce po jednotlivá řemesla
            </h2>
            <div className={styles.stack} data-reveal>
              <p>
                Někdy je potřeba proměnit celý interiér. Jindy stačí odstranit
                starou příčku, opravit stěny, položit novou podlahu nebo vymalovat
                několik místností. Rozsah služby proto neurčujeme podle
                univerzálního balíčku, ale podle skutečných potřeb prostoru.
              </p>
              <p>
                U kompletní rekonstrukce je důležitá koordinace. Bourací práce musí
                předcházet přípravě konstrukcí, rozvody se řeší před uzavřením stěn
                a finální povrchy přicházejí až po dokončení hrubých zásahů. U
                samostatné práce se naopak soustředíme především na stav podkladu a
                návaznost na již hotové části interiéru.
              </p>
            </div>
          </div>
          <ChooserTable head={["Pokud potřebujete", "Vhodný typ služby"]} rows={needToService} />
          <p className={styles.note} data-reveal>
            Pokud se při projektu potkává více profesí, vyplatí se řešit je
            společně. Rozměr nové příčky ovlivní podlahu a dveře, výběr sanitárního
            vybavení určuje přípravu koupelny a stav omítek ovlivní výsledný vzhled
            malby.
          </p>
        </div>
      </section>

      {/* Turnkey renovations */}
      <section id="na-klic" className={`${styles.dark} ${s.anchor}`}>
        <div className={`${styles.container} ${styles.services}`}>
          <h2 className={styles.h2} data-reveal>
            Kompletní rekonstrukce na klíč
          </h2>

          <article id="rekonstrukce-bytu" className={`${styles.service} ${s.anchor}`}>
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
                Kompletní <strong>rekonstrukce bytu na klíč v Praze</strong> je
                vhodná, pokud chcete řešit více místností nebo profesí současně.
                Může zahrnovat odstranění původních povrchů, úpravu dispozice, nové
                příčky, rekonstrukci koupelny, přípravu kuchyňské části, podlahy a
                finální dokončení stěn.
              </p>
              <p>
                Před zahájením si ujasníme, co má v bytě zůstat, co se má odstranit
                a jak má prostor po dokončení fungovat. Zaměříme se nejen na vzhled,
                ale také na úložné prostory, průchody, otevírání dveří a návaznost
                jednotlivých místností.
              </p>
              <p>
                U starších bytů se skutečný stav části konstrukcí ukáže až po
                odkrytí. Proto je důležité odlišit práce, které lze určit předem, od
                případných oprav závislých na stavu pod starými vrstvami. Pokud se
                objeví neočekávaný problém, další postup s vámi nejdříve probereme.
              </p>
              <p className={s.listTitle}>Typický rozsah rekonstrukce bytu:</p>
              <Bullets items={apartmentScope} />
              <a className={s.btnOutline} href="/sluzby/rekonstrukce-bytu-praha">
                Zjistit více o rekonstrukcích bytů v Praze →
              </a>
            </div>
          </article>

          <article id="rekonstrukce-domu" className={`${styles.service} ${s.anchor}`}>
            <div className={styles.serviceBody} data-reveal>
              <h3 className={styles.h3Gold}>Rekonstrukce domů na klíč Praha</h3>
              <p>
                <strong>Rekonstrukce domu na klíč v Praze</strong> obvykle zahrnuje
                více místností a širší souvislosti. Je potřeba promyslet vztah
                jednotlivých podlaží, pořadí prací a případné rozdělení projektu do
                etap.
              </p>
              <p>
                Nejdříve doporučujeme určit technicky nezbytné práce. Následují
                změny, které zlepší každodenní používání domu, a až potom výběr
                finálních povrchů. Barvu stěny lze upravit poměrně snadno, ale
                nesprávně umístěná příčka, otvor nebo vývod znamenají podstatně
                složitější změnu.
              </p>
              <p>
                Podle rozsahu můžeme řešit kompletní interiér nebo jen vybrané části
                domu. Pokud se má během rekonstrukce v nemovitosti bydlet, je
                důležité předem určit, které místnosti musí zůstat přístupné a jak
                budou jednotlivé etapy odděleny.
              </p>
              <p className={s.listTitle}>Při přípravě rekonstrukce domu řešíme zejména:</p>
              <Bullets items={houseFocus} />
              <a className={s.btnOutline} href="/sluzby/rekonstrukce-domu-praha">
                Zjistit více o rekonstrukcích domů v Praze →
              </a>
            </div>
            <img
              loading="lazy"
              decoding="async"
              data-reveal="right"
              src={`${IMG}/veranda-dlazba.webp`}
              alt="Nová dlažba na zasklené verandě rodinného domu"
              className={styles.serviceImg}
            />
          </article>

          <article id="rekonstrukce-koupelny" className={`${styles.service} ${s.anchor}`}>
            <img
              loading="lazy"
              decoding="async"
              data-reveal="left"
              src={`${IMG}/koupelna-kamen.webp`}
              alt="Koupelna se závěsným WC a sprchou v kamenném dekoru"
              className={styles.serviceImg}
            />
            <div className={styles.serviceBody} data-reveal>
              <h3 className={styles.h3Gold}>Rekonstrukce koupelen na klíč Praha</h3>
              <p>
                Koupelna je sice menší prostor, ale soustřeďuje se v ní velké
                množství detailů. Rozmístění sanity, příprava rozvodů, hydroizolace,
                obklady, větrání a nábytek musí fungovat jako jeden celek.
              </p>
              <p>
                Při <strong>rekonstrukci koupelny na klíč v Praze</strong> zajistíme
                odstranění původních prvků, stavební přípravu a navazující
                dokončovací práce. Před realizací je vhodné vybrat konkrétní
                vybavení nebo alespoň potvrdit jeho přesné rozměry.
              </p>
              <p>
                U malé koupelny může několik centimetrů ovlivnit otevírání dveří,
                průchod kolem umyvadla nebo možnost umístit pračku. Kontrolujeme
                proto nejen celkový vzhled, ale také praktické používání prostoru.
              </p>
              <p className={s.listTitle}>Před zahájením koupelny doporučujeme potvrdit:</p>
              <Bullets items={bathroomConfirm} />
              <a className={s.btnOutline} href="/sluzby/rekonstrukce-koupelen-praha">
                Zjistit více o rekonstrukcích koupelen v Praze →
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Single trades */}
      <section id="jednotlive-prace" className={`${styles.container} ${s.anchor}`}>
        <h2 className={styles.h2} style={{ marginBottom: 56 }} data-reveal>
          Jednotlivé stavební práce
        </h2>
        <div className={styles.trades} data-reveal-group>
          {trades.map((t) => (
            <article key={t.id} id={t.id} className={`${styles.trade} ${s.anchor}`}>
              <h3>{t.title}</h3>
              {t.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <a className={s.tradeLink} href={t.href}>
                {t.title} →
              </a>
            </article>
          ))}
          <div className={styles.tradePhoto}>
            <img
              loading="lazy"
              decoding="async"
              src={`${IMG}/koupelna-bojler-bourani.webp`}
              alt="Koupelna s bojlerem během bouracích prací"
              className={styles.cover}
            />
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className={styles.white}>
        <div className={styles.container}>
          <div className={styles.split}>
            <h2 className={styles.h2} data-reveal>
              Jak vybrat správnou službu
            </h2>
            <p className={styles.lead} data-reveal>
              Pokud potřebujete více než dvě nebo tři navazující profese, bývá
              praktické uvažovat o rekonstrukci jako o jednom projektu. Jestli je
              prostor jinak v dobrém stavu a řešíte pouze konkrétní problém, může být
              vhodnější samostatná služba.
            </p>
          </div>
          <ChooserTable head={["Situace", "Doporučený postup"]} rows={situationToService} />
          <p className={s.calloutBox} data-reveal>
            Při porovnávání nabídek nesledujte jen konečnou částku. Ověřte si, zda
            nabídky zahrnují stejný rozsah, přípravu podkladů, ochranu prostoru,
            odvoz materiálu a dokončení detailů.
          </p>
        </div>
      </section>

      {/* Process */}
      <section id="postup" className={`${styles.container} ${s.anchor}`}>
        <h2 className={styles.h2} data-reveal>
          Jak práce probíhají
        </h2>
        <ol className={`${styles.steps} ${s.stepsTight}`} data-reveal-group>
          {processSteps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <p className={s.darkNote} data-reveal>
          Vlastník bytu má plánovanou stavební úpravu uvnitř jednotky předem
          oznámit osobě odpovědné za správu domu. Správa domu může požadovat
          ověření, že úpravy neohrožují nebo nemění společné části.
        </p>
      </section>

      {/* Locations */}
      <section id="lokality" className={`${styles.white} ${s.anchor}`}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.stack} style={{ gap: 22 }} data-reveal>
            <h2 className={styles.h2}>Rekonstrukce v jednotlivých částech Prahy</h2>
            <p>
              Nejčastěji pracujeme v Praze 3, Praze 1, Praze 2, Praze 10, Praze 9 a
              Praze 8. V jednotlivých lokalitách se liší typy domů i praktické
              podmínky realizace.
            </p>
            <div className={styles.tags}>
              {districts.map((d) => (
                <span key={d} className={styles.tag}>
                  {d.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.stack} data-reveal="right">
            <p>
              Na Žižkově, Vinohradech nebo ve Vršovicích se často pracuje ve
              starších bytových domech. Části Vinohrad, Žižkova a Vršovic tvoří
              městskou památkovou zónu, takže u některých zásahů může být nutné
              předem ověřit podmínky památkové ochrany.
            </p>
            <p>
              V centru Prahy bývá zásadní možnost vykládky materiálu, přístup do
              domu a ochrana společných prostor. V Karlíně, Libni, na Proseku nebo ve
              Vysočanech se zase mohou vedle starších domů objevit novější bytové
              projekty s odlišnými skladbami konstrukcí.
            </p>
            <p>
              Praktickou otázkou je také odvoz odpadu. Hlavní město uvádí sběrné
              dvory například v Malešické ulici na Praze 3 a v ulici Pod Šancemi ve
              Vysočanech na Praze 9. Podmínky přijetí odpadu je však potřeba ověřit
              podle druhu, množství a toho, kdo je jeho původcem.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className={styles.dark}>
        <div className={`${styles.container} ${styles.splitWide}`}>
          <div className={styles.prepareText} data-reveal>
            <h2 className={styles.h2}>Kontrolní seznam před poptávkou</h2>
            <p>
              Nemusíte znát odborné názvy ani mít hotový projekt. Pro první domluvu
              si připravte:
            </p>
            <p className={s.tip}>
              <strong>Praktický tip:</strong> Požadavky si rozdělte na technicky
              nezbytné práce, praktická vylepšení a vzhledová přání. Snáze pak
              určíte priority, pokud se bude upravovat rozsah projektu.
            </p>
          </div>
          <ul className={styles.boxes} data-reveal-group>
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${styles.container} ${styles.faq} ${s.anchor}`}>
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

      {/* Contact */}
      <section id="kontakt" className={`${styles.contact} ${s.anchor}`}>
        <img
          loading="lazy"
          decoding="async"
          src={`${IMG}/koupelna-mozaika.webp`}
          alt="Sprchový kout, pračka a umyvadlo u mozaikové stěny"
          className={styles.cover}
          style={{ objectPosition: "50% 40%" }}
        />
        <div className={styles.contactOverlay} />
        <div className={styles.contactInner}>
          <div className={styles.contactText} data-reveal>
            <h2 className={styles.contactTitle}>Proberme vaši rekonstrukci</h2>
            <p>
              Ať už plánujete kompletní rekonstrukci bytu, modernizaci domu, novou
              koupelnu nebo jednu konkrétní stavební práci, začněme krátkou
              konzultací.
            </p>
            <p>
              Napište nám, co chcete změnit, kde se nemovitost nachází a připojte
              několik fotografií. Pomůžeme vám určit vhodnou službu a domluvíme další
              krok.
            </p>
            <Link
              className={styles.contactBtn}
              href="/kontakt"
              data-cta="sluzby_contact_poptavka"
            >
              Poptat rekonstrukci
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
