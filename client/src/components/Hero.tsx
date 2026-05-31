/*
 * Gulf Elegance Design — Hero Section
 * Full-width panoramic hero with overlay content card
 * Deep navy overlay with gold accents, parallax-ready
 * Clean banner without logo/badge — those remain in navbar only
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071042274/DinC845nzABEPMcko7yJf5/hero-bg-96bqCNhM5EZTCQpd482sPu.webp";

export default function Hero() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Kuwait skyline with feed industry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy)]/80 via-[var(--color-navy)]/60 to-[var(--color-navy)]/90" />
      </div>

      {/* Decorative gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 container pt-24 pb-16">
        <div className={`max-w-4xl ${isAr ? "mr-0 ml-auto text-end" : "ml-0 mr-auto text-start"}`}>
          {/* Main Title */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 animate-fade-in-up"
            style={{
              fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)",
              animationDelay: "0.3s",
              animationFillMode: "both",
            }}
          >
            {isAr ? "الاتحاد الكويتي لتجار الأعلاف" : "Kuwaiti Union for Feed Dealers"}
          </h1>

          {/* Gold accent line */}
          <div
            className={`w-24 h-1 bg-[var(--color-gold)] mb-8 animate-fade-in ${isAr ? "ml-auto" : ""}`}
            style={{ animationDelay: "0.5s", animationFillMode: "both" }}
          />

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed animate-fade-in-up"
            style={{
              fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)",
              animationDelay: "0.7s",
              animationFillMode: "both",
              marginInlineStart: isAr ? "auto" : "0",
            }}
          >
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 animate-fade-in-up ${isAr ? "justify-end" : ""}`}
            style={{ animationDelay: "0.9s", animationFillMode: "both" }}
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold rounded-lg hover:bg-[var(--color-gold-light)] transition-all duration-300 shadow-lg shadow-[var(--color-gold)]/20 hover:shadow-xl hover:shadow-[var(--color-gold)]/30 hover:-translate-y-0.5"
              style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
            >
              {t("hero.cta")}
            </a>
            <a
              href="#membership"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#membership")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:-translate-y-0.5"
              style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
            >
              {t("hero.cta2")}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[var(--color-gold)]/60" />
      </div>
    </section>
  );
}
