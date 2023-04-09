import { CookieConsent } from "./CookieConsent"

export type CookieConsentManagementPanelProps = {
    elementId?: string
    bannerTitle?: string
    bannerCompanyName?: string
    bannerCompanyLink?: string
    bannerCookiePolicyLink?: string
    bannerPrivacyPolicyLink?: string
    isVisible?: boolean
    cookieConsent?: CookieConsent[]
    handleCancelBtn: () => void
    handleSaveBtn: (updatedCookieConsent: CookieConsent[]) => void
}