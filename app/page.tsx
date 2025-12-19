"use client";

import Image from "next/image";
import ContactForm from "../components/ContactForm";
import { motion, type Variants } from "framer-motion";

const services = [
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description:
      "Modern cloud architecture and deployment automation for faster delivery.",
  },
  {
    icon: "⚡",
    title: "Enterprise Automation",
    description:
      "Streamline workflows with intelligent automation and orchestration.",
  },
  {
    icon: "🎯",
    title: "IT Strategy & Advisory",
    description:
      "Actionable roadmaps for compliance, modernization, and growth.",
  },
  {
    icon: "🏢",
    title: "ERP Solutions",
    description:
      "Integrated business management systems for seamless operations.",
  },
  {
    icon: "🛠️",
    title: "IT Support",
    description:
      "24/7 technical support and maintenance for your IT infrastructure.",
  },
];

const features = [
  {
    title: "Proven Expertise",
    description: "Mission-critical IT solutions across diverse industries.",
  },
  {
    title: "Agile Approach",
    description: "Fast iterations and transparent communication.",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical assistance.",
  },
  {
    title: "Scalable Growth",
    description: "Solutions designed to grow with your business.",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

export default function Home() {
  return (
    <>
      <main className="relative isolate min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,.3),_transparent_55%)]" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,.25),transparent_45%)]" />
        
        {/* Floating Animated Shapes */}
        <motion.div
          className="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-primary/20 blur-3xl"
          animate={{
            y: [0, 80, 0],
            x: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-[10%] top-[30%] h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl"
          animate={{
            y: [0, -80, 0],
            x: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[15%] left-[15%] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl"
          animate={{
            y: [0, 60, 0],
            x: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-[20%] bottom-[25%] h-80 w-80 rounded-full bg-purple-500/15 blur-3xl"
          animate={{
            y: [0, -70, 0],
            x: [0, 60, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Animated Grid Overlay */}
        <motion.div
          className="absolute inset-0 -z-5"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
        
        <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 py-16 lg:px-8">
          {/* Hero Section */}
          <motion.section 
            className="relative space-y-10"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {/* Hero Background Animations - Modern Style */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              {/* Large Morphing Blob */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="h-full w-full rounded-[40%] bg-gradient-to-br from-primary/25 via-accent/20 to-blue-500/25 blur-[80px]" />
              </motion.div>
              
              {/* Rotating Geometric Shapes */}
              <motion.div
                className="absolute left-[15%] top-[25%] h-64 w-64"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="h-full w-full bg-gradient-to-tr from-primary/20 to-transparent blur-2xl" 
                     style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
              </motion.div>
              
              <motion.div
                className="absolute right-[15%] top-[35%] h-72 w-72"
                animate={{
                  rotate: [360, 0],
                  scale: [1.2, 1, 1.2],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="h-full w-full rounded-full bg-gradient-to-bl from-accent/20 to-transparent blur-2xl" />
              </motion.div>
              
              {/* Pulse Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`ring-${i}`}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [0.8, 2.5],
                    opacity: [0.4, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: i * 1.3,
                  }}
                >
                  <div className="h-[400px] w-[400px] rounded-full border-2 border-primary/30" />
                </motion.div>
              ))}
              
              {/* Diagonal Flowing Lines */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`diagonal-${i}`}
                  className="absolute h-[600px] w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent"
                  style={{
                    left: `${25 + i * 20}%`,
                    top: '-10%',
                    transform: 'rotate(15deg)',
                  }}
                  animate={{
                    opacity: [0, 0.6, 0],
                    y: [0, 100],
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.8,
                  }}
                />
              ))}
              
              {/* Particle Grid */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute h-1 w-1 rounded-full bg-white/40"
                  style={{
                    left: `${(i * 5 + 10) % 90}%`,
                    top: `${20 + (i % 5) * 15}%`,
                  }}
                  animate={{
                    scale: [0, 2, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 3 + (i % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (i * 0.2) % 3,
                  }}
                />
              ))}
            </div>
            
            <div className="flex flex-col items-center gap-6 text-center">
              <motion.div 
                className="flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(99, 102, 241, 0.3)",
                    "0 0 40px rgba(16, 185, 129, 0.4)",
                    "0 0 20px rgba(99, 102, 241, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/logo-2.png"
                  alt="ConOps Tech logo"
                  width={96}
                  height={96}
                  className="h-24 w-24 object-contain"
                  priority
                />
              </motion.div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                ConOps Tech
              </h1>
              <p className="text-sm uppercase tracking-[0.4rem] text-white/60">
                IT Services & Solutions
              </p>
            </div>
            
            <div className="space-y-8 text-center">
              <motion.p 
                className="bg-gradient-to-r from-accent to-primary bg-clip-text text-2xl font-bold uppercase tracking-[0.3rem] text-transparent sm:text-3xl lg:text-4xl"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Connecting Your Operations
              </motion.p>
              <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Modern IT Solutions for Business Growth
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-white/80 sm:text-xl">
                We deliver cloud infrastructure, automation, and strategic IT services that help your business scale efficiently.
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold uppercase tracking-[0.2rem] text-white shadow-lg transition hover:scale-105 hover:opacity-90 hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold uppercase tracking-[0.2rem] text-white backdrop-blur-sm transition hover:scale-105 hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </motion.section>

          {/* Why Choose Us */}
          <motion.section 
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="space-y-4 text-center">
              <p className="text-xs uppercase tracking-[0.4rem] text-accent">Why Choose Us</p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Excellence in IT Solutions
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-white/70">
                Expert team delivering measurable results for your business.
              </p>
            </div>
            
            <motion.div 
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature) => (
                <motion.article
                  key={feature.title}
                  variants={fadeInUp}
                  className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-accent/40 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{feature.description}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.section>

          {/* Services Section */}
          <motion.section 
            id="services" 
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4rem] text-white/60">Our Services</p>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Complete IT Solutions
                </h2>
              </div>
              <div className="hidden rounded-full border border-white/20 bg-white/5 px-6 py-2 text-xs uppercase tracking-[0.4rem] text-white/60 backdrop-blur-sm sm:flex">
                Trusted Partner
              </div>
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
                  key={service.title}
                  variants={fadeInUp}
                  className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-accent/40 hover:bg-white/10 hover:shadow-glow"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-3xl transition group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{service.description}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            id="contact"
            className="grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-sm md:grid-cols-[1.2fr_1fr] lg:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.35rem] text-accent">Contact Us</p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Transform Your IT Operations?
              </h2>
              <p className="text-base leading-relaxed text-white/70">
                Share your requirements and we'll respond with a tailored strategy, timelines, and honest advice.
                Every engagement starts with a conversation about outcomes, not buzzwords.
              </p>
              <div className="space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
                  <a 
                    href="tel:+94755373553"
                    className="text-base transition hover:text-accent"
                  >
                    Phone · +94 75 537 3553
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-green-400" />
                  <a 
                    href="https://wa.me/94755373553" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base transition hover:text-accent"
                  >
                    WhatsApp · +94 75 537 3553
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                  <a 
                    href="mailto:mtvvithushan@gmail.com"
                    className="text-base transition hover:text-accent"
                  >
                    Email · mtvvithushan@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-blue-400" />
                  <a 
                    href="https://www.linkedin.com/company/conops-tech/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base transition hover:text-accent"
                  >
                    LinkedIn · ConOps Tech
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-white/40" />
                  <p className="text-base">Response within 24 hours</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#01030b]">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Company Info */}
            <div className="space-y-4 lg:col-span-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-2.png"
                  alt="ConOps Tech"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                />
                <span className="text-xl font-bold text-white">ConOps Tech</span>
              </div>
              <p className="max-w-md text-sm text-white/60">
                Delivering modern IT strategy, cloud-native engineering, and automation services for ambitious teams
                ready to scale.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3rem] text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="#services" className="transition hover:text-accent">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition hover:text-accent">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>Copyright © {new Date().getFullYear()} Conops Tech. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
