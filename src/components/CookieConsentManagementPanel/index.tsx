import { useEffect, useState } from 'preact/hooks'
import tw from './cookieconsentmanagementpanel.module.css'
import cx from 'classnames';
import { CookieConsentManagementPanelProps } from '../../types/CookieConsentManagementPanelProps';
import { CookieConsent } from '../../types/CookieConsent';


export function CookieConsentManagementPanel(props: CookieConsentManagementPanelProps) {

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
                        <div className={cx([tw["panel-title"]])}>MANAGE COOKIE PREFERENCES</div>
                        <div className={cx([tw["panel-description"]])}><a className={cx([tw["link"]])} target={"_blank"} href={props.bannerCompanyLink}>{props.bannerCompanyName}</a> uses cookies to enhance your experience of our website. By allowing, you are consenting to the use of cookies. Please read our <a className={cx([tw["link"]])} target={"_blank"} href={props.bannerCookiePolicyLink}>Cookie Policy</a>  and <a className={cx([tw["link"]])} target={"_blank"} href={props.bannerPrivacyPolicyLink}>Privacy Policy</a> for details.</div>
                        <div className={cx([tw["panel-description"]])}>You can set your consent preferences based on the purposes below.</div>
                        <div className={cx([tw["panel-allow-all-btn"]])}>
                            <button onClick={handleAllowAllBtn} className={cx([tw["panel-btn"]])}>ALLOW ALL</button>
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
                                            <div className={cx([tw["panel-cookie-consent-item-cookies-used"]])}>Cookies Used: {cc.cookiesUsed?.toString()}</div>
                                            <div><hr className={cx([tw["panel-item-separator-line"]])} /></div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className={cx([tw["panel-cancel-save-btns"]])}>
                            <button onClick={() => { props.handleCancelBtn(); }} className={cx([tw["panel-btn"]])}>CANCEL</button>
                            <button onClick={() => { props.handleSaveBtn(cookieConsent); }} className={cx([tw["panel-btn"]])}>SAVE</button>
                        </div>
                        <div className={cx([tw["panel-powered-by-company"]])}>Powered by <a className={cx([tw["powered-by-company-link"]])} href="https://igrant.io/" target={"_blank"} > <strong>iGrant.io</strong></a></div>
                    </div>
                </div>
            }
        </>
    )
}
