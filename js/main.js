
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
 console.log("sidebar");
 cookietxt = "accepted";
 document.getElementById("fixedBottomNav").style.display = 'none';
 if (cookietxt != "" && cookietxt != null) {
     setCookie("privacypolicy", cookietxt, 30);
 }
}

function deleteCookie(name, path, domain) {

    console.log("delete cookie");
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
    document.getElementById("fixedBottomNav").style.display='none'; 
}

function checkCookie() {
 var cookietxt=getCookie("privacypolicy");
 if (cookietxt == "accepted") {
       document.getElementById("fixedBottomNav").style.display='none'; 
      } else {
      document.getElementById("fixedBottomNav").style.display = 'block';
 }
}
function activeTabMove(i){if(i==2){activeTab('privacy');document.location.href = "#privacy_statement";}else{activeTab('cookies');$(window).scrollTop(0);}}
function activeTab(tab){ $('.nav-tabs a[href="#'+tab+'"]').tab('show');}
