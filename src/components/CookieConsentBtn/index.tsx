import { useState } from 'preact/hooks'
import tw from './cookieconsentbtn.module.css'
import cx from 'classnames';
import { CookieConsentBtnProps } from '../../types/CookieConsentBtnProps';


export function CookieConsentBtn(props: CookieConsentBtnProps) {

    return (
        <>
            {
                props.isVisible &&
                <button onClick={props.handleCookieConsentBtn} className={cx([tw["cookie-consent-btn"]])}>COOKIE CONSENTS</button>
            }
        </>

    )
}
