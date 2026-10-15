// Single source for the header and footer navigation.

export type NavLink = { label: string; href: string };

export const serviceLinks: NavLink[] = [
  { label: "Rekonstrukce bytů", href: "/sluzby/rekonstrukce-bytu-praha" },
  { label: "Rekonstrukce domů", href: "/sluzby/rekonstrukce-domu-praha" },
  { label: "Rekonstrukce koupelen", href: "/sluzby/rekonstrukce-koupelen-praha" },
  { label: "Sádrokartonářské práce", href: "/sluzby/sadrokartonarske-prace-praha" },
  { label: "Malířské práce", href: "/sluzby/malirske-prace-praha" },
  { label: "Bourací práce", href: "/sluzby/bouraci-prace-praha" },
  { label: "Podlahářské práce", href: "/sluzby/podlaharske-prace-praha" },
  { label: "Zednické práce", href: "/sluzby/zednicke-prace-praha" },
];

export const locationLinks: NavLink[] = ["1", "2", "3", "8", "9", "10"].map((num) => ({
  label: `Praha ${num}`,
  href: `/lokace/rekonstrukce-praha-${num}`,
}));

export const pageLinks = {
  home: { label: "Domů", href: "/" },
  services: { label: "Služby", href: "/sluzby" },
  locations: { label: "Lokace", href: "/lokace" },
  process: { label: "Etapy práce", href: "/etapy-prace" },
  realizace: { label: "Realizace", href: "/realizace" },
  reviews: { label: "Recenze", href: "/recenze" },
  contact: { label: "Kontakt", href: "/kontakt" },
} satisfies Record<string, NavLink>;

// Header order; Služby and Lokace open their sub-lists on hover.
export const mainNav: (NavLink & { children?: NavLink[] })[] = [
  pageLinks.home,
  { ...pageLinks.services, children: serviceLinks },
  { ...pageLinks.locations, children: locationLinks },
  pageLinks.process,
  pageLinks.realizace,
  pageLinks.reviews,
  pageLinks.contact,
];
