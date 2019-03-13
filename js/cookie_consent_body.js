
/*!
 * GDPR-cookie - An iGrant.io javascript plugin to manage cookie settings in compliance with EU law
 *
 * Description: This file appends the cookie consent body code to the body tag of the html file from which it is called.  
 * 
 * Copyright (c) 2018-2019 LCubed AB
 *
 * Author: Anandhu K M
 *
 */

$(document).ready(function(){

var cookieCode= "";


cookieCode =cookieCode  +'<div style=" position:fixed; z-index:9999999999;">'
                        +'<div class="sidebar" id="sidebar">'
                        +'<div id="gn-menu" class="gn-menu-main" >'
                        +'<a class="gn-icon-menu" id="cookieConsentAlwaysOnButton"></a>'
                        +'<div id="cookie-sidebar" >'
                        +'<nav class="gn-menu-wrapper" id="cookie-consent-sidebar" style="display:none;">'
                        +'<div id="cookiebar" class="cookiebar"></div>'
                        +'<div class="col-sm-12">'
                        +'<div id="vendor_hide_text" class="vendor_hide_text"></div>'
                        +'<div id="vendor_show_text" style="display:none;"></div> '
                        +'<br/>'
                        +'<div class="cookie-set-btn text-right">'
                        +'<a class="cookie-cancel" id="cookie-cancel">  </a>'
                        +'<a class="cookie-save-button" id="cookie-save-button"></a>'
                        +'</div>'
                        +'<div class="powered-by" id="powered-by"></div>'
                        +'</div>'
                        +'</nav>'
                        +'<nav id="fixedBottomNav" class="navbar navbar-fixed-bottom" style="display:none;" >'
                        +'<div id="cta-4" class="cta-4">'
                        +'<div class="container cookieBannerContainer">'
                        +'<h4 class="cookiebanner"><div id="cookiebannerHeadtag"></div></h4>'
                        +'<div class="col-sm-8" id="cookieBannerText"> </div>'
                        +'<div class="banner-div2 text-right" id="gn-menu" >'
                        +'<a class="manage" id="cookieBannerManageButton"></a>'
                        +'<a id="cookieBannerAllowButton"></a>'
                        +'</div>'
                        +'</div>'
                        +'</div>'
                        +'</nav>'
                        +'</div>'
                        +'</div>'
                        +'</div>'
                        +'<script>'
                        +'new gnMenu( document.getElementById( "gn-menu" ) );'
                        +'</script>'
                        +'</div>';


$(cookieCode).appendTo('body');

});           
        
