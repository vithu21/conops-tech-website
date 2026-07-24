import type { Metadata } from "next";
import { ogImagePath, siteName } from "@/lib/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      siteName,
      title: fullTitle,
      description,
      locale: "en_US",
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImagePath],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}
