import { translateText } from "./geminiAPI";

type HandleSubmitProps = {
  lang: string;
  sourceText: string;
  setTranslatedText: (translation: string) => void;
  setIsLoading: (boolean: boolean) => void;
};

export async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>,
  { lang, sourceText, setTranslatedText, setIsLoading }: HandleSubmitProps
) {
  e.preventDefault();

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
