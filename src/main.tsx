import { render } from 'preact'
import { App } from './app'
import './global.module.css'
import { CookieConsent } from './types/CookieConsent';
import { throwExpression } from './utils'
import { Translations } from './types/translations';
import { TranslationsContext } from './contexts/translationContext';
import { en as defaultTranslations } from './translations/en';

const elementId = document.getElementById("cookie-consent-ui")?.getAttribute("data-element-id") ?? throwExpression("data-element-id is required.");
const bannerTitle = document.getElementById("cookie-consent-ui")?.getAttribute("data-banner-title") ?? throwExpression("data-banner-title is required.");
const bannerCompanyName = document.getElementById("cookie-consent-ui")?.getAttribute("data-banner-company-name") ?? throwExpression("data-banner-company-name is required.");
const bannerCompanyLink = document.getElementById("cookie-consent-ui")?.getAttribute("data-banner-company-link") ?? throwExpression("data-banner-company-link is required.");
const bannerCookiePolicyLink = document.getElementById("cookie-consent-ui")?.getAttribute("data-banner-cookie-policy-link") ?? throwExpression("data-banner-cookie-policy-link is required.");
const bannerPrivacyPolicyLink = document.getElementById("cookie-consent-ui")?.getAttribute("data-banner-privacy-policy-link") ?? throwExpression("data-banner-privacy-policy-link is required.");

declare global {
    interface Window {
        CookieConsentUI: (cookieConsent: CookieConsent[], translations: Translations) => void;
    }
}

window.CookieConsentUI = (cookieConsent: CookieConsent[], translations: Translations) => {
    render(
      <TranslationsContext.Provider value={translations ?? defaultTranslations}>
        <App
          elementId={elementId as string}
          bannerTitle={bannerTitle as string}
          bannerCompanyName={bannerCompanyName as string}
          bannerCompanyLink={bannerCompanyLink as string}
          bannerCookiePolicyLink={bannerCookiePolicyLink as string}
          bannerPrivacyPolicyLink={bannerPrivacyPolicyLink as string}
          cookieConsent={cookieConsent}
        />
      </TranslationsContext.Provider>,
      document.getElementById(elementId) as HTMLElement
    );
}
