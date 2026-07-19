export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://conopstech.com";

export const siteName = "ConOps Tech";

export const siteDescription =
  "ConOps Tech delivers modern IT strategy, cloud-native engineering, and automation services for ambitious teams.";

export const siteTitle = `${siteName} | IT Strategy & Engineering`;

export const organization = {
  email: "hello.conopstech@gmail.com",
  telephone: "+94755373553",
  sameAs: [
    "https://www.linkedin.com/company/conops-tech/",
    "https://www.facebook.com/profile.php?id=61586451802847",
  ],
} as const;
