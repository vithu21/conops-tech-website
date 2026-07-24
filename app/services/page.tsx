import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import {
  JsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { siteName } from "@/lib/site";
import { services } from "@/lib/services";

const title = "IT Services";
const description =
  "Explore ConOps Tech services: cloud solutions, enterprise automation, IT strategy, ERP, support, and AI-driven systems.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <SiteShell>
      <JsonLd
        data={webPageJsonLd({
          path: "/services",
          name: `${title} | ${siteName}`,
          description,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4rem] text-accent">
            Our Services
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Complete IT solutions for ambitious teams
          </h1>
          <p className="text-lg leading-relaxed text-white/75">
            From strategy and cloud platforms to automation, ERP, support, and
            AI, {siteName} delivers services designed for measurable operational
            outcomes—not one-off projects that fade after launch.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-accent/40 hover:bg-white/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-3xl">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold text-white">
                <Link
                  href={`/services/${service.slug}`}
                  className="transition hover:text-accent"
                >
                  {service.title}
                </Link>
              </h2>
              <p className="text-sm leading-relaxed text-white/70">
                {service.shortDescription}
              </p>
              <p className="text-sm leading-relaxed text-white/60 line-clamp-4">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-auto text-sm font-medium text-accent hover:underline"
              >
                View {service.title} →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Tell us about your stack, constraints, and goals. We will recommend
            a practical first step—strategy, delivery, or support.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold uppercase tracking-[0.2rem] text-white transition hover:opacity-90"
          >
            Contact us
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
