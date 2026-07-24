import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import {
  JsonLd,
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { siteName } from "@/lib/site";
import {
  getServiceBySlug,
  getServiceSlugs,
  services,
} from "@/lib/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return buildPageMetadata({
      title: "Service not found",
      description: "The requested service page could not be found.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <SiteShell>
      <JsonLd
        data={webPageJsonLd({
          path: `/services/${service.slug}`,
          name: `${service.title} | ${siteName}`,
          description: service.shortDescription,
        })}
      />
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />

      <article className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4rem] text-accent">
            Service
          </p>
          <div className="flex items-center gap-4">
            <span
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-4xl"
              aria-hidden
            >
              {service.icon}
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {service.title}
            </h1>
          </div>
          <p className="text-lg text-white/80">{service.shortDescription}</p>
          <p className="text-base leading-relaxed text-white/70">
            {service.description}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white">What you get</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/75">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <span className="mt-1 text-accent" aria-hidden>
                    ✓
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white">Outcomes</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/75">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3">
                  <span className="mt-1 text-accent" aria-hidden>
                    →
                  </span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold uppercase tracking-[0.2rem] text-white transition hover:opacity-90"
          >
            Discuss {service.title}
          </Link>
          <p className="mt-4 text-sm text-white/55">
            Or browse{" "}
            <Link href="/services" className="text-accent hover:underline">
              all services
            </Link>
            .
          </p>
        </div>

        <section className="mx-auto mt-20 max-w-5xl space-y-6">
          <h2 className="text-2xl font-bold text-white">Related services</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-accent/40 hover:bg-white/10"
              >
                <span className="text-2xl" aria-hidden>
                  {item.icon}
                </span>
                <p className="mt-3 font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-white/65">{item.shortDescription}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
