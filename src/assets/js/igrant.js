//<!-- Google Tag Manager -->

 (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N4VZD77');
 
// <!-- End Google Tag Manager -->




// <!--Cookie Manager --->
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
function setPrivacy()
{
    cookietxt = "accepted";
    document.getElementById("fixedBottomNav").style.display = 'none';
    if (cookietxt != "" && cookietxt != null) {
        setCookie("privacypolicy", cookietxt, 30);
    }
}
function checkCookie() {
    var cookietxt=getCookie("privacypolicy");
    if (cookietxt == "accepted") {
          document.getElementById("fixedBottomNav").style.display='none'; 
         } else {
         document.getElementById("fixedBottomNav").style.display = 'block';
    }
}
//<!--End Cookie Manager-->
//Check Captcha 
function checkCaptcha() {
    var v = grecaptcha.getResponse();
    if (v == '') {
        document.getElementById("wpsubmit").disabled = true;
        return false;
    }
    else {
        document.getElementById("wpsubmit").disabled = false;
        return true;
    }
}
///End captcha
   function activeTabMove(i){if(i==2){activeTab('privacy');document.location.href = "#privacy_statement";}else{activeTab('cookies');$(window).scrollTop(0);}}
   function activeTab(tab){ $('.nav-tabs a[href="#'+tab+'"]').tab('show');}