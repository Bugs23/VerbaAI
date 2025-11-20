import type { SupportedLanguage, LangCode } from "../utils/SupportedLanguages";

type LanguagSelectButtonProps = {
  language: SupportedLanguage,
  lang: LangCode,
  setLang: React.Dispatch<React.SetStateAction<LangCode>>
};

export default function LanguagSelectButton({ language, lang, setLang }: LanguagSelectButtonProps) {
  return (
    <button
      className={`${lang === language.code ? "ring-2 ring-blue-500" : ""} bg-white rounded-md shadow-md p-2 cursor-pointer`}
      onClick={() => setLang(language.code)}
    >
      <div className="flex flex-col">
        <span className="text-4xl">{language.flag}</span>
        <span className="text-base text-gray-500">{language.name}</span>
      </div>
    </button>
  )
}