import { useEffect, useState } from 'preact/hooks'
import tw from './cookieconsentmanagementpanel.module.css'
import cx from 'classnames';
import { CookieConsentManagementPanelProps } from '../../types/CookieConsentManagementPanelProps';
import { CookieConsent } from '../../types/CookieConsent';
import { useTranslations } from '../../hooks/useTranslations';


export function CookieConsentManagementPanel(props: CookieConsentManagementPanelProps) {
    const {t} = useTranslations();

    const [cookieConsent, setCookieConsent] = useState<CookieConsent[]>(props.cookieConsent as CookieConsent[])

    const handleAllowAllBtn = () => {
        const updatedCookieConsent = cookieConsent?.map((cc) => {
            cc.consent = true;
            return cc
        })

        setCookieConsent(updatedCookieConsent)
    }

    const handleConsentCheckbox = (event: MouseEvent, cookieConsentIndex: number) => {
        if (event.target instanceof HTMLInputElement) {
            cookieConsent[cookieConsentIndex].consent = event.target.checked;
            setCookieConsent(cookieConsent);
        }
    }

    return (
        <>
            {
                props.isVisible &&
                <div className={cx([tw["panel-container"]])}>
                    <div className={cx([tw["panel-body"]])}>
                        <div className={cx([tw["panel-title"]])}>{t("panel.title")}</div>
                        <div className={cx([tw["panel-description"]])}><a className={cx([tw["link"]])} target={"_blank"} href={props.bannerCompanyLink}>{props.bannerCompanyName}</a> {t("panel.consentText.part1")}<a className={cx([tw["link"]])} target={"_blank"} href={props.bannerCookiePolicyLink}>{t("panel.consentText.cookiePolicy")}</a> {t("panel.consentText.part2")}<a className={cx([tw["link"]])} target={"_blank"} href={props.bannerPrivacyPolicyLink}>{t("panel.consentText.privacyPolicy")}</a> {t("panel.consentText.part3")}.</div>
                        <div className={cx([tw["panel-description"]])}>{t("panel.description")}</div>
                        <div className={cx([tw["panel-allow-all-btn"]])}>
                            <button onClick={handleAllowAllBtn} className={cx([tw["panel-btn"]])}>{t("panel.allowAll")}</button>
                        </div>
                        <div><hr className={cx([tw["panel-item-separator-line"]])} /></div>
                        <div className={cx([tw["panel-cookie-consent-item-container"]])}>
                            {
                                cookieConsent?.map((cc, i) => {
                                    return (
                                        <div className={cx([tw["panel-cookie-consent-item"]])} key={i}>
                                            <div className={cx([tw["panel-cookie-consent-item-body"]])}>
                                                <div className={cx([tw["panel-cookie-consent-item-description"]])}><span className={cx([tw["panel-cookie-consent-item-title"]])}>{cc.cookieCategory}: </span><span>{cc.cookieCategoryDescription}</span></div>
                                                <div className={cx([tw["panel-cookie-consent-item-checkbox"]])}>
                                                    <input disabled={cc.isMandatory} type="checkbox" className={cx([tw["panel-consent-checkbox"], cc.isMandatory ? tw["cursor-not-allowed"] : tw["cursor-pointer"]])} checked={cc.consent} onClick={(event: MouseEvent) => handleConsentCheckbox(event as MouseEvent, i)} />
                                                </div>
                                            </div>
                                            <div className={cx([tw["panel-cookie-consent-item-cookies-used"]])}>{t("panel.cookiesUsed")}: {cc.cookiesUsed?.toString()}</div>
                                            <div><hr className={cx([tw["panel-item-separator-line"]])} /></div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className={cx([tw["panel-cancel-save-btns"]])}>
                            <button onClick={() => { props.handleCancelBtn(); }} className={cx([tw["panel-btn"]])}>{t("panel.cancel")}</button>
                            <button onClick={() => { props.handleSaveBtn(cookieConsent); }} className={cx([tw["panel-btn"]])}>{t("panel.save")}</button>
                        </div>
                        <div className={cx([tw["panel-powered-by-company"]])}>{t("panel.poweredBy")}<a className={cx([tw["powered-by-company-link"]])} href="https://igrant.io/" target={"_blank"} > <strong>iGrant.io</strong></a></div>
                    </div>
                </div>
            }
        </>
    )
}
