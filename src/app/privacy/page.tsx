import styles from "./page.module.css";

export default function PrivacyPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Zásady ochrany osobních údajů</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Obecná ustanovení</h2>
          <p>
            Tyto zásady ochrany osobních údajů popisují, jak RekoGrinik
            shromažďuje, používá a chrání vaše osobní informace při používání
            našeho webu a služeb.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Shromažďování informací</h2>
          <p>Shromažďujeme následující typy informací:</p>
          <ul>
            <li>
              <strong>Kontaktní informace:</strong> jméno, telefon, email,
              adresa
            </li>
            <li>
              <strong>Technické informace:</strong> IP-adresa, typ prohlížeče,
              operační systém
            </li>
            <li>
              <strong>Informace o používání:</strong> stránky, které
              navštěvujete, čas strávený na webu
            </li>
            <li>
              <strong>Soubory a dokumenty:</strong> nahrané obrázky a dokumenty
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            2.1. Zpracování údajů z formulářů
          </h2>
          <p>
            Při vyplňování formulářů na našem webu (kontaktní formulář, formulář
            pro bezplatnou konzultaci, formulář pro odeslání žádosti)
            shromažďujeme a zpracováváme následující osobní údaje:
          </p>
          <ul>
            <li>
              <strong>Povinné údaje:</strong> jméno, telefonní číslo, e-mailová
              adresa
            </li>
            <li>
              <strong>Doplňující údaje:</strong> adresa, typ práce, zpráva s
              popisem projektu
            </li>
            <li>
              <strong>Technické údaje:</strong> čas odeslání formuláře, IP
              adresa, zdroj návštěvy (UTM parametry)
            </li>
            <li>
              <strong>Marketingové údaje:</strong> souhlas se zpracováním
              osobních údajů
            </li>
          </ul>
          <p>
            <strong>Účel zpracování:</strong> Tyto údaje používáme výhradně pro
            poskytování našich rekonstrukčních služeb, komunikaci s vámi ohledně
            vašich požadavků a zlepšování kvality našich služeb.
          </p>
          <p>
            <strong>Právní základ:</strong> Zpracování probíhá na základě vašeho
            souhlasu (čl. 6 odst. 1 písm. a) GDPR) a pro účely plnění smlouvy
            (čl. 6 odst. 1 písm. b) GDPR).
          </p>
          <p>
            <strong>Doba uchování:</strong> Vaše údaje uchováváme po dobu 3 let
            od posledního kontaktu nebo do odvolání souhlasu se zpracováním.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Používání informací</h2>
          <p>Vaše informace se používají pro:</p>
          <ul>
            <li>Poskytování rekonstrukčních služeb</li>
            <li>Komunikaci s vámi ohledně vašich požadavků</li>
            <li>Zlepšování kvality našich služeb</li>
            <li>Odesílání důležitých zpráv</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Ochrana údajů</h2>
          <p>
            Implementujeme odpovídající technická a organizační opatření pro
            ochranu vašich osobních informací před neoprávněným přístupem,
            změnou, zveřejněním nebo zničením.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            5. Předávání údajů třetím stranám
          </h2>
          <p>
            Neprodáváme, nevyměňujeme ani nepředáváme vaše osobní informace
            třetím stranám bez vašeho souhlasu, kromě případů nezbytných pro
            poskytování služeb nebo plnění právních požadavků.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Vaše práva</h2>
          <p>Máte právo:</p>
          <ul>
            <li>Získat kopii vašich osobních údajů</li>
            <li>Opravit nepřesné informace</li>
            <li>Smazat vaše údaje</li>
            <li>Omezit zpracování vašich údajů</li>
            <li>Odvolat souhlas se zpracováním údajů</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Cookies</h2>
          <p>
            Náš web používá cookies pro zlepšení funkčnosti a analýzu používání.
            Můžete nastavit váš prohlížeč pro odmítnutí cookies.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Změny v zásadách</h2>
          <p>
            Můžeme aktualizovat tyto zásady ochrany osobních údajů. Jakékoli
            změny budou zveřejněny na této stránce s aktualizovaným datem.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Kontaktní informace</h2>
          <p>
            Pokud máte otázky ohledně těchto zásad ochrany osobních údajů,
            prosím kontaktujte nás:
          </p>
          <ul>
            <li>
              <strong>Email:</strong> info@rekogrinik.cz
            </li>
            <li>
              <strong>Telefon:</strong> +420 XXX XXX XXX
            </li>
            <li>
              <strong>Adresa:</strong> Praha, Česká republika
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <p className={styles.lastUpdated}>
            <strong>Poslední aktualizace:</strong>{" "}
            {new Date().toLocaleDateString("cs-CZ")}
          </p>
        </section>
      </div>
    </div>
  );
}
