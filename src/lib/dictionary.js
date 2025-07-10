import en from "@/locales/en.json";
import uk from "@/locales/uk.json";

export const dictionaries = { en, uk };

export async function getDictionary(locale) {
  return dictionaries[locale] ?? dictionaries.en;
}
