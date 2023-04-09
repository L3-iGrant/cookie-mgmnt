import { LocalStorageCookieConsent } from "../types/LocalStorageCookieConsent";

export const throwExpression = (errorMessage: string): never => {
    throw new Error(errorMessage);
}

export const getConsentFromLocalStorage = (): string | null => {
    return localStorage.getItem("cookieconsent");
}

export const setConsentToLocalStorage = (cookieConsent: LocalStorageCookieConsent): void => {
    localStorage.setItem("cookieconsent", JSON.stringify(cookieConsent));
}

export const stringToLocalStorageCookieConsent = (localStorageCookieConsentString: string): LocalStorageCookieConsent => {
    return JSON.parse(localStorageCookieConsentString);
}