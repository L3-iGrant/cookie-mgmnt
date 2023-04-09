import { CookieConsent } from "./CookieConsent"

export type CookieConsentBannerProps = {
    elementId?: string
    bannerTitle?: string
    bannerCompanyName?: string
    bannerCompanyLink?: string
    bannerCookiePolicyLink?: string
    bannerPrivacyPolicyLink?: string
    isVisible?: boolean
    cookieConsent?: CookieConsent[]
    handleAllowBtn?: () => void
    handleManageBtn?: () => void
}