import { useState } from 'preact/hooks'
import tw from './cookieconsentbanner.module.css'
import cx from 'classnames';
import { CookieConsentBannerProps } from '../../types/CookieConsentBannerProps';


export function CookieConsentBanner(props: CookieConsentBannerProps) {

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
                                    <a target={"_blank"} className={cx([tw["link"]])} href={props.bannerCompanyLink}>{props.bannerCompanyName}</a> uses cookies to enhance your experience of our website. By clicking Allow, you are consenting to the use of cookies. Please read our <a target={"_blank"} className={cx([tw["link"]])} href={props.bannerCookiePolicyLink}>Cookie Policy</a>  and <a target={"_blank"} className={cx([tw["link"]])} href={props.bannerPrivacyPolicyLink}>Privacy Policy</a> for details.
                                </div>
                                <div className={cx([tw["banner-body-consent-actions"]])}>
                                    <button onClick={props.handleManageBtn} className={cx([tw["consent-action-btn"]])}>MANAGE COOKIES</button>
                                    <button onClick={props.handleAllowBtn} className={cx([tw["consent-action-btn"]])}>ALLOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}
