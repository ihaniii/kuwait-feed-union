/*
 * Gulf Elegance Design — Navbar
 * Frosted glass sticky nav, gold accent underlines, smooth language toggle
 * Navy (#0A1628) + Gold (#C8A45C) palette
 */
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Globe } from "lucide-react";

const navItems = [
  { key: "nav.about", href: "#about" },
  { key: "nav.vision", href: "#vision" },
  { key: "nav.values", href: "#values" },
  { key: "nav.services", href: "#services" },
  { key: "nav.membership", href: "#membership" },
  { key: "nav.contact", href: "#contact" },
];

export default function Navbar() {
  const { lang, t, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/5 border-b border-[var(--color-gold)]/10"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo / Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-lg bg-[var(--color-navy)] flex items-center justify-center">
            <span className="text-[var(--color-gold)] font-bold text-lg" style={{ fontFamily: lang === "ar" ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}>
              {lang === "ar" ? "ا" : "K"}
            </span>
          </div>
          <div className="hidden sm:block">
            <p
              className={`text-sm font-bold leading-tight ${scrolled ? "text-[var(--color-navy)]" : "text-white"}`}
              style={{ fontFamily: lang === "ar" ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
            >
              {lang === "ar" ? "الاتحاد الكويتي" : "Kuwait Feed"}
            </p>
            <p
              className={`text-xs leading-tight ${scrolled ? "text-[var(--color-navy)]/70" : "text-white/70"}`}
              style={{ fontFamily: lang === "ar" ? "var(--font-body-ar)" : "var(--font-body-en)" }}
            >
              {lang === "ar" ? "لتجارة الأعلاف" : "Trade Union"}
            </p>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.href)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 group ${
                scrolled ? "text-[var(--color-navy)]/80 hover:text-[var(--color-navy)]" : "text-white/80 hover:text-white"
              }`}
              style={{ fontFamily: lang === "ar" ? "var(--font-body-ar)" : "var(--font-body-en)" }}
            >
              {t(item.key)}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-gold)] transition-all duration-300 group-hover:w-3/4" />
            </button>
          ))}
        </div>

        {/* Language Toggle + Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
              scrolled
                ? "border-[var(--color-gold)]/30 text-[var(--color-navy)] hover:bg-[var(--color-gold)]/10"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
            style={{ fontFamily: lang === "ar" ? "var(--font-body-en)" : "var(--font-body-ar)" }}
          >
            <Globe className="w-3.5 h-3.5" />
            {t("lang.switch")}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[var(--color-navy)] hover:bg-[var(--color-navy)]/5" : "text-white hover:bg-white/10"
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-[var(--color-gold)]/10 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-start px-4 py-3 text-[var(--color-navy)] hover:bg-[var(--color-gold)]/10 rounded-lg transition-colors text-sm font-medium"
              style={{ fontFamily: lang === "ar" ? "var(--font-body-ar)" : "var(--font-body-en)" }}
            >
              {t(item.key)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
