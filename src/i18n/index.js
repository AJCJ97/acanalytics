import en from "./en";
import es from "./es";

export function getI18n(lang = "en") {
  return lang === "es" ? es : en;
}
