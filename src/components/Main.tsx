import { useState } from "react";

// Import google genai sdk
import { GoogleGenAI } from "@google/genai";

export default function Main() {
  // What language to translate to
  const [lang, setLang] = useState("es");
  // What text to translate
  const [sourceText, setSourceText] = useState("");
  // Translated text
  const [translatedText, setTranslatedText] = useState("")
  // loading state
  const [isLoading, setIsLoading] = useState(true)


  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
      const promptMessage = `Translate the following text exactly as is in ${lang}: ${sourceText}`

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-001",
        contents: promptMessage,
      });

      setTranslatedText(response.text || "Translation not available.")
    }
    catch (error) {
      setTranslatedText(`${error}: There was a problem translating your text. Please try again.`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex flex-col items-center justify-center p-6">
      <section className="flex flex-col w-full max-w-md bg-white shadow-md rounded-xl p-6 space-y-6">
        <form className="flex flex-col space-y-4" onSubmit={onSubmit} noValidate>
          <label htmlFor="language-select" className="text-sm font-medium">
            Target language
          </label>
          <select value={lang} onChange={(e) => setLang(e.target.value)} className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
          </select>

          <textarea
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            placeholder="Enter text to translate..."
            className="border border-gray-300 rounded-md p-3 h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600"
          >
          </textarea>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-md py-2">Translate</button>
        </form>

        <div className="bg-gray-50 border border-gray-200 rounded-md p-3 text-gray-600">
          <p id="translated-text">{isLoading ? "Your translation will appear here..." : translatedText} </p>
        </div>
      </section>
    </main>
  )
}