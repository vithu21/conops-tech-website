export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://conopstech.com";

export const siteName = "ConOps Tech";

export const siteDescription =
  "ConOps Tech delivers modern IT strategy, cloud-native engineering, and automation services for ambitious teams.";

export const siteTitle = `${siteName} | IT Strategy & Engineering`;

export const organization = {
  email: "hello.conopstech@gmail.com",
  telephone: "+94755373553",
  telephoneDisplay: "+94 75 537 3553",
  whatsapp: "https://wa.me/94755373553",
  sameAs: [
    "https://www.linkedin.com/company/conops-tech/",
    "https://www.facebook.com/profile.php?id=61586451802847",
    "https://wa.me/94755373553",
  ],
} as const;

export const ogImagePath = "/opengraph-image";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const features = [
  {
    title: "Proven Expertise",
    description: "Mission-critical IT solutions across diverse industries.",
    icon: "ShieldCheck" as const,
  },
  {
    title: "Agile Approach",
    description: "Fast iterations and transparent communication.",
    icon: "Zap" as const,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical assistance.",
    icon: "Headphones" as const,
  },
  {
    title: "Scalable Growth",
    description: "Solutions designed to grow with your business.",
    icon: "TrendingUp" as const,
  },
];

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized === "/" ? "" : normalized}`;
}
