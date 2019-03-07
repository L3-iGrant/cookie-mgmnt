
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
    isVendorRequired :"true",
    companyName:'iGrant.io',
    cookieBannerHeader:'YOUR DATA, YOUR CHOICE', 
    cookieBannerDescription:'uses cookies to enhance your experience of our website. By clicking Allow, you are consenting to the use of cookies.',// "Please read our Cookies Policy and Privacy Policy pages for details." this text will be added at the end.
    cookieConsentSidebarMainText:'uses cookies to enhance your experience of our website. By allowing, you are consenting to the use of cookies.',// "Please read our Cookies Policy and Privacy Policy pages for details." this text will be added at the end.
    cookieConsentSidebarSubTitle:'Manage Cookie Preferences',
    cookieConsentSidebarSubDescription:'You can set your consent preferences based on the purposes below.',
    privacyPolicy: 'privacy.html#privacy', 
    cookiePolicy: 'privacy.html',

    numberOfPurposes:3,
    
    purposes: [

        //if there are more purposes used in your site please copy structure below and create additional purposes. The list of purposes will appear in the side bar in the same order as listed below.
        // Purpose 3
        {
            name : 'AnalyticalCookies', // Each cookie should have a unique (and short) name.
            cookietitle : 'Analytical Cookies', // The title of you cookie as listed in the cookie sidebar.  
            description: 'provide information about how this site is being used so we can improve your experience. Data captured is aggregated and anonymized.', //description about the cookie
            cookies :['Analytics', '_ga', '_gid', '_gat'], //the name of the cookies that are active on the site.
            required:"false", // If "required" is set to true, will not allow this cookie to be disabled by the user.
        },
        
        // Purpose 2
        {
            name: 'AdSenseCookies',                                     
            cookietitle: 'Advertising Cookies',
            description: 'are used for contextual ads from third parties.',                                                                                
            cookies :  ['AdSense'],                                       
            required : "false",
        },
        
        // Purpose 1
        {
            name: 'EssentialCookies',                                     
            description: 'are necessary for this site to function properly, authenticating logins, for instance. You can only disable essential cookies via browser settings.',                                                  
            cookietitle: 'Essential Cookies',                                                                                 
            cookies :  ['PrivacyPolicy'],                                       
            required : "true",
        } 
        
    ]
}
