
var analyticCheck=0;
var privacyCheck=0;

function analytics(){

    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	   })(window,document,'script','dataLayer','GTM-N4VZD77');
	   return true;
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

function checkAnalytical(cname){
    var cook = getCookie(cname);
    console.log("check analy");
    console.log(cook);
    var checkboxAnalytical = document.querySelector('input.AnalyticalCookies');
    if(cook){
        checkboxAnalytical.checked=true;
        analyticCheck=1;
    }
    else{
        checkboxAnalytical.checked=false;
        analyticCheck=0;
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
    createCookie("PrivacyPolicy","accepted",30);
	document.getElementById("fixedBottomNav").style.display = 'none';
}

// document.addEventListener('DOMContentLoaded', function () {
//     var checkbox = document.querySelector('input[name="analytical_check"]');
//     var checkbox1 = document.querySelector('input[name="privacy_check"]');

//     checkbox.addEventListener('change', function () {
//       if (checkbox.checked) {
//         // do this
//         analyticCheck=1;
//         console.log('analytical Checked');
//         console.log(analyticCheck);
// 	  } 
// 	  else {
//         // do that
//         analyticCheck=0;
//         console.log('Not checked');
//         console.log(analyticCheck);
//       }
//     });

//     checkbox1.addEventListener('change', function () {
//         if (checkbox.checked) {
//           // do this
//           privacyCheck=1;
//           console.log('Privacy Checked');
//           console.log(privacyCheck);
//         } else {
//           // do that
//           privacyCheck=0;
//           console.log('Not checked');
//           console.log(privacyCheck);
//         }
//       });
//   });

function addPrivacy()
{
 console.log("sidebar");
 cookietxt = "accepted";
 document.getElementById("fixedBottomNav").style.display = 'none';
 if (cookietxt != "" && cookietxt != null) {
     setCookie("PrivacyPolicy", cookietxt, 30);
 }
}

function deletecookie(){
(function () {
    var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
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
        }
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






function checkCookies() {
    var cookietxt=getCookie("PrivacyPolicy");
    if (cookietxt == "accepted") {
          document.getElementById("fixedBottomNav").style.display='none'; 
         } else {
         document.getElementById("fixedBottomNav").style.display = 'block';
    }
}
function activeTabMove(i){if(i==2){activeTab('privacy');document.location.href = "#privacy_statement";}else{activeTab('cookies');$(window).scrollTop(0);}}
function activeTab(tab){ $('.nav-tabs a[href="#'+tab+'"]').tab('show');}