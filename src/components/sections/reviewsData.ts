// Customer reviews: shown in the home-page Reviews slider and on /recenze.

export type Review = {
  avatar: string;
  name: string;
  position: string;
  quote: string;
  project: string;
};

export const reviewsData: Review[] = [
  {
    avatar: "AN",
    name: "Anna Nováková",
    position: "Majitelka bytu",
    quote: "„Maxim a jeho tým odvedli neuvěřitelnou práci! Náš starý byt se proměnil v moderní prostor snů. Všechno bylo hotové včas a ve vysoké kvalitě. Všem to doporučuji!“",
    project: "Projekt: Kompletní rekonstrukce třípokojového bytu",
  },
  {
    avatar: "PS",
    name: "Petr Svoboda",
    position: "Majitel bytu",
    quote: "„Profesionální přístup od začátku do konce. Fixní cena bez překvapení, kvalitní materiály a důraz na detail. Obzvláště jsem ohromen prací v koupelně.“",
    project: "Projekt: Rekonstrukce koupelny a kuchyně",
  },
  {
    avatar: "MC",
    name: "Martin Černý",
    position: "Majitel firmy",
    quote: "„Pracoval jsem s mnoha dodavateli, ale RekoGrinik vyniká svým přístupem k práci. Rozumí konstrukčním řešením a bezchybně je realizují.“",
    project: "Projekt: Rekonstrukce designové kanceláře",
  },
  {
    avatar: "TK",
    name: "Tomáš Kovář",
    position: "Investor",
    quote: "„S renovací všech mých investičních nemovitostí svěřuji RekoGriniku. Vždy dodrží rozpočet a termíny. To je na trhu rarita!“",
    project: "Projekt: Rekonstrukce 5 bytů k pronájmu",
  },
  {
    avatar: "OK",
    name: "Olga Kratochvílová",
    position: "Majitelka bytu",
    quote: "„Děkujeme za vaši trpělivost a pochopení! Často jsme měnili rozhodnutí, ale tým vždy našel ty nejlepší možnosti. Výsledek předčil očekávání.“",
    project: "Projekt: Kompletní rekonstrukce dvoupokojového bytu",
  },
  {
    avatar: "MČ",
    name: "Michal Černý",
    position: "Majitel restaurace",
    quote: "„Rychle a efektivně zrekonstruovali naši restauraci mezi sezónami. Minimální prostoje, maximální výsledky. Určitě je znovu kontaktujeme!“",
    project: "Projekt: Rekonstrukce restaurace",
  },
];
