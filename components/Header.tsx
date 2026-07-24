"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteName } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[45] border-b border-white/5 bg-[#01030b]/55 backdrop-blur-xl supports-[backdrop-filter]:bg-[#01030b]/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 transition hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative flex h-10 w-10 items-center justify-center rounded-[12px] p-1.5"
            style={{
              background:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              className="relative h-full w-full overflow-hidden rounded-[9px] p-0.5"
              style={{ backgroundColor: "#F8F9FA" }}
            >
              <Image
                src="/logo-2.png"
                alt={siteName}
                width={64}
                height={64}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <span className="text-base font-bold text-white sm:text-lg">{siteName}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                isActive(link.href)
                  ? "bg-white/10 text-accent"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Get Started
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-white/10 px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive(link.href)
                      ? "bg-white/10 text-accent"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
