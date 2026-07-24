import { absoluteUrl, organization, siteDescription, siteName, siteUrl } from "@/lib/site";
import type { Service } from "@/lib/services";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/logo-2.png`,
        email: organization.email,
        telephone: organization.telephone,
        sameAs: [...organization.sameAs],
        contactPoint: {
          "@type": "ContactPoint",
          email: organization.email,
          telephone: organization.telephone,
          contactType: "customer service",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: siteUrl,
        description: siteDescription,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };
}

export function webPageJsonLd({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    areaServed: "Worldwide",
    serviceType: service.title,
  };
}
