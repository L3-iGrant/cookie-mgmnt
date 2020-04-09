/**
 * Display/Hide show vendors list link in sidebar
 */
import {checkPropertiesPresent, isArray, isFunction, isObject, isString} from "../utils/validation";

export const showVendorLink = isVendorRequired => {
    if (isVendorRequired) {
        document.getElementById("vendor_show_text").style.display = "block";
    } else {
        document.getElementById("vendor_show_text").style.display = "none";
    }
};

/**
 *
 * Returns cookie value if cookie exists
 */
export const getCookie = cookieName => {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookieKey = cookies[i].split("=")[0];
        const cookieValue = cookies[i].split("=")[1];

        if (cookieKey.trim() === cookieName.trim()) {
            return cookieValue;
        }
    }

    return "";
};

/**
 * Creates cookie
 *
 * @param name
 * @param value
 * @param days
 */
export const createCookie = (name, value, days) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
};

/**
 * Toggle cookie purposes in sidebar by checking if cookie is accepted or not
 */
export const ToggleCookiePurposes = transformedPurposes => {
    let cookieTypes = [];
    Object.keys(transformedPurposes).forEach(purposeType => {
        if (transformedPurposes[purposeType].length > 0) {
            cookieTypes.push(purposeType);
        }
    });

    cookieTypes.forEach(cookieType => {
        let checkbox = document.querySelector(
            "input." +
            cookieType
                .trim()
                .split(" ")
                .join("-")
        );

        if (checkbox) {
            const cookieValue = getCookie(cookieType);

            if (cookieValue) {
                checkbox.checked = cookieValue.trim() === "accepted";
            }
        }
    });
};
/**
 * Accept all cookies
 * -> Call hook here.
 *
 * @param transformedPurposes
 * @param config
 * @constructor
 */
export const AcceptAllCookies = (transformedPurposes, config = null) => {
    console.log("[DEBUG] [AcceptAllCookies] The ccm config -> ", config);

    let cookieTypes = [];
    Object.keys(transformedPurposes).forEach(purposeType => {
        if (transformedPurposes[purposeType].length > 0) {
            cookieTypes.push(purposeType);
        }
    });

    cookieTypes.forEach(cookieType => {
        // mark purpose type cookie as accepted
        createCookie(cookieType, "accepted", 30);

        if (config.hasOwnProperty("onConsent")) {
            if (isFunction(config["onConsent"])) {
                config["onConsent"](cookieType);
            }
        }
    });

    // Hiding bottom banner to show cookies trigger icon
    document.getElementById("fixedBottomNav").style.display = "none";
};

/**
 *
 * Create cookie for storing accepted status for essential cookies
 *
 * -> Call the hook here.
 */
export const CreateEssentialCookie = (config = null) => {
    console.log("[DEBUG] [CreateEssentialCookie] The ccm config -> ", config);

    const requiredPurposeType = "Essential cookies";
    createCookie(requiredPurposeType, "accepted", 30);

    if (config.hasOwnProperty("onConsent")) {
        if (isFunction(config["onConsent"])) {
            config["onConsent"](requiredPurposeType);
        }
    }
};

/**
 * Performing on page load actions.
 *
 * @param transformedPurposes
 * @param config
 * @constructor
 */
export const ExecuteOnConsentHookOnPageLoad = (
    transformedPurposes,
    config = null
) => {
    let cookieTypes = [];
    Object.keys(transformedPurposes).forEach(purposeType => {
        if (transformedPurposes[purposeType].length > 0) {
            cookieTypes.push(purposeType);
        }
    });

    // console.log("[DEBUG] Cookies types on page load -> ", cookieTypes);
    console.log("[DEBUG] Config on page load -> ", config);

    cookieTypes.forEach(cookieType => {
        const cookieValue = getCookie(cookieType);
        if (cookieValue) {
            if (cookieValue.trim() === "accepted") {
                console.log(
                    "[DEBUG] Cookies types accepted on page load -> ",
                    cookieType
                );

                if (config.hasOwnProperty("onConsent")) {
                    if (isFunction(config["onConsent"])) {
                        config["onConsent"](cookieType);
                    }
                }
            }
        }
    });
};

/**
 * Enable all the cookie purpose toggles
 */
export const EnableAllPurposeToggles = purposeTypes => {
    purposeTypes.forEach(purposeType => {
        let checkbox = document.querySelector(
            "input." +
            purposeType
                .trim()
                .split(" ")
                .join("-")
        );
        if (checkbox) {
            checkbox.checked = true;
        }
    });

    document.getElementById("vendor_show_text").style.display = "block";
    document.getElementById("vendor_hide_text").style.display = "none";
    document.getElementById("purposes_scroll").style.display = "block";
    document.getElementById("vendor_list").style.display = "none";
};

/**
 *
 * Toggling the essential cookies toggle and disabling it.
 *
 * Essential cookies require no explicit consent from user.
 *
 */
export const DisableToggleForRequiredPurposes = () => {
    const requiredPurposeType = "Essential cookies";
    document.querySelector(
        "input." +
        requiredPurposeType
            .trim()
            .split(" ")
            .join("-")
    ).checked = true;
    document.querySelector(
        "input." +
        requiredPurposeType
            .trim()
            .split(" ")
            .join("-")
    ).disabled = "disabled";
};

export const vendor_show = () => {
    document.getElementById("purposes_scroll").style.display = "none";
    document.getElementById("vendor_list").style.display = "block";
    document.getElementById("vendor_hide_text").style.display = "block";
    document.getElementById("vendor_show_text").style.display = "none";
};

export const vendor_hide = () => {
    document.getElementById("vendor_show_text").style.display = "block";
    document.getElementById("vendor_hide_text").style.display = "none";
    document.getElementById("purposes_scroll").style.display = "block";
    document.getElementById("vendor_list").style.display = "none";
};

/**
 *
 * Updating the cookie consent based on user consent
 *
 * -> Call the hook here.
 */
export const SaveCookieConsent = (cookieTypes, config = null) => {
    console.log("[DEBUG] [SaveCookieConsent] The ccm config -> ", config);

    cookieTypes.forEach(cookieType => {
        const checkbox = document.querySelector(
            "input." +
            cookieType
                .trim()
                .split(" ")
                .join("-")
        );

        if (checkbox) {
            if (checkbox.checked) {
                const cookieValue = getCookie(cookieType);

                if (cookieValue.trim() !== "accepted" || cookieValue.trim() === "") {
                    // mark purpose type cookie as accepted
                    createCookie(cookieType, "accepted", 30);

                    if (config.hasOwnProperty("onConsent")) {
                        if (isFunction(config["onConsent"])) {
                            config["onConsent"](cookieType);
                        }
                    }
                }
            } else {
                const cookieValue = getCookie(cookieType);

                if (cookieValue.trim() !== "declined" || cookieValue.trim() === "") {
                    // mark purpose type cookie as declined
                    createCookie(cookieType, "declined", 30);

                    if (config.hasOwnProperty("onConsentRevoke")) {
                        if (isFunction(config["onConsentRevoke"])) {
                            config["onConsentRevoke"](cookieType);
                        }
                    }
                }
            }
        }
    });

};

/**
 *
 * If all cookies are accepted then show sidebar trigger bottom icon
 * If not all cookies are accepted then show bottom banner
 *
 */
export const checkAllCookiesAccepted = (transformedPurposes, config = null) => {
    let cookieTypes = [];
    Object.keys(transformedPurposes).forEach(purposeType => {
        if (
            transformedPurposes[purposeType].length > 0 &&
            purposeType !== "Essential cookies"
        ) {
            cookieTypes.push(purposeType);
        }
    });
    let isAccepted = true;
    if (!(getCookie("Essential cookies").trim() === "accepted")) {
        isAccepted = false;
    }

    if (isAccepted) {
        document.getElementById("fixedBottomNav").style.display = "none";
    } else {
        document.getElementById("fixedBottomNav").style.display = "block";
        CreateEssentialCookie(config);
    }
};

/**
 * Transforming purposes array for manipulation
 *
 */
export const TransformPurposes = (purposes, purposeTypes) => {
    let purposesNew = {};
    for (let i = 0; i < purposeTypes.length; i++) {
        purposesNew[purposeTypes[i]] = [];
    }

    purposes.forEach(purpose => {
        purpose["Title"] = purpose["Title"]
            .trim()
            .split(" ")
            .join("-");
        purpose["ClassName"] = purpose["CookieTypeName"]
            .trim()
            .split(" ")
            .join("-");
        purposesNew[purpose["CookieTypeName"]] = [];
        console.log(purpose);
    });

    purposes.forEach(purpose => {
        purpose["Title"] = purpose["Title"]
            .trim()
            .split(" ")
            .join("-");
        purpose["ClassName"] = purpose["CookieTypeName"]
            .trim()
            .split(" ")
            .join("-");

        purposesNew[purpose["CookieTypeName"]].push(purpose);
        console.log(purposesNew);
    });

    return purposesNew;
};

/**
 *
 * Transforming purpose array to return cookie types with browser cookies array
 */
export const TransformPurposesToBrowserCookiesArray = (
    purposes,
    purposeTypes
) => {
    let purposesNew = {};
    for (let i = 0; i < purposeTypes.length; i++) {
        purposesNew[purposeTypes[i]] = [];
    }

    purposes.forEach(purpose => {
        purposesNew[purpose["CookieTypeName"]] = [];
    });

    purposes.forEach(purpose => {
        const BrowserCookies = purpose["BrowserCookies"];
        BrowserCookies.forEach(cookie => {
            purposesNew[purpose["CookieTypeName"]].push(cookie);
        });
    });

    return purposesNew;
};

/**
 * Actions to performed on manage button click
 */
export const ShowCookieSidebar = () => {
    console.log("Clicked");
    document.getElementById("fixedBottomNav").style.display = "none";
    document.getElementById("cookie-consent-sidebar").style.display = "block";
};

/**
 * Validating config object in manual mode
 */
export const validateManualConfig = (ccmConfig) => {
    if (!checkPropertiesPresent(['basic', 'cookiePurposes'], ccmConfig)) {
        return false
    }

    if (!isObject(ccmConfig['basic'])) {
        return false
    }

    const basicProps = ["BannerHeader", "BannerDescription", "SidebarMainText", "SidebarSubtitle", "SidebarSubDescription", "CookiePolicyURL", "CompanyPolicyURL", "CompanyName"];

    if (!checkPropertiesPresent(basicProps, ccmConfig['basic'])) {
        return false
    }

    const basicConfig = ccmConfig['basic'];
    basicProps.forEach(prop => {
        if (!isString(basicConfig[prop])) {
            return false
        }
    });

    if (!isArray(ccmConfig['cookiePurposes'])) {
        return false
    }

    const cookiePurposes = ccmConfig['cookiePurposes'];

    cookiePurposes.forEach(purpose => {

        if (!isObject(purpose)) {
            return false
        }

        const purposeProps = ["Title", "CookieTypeName", "Description", "BrowserCookies", "IsRequired"];

        if (!checkPropertiesPresent(purposeProps, purpose)) {
            return false;
        }


        const stringPurposeProps = ["Title", "CookieTypeName", "Description", "IsRequired"];
        stringPurposeProps.forEach(prop => {
            if (!isString(purpose[prop])) {
                return false
            }
        });

        if (!isArray(purpose["BrowserCookies"])) {
            return false
        }

        const browserCookies = purpose["BrowserCookies"];

        browserCookies.forEach(cookie => {
            if (!isString(cookie)) {
                return false
            }
        });


    });


    return true;
};