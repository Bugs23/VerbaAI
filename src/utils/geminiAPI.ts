// Import google genai sdk
import { GoogleGenAI } from "@google/genai";

export async function translateText(
  lang: string,
  sourceText: string
): Promise<string> {
  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  const promptMessage = `Translate the following text exactly as is in ${lang}: ${sourceText}`;

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
