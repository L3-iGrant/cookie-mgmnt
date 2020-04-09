import "./styles/base.css";

import {
    SaveCookieConsent,
    ShowCookieSidebar,
    showVendorLink,
    ToggleCookiePurposes,
    TransformPurposes,
    vendor_hide
} from "./lib/core/index";
import {isMobile, isObject} from "./lib/utils/validation";
import {classManager} from "./lib/utils/css";
import {
    BottomBannerHTML,
    CookieSidebarVendorAndPurposesHTML
} from "./lib/html/index";
import {CookieTypes} from "./lib/constants/cookie";
import {BASE_URL, COOKIE_MANAGER_CONFIGURATION_URL} from "./lib/config/api";
import {ExecuteOnConsentHookOnPageLoad, validateManualConfig} from "./lib/core";

(function (window) {
    "use strict";

    function CookieConsentManager(config) {

        if (isObject(config)) {
            config["mode"] = "auto";

            if (!('apiKey' in config)) {
                config["mode"] = "manual";
            }

            if ('apiKey' in config) {
                if (config["apiKey"].trim().length === 0) {
                    config["mode"] = "manual";
                }
            }

            if (config["mode"] === "manual") {
                if (!validateManualConfig(config)) {
                    return
                }

                config["manualConfig"] = {
                    "Configuration": config["basic"],
                    "CookiePurposes": config["cookiePurposes"]
                }
            }

            console.log("[DEBUG] Current mode is ", config["mode"]);

            this.ccmConfig = config;
            this._init();
        }

    }

    CookieConsentManager.prototype = {
        _init: function () {

            if (this.ccmConfig["mode"] === "auto") {
                const xhr = new XMLHttpRequest();
                xhr.onload = () => {
                    if (xhr.status >= 200 && xhr.status < 300) {

                        const config = JSON.parse(xhr.responseText);

                        this._initData(config, this.ccmConfig);

                    } else {
                        console.log(
                            "[DEBUG] Failed to iGrant.io cookie manager config : ",
                            xhr.responseText
                        );
                    }
                };

                xhr.open(
                    "GET",
                    BASE_URL +
                    COOKIE_MANAGER_CONFIGURATION_URL +
                    "?apiKey=" +
                    this.ccmConfig["apiKey"]
                );
                xhr.send();
            } else {

                console.log(this.c);

                this._initData(this.ccmConfig["manualConfig"], this.ccmConfig);
            }

        },

        _initData: function (config, ccmConfig) {

            this.transformedPurposes = TransformPurposes(
                config["CookiePurposes"],
                CookieTypes
            );

            ExecuteOnConsentHookOnPageLoad(this.transformedPurposes, ccmConfig);

            // populating bottom banner HTML
            document.querySelector("body").innerHTML += BottomBannerHTML;

            // Bottom banner container div
            this.el = document.getElementById("gn-menu");

            // Cookie consents icon in bottom
            this.trigger = this.el.querySelector("a.gn-icon-menu");

            // Manage cookies button in banner
            this.manage = this.el.querySelector("a.manage");

            // Sidebar wrapper
            this.menu = this.el.querySelector("nav.gn-menu-wrapper");

            // Save button in sidebar
            this.save = this.el.querySelector("a.cookie-save-button");

            // Cancel button in sidebar
            this.cookie_cancel = this.el.querySelector("a.cookie-cancel");

            this.isMenuOpen = false;

            this.eventType = isMobile() ? "touchstart" : "click";

            this._initEvents(this.transformedPurposes, ccmConfig);

            const self = this;
            this.bodyClickFn = function () {
                self._closeMenu();
                this.removeEventListener(self.eventType, self.bodyClickFn);
            };

            CookieSidebarVendorAndPurposesHTML(
                config,
                this.transformedPurposes,
                ccmConfig
            );
        },

        _initEvents: function (transformedPurposes, ccmConfig) {
            const self = this;

            if (isMobile()) {
                /**
                 * if visited from mobile browser
                 */

                this.trigger.addEventListener("click", function () {
                    self._openMenuPartial();
                    document.getElementById("cookie-consent-sidebar").style.display =
                        "block";
                    self._closeMenuPartial();
                });

                this.save.addEventListener("click", function () {
                    self._closeMenu();
                    SaveCookieConsent(CookieTypes, ccmConfig);
                });

                this.cookie_cancel.addEventListener("click", function () {
                    self._closeMenu();
                });

                this.manage.addEventListener(this.eventType, function () {
                    ShowCookieSidebar();
                    ToggleCookiePurposes(transformedPurposes);
                    showVendorLink(true);
                    vendor_hide();
                    self._openMenu();
                });
            } else {
                /**
                 * if visited from desktop browser
                 */

                this.trigger.addEventListener(this.eventType, function (ev) {
                    ev.stopPropagation();
                    ev.preventDefault();

                    if (!self.isMenuOpen) {
                        vendor_hide();

                        document.getElementById("cookie-consent-sidebar").style.display =
                            "block";

                        ToggleCookiePurposes(transformedPurposes);

                        showVendorLink(true);

                        self._openMenu();

                        document.addEventListener(self.eventType, self.bodyClickFn);
                    }
                });

                this.menu.addEventListener(this.eventType, function (ev) {
                    ev.stopPropagation();
                });

                this.save.addEventListener(this.eventType, function () {
                    self._closeMenu();
                    SaveCookieConsent(CookieTypes, ccmConfig);
                });
                this.cookie_cancel.addEventListener(this.eventType, function () {
                    self._closeMenu();
                });
                this.manage.addEventListener(this.eventType, function () {
                    console.log("Clicked");
                    ShowCookieSidebar();
                    ToggleCookiePurposes(transformedPurposes);
                    showVendorLink(true);
                    vendor_hide();
                    self._openMenu();
                });
            }
        },
        _openMenuPartial: function () {
            classManager.add(this.menu, "gn-open-part");
        },
        _closeMenuPartial: function () {
            classManager.remove(this.menu, "gn-open-part");
        },
        _openMenu: function () {
            if (this.isMenuOpen) return;
            classManager.add(this.trigger, "gn-selected");
            this.isMenuOpen = true;
            classManager.add(this.menu, "gn-open-all");
            this._closeMenuPartial();
        },
        _closeMenu: function () {
            if (!this.isMenuOpen) return;
            classManager.remove(this.trigger, "gn-selected");
            this.isMenuOpen = false;
            classManager.remove(this.menu, "gn-open-all");
            this._closeMenuPartial();
        }
    };

    // add to global namespace
    window.CookieConsentManager = CookieConsentManager;
})(window);

// main.js
