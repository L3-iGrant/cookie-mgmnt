import { useEffect, useState } from 'preact/hooks'
import { CookieConsentBannerProps } from './types/CookieConsentBannerProps';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { CookieConsentBtn } from './components/CookieConsentBtn';
import { CookieConsentManagementPanel } from './components/CookieConsentManagementPanel';
import { getConsentFromLocalStorage, setConsentToLocalStorage, stringToLocalStorageCookieConsent } from './utils';
import { LocalStorageCookieConsent } from './types/LocalStorageCookieConsent';
import { CookieConsent } from './types/CookieConsent';


export function App(props: CookieConsentBannerProps) {

  const [cookieConsent, setCookieConsent] = useState<CookieConsent[]>(props.cookieConsent as CookieConsent[]);
  const [showCookieConsentBtn, setShowCookieConsentBtn] = useState(false);
  const [showCookieConsentBanner, setShowCookieConsentBanner] = useState(false);
  const [showCookieConsentManagementPanel, setCookieConsentManagementPanel] = useState(false);

  useEffect(() => {
    const localStorageCookieConsentString = getConsentFromLocalStorage();
    if (localStorageCookieConsentString === null) {
      setShowCookieConsentBanner(true);

      const localStorageCookieConsent: LocalStorageCookieConsent = {};

      cookieConsent.map((cc) => {
        const cookieCategory = cc.cookieCategory as string;
        localStorageCookieConsent[cookieCategory] = cc.consent as boolean;
      })

      setConsentToLocalStorage(localStorageCookieConsent);

    } else {
      setShowCookieConsentBtn(true);

      const localStorageCookieConsent: LocalStorageCookieConsent = stringToLocalStorageCookieConsent(localStorageCookieConsentString);

      cookieConsent.map((cc) => {
        const cookieCategory = cc.cookieCategory as string

        if (cookieCategory in localStorageCookieConsent) {
          cc.consent = localStorageCookieConsent[cookieCategory]
        } else {
          localStorageCookieConsent[cookieCategory] = cc.consent as boolean;
        }

      })

      setConsentToLocalStorage(localStorageCookieConsent);

    }
  }, [])


  const handleConsentManagementPanelSaveBtn = (updatedCookieConsent: CookieConsent[]) => {
    const localStorageCookieConsent: LocalStorageCookieConsent = {};

    updatedCookieConsent.map((cc) => {
      const cookieCategory = cc.cookieCategory as string;
      localStorageCookieConsent[cookieCategory] = cc.consent as boolean;
    })

    setConsentToLocalStorage(localStorageCookieConsent);
    setCookieConsent(updatedCookieConsent);
    setShowCookieConsentBtn(true);
    setCookieConsentManagementPanel(false);
  }



  return (
    <>
      <CookieConsentBtn
        isVisible={showCookieConsentBtn}
        handleCookieConsentBtn={() => {
          setShowCookieConsentBtn(false)
          setCookieConsentManagementPanel(true)
        }}
      />
      <CookieConsentBanner
        {...props}
        isVisible={showCookieConsentBanner}
        handleAllowBtn={() => {
          setShowCookieConsentBanner(false)
          setShowCookieConsentBtn(true)
        }}
        handleManageBtn={() => {
          setShowCookieConsentBanner(false);
          setCookieConsentManagementPanel(true)
        }}
      />
      <CookieConsentManagementPanel
        {...props}
        isVisible={showCookieConsentManagementPanel}
        cookieConsent={cookieConsent}
        handleCancelBtn={() => {
          setShowCookieConsentBtn(true)
          setCookieConsentManagementPanel(false)
        }}
        handleSaveBtn={handleConsentManagementPanelSaveBtn}
      />
    </>

  )
}
