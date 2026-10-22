import type { Metadata } from "next";
import Link from "next/link";
import styles from "../_shared/site.module.css";
import hub from "../sluzby/page.module.css";
import p from "./page.module.css";
import { SITE_URL, webPageSchema } from "@/utils/schema";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap";

const PAGE_URL = "https://rekogrinik.cz/privacy";
const EMAIL = "rekogrinikcz@gmail.com";

export const metadata: Metadata = {
  title: { absolute: "Zásady ochrany osobních údajů | RekoGrinik" },
  description:
    "Zásady ochrany osobních údajů RekoGrinik s.r.o.: jak zpracováváme údaje z poptávek a kontaktních formulářů a jak na webu používáme cookies.",
  // Absolute: the root layout's metadataBase is rekogrinik.com, which redirects to .cz.
  alternates: { canonical: PAGE_URL },
};

const jsonLd = [
  webPageSchema({
    url: PAGE_URL,
    name: "Zásady ochrany osobních údajů",
    description:
      "Jak RekoGrinik s.r.o. zpracovává osobní údaje z poptávek a kontaktních formulářů a jak web používá cookies.",
  }),
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Zásady ochrany osobních údajů", item: PAGE_URL },
    ],
  },
];

// "Účel / Právní základ / Doba uložení" lines of section 2
function Facts({ items }: { items: [string, React.ReactNode][] }) {
  return (
    <dl className={p.facts}>
      {items.map(([label, text]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{text}</dd>
        </div>
      ))}
    </dl>
  );
}

type Cookie = [name: string, provider: string, purpose: string, expiry: string];

function CookieTable({ caption, rows }: { caption: string; rows: Cookie[] }) {
  return (
    <div className={p.tableWrap}>
      <table className={p.table}>
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>Poskytovatel</th>
            <th>Účel</th>
            <th>Platnost</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, provider, purpose, expiry]) => (
            <tr key={name}>
              <td>
                <code>{name}</code>
              </td>
              <td>{provider}</td>
              <td>{purpose}</td>
              <td>{expiry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const sections = [
  { id: "spravce", title: "1. Správce osobních údajů" },
  { id: "udaje", title: "2. Jaké údaje zpracováváme, proč a jak dlouho" },
  { id: "prijemci", title: "3. Komu údaje předáváme" },
  { id: "mimo-eu", title: "4. Předávání mimo Evropskou unii" },
  { id: "cookies", title: "5. Cookies" },
  { id: "prava", title: "6. Vaše práva" },
  { id: "automatizovane-rozhodovani", title: "7. Automatizované rozhodování" },
  { id: "zabezpeceni", title: "8. Zabezpečení" },
  { id: "zmeny", title: "9. Změny zásad" },
];

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className={p.head}>
        <div className={p.headInner}>
          <nav aria-label="Drobečková navigace" className={hub.breadcrumb}>
            <Link href="/">Domů</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Zásady ochrany osobních údajů</span>
          </nav>
          <h1 className={p.title}>Zásady ochrany osobních údajů</h1>
          <p className={p.effective}>Účinné od 22. 10. 2026</p>
        </div>
      </header>

      <div className={p.layout}>
        <nav aria-label="Obsah" className={p.toc}>
          <p className={p.tocTitle}>Obsah</p>
          <ol>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title.replace(/^\d+\. /, "")}</a>
              </li>
            ))}
          </ol>
        </nav>

        <article className={p.doc}>
          <p className={p.lead}>
            Tyto zásady vysvětlují, jak společnost RekoGrinik s.r.o. zpracovává osobní údaje
            návštěvníků webu rekogrinik.cz, zájemců o naše služby a zákazníků. Zpracování se
            řídí nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR), zákonem
            č. 110/2019 Sb., o zpracování osobních údajů, a v oblasti cookies zákonem
            č. 127/2005 Sb., o elektronických komunikacích.
          </p>

          <section id="spravce" className={p.section}>
            <h2>1. Správce osobních údajů</h2>
            <dl className={p.company}>
              <div>
                <dt>Společnost</dt>
                <dd>RekoGrinik s.r.o.</dd>
              </div>
              <div>
                <dt>IČO</dt>
                <dd>23713712</dd>
              </div>
              <div>
                <dt>Sídlo</dt>
                <dd>Slunečnicová 2974/1, Záběhlice, 106 00 Praha 10</dd>
              </div>
              <div>
                <dt>Zápis</dt>
                <dd>
                  v obchodním rejstříku vedeném Městským soudem v Praze, oddíl C, vložka 431669
                </dd>
              </div>
              <div>
                <dt>Kontaktní adresa (provozovna)</dt>
                <dd>Na Vackově 2895/5, 130 00 Praha 3</dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420776352237">+420 776 352 237</a>
                </dd>
              </div>
            </dl>
            <p>
              Pověřence pro ochranu osobních údajů jsme nejmenovali, protože nám to zákon
              neukládá. Se všemi dotazy se obracejte na výše uvedené kontakty.
            </p>
          </section>

          <section id="udaje" className={p.section}>
            <h2>2. Jaké údaje zpracováváme, proč a jak dlouho</h2>

            <h3>2.1 Vyřízení vaší poptávky</h3>
            <p>
              Když nám pošlete poptávku přes formulář na webu (poptávkový formulář, kontaktní
              formulář, žádost o konzultaci), zavoláte nebo napíšete e-mail, zpracováváme:
            </p>
            <ul>
              <li>jméno a příjmení, telefon, e-mail,</li>
              <li>adresu nemovitosti, typ práce a popis vašeho záměru, pokud je uvedete,</li>
              <li>
                technické údaje o odeslání: datum a čas, jazyk nastavený v prohlížeči a zdroj
                návštěvy (například z jaké reklamy nebo kampaně jste na web přišli, tedy parametry
                UTM a identifikátor kliknutí na reklamu).
              </li>
            </ul>
            <Facts
              items={[
                [
                  "Účel",
                  "odpovědět vám, připravit nabídku, domluvit zaměření a vést s vámi komunikaci před uzavřením smlouvy.",
                ],
                [
                  "Právní základ",
                  "provedení opatření před uzavřením smlouvy na vaši žádost (čl. 6 odst. 1 písm. b) GDPR). Údaj o zdroji návštěvy zpracováváme na základě oprávněného zájmu na vyhodnocení, odkud k nám poptávky přicházejí (čl. 6 odst. 1 písm. f) GDPR).",
                ],
                ["Doba uložení", "3 roky od posledního kontaktu, pokud nedojde k uzavření smlouvy."],
              ]}
            />
            <p>
              Poskytnutí údajů je dobrovolné. Bez kontaktního údaje vám ale nemůžeme odpovědět.
            </p>

            <h3>2.2 Uzavření a plnění smlouvy</h3>
            <p>
              Pokud si u nás objednáte práce, zpracováváme navíc identifikační a fakturační
              údaje (u podnikatelů i IČO a DIČ), adresu místa plnění a údaje potřebné k
              provedení díla, předání a vyřízení případných reklamací.
            </p>
            <Facts
              items={[
                ["Účel", "uzavření smlouvy, provedení díla, vyúčtování a záruční servis."],
                ["Právní základ", "plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR)."],
                [
                  "Doba uložení",
                  "po dobu trvání smlouvy a dále po dobu trvání záruky a práv z vadného plnění.",
                ],
              ]}
            />

            <h3>2.3 Účetnictví a daně</h3>
            <p>
              Faktury a další účetní doklady musíme uchovávat podle zákona č. 563/1991 Sb., o
              účetnictví, a zákona č. 235/2004 Sb., o dani z přidané hodnoty.
            </p>
            <Facts
              items={[
                ["Právní základ", "plnění právní povinnosti (čl. 6 odst. 1 písm. c) GDPR)."],
                [
                  "Doba uložení",
                  "po dobu stanovenou těmito zákony, nejdéle 10 let od konce roku, v němž byl doklad vystaven.",
                ],
              ]}
            />

            <h3>2.4 Ochrana našich právních nároků</h3>
            <p>
              V nezbytném rozsahu uchováváme komunikaci a smluvní dokumentaci pro případ sporu.
            </p>
            <Facts
              items={[
                [
                  "Právní základ",
                  "oprávněný zájem na ochraně našich práv (čl. 6 odst. 1 písm. f) GDPR).",
                ],
                [
                  "Doba uložení",
                  "po dobu běhu promlčecích lhůt podle občanského zákoníku, obvykle 3 roky, u vad stavby až 5 let od předání díla, a dále po dobu případného soudního nebo jiného řízení.",
                ],
              ]}
            />

            <h3>2.5 Měření účinnosti reklamy (cookies)</h3>
            <p>
              Pokud k tomu v cookie liště udělíte souhlas, měříme pomocí služby Google Ads, zda
              návštěva z naší reklamy vedla k odeslání poptávky nebo kliknutí na telefonní
              číslo. Zpracovávají se při tom online identifikátory (cookies), identifikátor
              kliknutí na reklamu, IP adresa a informace o tom, že došlo k odeslání formuláře
              nebo kliknutí na telefon. Obsah formuláře (jméno, telefon, e-mail, adresa, zpráva)
              společnosti Google nepředáváme.
            </p>
            <p>
              Web používá režim souhlasu Google (Google Consent Mode). Značka Google se proto
              načte i bez vašeho souhlasu, ale dokud souhlas neudělíte, neukládá do prohlížeče
              žádné reklamní cookies a konverze z reklamy se neměří. Odesílá pouze omezené
              technické signály bez cookies (například že stránka byla načtena, typ prohlížeče a
              IP adresu), které Google může využít k odhadu počtu konverzí bez identifikace
              konkrétního návštěvníka.
            </p>
            <Facts
              items={[
                [
                  "Právní základ",
                  "u měření konverzí a reklamních cookies váš souhlas (čl. 6 odst. 1 písm. a) GDPR a § 89 odst. 3 zákona č. 127/2005 Sb.), u omezených signálů bez cookies oprávněný zájem na vyhodnocení účinnosti reklamy (čl. 6 odst. 1 písm. f) GDPR).",
                ],
                [
                  "Doba uložení",
                  "podle doby platnosti jednotlivých cookies (viz kapitola 5), souhlas můžete kdykoli odvolat.",
                ],
              ]}
            />

            <h3>2.6 Provoz a zabezpečení webu</h3>
            <p>
              Při každé návštěvě se zpracovávají technické údaje, které jsou nutné k zobrazení
              webu a jeho ochraně před útoky (IP adresa, typ prohlížeče, čas přístupu). Ukládáme
              také vaši volbu v cookie liště.
            </p>
            <Facts
              items={[
                [
                  "Právní základ",
                  "oprávněný zájem na bezpečném a funkčním provozu webu (čl. 6 odst. 1 písm. f) GDPR), u cookies nezbytných pro fungování webu § 89 odst. 3 zákona č. 127/2005 Sb.",
                ],
                [
                  "Doba uložení",
                  "technické záznamy nejvýše několik týdnů, záznam o vašem souhlasu po dobu jeho platnosti (1 rok).",
                ],
              ]}
            />

            <h3>2.7 Mapa a písma třetích stran</h3>
            <p>
              V patičce každé stránky zobrazujeme mapu Google Maps s naší provozovnou a na webu
              používáme písma ze služby Google Fonts. Při jejich načtení se váš prohlížeč připojí
              k serverům společnosti Google, která tak získá vaši IP adresu. Vložená mapa může
              ve vašem prohlížeči ukládat vlastní cookies společnosti Google podle jejích zásad.
            </p>
            <Facts
              items={[
                [
                  "Právní základ",
                  "oprávněný zájem na srozumitelné prezentaci webu a snadném nalezení provozovny (čl. 6 odst. 1 písm. f) GDPR).",
                ],
              ]}
            />
          </section>

          <section id="prijemci" className={p.section}>
            <h2>3. Komu údaje předáváme</h2>
            <p>
              Vaše údaje neprodáváme. Předáváme je jen těmto příjemcům, a to v rozsahu
              nezbytném pro daný účel:
            </p>
            <ul>
              <li>
                Poskytovatelé hostingu a serverů, na kterých běží web a zpracování formulářů:
                Railway Corporation (USA) a Cloudflare, Inc. (USA, ochrana a zrychlení webu).
              </li>
              <li>
                Google Ireland Limited (Irsko): e-mailová schránka, do které poptávky přicházejí,
                služba Google Ads (měření reklamy, pouze s vaším souhlasem), Google Tag Manager,
                Google Maps a Google Fonts. Pro účely měření reklamy vystupuje Google jako
                samostatný správce. Jeho zásady najdete na{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  policies.google.com/privacy
                </a>
                .
              </li>
              <li>
                CookieYes Limited (Spojené království): správa cookie lišty a evidence udělených
                souhlasů.
              </li>
              <li>MMaven Creative: správa webu a reklamních kampaní.</li>
              <li>
                Externí účetní a daňový poradce, případně subdodavatelé, kteří se podílejí na
                provedení vaší zakázky.
              </li>
              <li>Orgány veřejné moci, pokud nám to ukládá zákon.</li>
            </ul>
            <p>
              Všichni zpracovatelé jsou vázáni smlouvou o zpracování osobních údajů a povinností
              mlčenlivosti.
            </p>
          </section>

          <section id="mimo-eu" className={p.section}>
            <h2>4. Předávání mimo Evropskou unii</h2>
            <p>
              Někteří příjemci (Google, Cloudflare, Railway) mohou údaje zpracovávat v USA.
              Předání probíhá na základě rozhodnutí Evropské komise o odpovídající ochraně
              (EU-US Data Privacy Framework) u certifikovaných společností, jinak na základě
              standardních smluvních doložek schválených Evropskou komisí. Pro Spojené království
              platí rozhodnutí Evropské komise o odpovídající ochraně.
            </p>
          </section>

          <section id="cookies" className={p.section}>
            <h2>5. Cookies</h2>
            <p>
              Cookies jsou malé textové soubory, které si web ukládá ve vašem prohlížeči.
              Nezbytné cookies používáme vždy, ostatní pouze s vaším souhlasem, který udělíte v
              cookie liště při první návštěvě.
            </p>
            <p>
              Svůj souhlas můžete kdykoli změnit nebo odvolat přes odkaz{" "}
              {/* CookieYes reopens its preference centre from this class */}
              <a href="#" className={`${p.cookieLink} cky-banner-element`}>
                Nastavení cookies
              </a>{" "}
              v patičce webu. Odvolání souhlasu nemá vliv na zákonnost zpracování před jeho
              odvoláním. Cookies můžete také smazat nebo zablokovat v nastavení prohlížeče.
            </p>
            <CookieTable
              caption="Nezbytné cookies"
              rows={[
                [
                  "cookieyes-consent",
                  "rekogrinik.cz (CookieYes)",
                  "uložení vaší volby v cookie liště",
                  "1 rok",
                ],
              ]}
            />
            <CookieTable
              caption="Technické úložiště prohlížeče"
              rows={[
                [
                  "rg_enquiry_sent",
                  "rekogrinik.cz (sessionStorage)",
                  "dočasný záznam, že jste právě odeslali poptávku, aby se stránka s poděkováním započítala jen jednou; neobsahuje osobní údaje",
                  "do zobrazení stránky s poděkováním, nejdéle do zavření okna",
                ],
              ]}
            />
            <CookieTable
              caption="Reklamní cookies (pouze se souhlasem)"
              rows={[
                ["_gcl_au", "Google Ads", "měření konverzí z reklamy", "3 měsíce"],
                [
                  "_gcl_aw",
                  "Google Ads",
                  "uložení identifikátoru kliknutí na reklamu, aby bylo možné poptávku přiřadit k reklamě",
                  "3 měsíce",
                ],
                [
                  "test_cookie",
                  "Google (doubleclick.net)",
                  "ověření, zda prohlížeč podporuje cookies",
                  "15 minut",
                ],
              ]}
            />
            <p>
              Analytické ani remarketingové cookies na webu nepoužíváme. Vložená mapa Google
              (kapitola 2.7) může ukládat vlastní cookies společnosti Google, které nemáme pod
              kontrolou.
            </p>
          </section>

          <section id="prava" className={p.section}>
            <h2>6. Vaše práva</h2>
            <p>V souvislosti se zpracováním osobních údajů máte právo:</p>
            <ul>
              <li>na přístup k údajům a na jejich kopii (čl. 15 GDPR),</li>
              <li>na opravu nepřesných údajů (čl. 16 GDPR),</li>
              <li>
                na výmaz, pokud údaje už nepotřebujeme nebo je zpracováváme neoprávněně (čl. 17
                GDPR),
              </li>
              <li>na omezení zpracování (čl. 18 GDPR),</li>
              <li>
                na přenositelnost údajů, které zpracováváme na základě smlouvy nebo souhlasu (čl.
                20 GDPR),
              </li>
              <li>vznést námitku proti zpracování na základě oprávněného zájmu (čl. 21 GDPR),</li>
              <li>
                kdykoli odvolat souhlas, aniž by tím byla dotčena zákonnost zpracování před jeho
                odvoláním (čl. 7 odst. 3 GDPR).
              </li>
            </ul>
            <p>
              Svá práva uplatníte e-mailem na <a href={`mailto:${EMAIL}`}>{EMAIL}</a> nebo
              dopisem na adresu sídla. Odpovíme bez zbytečného odkladu, nejpozději do jednoho
              měsíce. Abychom údaje nevydali nesprávné osobě, můžeme vás požádat o ověření
              totožnosti.
            </p>
            <p className={p.note}>
              Pokud se domníváte, že vaše údaje zpracováváme v rozporu s předpisy, můžete podat
              stížnost u Úřadu pro ochranu osobních údajů, Pplk. Sochora 727/27, 170 00 Praha 7,{" "}
              <a href="https://www.uoou.gov.cz" target="_blank" rel="noopener noreferrer">
                www.uoou.gov.cz
              </a>
              .
            </p>
          </section>

          <section id="automatizovane-rozhodovani" className={p.section}>
            <h2>7. Automatizované rozhodování</h2>
            <p>
              Nedochází k automatizovanému rozhodování ani profilování, které by pro vás mělo
              právní účinky nebo se vás obdobně významně dotýkalo (čl. 22 GDPR).
            </p>
          </section>

          <section id="zabezpeceni" className={p.section}>
            <h2>8. Zabezpečení</h2>
            <p>
              Údaje chráníme přiměřenými technickými a organizačními opatřeními, zejména
              šifrovaným spojením (HTTPS), omezením přístupu jen na oprávněné osoby a
              zabezpečením účtů.
            </p>
          </section>

          <section id="zmeny" className={p.section}>
            <h2>9. Změny zásad</h2>
            <p>
              Tyto zásady můžeme aktualizovat, například při změně služeb, které na webu
              používáme. Aktuální verze je vždy zveřejněna na této stránce s datem účinnosti.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
