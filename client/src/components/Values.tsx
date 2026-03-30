/*
 * Gulf Elegance Design — Values Section
 * Four value cards in a staggered grid
 * White background with gold accent borders
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Shield, Award, Handshake, Leaf } from "lucide-react";

const valueItems = [
  { key: "transparency", icon: Shield },
  { key: "quality", icon: Award },
  { key: "collaboration", icon: Handshake },
  { key: "sustainability", icon: Leaf },
];

export default function Values() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="values" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-gold)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

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
            {t("values.label")}
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-navy)] leading-tight"
            style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
          >
            {t("values.title")}
          </h2>
          <div className="gold-line w-20 mx-auto mt-6" />
        </div>

        {/* Value Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {valueItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.key}
                className={`group relative bg-[var(--color-warm-gray)] rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-[var(--color-navy)]/5 transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[var(--color-gold)]/20 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--color-navy)] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[var(--color-gold-dark)] group-hover:text-[var(--color-gold)] transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-[var(--color-navy)] mb-3"
                  style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
                >
                  {t(`values.${item.key}`)}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-[var(--color-navy)]/60 leading-relaxed"
                  style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
                >
                  {t(`values.${item.key}.desc`)}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-gold)] group-hover:w-1/2 transition-all duration-500 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
