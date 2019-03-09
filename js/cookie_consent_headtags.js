
/*!
 * GDPR-cookie - An iGrant.io javascript plugin to manage cookie settings in compliance with EU law
 *
 * Description: This file appends the head script calls to the head tag of the html file from which it is called.  
 * 
 * Copyright (c) 2018-2019 LCubed AB
 *
 * Author: Anandhu K M
 *
 */


$(document).ready(function(){
    var cookieCode= "";

cookieCode =cookieCode  +'<script type="text/javascript" src="cookie-mgmnt/js/dynamic.js"></script>'
                        +'<script type="text/javascript" src="cookie-mgmnt/js/config.js"></script>'
                        +'<script type="text/javascript" src="cookie-mgmnt/js/cookie-manager.js"></script>'
                        +'<link rel="stylesheet" href="cookie-mgmnt/css/cookieBanner.css"/>'    
                        +' <script src="cookie-mgmnt/js/sidebar.js"></script>'
                        +'<script src="cookie-mgmnt/js/sidebar-main.js"></script>'
                                
                                
                                
$(cookieCode).appendTo('head');                             
                               

});