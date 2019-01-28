var analyticCheck=0;
var privacyCheck=0;
;( function( window ) {
	
	'use strict';
	function mobilecheck() {
		var check = false;
		(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		var ismobile=/ipad|iPhone|android/i.test(navigator.userAgent);
		if(ismobile){
		console.log("using mobile")
		return check;}
	}

	function gnMenu( el, options ) {	
		this.el = el;
		this._init();
	}

	gnMenu.prototype = {
		_init : function() {
			this.trigger = this.el.querySelector( 'a.gn-icon-menu' );
			this.menu = this.el.querySelector( 'nav.gn-menu-wrapper' );
			this.save=this.el.querySelector( 'a.cookie-save-button' );
			this.cookie_cancel=this.el.querySelector( 'a.cookie-cancel' );
			this.manage = this.el.querySelector( 'a.manage' );
			this.isMenuOpen = false;
			this.eventtype = mobilecheck() ? 'touchstart' : 'click';
			this._initEvents();

			var self = this;
			this.bodyClickFn = function() {
				self._closeMenu();
				this.removeEventListener( self.eventtype, self.bodyClickFn );
			};
		},
		_initEvents : function() {
			var self = this;
			var ifmobile= mobilecheck();
			console.log("mobile check is "+ifmobile);

			if( ifmobile=="true" ) {
				console.log("is mobile")
				this.trigger.addEventListener( 'click', function(ev) { self._openIconMenu(); } );
				this.trigger.addEventListener( 'click', function(ev) { self._closeIconMenu(); } );
				this.save.addEventListener( 'click', function(ev) { 
					if(analyticCheck==1){ 
					analytics();
				}
				else if(analyticCheck==0){
					// deleteCookie("_ga", "/", ".igrand.io");
					// deleteCookie("_gid", "/", ".igrand.io");
					// deleteCookie("_dc_gtm_UA-115472117-1", "/", ".igrand.io");
					deletecookie();
				console.log("analytic cookie deleted");
				}
				self._closeMenu(); } );
				this.cookie_cancel.addEventListener( 'click', function(ev) { self._closeMenu(); } );
			}
			else{
				console.log("not mobile")
			this.trigger.addEventListener( this.eventtype, function( ev ) {
				ev.stopPropagation();
				ev.preventDefault();
				if( self.isMenuOpen ) {
					self._closeMenu();
					document.removeEventListener( self.eventtype, self.bodyClickFn );
				}
				else {
					self._openMenu();
					document.addEventListener( self.eventtype, self.bodyClickFn );
				}
			} ); 
			this.menu.addEventListener( this.eventtype, function(ev) { ev.stopPropagation(); } );

			this.save.addEventListener( this.eventtype, function(ev) { 
				if(analyticCheck==1){
					analytics();
				  }
				  else if(analyticCheck==0){
					console.log("analytic cookie deleted");
					
					deletecookie();
					console.log("analytic cookie deleted");
					if(analyticCheck==0){
						console.log('reloading');
						document.location.reload();
					}
				  }
				self._closeMenu();
			} );
			this.cookie_cancel.addEventListener( this.eventtype, function(ev) { 
				self._closeMenu();
			} );
			this.manage.addEventListener( this.eventtype, function(ev) { 
				document.getElementById("fixedBottomNav").style.display = 'none';
				self._openMenu();
			} );
			}
		},
		_openIconMenu : function() {
			classie.add( this.menu, 'gn-open-part' );
		},
		_closeIconMenu : function() {
			classie.remove( this.menu, 'gn-open-part' );
		},
		_openMenu : function() {
			if( this.isMenuOpen ) return;
			classie.add( this.trigger, 'gn-selected' );
			this.isMenuOpen = true;
			classie.add( this.menu, 'gn-open-all' );
			this._closeIconMenu();
		},
		_closeMenu : function() {
			if( !this.isMenuOpen ) return;
			classie.remove( this.trigger, 'gn-selected' );
			this.isMenuOpen = false;
			classie.remove( this.menu, 'gn-open-all' );
			this._closeIconMenu();
			
		}
	}

	// add to global namespace
	window.gnMenu = gnMenu;

} )( window );

//main.js


function analytics(){

    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	   })(window,document,'script','dataLayer','GTM-N4VZD77');
	   console.log('ranalytics created');
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


function checkAnalytical(cname){
    var cook = getCookie(cname);
    console.log("check analy");
    console.log(cook);
    var checkboxAnalytical = document.querySelector('input[name="analytical_check"]');
    if(cook){
        checkboxAnalytical.checked=true;
        analyticCheck=1;
    }
    else{
        checkboxAnalytical.checked=false;
        analyticCheck=0;
    }
}

function checkPrivacy(cname){
    var _cookiename=getCookie(cname);
    console.log("check priva");
    var checkboxPrivacy = document.querySelector('input[name="privacy_check"]');
    if(_cookiename=="accepted"){
        checkboxPrivacy.checked=true;
        privacyCheck=1;
    }
    else{
        checkboxPrivacy.checked=true;
        privacyCheck=0;
    }
}

function deleana(){
	deleteCookie("_ga", "/", ".igrand.io");
	deleteCookie("_gid", "/", ".igrand.io");
	deleteCookie("_dc_gtm_UA-115472117-1", "/", ".igrand.io");
}

function deleteall(){
createCookie("_ga","",-1);
createCookie("_gid","",-1);
createCookie("privacypolicy","accepted",-1);
createCookie("_dc_gtm_UA-115472117-1","",-1);
document.getElementById("fixedBottomNav").style.display = 'none';
}


function acceptall(){
	analytics();
    createCookie("privacypolicy","accepted",30);
	document.getElementById("fixedBottomNav").style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[name="analytical_check"]');
    var checkbox1 = document.querySelector('input[name="privacy_check"]');

    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // do this
        analyticCheck=1;
        console.log('analytical Checked');
        console.log(analyticCheck);
	  } 
	  else {
        // do that
        analyticCheck=0;
        console.log('Not checked');
        console.log(analyticCheck);
      }
    });

    checkbox1.addEventListener('change', function () {
        if (checkbox1.checked) {
          // do this
          privacyCheck=1;
          console.log('Privacy Checked');
          console.log(privacyCheck);
        } else {
          // do that
          privacyCheck=0;
          console.log('Not checked');
          console.log(privacyCheck);
        }
      });
  });

function addPrivacy()
{
 console.log("sidebar");
 cookietxt = "accepted";
 document.getElementById("fixedBottomNav").style.display = 'none';
 if (cookietxt != "" && cookietxt != null) {
     setCookie("privacypolicy", cookietxt, 30);
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
createCookie("privacypolicy","accepted",30);
}

function checkCookies() {
    var cookietxt=getCookie("privacypolicy");
    if (cookietxt == "accepted") {
          document.getElementById("fixedBottomNav").style.display='none'; 
         } else {
         document.getElementById("fixedBottomNav").style.display = 'block';
    }
}
function activeTabMove(i){if(i==2){activeTab('privacy');document.location.href = "#privacy_statement";}else{activeTab('cookies');$(window).scrollTop(0);}}
function activeTab(tab){ $('.nav-tabs a[href="#'+tab+'"]').tab('show');}
