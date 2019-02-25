
/*!
 * GDPR-cookie - An iGrant.io javascript plugin to manage cookie settings in compliance with EU law
 *
 * Description: This is the primary config file , here mention all the cookie purposes and the cookie consent banner texts. 
 *              Details given here will be reflected in the cookie consent banner.
 * 
 * Copyright (c) 2018-2019 LCubed AB
 *
 * Author: Anandhu K M
 *
 */
var Config = {

    vendor_url:'https://vendorlist.consensu.org/vendorlist.json',
    isVendorRequired :true,
    companyName:'iGrant.io',
    cookieBannerHeader:'YOUR DATA, YOUR CHOICE', 
    cookieBannerDescription:'use cookies to enhance your experience on our website. By clicking Accept, you are consenting to the use of cookies.',// "Please read our Cookies Policy and Privacy Policy pages for details." this text will be added at the end.
    cookieConsentSidebarMainText:'use cookies to enhance your experience on our website. By enabling, you are consenting to the use of cookies.',// "Please read our Cookies Policy and Privacy Policy pages for details." this text will be added at the end.
    cookieConsentSidebarSubTitle:'Manage Cookie Preferences',
    cookieConsentSidebarSubDescription:'You can set your consent preferences based on the purposes below.',
    privacyPolicy: 'privacy.html#privacy', 
    cookiePolicy: 'privacy.html',

    numberOfPurposes:3,
    
    purposes: [

        // Purpose 1
        {
            name : 'AnalyticalCookies',                      // Each app should have a unique (and short) name.
            cookietitle : 'Analytical Cookies',              // The title of you app as listed in the consent modal.  //description about the cookies app
            description: 'provide information about how this site is being used so we can improve the user experience. Data captured is aggregated and anonymized.',
            purpose : 'Google Analytics',                     // The purpose(s) of this app. Will be listed on the consent notice.
            cookies :['Analytics'],                    //cookie that will be created need to be mentioned
            required:false,                                  // If "required" is set to true,will not allow this app to be disabled by the user.
        },
        
        // Purpose 2
        {
            name: 'AdSenseCookies',                                     
            description: 'are necessary for this site to function properly, authenticating logins, for instance. You can only disable essential cookies via browser settings.',                                                  
            cookietitle: 'Advertising Cookies',                                        
            purpose : 'AdSense',                                         
            cookies :  ['AdSense'],                                       
            required : false,
        },
        
        // Purpose 3
        {
            name: 'EssentialCookies',                                     
            description: 'are necessary for this site to function properly, authenticating logins, for instance. You can only disable essential cookies via browser settings.',                                                  
            cookietitle: 'Essential Cookies',                                        
            purpose : 'Privacy Policy',                                         
            cookies :  ['PrivacyPolicy'],                                       
            required : true,
        }
        
        //if there is more cookie apps used mention it below as new set of elements like above
        
    ]
}
