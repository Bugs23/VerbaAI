// Import google genai sdk
import { GoogleGenAI } from "@google/genai";
import type { LangCode } from "./SupportedLanguages";

export async function translateText(
  lang: LangCode,
  sourceText: string
): Promise<string> {
  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  const promptMessage = `
    You are a translation engine. Detect the source language and translate the text naturally into the target language: ${lang}.

    RULES:
    - If the target language uses a non-Latin script (e.g., Korean, Japanese, Chinese, Arabic, Hindi), output the translation in phonetic romanization instead of the native writing system.
    - Output ONLY the translated text (or romanized equivalent).
    - Do NOT explain anything.
    - Do NOT add or remove meaning.
    - Do NOT add quotes or extra text.
    - Preserve emojis, punctuation, spacing, and line breaks.
    - Keep the tone (casual, polite, slang, formal) identical to the original.

    Text:
    ${sourceText}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-001",
      contents: promptMessage,
    });

    return response.text || "Translation not available.";
  } catch (error) {
    console.error("Translation error:", error);
    throw new Error(
      `There was a problem translating your text. Please try again.`
    );
  }
}
