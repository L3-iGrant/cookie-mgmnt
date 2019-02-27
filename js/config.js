
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

    vendor_url:"https://vendorlist.consensu.org/vendorlist.json",
    isVendorRequired :true,
    companyName:'iGrant.io',
    cookieBannerHeader:'YOUR DATA, YOUR CHOICE', 
    cookieBannerDescription:'use cookies to enhance your experience on our website. By clicking Accept, you are consenting to the use of cookies.',
    cookieConsentSidebarMainText:'use cookies to enhance your experience on our website. By enabling, you are consenting to the use of cookies.',
    cookieConsentSidebarSubTitle:'Manage Cookie Preferences',
    cookieConsentSidebarSubDescription:'You can set your consent preferences based on the purposes below.',
    privacyPolicy: 'privacy.html#privacy', 
    cookiePolicy: 'privacy.html',
    numberOfPurposes:3,
    purpose0_name : 'AnalyticalCookies',                     
    purpose0_cookietitle : 'Analytical Cookies',             
    purpose0_description: 'provide information about how this site is being used so we can improve the user experience. Data captured is aggregated and anonymized.',
    purpose0_purpose : 'Google Analytics',              
    purpose0_cookies :['Analytics'],                   
    purpose0_required:false,                                 
    purpose1_name: 'AdSenseCookies',                                     
    purpose1_description: 'uses cookies to improve and deliver ads that are relevant to your browsing habits.',                                                  
    purpose1_cookietitle: 'Advertising Cookies',                                        
    purpose1_purpose : 'AdSense',                                         
    purpose1_cookies :  ['AdSense'],                                       
    purpose1_required : false,
    purpose2_name: 'EssentialCookies',                                     
    purpose2_description: 'are necessary for this site to function properly, authenticating logins, for instance. You can only disable essential cookies via browser settings.',                                                  
    purpose2_cookietitle: 'Essential Cookies',                                        
    purpose2_purpose : 'Privacy Policy',                                         
    purpose2_cookies :  ['PrivacyPolicy'],                                       
    purpose2_required : true,
    
}