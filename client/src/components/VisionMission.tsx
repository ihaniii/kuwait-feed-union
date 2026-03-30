/*
 * Gulf Elegance Design — Vision & Mission Section
 * Side-by-side cards with navy background and gold accents
 * Elegant card design with icon motifs
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Eye, Target } from "lucide-react";

const VALUES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071042274/DinC845nzABEPMcko7yJf5/values-pattern-fCLLq7otUNpoKbzgc3EkTx.webp";

export default function VisionMission() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      id="vision"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={VALUES_IMG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--color-cream)]/95" />
      </div>

      <div ref={ref} className="container relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="inline-block text-sm font-semibold text-[var(--color-gold-dark)] uppercase tracking-widest mb-3"
            style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
          >
            {t("vision.label")} & {t("mission.label")}
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-navy)] leading-tight"
            style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
          >
            {isAr ? "الرؤية والرسالة" : "Vision & Mission"}
          </h2>
          <div className="gold-line w-20 mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <div
            className={`group relative bg-white rounded-2xl p-8 md:p-10 shadow-lg shadow-[var(--color-navy)]/5 border border-[var(--color-gold)]/10 hover:shadow-xl hover:shadow-[var(--color-gold)]/10 transition-all duration-500 hover:-translate-y-1 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="w-14 h-14 rounded-xl bg-[var(--color-navy)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-7 h-7 text-[var(--color-gold)]" />
            </div>
            <h3
              className="text-2xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
            >
              {t("vision.title")}
            </h3>
            <div className="w-12 h-0.5 bg-[var(--color-gold)] mb-6" />
            <p
              className="text-lg text-[var(--color-navy)]/70 leading-relaxed"
              style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
            >
              {t("vision.text")}
            </p>
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold)]/5 -translate-y-1/2 translate-x-1/2 rounded-full" />
            </div>
          </div>

          {/* Mission Card */}
          <div
            className={`group relative bg-[var(--color-navy)] rounded-2xl p-8 md:p-10 shadow-lg shadow-[var(--color-navy)]/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="w-14 h-14 rounded-xl bg-[var(--color-gold)]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-7 h-7 text-[var(--color-gold)]" />
            </div>
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
            >
              {t("mission.title")}
            </h3>
            <div className="w-12 h-0.5 bg-[var(--color-gold)] mb-6" />
            <p
              className="text-lg text-white/70 leading-relaxed"
              style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
            >
              {t("mission.text")}
            </p>
            {/* Decorative corner */}
            <div className="absolute bottom-0 left-0 w-20 h-20 overflow-hidden rounded-bl-2xl">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-gold)]/10 translate-y-1/2 -translate-x-1/2 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
