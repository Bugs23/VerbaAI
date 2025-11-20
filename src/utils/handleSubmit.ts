import { translateText } from "./geminiAPI";
import type { LangCode } from "./SupportedLanguages";

type HandleSubmitProps = {
  lang: LangCode;
  sourceText: string;
  setTranslatedText: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>,
  { lang, sourceText, setTranslatedText, setIsLoading }: HandleSubmitProps
) {
  e.preventDefault();

  if (!sourceText) {
    setTranslatedText("Please enter some text to translate.");
    return;
  }

  try {
    setIsLoading(true);
    const translation = await translateText(lang, sourceText);
    setTranslatedText(translation);
  } catch (error) {
    setTranslatedText(
      `${error}: There was a problem translating your text. Please try again.`
    );
  } finally {
    setIsLoading(false);
  }
}
