/*
 * Gulf Elegance Design — Membership Section
 * Split layout with image and benefits list
 * White background, gold accents, elegant card design
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { UserCheck, Lightbulb, Network, BarChart3, ArrowRight, ArrowLeft } from "lucide-react";

const MEMBERSHIP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071042274/DinC845nzABEPMcko7yJf5/membership-section-WN3HfeBnx7mv24vMMnrBFw.webp";

const benefits = [
  { key: "benefit1", icon: UserCheck },
  { key: "benefit2", icon: Lightbulb },
  { key: "benefit3", icon: Network },
  { key: "benefit4", icon: BarChart3 },
];

export default function Membership() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const { ref, isVisible } = useScrollReveal(0.15);
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <section id="membership" className="py-24 md:py-32 bg-[var(--color-warm-gray)] relative overflow-hidden">
      <div ref={ref} className="container">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } ${isAr ? "lg:order-2" : "lg:order-1"}`}
          >
            <span
              className="inline-block text-sm font-semibold text-[var(--color-gold-dark)] uppercase tracking-widest mb-3"
              style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
            >
              {t("membership.label")}
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-6 leading-tight"
              style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
            >
              {t("membership.title")}
            </h2>
            <div className="gold-line w-20 mb-8" />
            <p
              className="text-lg text-[var(--color-navy)]/70 leading-relaxed mb-10"
              style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
            >
              {t("membership.text")}
            </p>

            {/* Benefits grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.key}
                    className={`flex items-start gap-4 p-4 bg-white rounded-xl border border-[var(--color-gold)]/10 transition-all duration-500 hover:shadow-md hover:border-[var(--color-gold)]/20 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-navy)] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[var(--color-gold)]" />
                    </div>
                    <div>
                      <h4
                        className="font-bold text-[var(--color-navy)] text-sm mb-1"
                        style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
                      >
                        {t(`membership.${item.key}`)}
                      </h4>
                      <p
                        className="text-xs text-[var(--color-navy)]/50"
                        style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
                      >
                        {t(`membership.${item.key}.desc`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold rounded-lg hover:bg-[var(--color-gold-light)] transition-all duration-300 shadow-lg shadow-[var(--color-gold)]/20 hover:shadow-xl hover:shadow-[var(--color-gold)]/30 hover:-translate-y-0.5"
              style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
            >
              {t("membership.cta")}
              <Arrow className="w-4 h-4" />
            </a>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } ${isAr ? "lg:order-1" : "lg:order-2"}`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--color-navy)]/5 rounded-2xl rotate-2" />
              <img
                src={MEMBERSHIP_IMG}
                alt="Business meeting"
                className="relative rounded-2xl shadow-2xl shadow-[var(--color-navy)]/10 w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
