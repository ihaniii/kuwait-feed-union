/*
 * Gulf Elegance Design — Contact Section
 * Clean contact info cards with navy background accent
 * Gold highlights, elegant card layout
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const { ref, isVisible } = useScrollReveal(0.15);

  const contactItems = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "kuwaitufd@gmail.com",
      href: "mailto:kuwaitufd@gmail.com",
    },
    {
      icon: MapPin,
      label: t("contact.address"),
      value: t("contact.address.value"),
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

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
            {t("contact.label")}
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-navy)] leading-tight"
            style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
          >
            {t("contact.title")}
          </h2>
          <div className="gold-line w-20 mx-auto mt-6" />
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={item.href}
                className={`group block text-center p-8 rounded-2xl bg-[var(--color-warm-gray)] border border-transparent hover:border-[var(--color-gold)]/20 hover:shadow-xl hover:shadow-[var(--color-navy)]/5 transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${0.2 + i * 0.15}s`, textDecoration: "none" }}
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--color-navy)] flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-[var(--color-gold)]" />
                </div>
                <h3
                  className="text-sm font-semibold text-[var(--color-navy)]/50 uppercase tracking-wider mb-2"
                  style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
                >
                  {item.label}
                </h3>
                <p
                  className="text-lg font-bold text-[var(--color-navy)] group-hover:text-[var(--color-gold-dark)] transition-colors duration-300"
                  style={{
                    fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)",
                    direction: item.href.startsWith("mailto") || item.href.startsWith("tel") ? "ltr" : undefined,
                  }}
                >
                  {item.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
