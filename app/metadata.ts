interface Metadata {
  title: string;
  description: string;
  keywords: string;
}

export const metadata: Record<string, Metadata> = {
  uz: {
    title: "Tish shifokori - Professional stomatologiya xizmatlari",
    description: "Professional stomatologiya klinikasi. Tish davolash, implantatsiya, ortodontiya va boshqa xizmatlar. Tajribali shifokorlar va zamonaviy uskunalar.",
    keywords: "tish shifokori, stomatologiya, tish davolash, implantatsiya, ortodontiya, tishlarni oqartirish, tish protezlash, stomatolog toshkent",
  },
  ru: {
    title: "Стоматолог - Профессиональные стоматологические услуги",
    description: "Профессиональная стоматологическая клиника. Лечение зубов, имплантация, ортодонтия и другие услуги. Опытные врачи и современное оборудование.",
    keywords: "стоматолог, стоматология, лечение зубов, имплантация, ортодонтия, отбеливание зубов, протезирование, стоматолог ташкент",
  },
  en: {
    title: "Dentist - Professional Dental Services",
    description: "Professional dental clinic. Dental treatment, implantation, orthodontics and other services. Experienced doctors and modern equipment.",
    keywords: "dentist, dental clinic, dental treatment, implants, orthodontics, teeth whitening, dental prosthetics, dentist tashkent",
  },
}
