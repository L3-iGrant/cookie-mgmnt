import { useContext, useCallback } from "preact/hooks";
import { TranslationsContext } from "../contexts/translationContext";
import * as lodash from "lodash";
const {get} = lodash;

export const useTranslations = () => {
    const translations = useContext(TranslationsContext);

    const t = useCallback((key: string) => {
        return get(translations, key);
    }, [translations])
    
    return { translations, t };
};