
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
    
    //Name of the company/organization
    companyName:'iGrant.io',
    
    //cookie banner text 
    cookieBannerHeader:'YOUR DATA, YOUR CHOICE',  //company name will appended in front of the "consentBannerDescription", so avoid the companyName in descriptions
    cookieBannerDescription:'use cookies to enhance your experience on our website. By clicking Accept, you are consenting to the use of cookies.',// "Please read our Cookies Policy and our Privacy Policy pages for details." this text will be added at the end.
  
    //cookie sidebar contents, company name will be added as the first name in "consentSidebarMainText",so aviod company name in "consentSidebarMainText"
    cookieConsentSidebarMainText:'uses cookies to remember users and understand ways to enhance their experience. Some cookies are essential, others help us improve your experience by providing insights into how the site is used as documented in our', // "cookie policy" will be added
    cookieConsentSidebarSubTitle:'Manage Cookie Preferences',
    cookieConsentSidebarSubDescription:'You can set your consent preferences and determine how you want your data to be used based on the purposes below. Each purpose has a description so that you know how we and/or partners use your data.',
  
    //specify the links to your cookie policy and privacy policy 
    privacyPolicy: 'privacy.html#privacy', 
    cookiePolicy: 'privacy.html',

    numberOfPurposes:2, //same number of purposes should be mentions below in purposes array.
    
    purposes: [

        // Purpose 1
        {
            name : 'AnalyticalCookies',                      // Each app should have a unique (and short) name.
            cookietitle : 'Analytical Cookies',              // The title of you app as listed in the consent modal.  //description about the cookies app
            description: 'provide information about how this site is being used so we can improve the user experience. Data captured is aggregated and anonymized.',
            purpose : 'Google Analytics',                     // The purpose(s) of this app. Will be listed on the consent notice.
            cookies :['_ga' ,'_gid'],                    //cookie that will be created need to be mentioned
            required:false,                                  // If "required" is set to true,will not allow this app to be disabled by the user.
        },
        
        // Purpose 2
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