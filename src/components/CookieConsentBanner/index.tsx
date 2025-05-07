import { useState } from 'preact/hooks'
import tw from './cookieconsentbanner.module.css'
import cx from 'classnames';
import { CookieConsentBannerProps } from '../../types/CookieConsentBannerProps';
import { useTranslations } from '../../hooks/useTranslations';


export function CookieConsentBanner(props: CookieConsentBannerProps) {
    const {t} = useTranslations();

    return (
        <>
            {
                props.isVisible &&
                <div className={cx([tw["cookie-consent-ui-container"]])}>
                    <div className={cx([tw["cookie-consent-ui-body"]])}>
                        <div className={cx([tw["banner-container"]])}>
                            <div className={cx([tw["banner-title"]])}>{props.bannerTitle}</div>
                            <div className={cx([tw["banner-body"]])}>
                                <div className={cx([tw["banner-body-consent-text"]])}>
                                    <a target={"_blank"} className={cx([tw["link"]])} href={props.bannerCompanyLink}>{props.bannerCompanyName}</a> {t("banner.consentText.part1")} <a target={"_blank"} className={cx([tw["link"]])} href={props.bannerCookiePolicyLink}>{t("banner.consentText.cookiePolicy")}</a> {t("banner.consentText.part2")} <a target={"_blank"} className={cx([tw["link"]])} href={props.bannerPrivacyPolicyLink}>{t("banner.consentText.privacyPolicy")}</a> {t("banner.consentText.part3")}.
                                </div>
                                <div className={cx([tw["banner-body-consent-actions"]])}>
                                    <button onClick={props.handleManageBtn} className={cx([tw["consent-action-btn"]])}>{t("banner.manageBtn")}</button>
                                    <button onClick={props.handleAllowBtn} className={cx([tw["consent-action-btn"]])}>{t("banner.allowBtn")}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}
