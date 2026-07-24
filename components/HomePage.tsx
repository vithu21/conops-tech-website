"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Zap,
  Headphones,
  TrendingUp,
  Linkedin,
  Facebook,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBubbleBackground from "@/components/HeroBubbleBackground";
import PageAtmosphere from "@/components/PageAtmosphere";
import { features, organization, siteName } from "@/lib/site";
import { services } from "@/lib/services";

const ContactForm = dynamic(() => import("@/components/ContactForm"));

const featureIcons: Record<(typeof features)[number]["icon"], LucideIcon> = {
  ShieldCheck,
  Zap,
  Headphones,
  TrendingUp,
};

const fadeInUp: Variants = {
  hidden: { opacity: 0.35, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0.6 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const splashShown = sessionStorage.getItem("splashShown");
    if (splashShown === "true") return;

    const start = window.setTimeout(() => setShowSplash(true), 0);
    const end = window.setTimeout(() => {
      setShowSplash(false);
      sessionStorage.setItem("splashShown", "true");
    }, 2800);

    return () => {
      window.clearTimeout(start);
      window.clearTimeout(end);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#01030b]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            aria-hidden
          >
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div
                className="relative flex h-40 w-40 items-center justify-center rounded-[32px] p-6 backdrop-blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  className="relative z-10 h-28 w-28 overflow-hidden rounded-[26px] p-2.5"
                  style={{ backgroundColor: "#F8F9FA" }}
                >
                  <Image
                    src="/logo-2.png"
                    alt=""
                    width={256}
                    height={64}
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative isolate min-h-screen overflow-hidden">
        <PageAtmosphere intensity="full" />

        <Header />

        <main className="pt-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 py-16 lg:px-8">
            <motion.section
              className="relative min-h-[70vh] space-y-10 py-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <HeroBubbleBackground />

              <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                <motion.div
                  className="relative flex h-40 w-40 items-center justify-center rounded-[32px] p-6 shadow-2xl backdrop-blur-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  animate={{
                    boxShadow: [
                      "0 8px 32px rgba(99, 102, 241, 0.3), 0 0 0 1px rgba(99, 102, 241, 0.2)",
                      "0 8px 48px rgba(16, 185, 129, 0.4), 0 0 0 1px rgba(16, 185, 129, 0.3)",
                      "0 8px 32px rgba(99, 102, 241, 0.3), 0 0 0 1px rgba(99, 102, 241, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className="relative z-10 h-28 w-28 overflow-hidden rounded-[26px] p-2.5"
                    style={{ backgroundColor: "#F8F9FA" }}
                  >
                    <Image
                      src="/logo-2.png"
                      width={256}
                      height={64}
                      priority
                      alt={siteName}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </motion.div>
                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  {siteName}
                </h1>
                <p className="text-sm uppercase tracking-[0.4rem] text-white/60">
                  IT Services & Solutions
                </p>
              </div>

              <div className="relative z-10 space-y-8 text-center">
                <motion.p
                  className="bg-gradient-to-r from-accent to-primary bg-clip-text text-2xl font-bold uppercase tracking-[0.3rem] text-transparent sm:text-3xl lg:text-4xl"
                  animate={{ opacity: [0.85, 1, 0.85] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Connecting Your Operations
                </motion.p>
                <p className="mx-auto max-w-3xl text-lg text-white/80 sm:text-xl">
                  We deliver cloud infrastructure, automation, and strategic IT
                  services that help your business scale efficiently.
                </p>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold uppercase tracking-[0.2rem] text-white shadow-lg transition hover:scale-105 hover:opacity-90 hover:shadow-xl"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold uppercase tracking-[0.2rem] text-white backdrop-blur-sm transition hover:scale-105 hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </motion.section>

            <motion.section
              className="relative space-y-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
            >
              <div className="space-y-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.4rem] text-accent">
                  Why Choose Us
                </p>
                <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Excellence in IT Solutions
                </h2>
                <p className="mx-auto max-w-3xl text-base text-white/80 sm:text-lg">
                  Expert team delivering measurable results for your business.
                </p>
              </div>

              <motion.div
                className="relative grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {features.map((feature) => {
                  const IconComponent = featureIcons[feature.icon];
                  return (
                    <motion.article
                      key={feature.title}
                      variants={fadeInUp}
                      className="group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:bg-white/10"
                    >
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="relative z-10 h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      <p className="text-sm leading-relaxed text-white/75">
                        {feature.description}
                      </p>
                    </motion.article>
                  );
                })}
              </motion.div>
            </motion.section>

            <motion.section
              id="services"
              className="space-y-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
            >
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.4rem] text-white/60">
                    Our Services
                  </p>
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Complete IT Solutions
                  </h2>
                </div>
                <Link
                  href="/services"
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-xs uppercase tracking-[0.4rem] text-white/70 backdrop-blur-sm transition hover:border-accent/40 hover:text-accent"
                >
                  View all
                </Link>
              </div>

              <motion.div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {services.map((service) => (
                  <motion.article
                    key={service.slug}
                    variants={fadeInUp}
                    className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-accent/40 hover:bg-white/10 hover:shadow-glow"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-3xl transition group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      <Link
                        href={`/services/${service.slug}`}
                        className="transition hover:text-accent"
                      >
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      {service.shortDescription}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-auto text-sm font-medium text-accent transition hover:underline"
                    >
                      Learn more →
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            </motion.section>

            <motion.section
              id="contact"
              className="grid min-w-0 gap-6 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-glow backdrop-blur-sm sm:gap-8 sm:rounded-[32px] sm:p-6 md:grid-cols-[1.2fr_1fr] md:gap-8 md:p-8 lg:p-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
            >
              <div className="min-w-0 space-y-6">
                <p className="text-xs uppercase tracking-[0.35rem] text-accent">
                  Contact Us
                </p>
                <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  Ready to Transform Your IT Operations?
                </h2>
                <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                  Share your requirements and we&apos;ll respond with a tailored
                  strategy, timelines, and honest advice. Every engagement starts
                  with a conversation about outcomes, not buzzwords.
                </p>
                <div
                  className="social-links flex flex-wrap items-center justify-center gap-6 sm:gap-8"
                  aria-label="Social media links"
                >
                  <a
                    href={organization.sameAs[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:scale-110 hover:border-accent/40 hover:text-accent sm:h-14 sm:w-14"
                  >
                    <Linkedin className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} aria-hidden />
                  </a>
                  <a
                    href={organization.sameAs[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:scale-110 hover:border-accent/40 hover:text-accent sm:h-14 sm:w-14"
                  >
                    <Facebook className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} aria-hidden />
                  </a>
                  <a
                    href={organization.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:scale-110 hover:border-accent/40 hover:text-accent sm:h-14 sm:w-14"
                  >
                    <svg
                      className="h-6 w-6 sm:h-7 sm:w-7 [&>path]:fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex text-sm font-medium text-accent hover:underline"
                >
                  Open full contact page →
                </Link>
              </div>
              <ContactForm />
            </motion.section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
