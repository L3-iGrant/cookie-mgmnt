

/*!
 * GDPR-cookie - An iGrant.io javascript plugin to manage cookie settings in compliance with EU law
 *
 * Description: This file contains all the functions which creates and deletes cookie.
 *               
 *             
 * Copyright (c) 2018-2019 LCubed AB
 *
 * Author: Anandhu K M
 *
 */




function analytics(){ 

    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	   })(window,document,'script','dataLayer','GTM-N4VZD77');
       return true;
       
}

$.ajax({
    url: Config.vendor_url,
    dataType: 'json',
    async: false,
    success: function(data) {
     vendor_list=data;
    }
  });

function vendorActivate(){
    console.log(Config.isVendorRequired)
    if(Config.isVendorRequired){
       console.log("vneodr needed")
        document.getElementById("vendor_show_text").style.display="block";
    }else{
        document.getElementById("vendor_show_text").style.display="none";
    }

}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
 var name = cname + "=";
 var decodedCookie = decodeURIComponent(document.cookie);
 var ca = decodedCookie.split(';');
 for(var i = 0; i < ca.length; i++) {
     var c = ca[i];
     while (c.charAt(0) == ' ') {
         c = c.substring(1);
     }
     if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
     }
 }
 return "";
}

function createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
  }

function eraseCookie(name) {
    createCookie(name,"",-1);
  }
function cookieAction(q){


}

function checkAnalytical(){
    for(i=0;i<Config.numberOfPurposes;i++){

        var cook=eval(`Config.purpose${i}_cookies`);
        var name=eval(`Config.purpose${i}_name`);
        

            var is_cookie_present = getCookie(cook);
                var checkbox = document.querySelector("input."+name);
                if(is_cookie_present=="accepted"){
                    checkbox.checked=true;
                }
                else{
                    checkbox.checked=false;
                }
    }
}


function deleteall(){
createCookie("_ga","",-1);
createCookie("_gid","",-1);
createCookie("PrivacyPolicy","accepted",-1);
createCookie("_dc_gtm_UA-115472117-1","",-1);
document.getElementById("fixedBottomNav").style.display = 'none';
}


function acceptall(){
    analytics();
    for(i=0;i<Config.numberOfPurposes;i++){
        var cookies=eval(`Config.purpose${i}_cookies`)
        createCookie(cookies,"accepted",30);
    }
	document.getElementById("fixedBottomNav").style.display = 'none';
}

function addPrivacy()
{
 cookietxt = "accepted";
 document.getElementById("fixedBottomNav").style.display = 'none';
 if (cookietxt != "" && cookietxt != null) {
     setCookie("PrivacyPolicy", cookietxt, 30);
 }
}

function deletecookie(){
(function () {
    var cookies = document.cookie.split("; ");
    for (var c = 0; c <= cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
            var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
            var p = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
                
            };
            d.shift();
        }return true;
    }
})();
createCookie("PrivacyPolicy","accepted",30);

}


function deleteCookie(name, path, domain) {
    let str = name+'=; Max-Age=-99999999;'
    // try to delete the cookie without any path and domain
    document.cookie = str
    if (path !== undefined)
        str += ' path='+path+';'
    // try to delete the cookie with path
    document.cookie = str
    if (domain !== undefined)
        str += ' domain='+domain+';'
    // try to delete the cookie with domain and path
    document.cookie = str
}

function enable_toggles(){
     
    for (i=0; i < Config.numberOfPurposes; i++ ) {
        var toggles = eval(`Config.purpose${i}_name`);
        $("input."+toggles).prop('checked', true);
    }
    document.getElementById("vendor_show_text").style.display="block";
    document.getElementById("vendor_hide_text").style.display="none";
    document.getElementById("purposes_scroll").style.display="block";
    document.getElementById("vendor_list").style.display="none";
}

function vendor_show(){
    document.getElementById("purposes_scroll").style.display="none";
    document.getElementById("vendor_list").style.display="block";
    document.getElementById("vendor_hide_text").style.display="block";
    document.getElementById("vendor_show_text").style.display="none";
    
}

function vendor_hide(){
    document.getElementById("vendor_show_text").style.display="block";
    document.getElementById("vendor_hide_text").style.display="none";
    document.getElementById("purposes_scroll").style.display="block";
    document.getElementById("vendor_list").style.display="none";
}


function saveConsent(){

    for (i=0; i < Config.numberOfPurposes; i++ ) {
        
        var name=eval(`Config.purpose${i}_name`)
           var checkbox=document.querySelector("input."+name);
           var cookie=eval(`Config.purpose${i}_cookies`);
            if(checkbox.checked==true){
                createCookie(cookie,"accepted",30)
                if(cookie=="Analytics"){
                    analytics();
                    
                }
                else if(cookie=="PrivacyPolicy"){
                    createCookie("PrivacyPolicy","accepted",30)
                }
            }
            else if(checkbox.checked==false){
                
                if(cookie=="Analytics" || cookie=="analytics"){
                     var del =deletecookie();
                    createCookie(cookie,"declined",30)
                    location.reload(false);
                }
                else if(cookie=="AdSense"){
                    
                    createCookie(cookie,"declined",30)

                }
                createCookie(cookie,"declined",30)   
            }
    }

}

function checkCookie() {
    var cookietxt=getCookie("PrivacyPolicy");
    if (cookietxt == "accepted") {
          document.getElementById("fixedBottomNav").style.display='none'; 
         } else {
         document.getElementById("fixedBottomNav").style.display = 'block';
    }
}
function activeTabMove(i){if(i==2){activeTab('privacy');document.location.href = "#privacy_statement";}else{activeTab('cookies');$(window).scrollTop(0);}}
function activeTab(tab){ $('.nav-tabs a[href="#'+tab+'"]').tab('show');}