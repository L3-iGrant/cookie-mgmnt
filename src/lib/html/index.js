import { slideToggle } from "../utils/transition";
import { CookieTypeDetails, CookieTypes } from "../constants/cookie";

import {
  TransformPurposesToBrowserCookiesArray,
  checkAllCookiesAccepted,
  DisableToggleForRequiredPurposes,
  EnableAllPurposeToggles,
  vendor_hide,
  vendor_show,
  AcceptAllCookies
} from "../core/index";
import { IAB_VENDORS_URL } from "../config/api";

/**
 * Bottom banner html code
 */
export const BottomBannerHTML =
  '<div style=" position:fixed; z-index:9999999999;">' +
  '<div class="sidebar" id="sidebar">' +
  '<div id="gn-menu" class="gn-menu-main" >' +
  '<a class="gn-icon-menu" id="cookieConsentAlwaysOnButton"></a>' +
  '<div id="cookie-sidebar" >' +
  '<nav class="gn-menu-wrapper" id="cookie-consent-sidebar" style="display:none;">' +
  '<div id="cookiebar" class="cookiebar"></div>' +
  '<div class="col-sm-12">' +
  '<div id="vendor_hide_text" class="vendor_hide_text"></div>' +
  '<div id="vendor_show_text" style="display:none;"></div> ' +
  "<br/>" +
  '<div class="cookie-set-btn text-right">' +
  '<a class="cookie-cancel" id="cookie-cancel">  </a>' +
  '<a class="cookie-save-button" id="cookie-save-button"></a>' +
  "</div>" +
  '<div class="powered-by" id="powered-by"></div>' +
  "</div>" +
  "</nav>" +
  '<nav id="fixedBottomNav" class="navbar navbar-fixed-bottom" style="display:none;" >' +
  '<div id="cta-4" class="cta-4">' +
  '<div class="container cookieBannerContainer">' +
  '<h4 class="cookiebanner"><div id="cookiebannerHeadtag"></div></h4>' +
  '<div class="col-sm-8" id="cookieBannerText"> </div>' +
  '<div class="banner-div2 text-right" id="gn-menu" >' +
  '<a class="manage" id="cookieBannerManageButton"></a>' +
  '<a id="cookieBannerAllowButton"></a>' +
  "</div>" +
  "</div>" +
  "</div>" +
  "</nav>" +
  "</div>" +
  "</div>" +
  "</div>" +
  "</div>";

/**
 *
 * Vendor list HTML
 *
 */
export const vendorListHTML = vendor_list => {
  let cookieSidebarText = "";
  for (let i = 0; i < vendor_list.vendors.length; i++) {
    cookieSidebarText =
      cookieSidebarText +
      '<div class="">' +
      '<div class="col-sm-6 vendor_name" id="' +
      vendor_list.vendors[i].id +
      '" style="padding-top:3px;">' +
      "<strong>" +
      vendor_list.vendors[i].name +
      "</strong>" +
      "</div>" +
      '<div class="vendor_toggle text-right col-sm-2" style="margin-top:-20px;">' +
      '<label class="switch"> ' +
      '<input type="checkbox" class="' +
      vendor_list.vendors[i].name +
      ' "id="' +
      vendor_list.vendors[i].name +
      '">' +
      '<span class="slider round"><div class="slide-txt">on</div></span>' +
      "</label>" +
      "</div>" +
      '<div class="col-sm-2 text-right arrow"><a class="vendor' +
      vendor_list.vendors[i].id +
      ' down" id="' +
      vendor_list.vendors[i].id +
      '" style="cursor:pointer;"></a></div>' +
      '<div class="col-sm-12">' +
      '<div class="a' +
      vendor_list.vendors[i].id +
      '" id="vendor_details_drop" style="display:none;">' +
      "<div>" +
      '<div style="padding-top:5px;">' +
      '<strong>Policy Url :</strong> <a style="font-size:10px;" href="' +
      vendor_list.vendors[i].policyUrl +
      '"><br>' +
      vendor_list.vendors[i].policyUrl +
      "</a>" +
      "</div>" +
      '<div class="vendor_purposes" style="padding-top:5px;" >' +
      "<strong> Purposes : </strong> <div>";

    for (let j = 0; j < vendor_list.vendors[i].purposeIds.length; j++) {
      const purpose = vendor_list.vendors[i].purposeIds[j];
      for (let k = 0; k < vendor_list.purposes.length; k++) {
        if (vendor_list.purposes[k].id === purpose) {
          cookieSidebarText =
            cookieSidebarText +
            '<div style="font-size:10px;">' +
            vendor_list.purposes[k].name +
            "</div>";
        }
      }
    }

    cookieSidebarText =
      cookieSidebarText +
      "</div></div>" +
      '<div id="vendor_legitimate" style="padding-top:5px;" >' +
      "<strong> Legitimate Interest Purposes : </strong> <div>";

    for (let j = 0; j <= vendor_list.vendors[i].legIntPurposeIds.length; j++) {
      if (vendor_list.vendors[i].legIntPurposeIds.length !== 0) {
        const purpose = vendor_list.vendors[i].legIntPurposeIds[j];
        for (let k = 0; k < vendor_list.purposes.length; k++) {
          if (vendor_list.purposes[k].id === purpose) {
            cookieSidebarText =
              cookieSidebarText +
              '<div style="font-size:10px;">' +
              vendor_list.purposes[k].name +
              "</div>";
          }
        }
      } else if (vendor_list.vendors[i].legIntPurposeIds.length === 0) {
        cookieSidebarText =
          cookieSidebarText +
          '<div style="font-size:10px;">' +
          "Nill" +
          "</div>";
      }
    }

    cookieSidebarText =
      cookieSidebarText +
      "</div></div>" +
      '<div class="vendor_purposes" style="padding-top:5px;" >' +
      "<strong> Features : </strong> <div>";

    for (let j = 0; j <= vendor_list.vendors[i].featureIds.length; j++) {
      if (vendor_list.vendors[i].featureIds.length !== 0) {
        let purpose = vendor_list.vendors[i].featureIds[j];
        for (let k = 0; k < vendor_list.features.length; k++) {
          if (vendor_list.features[k].id === purpose) {
            cookieSidebarText =
              cookieSidebarText +
              '<div style="font-size:10px;">' +
              vendor_list.features[k].name +
              "</div>";
          }
        }
      } else if (vendor_list.vendors[i].featureIds.length === 0) {
        cookieSidebarText =
          cookieSidebarText +
          '<div style="font-size:10px;">' +
          "Nill" +
          "</div>";
      }
    }

    cookieSidebarText =
      cookieSidebarText +
      "</div></div>" +
      "</div>" +
      "</div></div>" +
      '<div class="col-sm-12"><hr></div>' +
      "</div>";
  }

  cookieSidebarText = cookieSidebarText + "</div></div>";

  document.querySelector("#vendor_scroll").innerHTML = cookieSidebarText;

  for (let i = 0; i < vendor_list.vendors.length; i++) {
    document
      .querySelector("a.vendor" + vendor_list.vendors[i].id)
      .addEventListener("click", event => {
        let sh = event.target.id;
        sh = "a" + sh;
        slideToggle(document.querySelector("." + sh));
      });
  }
};

export const CookieSidebarVendorAndPurposesHTML = (
  config,
  transformedPurposes,
  ccmConfig
) => {
  checkAllCookiesAccepted(transformedPurposes, ccmConfig);

  let cookieSidebarText = "";

  cookieSidebarText =
    cookieSidebarText +
    '<div class="col-sm-12" style="padding-top:25px;">' +
    '<h4 class="top-text">' +
    config["Configuration"]["SidebarSubtitle"] +
    "</h4>" +
    '<div class="social-plugin col-sm-12">' +
    '<a href="index.html">' +
    config["Configuration"]["CompanyName"] +
    "</a> " +
    config["Configuration"]["SidebarMainText"] +
    ' Please read our <a href="' +
    config["Configuration"]["CookiePolicyURL"] +
    '">Cookies Policy</a>  and <a href="' +
    config["Configuration"]["CompanyPolicyURL"] +
    '">Privacy Policy</a> for details.' +
    "</div>" +
    "</div>" +
    '<div class="sidebar-cookie-select col-sm-12">' +
    "<br>" +
    ' <div class="col-sm-12 social-plugin">' +
    config["Configuration"]["SidebarSubDescription"] +
    "</div>" +
    '<div class="cookie-accept-all text-right" >' +
    '<button class="btn btn-default btn-round cookie_sidebar">Allow All</button>' +
    "</div>" +
    '<div class="col-sm-12"><hr></div><br>' +
    "</div>" +
    '<div class="col-sm-12 vendor-scroll" id="vendor_list" style="display:none;height:270px;">' +
    '<h6 style="margin-left:15px;margin-top:-5px;" class="company">COMPANY</h6>' +
    '<div style="height:240px; overflow-y:scroll; overflow-x: hidden;" id="vendor_scroll">';

  let vendor_list = {
    features: [],
    lastUpdated: "",
    purposes: [],
    vendorListVersion: 0,
    vendors: []
  };
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      vendor_list = JSON.parse(xhr.responseText);
      vendorListHTML(vendor_list);
    } else {
      console.log("Unable to retrieve vendor list : ", xhr.responseText);
    }
  };

  xhr.open("GET", IAB_VENDORS_URL);
  xhr.send();

  for (let i = 0; i < vendor_list.vendors.length; i++) {
    cookieSidebarText =
      cookieSidebarText +
      '<div class="">' +
      '<div class="col-sm-6 vendor_name" id="' +
      vendor_list.vendors[i].id +
      '" style="padding-top:3px;">' +
      "<strong>" +
      vendor_list.vendors[i].name +
      "</strong>" +
      "</div>" +
      '<div class="vendor_toggle text-right col-sm-2" style="margin-top:-20px;">' +
      '<label class="switch"> ' +
      '<input type="checkbox" class="' +
      vendor_list.vendors[i].name +
      ' "id="' +
      vendor_list.vendors[i].name +
      '">' +
      '<span class="slider round"><div class="slide-txt">on</div></span>' +
      "</label>" +
      "</div>" +
      '<div class="col-sm-2 text-right arrow"><a class="' +
      vendor_list.vendors[i].id +
      ' down" id="' +
      vendor_list.vendors[i].id +
      '" style="cursor:pointer;"></a></div>' +
      '<div class="col-sm-12">' +
      '<div class="a' +
      vendor_list.vendors[i].id +
      '" id="vendor_details_drop" style="display:none;">' +
      "<div>" +
      '<div style="padding-top:5px;">' +
      '<strong>Policy Url :</strong> <a style="font-size:10px;" href="' +
      vendor_list.vendors[i].policyUrl +
      '"><br>' +
      vendor_list.vendors[i].policyUrl +
      "</a>" +
      "</div>" +
      '<div class="vendor_purposes" style="padding-top:5px;" >' +
      "<strong> Purposes : </strong> <div>";

    for (let j = 0; j < vendor_list.vendors[i].purposeIds.length; j++) {
      const purpose = vendor_list.vendors[i].purposeIds[j];
      for (let k = 0; k < vendor_list.purposes.length; k++) {
        if (vendor_list.purposes[k].id === purpose) {
          cookieSidebarText =
            cookieSidebarText +
            '<div style="font-size:10px;">' +
            vendor_list.purposes[k].name +
            "</div>";
        }
      }
    }

    cookieSidebarText =
      cookieSidebarText +
      "</div></div>" +
      '<div id="vendor_legitimate" style="padding-top:5px;" >' +
      "<strong> Legitimate Interest Purposes : </strong> <div>";

    for (let j = 0; j <= vendor_list.vendors[i].legIntPurposeIds.length; j++) {
      if (vendor_list.vendors[i].legIntPurposeIds.length !== 0) {
        const purpose = vendor_list.vendors[i].legIntPurposeIds[j];
        for (let k = 0; k < vendor_list.purposes.length; k++) {
          if (vendor_list.purposes[k].id === purpose) {
            cookieSidebarText =
              cookieSidebarText +
              '<div style="font-size:10px;">' +
              vendor_list.purposes[k].name +
              "</div>";
          }
        }
      } else if (vendor_list.vendors[i].legIntPurposeIds.length === 0) {
        cookieSidebarText =
          cookieSidebarText +
          '<div style="font-size:10px;">' +
          "Nill" +
          "</div>";
      }
    }

    cookieSidebarText =
      cookieSidebarText +
      "</div></div>" +
      '<div class="vendor_purposes" style="padding-top:5px;" >' +
      "<strong> Features : </strong> <div>";

    for (let j = 0; j <= vendor_list.vendors[i].featureIds.length; j++) {
      if (vendor_list.vendors[i].featureIds.length !== 0) {
        let purpose = vendor_list.vendors[i].featureIds[j];
        for (let k = 0; k < vendor_list.features.length; k++) {
          if (vendor_list.features[k].id === purpose) {
            cookieSidebarText =
              cookieSidebarText +
              '<div style="font-size:10px;">' +
              vendor_list.features[k].name +
              "</div>";
          }
        }
      } else if (vendor_list.vendors[i].featureIds.length === 0) {
        cookieSidebarText =
          cookieSidebarText +
          '<div style="font-size:10px;">' +
          "Nill" +
          "</div>";
      }
    }

    cookieSidebarText =
      cookieSidebarText +
      "</div></div>" +
      "</div>" +
      "</div></div>" +
      '<div class="col-sm-12"><hr></div>' +
      "</div>";
  }

  cookieSidebarText =
    cookieSidebarText +
    "</div></div>" +
    "</div>" +
    '<div class="col-sm-12" id="purposes_scroll">';

  for (let i = 0; i < Object.keys(transformedPurposes).length; i++) {
    if (transformedPurposes[Object.keys(transformedPurposes)[i]].length === 0)
      continue;

    cookieSidebarText =
      cookieSidebarText +
      " <div><div style='display: flex; margin: -1px;'>" +
      '<div class="social-plugin col-sm-10" id="purpose_list">' +
      "<strong>" +
      Object.keys(transformedPurposes)[i] +
      ": </strong>" +
      CookieTypeDetails[Object.keys(transformedPurposes)[i]]["description"] +
      '<div class="cookieUsed" style="padding-top:3px;font-size:10px; ">' +
      "Cookies Used: ";

    const cookiesLength = TransformPurposesToBrowserCookiesArray(
      config["CookiePurposes"],
      CookieTypes
    )[Object.keys(transformedPurposes)[i]].length;

    for (let j = 0; j < cookiesLength; j++) {
      cookieSidebarText =
        cookieSidebarText +
        TransformPurposesToBrowserCookiesArray(
          config["CookiePurposes"],
          CookieTypes
        )[Object.keys(transformedPurposes)[i]][j];
      if (j !== cookiesLength - 1) {
        cookieSidebarText = cookieSidebarText + ", ";
      }
    }
    cookieSidebarText =
      cookieSidebarText +
      "</div> " +
      "</div>" +
      '<div class="toggle text-right" style="padding-top:20px;">' +
      '<label class="switch"> ' +
      '<input type="checkbox" class="' +
      Object.keys(transformedPurposes)
        [i].trim()
        .split(" ")
        .join("-") +
      '" value="' +
      (Object.keys(transformedPurposes)[i] === "Essential cookies"
        ? "true"
        : "false") +
      '"id="' +
      Object.keys(transformedPurposes)
        [i].trim()
        .split(" ")
        .join("-") +
      '">' +
      '<span class="slider round"><div class="slide-txt">on</div></span>' +
      "</label>" +
      "</div>" +
      '</div><div class="col-sm-12"><hr></div>' +
      "</div>";
  }

  cookieSidebarText = cookieSidebarText + " </div>";
  document.querySelector("#cookiebar").innerHTML += cookieSidebarText;

  document
    .querySelector(".cookie-accept-all button")
    .addEventListener("click", () => {
      EnableAllPurposeToggles(CookieTypes);
    });

  DisableToggleForRequiredPurposes();

  document.querySelector("#cookieConsentAlwaysOnButton").innerHTML =
    '<button class="btn btn-default btn-round btn-alwaysOn">Cookie Consents</button>';

  document.querySelector("#vendor_hide_text").innerHTML =
    '<a class="vendor_list_text col-sm-12" style="cursor:pointer;margin-top:15px;">back</a>';
  document.querySelector("#vendor_hide_text").addEventListener("click", () => {
    vendor_hide();
  });

  document.querySelector("#vendor_show_text").innerHTML =
    ' <a class="vendor_list_text col-sm-12" style="cursor:pointer;margin-top:15px;">See all Vendors</a>';
  document
    .querySelector("#vendor_show_text a")
    .addEventListener("click", () => {
      vendor_show();
    });

  document.querySelector("#cookie-cancel").innerHTML =
    '<button class="btn btn-default btn-round cookie_sidebar" style="margin-right:5px;">Cancel</button>';

  document.querySelector("#cookie-save-button").innerHTML =
    '<button class="btn btn-default btn-round cookie_sidebar">Save</button>';
  // document
  //     .querySelector("#cookie-save-button")
  //     .addEventListener("click", () => {
  //         SaveCookieConsent(CookieTypes, ccmConfig);
  //         console.log("[SaveCookieConsent] from vendorHtml");
  //     });

  document.querySelector("#powered-by").innerHTML =
    'Powered by <a href="https://igrant.io/" style="color :rgba(0, 0, 0, 0.733);text-decoration:none;"> <strong>iGrant.io</strong></a>';

  let cookieBannerText = "";
  cookieBannerText =
    cookieBannerText +
    '<a href="index.html">' +
    config["Configuration"]["CompanyName"] +
    "</a> " +
    config["Configuration"]["BannerDescription"] +
    ' Please read our <a href="' +
    config["Configuration"]["CookiePolicyURL"] +
    '">Cookies Policy</a>  and <a href="' +
    config["Configuration"]["CompanyPolicyURL"] +
    '">Privacy Policy</a> for details.';

  document.querySelector("#cookieBannerText").innerHTML = cookieBannerText;

  document.querySelector("#cookieBannerManageButton").innerHTML =
    '<button class="btn btn-default btn-round" style="margin-bottom:10px;" >Manage Cookies</button>';

  document.querySelector("#cookieBannerAllowButton").innerHTML =
    '<button class="btn btn-default btn-round btnaccept" style="margin-left: 10px;margin-bottom:10px;">Allow</button>';
  document
    .querySelector("#cookieBannerAllowButton")
    .addEventListener("click", () => {
      AcceptAllCookies(transformedPurposes, ccmConfig);
    });

  document.querySelector("#cookiebannerHeadtag").innerHTML =
    config["Configuration"]["BannerHeader"];

  if (CookieTypes.length > 2) {
    document.getElementById("purposes_scroll").style.overflowY = "scroll";
    document.getElementById("purposes_scroll").style.height = "270px";
  }
};
