import { useState } from "react";
import { languages } from "../utils/SupportedLanguages"
import type { LangCode } from "../utils/SupportedLanguages";
import { handleSubmit } from "../utils/handleSubmit";
import LanguagSelectButton from "./LanguagSelectButton";

export default function Main() {
  // What language to translate to
  const [lang, setLang] = useState<LangCode>("es");
  // What text to translate
  const [sourceText, setSourceText] = useState("");
  // Translated text
  const [translatedText, setTranslatedText] = useState("")
  // loading state
  const [isLoading, setIsLoading] = useState(false)

  const LanguagSelectButtons = languages.map((language) =>
    <LanguagSelectButton
      key={language.code}
      lang={lang}
      setLang={setLang}
      language={language}
    />
  )

  function handleReset() {
    setSourceText("");
    setTranslatedText("");
    setLang("es");
  }

  return (
    <main className="flex flex-col items-center justify-center p-6 bg-gray-100 text-gray-500">
      <section className="flex flex-col w-full max-w-md p-6 space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {LanguagSelectButtons}
        </div>
        <form
          className="flex flex-col space-y-4"
          onSubmit={(e) => handleSubmit(e, { lang, sourceText, setTranslatedText, setIsLoading })}
          noValidate
        >
          <textarea
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            placeholder="Enter text to translate..."
            className="bg-white rounded-md shadow-md p-3 h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500"
          >
          </textarea>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 pt-2">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-md py-4 disabled:bg-blue-300 disabled:cursor-not-allowed shadow-md" disabled={isLoading}>Translate</button>
            <button type="reset" onClick={handleReset} className="bg-white hover:bg-blue-100 text-blue-500 border-2 border-blue-500 cursor-pointer rounded-md py-4 shadow-md">Reset</button>
          </div>
        </form>

        <div className="bg-white rounded-md shadow-md p-3">
          <p id="translated-text">{translatedText || `Your translation will appear here...`} </p>
        </div>
      </section>
    </main>
  )
}