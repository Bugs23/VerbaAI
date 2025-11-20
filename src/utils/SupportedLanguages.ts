export type SupportedLanguage = {
  name: string;
  code: string;
  flag: string;
};

export type LangCode = (typeof languages)[number]["code"];

export const languages: SupportedLanguage[] = [
  {
    name: "Spanish",
    code: "es",
    flag: "🇪🇸",
  },
  {
    name: "Korean",
    code: "ko",
    flag: "🇰🇷",
  },
  {
    name: "French",
    code: "fr",
    flag: "🇫🇷",
  },
];
