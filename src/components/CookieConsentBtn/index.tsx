import { useState } from 'preact/hooks'
import tw from './cookieconsentbtn.module.css'
import cx from 'classnames';
import { CookieConsentBtnProps } from '../../types/CookieConsentBtnProps';
import { useTranslations } from '../../hooks/useTranslations';


export function CookieConsentBtn(props: CookieConsentBtnProps) {
    const {t} = useTranslations();

    return (
        <>
            {
                props.isVisible &&
                <button onClick={props.handleCookieConsentBtn} className={cx([tw["cookie-consent-btn"]])}>{t("btn.cookieConsent")}</button>
            }
        </>

    )
}
