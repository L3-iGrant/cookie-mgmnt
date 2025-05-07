import { createContext } from "preact";
import { Translations } from "../types/translations";

export const TranslationsContext = createContext<Translations | null>(null);