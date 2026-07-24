import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import { siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `Page not found | ${siteName}`,
  },
  description: "The page you requested could not be found on ConOps Tech.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <SiteShell>
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.4rem] text-accent">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-white/70">
          The page you are looking for does not exist or may have moved. Use the
          links below to continue.
        </p>
        <nav
          aria-label="Helpful links"
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/"
            className="rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Contact
          </Link>
        </nav>
      </div>
    </SiteShell>
  );
}
