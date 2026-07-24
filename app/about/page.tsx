import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import {
  JsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { features, siteName } from "@/lib/site";
import { services } from "@/lib/services";

const title = "About Us";
const description =
  "Learn how ConOps Tech helps ambitious teams modernize with IT strategy, cloud engineering, automation, and reliable support.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <JsonLd
        data={webPageJsonLd({
          path: "/about",
          name: `${title} | ${siteName}`,
          description,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4rem] text-accent">
            About {siteName}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Connecting operations with modern IT
          </h1>
          <p className="text-lg leading-relaxed text-white/75">
            {siteName} is an IT services partner focused on practical outcomes.
            We help organizations clarify strategy, modernize platforms, and
            automate the work that slows teams down—so technology supports
            growth instead of creating friction.
          </p>
        </div>

        <section className="mx-auto mt-16 max-w-3xl space-y-5 text-base leading-relaxed text-white/75">
          <h2 className="text-2xl font-bold text-white">What we believe</h2>
          <p>
            Buzzwords do not ship products. We start with the outcomes you need—
            faster releases, cleaner operations, clearer ownership—and reverse
            engineer the architecture, tooling, and support model that get you
            there. Engagements are collaborative: we transfer knowledge so your
            team can run what we build.
          </p>
          <p>
            Our work spans cloud platforms, enterprise automation, ERP and
            business systems, AI-assisted workflows, and day-to-day IT support.
            Whether you need a roadmap, a delivery partner, or ongoing coverage,
            we keep communication transparent and recommendations honest.
          </p>
        </section>

        <section className="mt-16 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">How we work</h2>
            <p className="mt-3 text-white/70">
              Principles that show up in every engagement.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Capabilities</h2>
            <p className="mt-3 text-white/70">
              Explore the services we deliver for growing teams.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex h-full flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-accent/40 hover:bg-white/10"
                >
                  <span className="text-2xl" aria-hidden>
                    {service.icon}
                  </span>
                  <span className="font-semibold text-white">{service.title}</span>
                  <span className="text-sm text-white/65">
                    {service.shortDescription}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold uppercase tracking-[0.2rem] text-white transition hover:opacity-90"
          >
            Talk to our team
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
