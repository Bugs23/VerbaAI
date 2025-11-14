import { useState } from "react";
import { languages } from "../utils/languages"
import { handleSubmit } from "../utils/handleSubmit";
import LanguageButton from "./LanguageButton";

export default function Main() {
  // What language to translate to
  const [lang, setLang] = useState("es");
  // What text to translate
  const [sourceText, setSourceText] = useState("");
  // Translated text
  const [translatedText, setTranslatedText] = useState("")
  // loading state
  const [isLoading, setIsLoading] = useState(false)

  const languageButtonElement = languages.map((language, index) =>
    <LanguageButton index={index} lang={lang} setLang={setLang} language={language} />
  )


  return (
    <main className="flex flex-col items-center justify-center p-6 bg-gray-100">
      <section className="flex flex-col w-full max-w-md p-6 space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {languageButtonElement}
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
            className="bg-white rounded-md shadow-md p-3 h-32 resize-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600"
          >
          </textarea>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-md py-2">Translate</button>
        </form>

        <div className="bg-white rounded-md shadow-md p-3 text-gray-600">
          <p id="translated-text">{translatedText || "Your translation will appear here..."} </p>
        </div>
      </section>
    </main>
  )
}