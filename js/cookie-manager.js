

/*!
 * GDPR-cookie - An iGrant.io javascript plugin to manage cookie settings in compliance with EU law
 *
 * Description: This file contains all the functions which creates and deletes cookie.
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
    if(Config.isVendorRequired == "true"){
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


function checkAnalytical(){
    for(i=0;i<Config.numberOfPurposes;i++){
        

        var cookies_length=Config.purposes[i].cookies.length

           for(j=0;j < cookies_length;j++)
           {
           var cookies=Config.purposes[i].cookies[j]
            var is_cookie_present = getCookie(cookies);
                var checkbox = document.querySelector("input."+Config.purposes[i].name);
                if(is_cookie_present=="accepted"){
                    checkbox.checked=true;
                }
                else{
                    checkbox.checked=false;
                }

            }
    }
}


function acceptall(){
    analytics();
    for(i=0;i<Config.numberOfPurposes;i++){

        var cookies_length=Config.purposes[i].cookies.length

           for(j=0;j < cookies_length;j++)
           {
            var cookie=Config.purposes[i].cookies[j]
            if(cookie=="Analytics" || cookie=="analytics" || cookie=="_ga" || cookie=="_gid" || cookie=="_gat"){
               analytics();
            }
            if(cookie=="_ga" || cookie=="_gid" || cookie=="_gat"){
                if(cookie=="_gat"){createCookie(cookie,"accepted",30);}
            }
            else{
                   createCookie(cookie,"accepted",30);
            }  
            }
        }
	document.getElementById("fixedBottomNav").style.display = 'none';
}


function addPrivacy()
{
 cookietxt = "accepted";
 document.getElementById("fixedBottomNav").style.display = 'none';
 if (cookietxt != "" && cookietxt != null) {

    for(i=0;i<Config.numberOfPurposes;i++){

        var is_required= Config.purposes[i].required;
        var cookies_length=Config.purposes[i].cookies.length
        if(is_required){
           for(j=0;j < cookies_length;j++)
           {
               var cookie = Config.purposes[i].cookies[j];
               setCookie(cookie, cookietxt, 30);

           }
        }
    }
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
        var toggles =Config.purposes[i].name;
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

function sidebar_activate(){
    document.getElementById("cookie-consent-sidebar").style.display="block";
}


function saveConsent(){

    for (i=0; i < Config.numberOfPurposes; i++ ) {

        var name=Config.purposes[i].name;
           var checkbox=document.querySelector("input."+name);

           var cookies_length=Config.purposes[i].cookies.length

           for(j=0;j < cookies_length;j++)
           {
           var cookie=Config.purposes[i].cookies[j]
            if(checkbox.checked==true){
                
                var get_cookie=getCookie(cookie);
                if(get_cookie!="accepted"){

                    if(cookie=="Analytics" || cookie=="analytics" || cookie=="_ga" || cookie=="_gid" || cookie=="_gat"){
                        analytics();
                    }
                    if(cookie=="_ga" || cookie=="_gid" || cookie=="_gat"){
                        if(get_cookie == "declined"){
                            createCookie(cookie,"accepted",30); }
                    }
                    else{
                        createCookie(cookie,"accepted",30);
                    }
                }
            }
            else if(checkbox.checked==false){
                
                if(cookie=="Analytics" || cookie=="analytics" || cookie=="_ga" || cookie=="_gid" || cookie=="_gat"){
                    
                    var del =deletecookie();
                    deleteCookie("_ga","/",".igrant.io")
                    deleteCookie("_gid","/",".igrant.io")
                    createCookie(cookie,"declined",30)
                    location.reload(false);
                }
                else{
                    
                    createCookie(cookie,"declined",30)

                }  
            }
        }
    }

}

function checkCookie() {

    for(i=0;i<Config.numberOfPurposes;i++){

        var is_required= Config.purposes[i].required;
        var cookies_length=Config.purposes[i].cookies.length
        if(is_required){
           for(j=0;j < cookies_length;j++)
           {   
               var cookie = Config.purposes[i].cookies[j];
               var cookietxt=getCookie(cookie);
               
           }
        }
    }
    if (cookietxt == "accepted") {
          document.getElementById("fixedBottomNav").style.display='none'; 
         } else {
         document.getElementById("fixedBottomNav").style.display = 'block';
    }
}