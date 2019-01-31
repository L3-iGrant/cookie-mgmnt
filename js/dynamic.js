var analyticCheck=0; //for google analytics
var privacyCheck=1;// for privacy policy whick is always required which include basic functional cookies
$(document).ready(function(){

var i=0,
    arrLen=Config.apps.length,
    cookieSlidebarText="";

    cookieSlidebarText=cookieSlidebarText+ '<div class="col-sm-12" style="padding-top: 25px;">'
        +'<div class="social-plugin col-sm-12">'
        +'<a href="index.html">'+Config.tagName +'</a> '+Config.consentSidebarMain+'<a href="'+Config.cookiePolicy+'"> Cookie Policy.</a>'
        +'<hr>'
        +'</div>'
        +'</div>'
        +'<div class="sidebar-cookie-select col-sm-12">'
        +'<h4 class="top-text">'+Config.consentSidebarSubTitle+'</h4>'
        +' <div class="col-sm-12 social-plugin">'
        +Config.consentSidebarSubDescription
        +'</div>'
        +'<div class="col-sm-12"><hr></div>'
        +'</div>'
        +'<div class="col-sm-12" style="overflow-y:scroll;height: 250px;" id="style-3">';
        for (i=0; i < arrLen; i++ ) {
                cookieSlidebarText=cookieSlidebarText + ' <div>'
                    +' <div class="social-plugin col-sm-10 ">'
                    +'<strong>'+Config.apps[i].cookietitle+': </strong>'+ Config.apps[i].description
                    +' <div style="padding-top:3px;font-size: 10px;">'
                    +'  Cookies Used: '+Config.apps[i].purpose
                    +'</div> '
                    +'</div>'
                    +'<div class="toggle text-right" style="padding-top: 18px;">'
                    +'<label class="switch"> '
                    +'<input type="checkbox" class="'+Config.apps[i].name+'" value="'+Config.apps[i].required+'"id="'+Config.apps[i].name+'">'
                    +' <span class="slider round"><div class="slide-txt">on</div></span>'
                    +'  </label>'
                    +'  </div>'
                    +'<div class="col-sm-12"><hr></div>'
                    +' </div>';
        };
        cookieSlidebarText=cookieSlidebarText +' </div> ';
                console.log(cookieSlidebarText)
$("#cookiebar").html(cookieSlidebarText);



for (i=0; i < arrLen; i++ ) {

if(Config.apps[i].required==true){
$("input."+Config.apps[i].name).attr("checked", "checked");
$("input."+Config.apps[i].name).attr("disabled", "disabled");
}
$("#cookiebar").on('change',"input."+Config.apps[i].name, function(){
       
        if (this.checked) {
                var selected=this.id;
                if(selected=="AnalyticalCookies"){
                 
                        analyticCheck=1;
                }
                else if(selected=="EssentialCookies"){

                        privacyCheck=1;
                }
            }
        else {
                var selected=this.id;
                if(selected=="AnalyticalCookies"){
                
                        analyticCheck=0;
             }
        }

    });
}

var cookieBannerText="";
cookieBannerText=cookieBannerText +'<a href="index.html">'+Config.tagName+'</a> '+Config.consentBannerDescription+'Please read our <a href="'+Config.cookiePolicy+'">Cookies Policy</a>  and our <a href="'+Config.privacyPolicy+'">Privacy Policy</a> pages for details.';

        $("#cookiebanner").html(cookieBannerText);

 var cookieBannerHeader="";
 cookieBannerHeader=cookieBannerHeader+Config.tagLine;
        
        $("#cookiebannerHeadtag").html(cookieBannerHeader);


});

function saveConsent(){
console.log("helloooooooooooooooooooo")
        if(analyticCheck==1){
                analytics();
        }
        else if(analyticCheck==0){
                deletecookie();
                if(analyticCheck==0)
                document.location.reload();
        }
        if(privacyCheck==1){
                createCookie("PrivacyPolicy","accepted",30)
        }else if(privacyCheck==0){
                //always needed
        }
}





                          
                         
                  
              
            

       
            
               
                
            
           
                
            
     
