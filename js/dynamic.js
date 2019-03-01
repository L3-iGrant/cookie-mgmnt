
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
        checkCookie();

var i=0,
    arrLen=Config.numberOfPurposes,
    cookieSidebarText="";
    cookieSidebarText=cookieSidebarText+ '<div class="col-sm-12" style="padding-top: 25px;">'
        +'<h4 class="top-text">'+Config.cookieConsentSidebarSubTitle+'</h4>'
        +'<div class="social-plugin col-sm-12">'
        +'<a href="index.html">'+Config.companyName +'</a> '+Config.cookieConsentSidebarMainText+' Please read our <a href="'
        +Config.cookiePolicy+'">Cookies Policy</a>  and <a href="'
        +Config.privacyPolicy+'">Privacy Policy</a> for details.'
        +'</div>'
        +'</div>'
        +'<div class="sidebar-cookie-select col-sm-12">'
        +'<br>'
        +' <div class="col-sm-12 social-plugin">'
        +Config.cookieConsentSidebarSubDescription
        +'</div>'
        +'<div class="cookie-accept-all text-right" >'
        +'<button class="btn btn-default btn-round cookie_sidebar" onclick="enable_toggles()">Allow All</button>'
        +'</div>'
        +'<div class="col-sm-12"><hr></div><br>'
        +'</div>'
        +'<div class="col-sm-12 vendor-scroll" id="vendor_list" style="display:none;height:270px;">'
        +'<h6 style="margin-left:15px;margin-top:-5px;" class="company">COMPANY</h6>'
        +'<div style="height:240px; overflow-y:scroll; overflow-x: hidden;" id="vendor_scroll">';
        for (i=0; i < vendor_list.vendors.length; i++ ){

                cookieSidebarText=cookieSidebarText+'<div class="">'
                +'<div class="col-sm-6 vendor_name" id="'+vendor_list.vendors[i].id+'" style="padding-top:3px;">'
                +'<strong>'+vendor_list.vendors[i].name+'</strong>'
                +'</div>'
                +'<div class="vendor_toggle text-right col-sm-2" style="margin-top:-20px;">'
                +'<label class="switch"> '
                +'<input type="checkbox" class="'+vendor_list.vendors[i].name+' "id="'+vendor_list.vendors[i].name+'">'
                +'<span class="slider round"><div class="slide-txt">on</div></span>'
                +'</label>'
                +'</div>'
                +'<div class="col-sm-2 text-right arrow"><a class="'+vendor_list.vendors[i].id+' down" id="'+vendor_list.vendors[i].id+'" style="cursor:pointer;"></a></div>'
                +'<div class="col-sm-12">'
                +'<div class="a'+vendor_list.vendors[i].id+'" id="vendor_details_drop" style="display:none;">'
                +'<div>'
                +'<div style="padding-top:5px;">'
                +'<strong>Policy Url :</strong> <a style="font-size:10px;" href="'+vendor_list.vendors[i].policyUrl+'"><br>'+vendor_list.vendors[i].policyUrl+'</a>'
                +'</div>'
                +'<div class="vendor_purposes" style="padding-top:5px;" >'
                +'<strong> Purposes : </strong> <div>';
                for (j=0; j < vendor_list.vendors[i].purposeIds.length; j++ ){
                        var purpose=vendor_list.vendors[i].purposeIds[j];
                        for(k=0;k< vendor_list.purposes.length;k++){
                                if(vendor_list.purposes[k].id==purpose){
                                        cookieSidebarText=cookieSidebarText +'<div style="font-size:10px;">'
                                        +vendor_list.purposes[k].name
                                        +'</div>';
                                }
                        }
                }
                cookieSidebarText=cookieSidebarText + '</div></div>'
                +'<div id="vendor_legitimate" style="padding-top:5px;" >'
                +'<strong> Legitimate Interest Purposes : </strong> <div>';
                for (j=0; j <= vendor_list.vendors[i].legIntPurposeIds.length; j++ ){
                        if(vendor_list.vendors[i].legIntPurposeIds.length!=0){
                                var purpose=vendor_list.vendors[i].legIntPurposeIds[j];
                                for(k=0;k< vendor_list.purposes.length;k++){
                                        if(vendor_list.purposes[k].id==purpose){
                                                cookieSidebarText=cookieSidebarText +'<div style="font-size:10px;">'
                                                +vendor_list.purposes[k].name
                                                +'</div>';
                                        }
                                        
                                }
                         }    
                         else if(vendor_list.vendors[i].legIntPurposeIds.length==0){
                                cookieSidebarText=cookieSidebarText +'<div style="font-size:10px;">'
                                +'Nill'
                                +'</div>';
                        }   
                }
                cookieSidebarText=cookieSidebarText + '</div></div>'
                +'<div class="vendor_purposes" style="padding-top:5px;" >'
                +'<strong> Features : </strong> <div>';
                for (j=0; j <= vendor_list.vendors[i].featureIds.length; j++ ){
                        if(vendor_list.vendors[i].featureIds.length!=0){
                                var purpose=vendor_list.vendors[i].featureIds[j];
                                for(k=0;k< vendor_list.features.length;k++){
                                        if(vendor_list.features[k].id==purpose){
                                                cookieSidebarText=cookieSidebarText +'<div style="font-size:10px;">'
                                                +vendor_list.features[k].name
                                                +'</div>';
                                        }
                                }
                        }
                        else if(vendor_list.vendors[i].featureIds.length==0){
                                cookieSidebarText=cookieSidebarText +'<div style="font-size:10px;">'
                                +'Nill'
                                +'</div>';
                        }   

                }
                cookieSidebarText=cookieSidebarText + '</div></div>'
                +'</div>'
                +'</div></div>'
                +'<div class="col-sm-12"><hr></div>'
                +'</div>';
        }

        cookieSidebarText=cookieSidebarText+'</div></div>'
        +'</div>'
        +'<div class="col-sm-12" id="purposes_scroll">';
        for (i=0; i < arrLen; i++ ) {

                cookieSidebarText=cookieSidebarText + ' <div>'
                    +'<div class="social-plugin col-sm-10" id="purpose_list">'
                    +'<strong>'+Config.purposes[i].cookietitle+': </strong>'+ Config.purposes[i].description
                    +'<div class="cookieUsed" style="padding-top:3px;font-size:10px; ">'
                    +'Cookies Used: '+Config.purposes[i].cookies
                    +'</div> '
                    +'</div>'
                    +'<div class="toggle text-right" style="padding-top:20px;">'
                    +'<label class="switch"> '
                    +'<input type="checkbox" class="'+Config.purposes[i].name+'" value="'+Config.purposes[i].required+'"id="'+Config.purposes[i].name+'">'
                    +'<span class="slider round"><div class="slide-txt">on</div></span>'
                    +'</label>'
                    +'</div>'
                    +'<div class="col-sm-12"><hr></div>'
                    +'</div>';
        };
        cookieSidebarText=cookieSidebarText +' </div>';

$("#cookiebar").html(cookieSidebarText);
analyticCheck=0;
privacyCheck=0;

for (i=0; i < arrLen; i++ ) {


if( Config.purposes[i].required){
        
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
for (i=0; i < vendor_list.vendors.length; i++ ){
$('#cookiebar').on('click', "a."+vendor_list.vendors[i].id, function(){
                 
                var sh=this.id;
                sh="a"+sh;
                $("."+sh).slideToggle();
    
    });

}

var cookieBannerText="";
cookieBannerText=cookieBannerText +'<a href="index.html">'+Config.companyName+'</a> '+Config. cookieBannerDescription+' Please read our <a href="'+Config.cookiePolicy+'">Cookies Policy</a>  and <a href="'+Config.privacyPolicy+'">Privacy Policy</a> for details.';

        $("#cookiebanner").html(cookieBannerText);

 var cookieBannerHeader="";
 cookieBannerHeader=cookieBannerHeader+Config.cookieBannerHeader;
        
        $("#cookiebannerHeadtag").html(cookieBannerHeader);
      
        if(Config.numberOfPurposes>2){
        document.getElementById("purposes_scroll").style.overflowY="scroll";
        document.getElementById("purposes_scroll").style.height="270px";
        }
});




                          
                         
                  
              
            

       
            
               
                
            
           
                
            
     
