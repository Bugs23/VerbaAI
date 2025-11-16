import type { LanguageOptions } from "../utils/languages";

type LanguageButtonProps = {
  language: LanguageOptions,
  index: number,
  lang: string,
  setLang: (code: string) => void
};

export default function LanguageButton({ language, index, lang, setLang }: LanguageButtonProps) {
  return (
    <button
      key={index}
      className={`${lang === language.code && "ring-2 ring-blue-500"} bg-white rounded-md shadow-md p-2 cursor-pointer`}
      onClick={() => setLang(language.code)}
    >
      <div className="flex flex-col">
        <span className="text-4xl">{language.flag}</span>
        <span className="text-gray-500">{language.name}</span>
      </div>
    </button>
  )
}