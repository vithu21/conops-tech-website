"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { organization, siteDescription, siteName } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#01030b]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-20 left-0 right-0 h-64">
          <svg
            className="absolute bottom-0 w-full"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,112C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="url(#waveGradient)"
              opacity="0.3"
            />
            <path
              d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,213.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="url(#waveGradient2)"
              opacity="0.2"
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <motion.div
          className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 top-32 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:p-12">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6 lg:col-span-2">
              <div className="flex items-center gap-3">
                <div
                  className="relative flex h-14 w-14 items-center justify-center rounded-[18px] p-2"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div
                    className="relative h-full w-full overflow-hidden rounded-[14px] p-1"
                    style={{ backgroundColor: "#F8F9FA" }}
                  >
                    <Image
                      src="/logo-2.png"
                      alt={siteName}
                      width={128}
                      height={32}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <span className="text-xl font-bold text-white">{siteName}</span>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-white/70">
                {siteDescription}
              </p>
              <div className="space-y-2 text-sm text-white/60">
                <p className="flex items-center gap-2">
                  <span className="text-accent" aria-hidden>
                    📧
                  </span>
                  <a
                    href={`mailto:${organization.email}`}
                    className="transition hover:text-accent"
                  >
                    {organization.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-accent" aria-hidden>
                    📱
                  </span>
                  <a
                    href={`tel:${organization.telephone}`}
                    className="transition hover:text-accent"
                  >
                    {organization.telephoneDisplay}
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Services.
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="transition hover:text-accent"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Quick Links.
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <Link href="/about" className="transition hover:text-accent">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="transition hover:text-accent">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition hover:text-accent">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href={organization.sameAs[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-accent"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={organization.sameAs[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-accent"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-sm text-white/60">
              Copyright © {new Date().getFullYear()} {siteName}. All Rights Reserved.
            </p>

            <div
              className="footer-social flex items-center justify-center gap-4"
              aria-label="Social media links"
            >
              <a
                href={organization.sameAs[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all duration-200 hover:scale-110 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={organization.sameAs[1]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all duration-200 hover:scale-110 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={organization.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all duration-200 hover:scale-110 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
