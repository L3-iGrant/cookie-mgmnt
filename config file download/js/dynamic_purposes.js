/*!
 * GDPR-cookie - An iGrant.io javascript plugin to manage cookie settings in compliance with EU law
 *
 * Description: Here purposes fields are displayed dynamically based on input of Number of Purposes. 
 * 
 * Copyright (c) 2018-2019 LCubed AB
 *
 * Author: Anandhu K M
 *
 */

function searchBox() {
    var x = document.getElementById('purpose_number').value;
    purpose_text="";
    for(i=0;i<x;i++){
        
        purpose_text=purpose_text+' <div style="margin-bottom:10px;">'
                    +'<p>Purpose Title:</p>'
                    +'<input placeholder="Analytical cookie " name="purpose'+i+'.title" id="purpose_title'+i+'"  type="text" required="">'
                    +'<p>Purpose Name:</p>'
                    +'<input placeholder="Analytical_cookie avoid space" name="purpose'+i+'.name" id="purpose name'+i+'"  type="text" required="">'
                    +'<p>Purpose Description:</p>'
                    +'<textarea  name="purpose'+i+'.description" id="purpose'+i+'.description" placeholder="Short description about for what the purpose is used"required=""></textarea>'
                    +'<p>Purpose Used for:</p>'
                    +'<input placeholder="Google Analytics" name="purpose'+i+'.usedfor" id="purpose_use'+i+'"  type="text" required="">'
                    +'<p>Cookies Used:</p>'
                    +'<input placeholder="Analytics" name="purpose'+i+'.Cookiesusing" id="purpose_use'+i+'"  type="text" required="">'
                    +'<p>Is this purpose always Required?</p>'
                    +'<input type="radio" class="purpose_required" name="purpose'+i+'.required" id="purpose_required_yes'+i+'" value="true">Yes'
                    +'<input type="radio" class="purpose_required" name="purpose'+i+'.required" value="false" id="purpose_required_no'+i+'">No'
                    +'<hr>'
                    +'</div>';
     }

     $("#config_purposes").html(purpose_text);

     if($("input[name='numberOfPurposes']").val() != "" && $("textarea").val() != "" && $("input[name='cookiePolicy']").val() !="" && $("input[name='privacyPolicy']").val() != "" 
     && $("input[name='isVendorRequired']").is(":checked") 
     && $("input[name='cookieBannerHeader']").val() !=""       
     && $("input[name='companyName']").val() !="" == true){
         
         $("input[type='submit']").removeAttr("disabled");
         
}
    
}
var purpose_text;
  document.getElementById("purpose_number").addEventListener("onkeyup", function () {
    searchBox();
  });

 






 
										
										
										
										
										
										
										
										
										
										
										
										
										
								