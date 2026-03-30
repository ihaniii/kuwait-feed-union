/*
 * Gulf Elegance Design — Footer
 * Navy background with gold accents
 * Elegant, minimal footer with navigation and copyright
 */
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  { key: "nav.about", href: "#about" },
  { key: "nav.vision", href: "#vision" },
  { key: "nav.services", href: "#services" },
  { key: "nav.membership", href: "#membership" },
  { key: "nav.contact", href: "#contact" },
];

export default function Footer() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[var(--color-navy)] text-white relative overflow-hidden">
      {/* Gold top line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-gold)]/20 flex items-center justify-center">
                <span
                  className="text-[var(--color-gold)] font-bold text-lg"
                  style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
                >
                  {isAr ? "ا" : "K"}
                </span>
              </div>
              <div>
                <p
                  className="font-bold text-white text-sm"
                  style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
                >
                  {isAr ? "الاتحاد الكويتي لتجارة الأعلاف" : "Kuwait Feed Trade Union"}
                </p>
              </div>
            </div>
            <p
              className="text-white/50 text-sm leading-relaxed"
              style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
            >
              {t("footer.tagline")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
            >
              {isAr ? "روابط سريعة" : "Quick Links"}
            </h4>
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className="block text-white/60 hover:text-[var(--color-gold)] transition-colors duration-300 text-sm"
                  style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ fontFamily: isAr ? "var(--font-heading-ar)" : "var(--font-heading-en)" }}
            >
              {t("contact.title")}
            </h4>
            <div className="space-y-2 text-sm text-white/60">
              <p dir="ltr" className={isAr ? "text-end" : "text-start"}>info@ku.com</p>
              <p dir="ltr" className={isAr ? "text-end" : "text-start"}>+965 XXX XXXX</p>
              <p style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}>
                {t("contact.address.value")}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/40 text-sm"
            style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
          >
            &copy; {new Date().getFullYear()}{" "}
            {isAr ? "الاتحاد الكويتي لتجارة الأعلاف" : "Kuwait Feed Trade Union"}.{" "}
            {t("footer.rights")}.
          </p>
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: isAr ? "var(--font-body-ar)" : "var(--font-body-en)" }}
          >
            {isAr ? "الاتحاد الكويتي لتجارة الأعلاف" : "Kuwait Feed Trade Union"}
          </p>
        </div>
      </div>
    </footer>
  );
}
