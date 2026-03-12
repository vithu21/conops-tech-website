"use client";

import { FormEvent, useState, useRef, useEffect } from "react";

const COUNTRY_CODES = [
  { code: "+94", label: "Sri Lanka (+94)" },
  { code: "+91", label: "India (+91)" },
  { code: "+1", label: "USA (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+61", label: "Australia (+61)" },
  { code: "+41", label: "Switzerland (+41)" },
  { code: "+7", label: "Russia (+7)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+65", label: "Singapore (+65)" },
  { code: "+81", label: "Japan (+81)" },
  { code: "+49", label: "Germany (+49)" },
  { code: "+33", label: "France (+33)" },
] as const;

const DEFAULT_COUNTRY = "+94";

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [countryCode, setCountryCode] = useState(DEFAULT_COUNTRY);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownSearch, setDropdownSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = COUNTRY_CODES.filter(
    (c) =>
      c.label.toLowerCase().includes(dropdownSearch.toLowerCase()) ||
      c.code.includes(dropdownSearch)
  );

  const selectedCountry = COUNTRY_CODES.find((c) => c.code === countryCode);

  const validatePhone = (raw: string): string => {
    const digits = raw.replace(/\D/g, "");
    if (digits.length === 0) return "Phone number is required.";
    if (digits.length < 7) return "Enter at least 7 digits.";
    return "";
  };

  const handlePhoneChange = (raw: string) => {
    const digits = raw.replace(/\D/g, "");
    setPhoneNumber(digits);
    setPhoneError("");
  };

  const handlePhoneBlur = () => {
    setPhoneError(validatePhone(phoneNumber));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const error = validatePhone(phoneNumber);
    if (error) {
      setPhoneError(error);
      return;
    }
    setPhoneError("");

    const combinedPhone = `${countryCode}${phoneNumber}`;
    if (!values.name || !values.email || !values.message) {
      setStatus("Please fill in every field before sending.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending your message...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "54d942a8-8283-45ca-bdcc-054d7ebdb25c",
          name: values.name,
          email: values.email,
          phone: combinedPhone,
          message: values.message,
          subject: `New inquiry from ${values.name} - ConOps Tech`,
          from_name: "ConOps Tech Website",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Message sent successfully! We'll respond within 24 hours.");
        setValues({ name: "", email: "", phone: "", message: "" });
        setCountryCode(DEFAULT_COUNTRY);
        setPhoneNumber("");
      } else {
        console.error("Web3Forms error:", result);
        // Fallback to mailto
        const subject = encodeURIComponent(`New inquiry from ${values.name} - ConOps Tech`);
        const body = encodeURIComponent(
          `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${combinedPhone}\n\nMessage:\n${values.message}`
        );
        window.location.href = `mailto:hello.conopstech@gmail.com?subject=${subject}&body=${body}`;
        setStatus("⚠️ Opening your email client. Please send the message manually.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Fallback to mailto on error
      const subject = encodeURIComponent(`New inquiry from ${values.name} - ConOps Tech`);
      const body = encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${combinedPhone}\n\nMessage:\n${values.message}`
      );
      window.location.href = `mailto:hello.conopstech@gmail.com?subject=${subject}&body=${body}`;
      setStatus("⚠️ Opening your email client. Please send the message manually.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) {
    return (
      <div
        className="min-w-0 w-full space-y-4 overflow-x-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-glow backdrop-blur-xl sm:rounded-3xl sm:p-6"
        aria-label="Contact form loading"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="h-12 min-w-0 rounded-2xl bg-white/5 sm:h-14" />
          <div className="h-12 min-w-0 rounded-2xl bg-white/5 sm:h-14" />
        </div>
        <div className="h-12 min-w-0 rounded-2xl bg-white/5 sm:h-14" />
        <div className="h-28 min-w-0 rounded-2xl bg-white/5 sm:h-36" />
        <div className="h-12 min-w-0 rounded-2xl bg-white/5" />
      </div>
    );
  }

  return (
    <form
      aria-label="Contact form"
      onSubmit={handleSubmit}
      className="min-w-0 w-full space-y-4 overflow-x-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-glow backdrop-blur-xl sm:rounded-3xl sm:p-6"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex min-w-0 flex-col gap-2 text-xs uppercase tracking-[0.15rem] text-white/70 sm:text-sm sm:tracking-[0.24rem]">
          Name
          <input
            className="min-w-0 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-base text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
            type="text"
            name="name"
            value={values.name}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
            required
          />
        </label>
        <label className="flex min-w-0 flex-col gap-2 text-xs uppercase tracking-[0.15rem] text-white/70 sm:text-sm sm:tracking-[0.24rem]">
          Email
          <input
            className="min-w-0 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-base text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
            type="email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            required
          />
        </label>
      </div>
      <div className="flex min-w-0 flex-col gap-2">
        <label htmlFor="phone-input" className="text-xs uppercase tracking-[0.15rem] text-white/70 sm:text-sm sm:tracking-[0.24rem]">
          Phone Number
        </label>
        <div
          ref={dropdownRef}
          className="flex min-w-0 overflow-visible rounded-2xl border border-white/10 bg-white/5 outline-none transition duration-200 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/40"
        >
          {/* Country code dropdown (searchable) */}
          <div className="relative z-0 shrink-0">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDropdownOpen((o) => !o);
              }}
              className="flex h-full min-h-[48px] min-w-0 shrink-0 items-center gap-1 border-r border-white/10 bg-white/5 px-2.5 py-3 text-left text-sm text-white outline-none transition hover:bg-white/10 focus:bg-white/10 sm:min-h-[52px] sm:gap-1.5 sm:px-4 sm:text-base"
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
              aria-label="Country code"
            >
              <span className="truncate">{selectedCountry?.label ?? `${countryCode}`}</span>
              <svg className="h-4 w-4 shrink-0 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div
                className="absolute left-0 top-full z-50 mt-1 flex max-h-72 min-w-[12rem] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0f172a]/95 shadow-xl backdrop-blur-xl sm:min-w-[14rem]"
                role="listbox"
              >
                <div className="shrink-0 border-b border-white/10 px-2 py-1.5">
                  <input
                    type="text"
                    placeholder="Search country..."
                    value={dropdownSearch}
                    onChange={(e) => setDropdownSearch(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white placeholder-white/50 outline-none focus:border-accent/50"
                    aria-label="Search country"
                  />
                </div>
                <ul className="max-h-52 overflow-y-auto py-1" role="listbox">
                  {filteredCountries.map((c) => (
                    <li key={c.code} role="option" aria-selected={countryCode === c.code}>
                      <button
                        type="button"
                        onClick={() => {
                          setCountryCode(c.code);
                          setDropdownOpen(false);
                          setDropdownSearch("");
                        }}
                        className={`w-full px-3 py-2.5 text-left text-sm transition hover:bg-white/10 ${
                          countryCode === c.code ? "bg-accent/20 text-accent" : "text-white"
                        }`}
                      >
                        {c.label}
                      </button>
                    </li>
                  ))}
                  {filteredCountries.length === 0 && (
                    <li className="px-3 py-2 text-sm text-white/50">No match</li>
                  )}
                </ul>
              </div>
            )}
          </div>
          <input
            id="phone-input"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            name="phone"
            value={phoneNumber}
            onChange={(e) => handlePhoneChange(e.target.value)}
            onBlur={handlePhoneBlur}
            placeholder="75 537 3553"
            className="min-w-0 flex-1 border-0 bg-transparent px-3 py-3 text-base text-white placeholder-white/40 outline-none sm:px-4"
            aria-required
            aria-invalid={!!phoneError}
            aria-describedby={phoneError ? "phone-error" : undefined}
          />
        </div>
        {phoneError && (
          <p id="phone-error" className="text-sm text-red-400" role="alert">
            {phoneError}
          </p>
        )}
      </div>
      <label className="flex min-w-0 flex-col gap-2 text-xs uppercase tracking-[0.15rem] text-white/70 sm:text-sm sm:tracking-[0.24rem]">
        Message
        <textarea
          className="min-h-[120px] w-full min-w-0 rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-base text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40 sm:min-h-[140px]"
          name="message"
          value={values.message}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, message: event.target.value }))
          }
          required
        />
      </label>
      <div className="flex flex-col gap-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-2xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-base font-semibold uppercase tracking-wide text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Reach out"}
        </button>
        {status && (
          <p className="text-sm text-white/70" role="status">
            {status}
          </p>
        )}
      </div>
    </form>
  );
}

