/*
 * Gulf Elegance Design — About Section
 * Asymmetric 60/40 split with image and content card
 * Gold accent lines, fade-in-up animations
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071042274/DinC845nzABEPMcko7yJf5/about-section-D4kCVwLLgXm6FvqUz6cKmX.webp";

export default function About() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div ref={ref} className="container">
        <div className={`grid lg:grid-cols-5 gap-12 lg:gap-16 items-center ${isAr ? "direction-rtl" : ""}`}>
          {/* Image Column (2/5) */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--color-gold)]/10 rounded-2xl -rotate-3" />
              <img
                src={ABOUT_IMG}
                alt="Feed processing facility"
                className="relative rounded-2xl shadow-2xl shadow-[var(--color-navy)]/10 w-full aspect-[4/3] object-cover"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[var(--color-navy)] text-white px-6 py-3 rounded-xl shadow-lg">
                <p
                  className="text-sm font-bold text-[var(--color-gold)]"
                  style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
                >
                  {isAr ? "الاتحاد الكويتي لتجار الأعلاف" : "Kuwaiti Union for Feed Dealers"}
                </p>
              </div>
            </div>
          </div>

          {/* Content Column (3/5) */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Label */}
            <span
              className="inline-block text-sm font-semibold text-[var(--color-gold-dark)] uppercase tracking-widest mb-3"
              style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
            >
              {t("about.label")}
            </span>

            {/* Title */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-6 leading-tight"
              style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
            >
              {t("about.title")}
            </h2>

            {/* Gold line */}
            <div className="gold-line w-20 mb-8" />

            {/* Text */}
            <p
              className="text-lg text-[var(--color-navy)]/70 leading-relaxed mb-8"
              style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
            >
              {t("about.text")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: isAr ? "٢٠٢٥" : "2025", label: isAr ? "سنة التأسيس" : "Established" },
                { num: isAr ? "الكويت" : "Kuwait", label: isAr ? "المقر الرئيسي" : "Headquarters" },
                { num: isAr ? "٥" : "5", label: isAr ? "خدمات رئيسية" : "Core Services" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-start">
                  <p
                    className="text-2xl md:text-3xl font-bold text-[var(--color-gold-dark)]"
                    style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
                  >
                    {stat.num}
                  </p>
                  <p
                    className="text-sm text-[var(--color-navy)]/50 mt-1"
                    style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
