import dynamic from "next/dynamic";
import Link from "next/link";
import { Linkedin, Facebook } from "lucide-react";
import SiteShell from "@/components/SiteShell";
import {
  JsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { organization, siteName } from "@/lib/site";

const ContactForm = dynamic(() => import("@/components/ContactForm"));

const title = "Contact";
const description =
  "Contact ConOps Tech for IT strategy, cloud engineering, automation, ERP, support, and AI solutions. We respond with practical next steps.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteShell>
      <JsonLd
        data={webPageJsonLd({
          path: "/contact",
          name: `${title} | ${siteName}`,
          description,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid min-w-0 gap-10 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-glow backdrop-blur-sm sm:rounded-[32px] sm:p-8 md:grid-cols-[1.1fr_1fr] lg:p-12">
          <div className="min-w-0 space-y-6">
            <p className="text-xs uppercase tracking-[0.35rem] text-accent">
              Contact Us
            </p>
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Ready to transform your IT operations?
            </h1>
            <p className="text-base leading-relaxed text-white/70">
              Share your requirements and we&apos;ll respond with a tailored
              strategy, timelines, and honest advice. Every engagement starts
              with a conversation about outcomes, not buzzwords.
            </p>

            <div className="space-y-3 text-sm text-white/70">
              <p>
                <span className="text-white/50">Email: </span>
                <a
                  href={`mailto:${organization.email}`}
                  className="text-accent hover:underline"
                >
                  {organization.email}
                </a>
              </p>
              <p>
                <span className="text-white/50">Phone: </span>
                <a
                  href={`tel:${organization.telephone}`}
                  className="text-accent hover:underline"
                >
                  {organization.telephoneDisplay}
                </a>
              </p>
              <p>
                <span className="text-white/50">WhatsApp: </span>
                <a
                  href={organization.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Message us
                </a>
              </p>
            </div>

            <div
              className="flex flex-wrap items-center gap-4"
              aria-label="Social media links"
            >
              <a
                href={organization.sameAs[0]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:border-accent/40 hover:text-accent"
              >
                <Linkedin className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </a>
              <a
                href={organization.sameAs[1]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:border-accent/40 hover:text-accent"
              >
                <Facebook className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </a>
            </div>

            <p className="text-sm text-white/55">
              Prefer to browse first? See our{" "}
              <Link href="/services" className="text-accent hover:underline">
                services
              </Link>{" "}
              or learn{" "}
              <Link href="/about" className="text-accent hover:underline">
                about us
              </Link>
              .
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </SiteShell>
  );
}
