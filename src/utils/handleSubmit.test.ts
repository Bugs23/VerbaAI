import { it, expect, vi } from "vitest";

vi.mock("./geminiAPI", () => ({ translateText: vi.fn() }));

import { translateText } from "./geminiAPI";
import { handleSubmit } from "./handleSubmit";

it("does not call translateText when input is empty", async () => {
  const e = { preventDefault: vi.fn() } as any;
  const setTranslatedText = vi.fn();
  const setIsLoading = vi.fn();

  await handleSubmit(e, {
    lang: "es" as any,
    sourceText: "",
    setTranslatedText,
    setIsLoading,
  });

  expect(translateText).not.toHaveBeenCalled();
});
