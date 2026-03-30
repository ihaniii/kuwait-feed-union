/*
 * Gulf Elegance Design — Services Section
 * Dark navy background with Islamic pattern overlay
 * Gold-accented service cards in offset grid
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Users, Scale, MessageSquare, Megaphone, TrendingUp } from "lucide-react";

const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071042274/DinC845nzABEPMcko7yJf5/services-bg-75GyWiY3nupj2c7UPrVJRo.webp";

const serviceItems = [
  { key: "representation", icon: Users },
  { key: "regulation", icon: Scale },
  { key: "advisory", icon: MessageSquare },
  { key: "awareness", icon: Megaphone },
  { key: "investment", icon: TrendingUp },
];

export default function Services() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={SERVICES_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--color-navy)]/85" />
      </div>

      <div ref={ref} className="container relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="inline-block text-sm font-semibold text-[var(--color-gold)] uppercase tracking-widest mb-3"
            style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
          >
            {t("services.label")}
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
          >
            {t("services.title")}
          </h2>
          <div className="w-20 h-0.5 bg-[var(--color-gold)] mx-auto mt-6" />
        </div>

        {/* Service Cards — top row 3, bottom row 2 centered */}
        <div className="max-w-6xl mx-auto">
          {/* Top row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {serviceItems.slice(0, 3).map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.key}
                  className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[var(--color-gold)]/30 transition-all duration-500 hover:-translate-y-1 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/15 flex items-center justify-center mb-5 group-hover:bg-[var(--color-gold)]/25 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[var(--color-gold)]" />
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-3"
                    style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
                  >
                    {t(`services.${item.key}`)}
                  </h3>
                  <p
                    className="text-sm text-white/60 leading-relaxed"
                    style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
                  >
                    {t(`services.${item.key}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom row — centered */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {serviceItems.slice(3).map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.key}
                  className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[var(--color-gold)]/30 transition-all duration-500 hover:-translate-y-1 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${0.5 + i * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/15 flex items-center justify-center mb-5 group-hover:bg-[var(--color-gold)]/25 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[var(--color-gold)]" />
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-3"
                    style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
                  >
                    {t(`services.${item.key}`)}
                  </h3>
                  <p
                    className="text-sm text-white/60 leading-relaxed"
                    style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
                  >
                    {t(`services.${item.key}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
