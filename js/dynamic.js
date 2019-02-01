
/*!
 * GDPR-cookie - An iGrant.io javascript plugin to manage cookie settings in compliance with EU law
 *
 * Description: This file creats the cookie consent banner and sidebar dynamically from the details given in config.js file.
 *              Here all the event handlers for the dynamically created checkboxs are initialized. 
 *             
 * Copyright (c) 2018-2019 LCubed AB
 *
 * Author: Anandhu K M
 *
 */

$(document).ready(function(){

var i=0,
    arrLen=Config.numberOfPurposes,
    cookieSidebarText="";

    cookieSidebarText=cookieSidebarText+ '<div class="col-sm-12" style="padding-top: 25px;">'
        +'<div class="social-plugin col-sm-12">'
        +'<a href="index.html">'+Config.companyName +'</a> '+Config.cookieConsentSidebarMainText+'<a href="'+Config.cookiePolicy+'"> Cookie Policy.</a>'
        +'<hr>'
        +'</div>'
        +'</div>'
        +'<div class="sidebar-cookie-select col-sm-12">'
        +'<h4 class="top-text">'+Config.cookieConsentSidebarSubTitle+'</h4>'
        +' <div class="col-sm-12 social-plugin">'
        +Config.cookieConsentSidebarSubDescription
        +'</div>'
        +'<div class="col-sm-12"><hr></div>'
        +'</div>'
        +'<div class="col-sm-12" style="overflow-y:scroll;height: 250px;" id="style-3">';
        for (i=0; i < arrLen; i++ ) {
                cookieSidebarText=cookieSidebarText + ' <div>'
                    +' <div class="social-plugin col-sm-10 ">'
                    +'<strong>'+Config.purposes[i].cookietitle+': </strong>'+ Config.purposes[i].description
                    +' <div style="padding-top:3px;font-size: 10px;">'
                    +'  Cookies Used: '+Config.purposes[i].purpose
                    +'</div> '
                    +'</div>'
                    +'<div class="toggle text-right" style="padding-top: 18px;">'
                    +'<label class="switch"> '
                    +'<input type="checkbox" class="'+Config.purposes[i].name+'" value="'+Config.purposes[i].required+'"id="'+Config.purposes[i].name+'">'
                    +' <span class="slider round"><div class="slide-txt">on</div></span>'
                    +'  </label>'
                    +'  </div>'
                    +'<div class="col-sm-12"><hr></div>'
                    +' </div>';
        };
        cookieSidebarText=cookieSidebarText +' </div> ';
        console.log(cookieSidebarText)

$("#cookiebar").html(cookieSidebarText);

analyticCheck=0;
privacyCheck=0;

for (i=0; i < arrLen; i++ ) {

if(Config.purposes[i].required==true){
$("input."+Config.purposes[i].name).attr("checked", "checked");
$("input."+Config.purposes[i].name).attr("disabled", "disabled");
}
$("#cookiebar").on('change',"input."+Config.purposes[i].name, function(){
       
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
cookieBannerText=cookieBannerText +'<a href="index.html">'+Config.companyName+'</a> '+Config. cookieBannerDescription+'Please read our <a href="'+Config.cookiePolicy+'">Cookies Policy</a>  and our <a href="'+Config.privacyPolicy+'">Privacy Policy</a> pages for details.';

        $("#cookiebanner").html(cookieBannerText);

 var cookieBannerHeader="";
 cookieBannerHeader=cookieBannerHeader+Config.cookieBannerHeader;
        
        $("#cookiebannerHeadtag").html(cookieBannerHeader);


});







                          
                         
                  
              
            

       
            
               
                
            
           
                
            
     
