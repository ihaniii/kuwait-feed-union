import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  dir: "ltr" | "rtl";
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.about": { en: "About Us", ar: "من نحن" },
  "nav.vision": { en: "Vision & Mission", ar: "الرؤية والرسالة" },
  "nav.values": { en: "Values", ar: "القيم" },
  "nav.services": { en: "Services", ar: "الخدمات" },
  "nav.membership": { en: "Membership", ar: "العضوية" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },

  // Hero
  "hero.title": {
    en: "Kuwait Feed Trade Union",
    ar: "الاتحاد الكويتي لتجارة الأعلاف",
  },
  "hero.subtitle": {
    en: "Organizing the feed sector in the State of Kuwait",
    ar: "تنظيم قطاع الأعلاف في دولة الكويت",
  },
  "hero.cta": { en: "Learn More", ar: "اعرف المزيد" },
  "hero.cta2": { en: "Join Us", ar: "انضم إلينا" },

  // About
  "about.label": { en: "About Us", ar: "من نحن" },
  "about.title": {
    en: "Who We Are",
    ar: "من نحن",
  },
  "about.text": {
    en: "The Kuwait Feed Trade Union was established to organize the feed sector in the State of Kuwait, represent its members before official authorities, and contribute to the development of this vital sector in support of food security and the national economy.",
    ar: "تأسس الاتحاد الكويتي لتجارة الأعلاف بهدف تنظيم قطاع الأعلاف في دولة الكويت، وتمثيل أعضائه أمام الجهات الرسمية، والعمل على تطوير هذا القطاع الحيوي بما يخدم الأمن الغذائي والاقتصاد الوطني.",
  },
  "about.company": { en: "The Road Company", ar: "شركة الطريق" },

  // Vision
  "vision.label": { en: "Our Vision", ar: "رؤيتنا" },
  "vision.title": { en: "Vision", ar: "الرؤية" },
  "vision.text": {
    en: "To be the leading reference for the feed sector in Kuwait",
    ar: "أن نكون المرجع الأول لقطاع الأعلاف في الكويت",
  },

  // Mission
  "mission.label": { en: "Our Mission", ar: "رسالتنا" },
  "mission.title": { en: "Mission", ar: "الرسالة" },
  "mission.text": {
    en: "Supporting and developing the feed trade through regulation, awareness, and partnerships",
    ar: "دعم وتطوير تجارة الأعلاف من خلال التنظيم والتوعية وتعزيز الشراكات",
  },

  // Values
  "values.label": { en: "Our Values", ar: "قيمنا" },
  "values.title": { en: "Core Values", ar: "القيم الأساسية" },
  "values.transparency": { en: "Transparency", ar: "الشفافية" },
  "values.transparency.desc": {
    en: "We uphold the highest standards of openness and accountability in all our operations.",
    ar: "نلتزم بأعلى معايير الانفتاح والمساءلة في جميع عملياتنا.",
  },
  "values.quality": { en: "Quality", ar: "الجودة" },
  "values.quality.desc": {
    en: "We are committed to excellence in every aspect of the feed trade sector.",
    ar: "نلتزم بالتميز في كل جانب من جوانب قطاع تجارة الأعلاف.",
  },
  "values.collaboration": { en: "Collaboration", ar: "التعاون" },
  "values.collaboration.desc": {
    en: "We foster strong partnerships between stakeholders to achieve shared goals.",
    ar: "نعزز الشراكات القوية بين أصحاب المصلحة لتحقيق الأهداف المشتركة.",
  },
  "values.sustainability": { en: "Sustainability", ar: "الاستدامة" },
  "values.sustainability.desc": {
    en: "We promote sustainable practices that ensure long-term growth and environmental responsibility.",
    ar: "نعزز الممارسات المستدامة التي تضمن النمو طويل الأمد والمسؤولية البيئية.",
  },

  // Services
  "services.label": { en: "What We Offer", ar: "ما نقدمه" },
  "services.title": { en: "Our Services", ar: "خدماتنا" },
  "services.representation": { en: "Member Representation", ar: "تمثيل الأعضاء" },
  "services.representation.desc": {
    en: "Representing members before official authorities and government bodies to protect their interests.",
    ar: "تمثيل الأعضاء أمام الجهات الرسمية والحكومية لحماية مصالحهم.",
  },
  "services.regulation": { en: "Market Regulation", ar: "تنظيم السوق" },
  "services.regulation.desc": {
    en: "Working to establish fair market practices and regulatory frameworks for the feed sector.",
    ar: "العمل على إرساء ممارسات سوقية عادلة وأطر تنظيمية لقطاع الأعلاف.",
  },
  "services.advisory": { en: "Advisory Services", ar: "تقديم الاستشارات" },
  "services.advisory.desc": {
    en: "Providing expert consultation and guidance to members on industry best practices.",
    ar: "تقديم الاستشارات والتوجيه المتخصص للأعضاء حول أفضل الممارسات في القطاع.",
  },
  "services.awareness": { en: "Awareness Campaigns", ar: "نشر التوعية" },
  "services.awareness.desc": {
    en: "Conducting educational programs and awareness campaigns to elevate industry standards.",
    ar: "إجراء برامج تعليمية وحملات توعوية لرفع معايير القطاع.",
  },
  "services.investment": { en: "Investment Support", ar: "دعم الاستثمار" },
  "services.investment.desc": {
    en: "Facilitating investment opportunities and supporting business growth in the feed sector.",
    ar: "تسهيل فرص الاستثمار ودعم نمو الأعمال في قطاع الأعلاف.",
  },

  // Membership
  "membership.label": { en: "Join Our Union", ar: "انضم إلى اتحادنا" },
  "membership.title": { en: "Membership", ar: "العضوية" },
  "membership.text": {
    en: "The union offers membership for traders and suppliers to benefit from its services and contribute to sector development.",
    ar: "يتيح الاتحاد الانضمام للتجار والموردين للاستفادة من خدماته والمشاركة في تطوير القطاع.",
  },
  "membership.benefit1": { en: "Official Representation", ar: "التمثيل الرسمي" },
  "membership.benefit1.desc": {
    en: "Your voice heard before government bodies",
    ar: "صوتك مسموع أمام الجهات الحكومية",
  },
  "membership.benefit2": { en: "Expert Advisory", ar: "استشارات متخصصة" },
  "membership.benefit2.desc": {
    en: "Access to industry expertise and guidance",
    ar: "الوصول إلى الخبرات والتوجيه المتخصص",
  },
  "membership.benefit3": { en: "Networking", ar: "شبكة علاقات" },
  "membership.benefit3.desc": {
    en: "Connect with industry leaders and partners",
    ar: "تواصل مع قادة القطاع والشركاء",
  },
  "membership.benefit4": { en: "Market Insights", ar: "رؤى السوق" },
  "membership.benefit4.desc": {
    en: "Stay informed with latest market data",
    ar: "ابقَ على اطلاع بأحدث بيانات السوق",
  },
  "membership.cta": { en: "Apply for Membership", ar: "تقدم بطلب العضوية" },

  // Contact
  "contact.label": { en: "Get in Touch", ar: "تواصل معنا" },
  "contact.title": { en: "Contact Us", ar: "اتصل بنا" },
  "contact.email": { en: "Email", ar: "البريد الإلكتروني" },
  "contact.phone": { en: "Phone", ar: "الهاتف" },
  "contact.address": { en: "Address", ar: "العنوان" },
  "contact.address.value": { en: "Kuwait City, State of Kuwait", ar: "مدينة الكويت، دولة الكويت" },

  // Footer
  "footer.rights": {
    en: "All Rights Reserved",
    ar: "جميع الحقوق محفوظة",
  },
  "footer.tagline": {
    en: "Supporting food security and the national economy",
    ar: "دعم الأمن الغذائي والاقتصاد الوطني",
  },

  // Language toggle
  "lang.switch": { en: "العربية", ar: "English" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("ar");

  const dir = lang === "ar" ? "rtl" : "ltr";

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const t = useCallback(
    (key: string) => {
      return translations[key]?.[lang] || key;
    },
    [lang]
  );

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [dir, lang]);

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
