

var Config = {


    privacyPolicy: 'privacy.html#privacy', //link to privacy policy

    cookiePolicy: 'privacy.html', //link to cookie policy
    

    //name of the website/company
    tagName:'iGrant.io',

    //Heading for the cookie banner
    tagLine:'YOUR DATA, YOUR CHOICE',

    //description about the cookie consent.
    //Name of the website/company will always be appended on from of description
    consentSidebarMain:'uses cookies to remember users and understand ways to enhance their experience. Some cookies are essential, others help us improve your experience by providing insights into how the site is used as documented in our', // cookie policy will be added
     
    //title for the Sub heading in side bar
    consentSidebarSubTitle:'Manage Cookie Preferences',

    //Description about the consent preferences
    consentSidebarSubDescription:'You can set your consent preferences and determine how you want your data to be used based on the purposes below. Each purpose has a description so that you know how we and/or partners use your data.',

    //description on the cookie consent banner.
    //Name of the website/company will always be appended on from of description
    consentBannerDescription:'use cookies to enhance your experience on our website. By clicking Accept, you are consenting to the use of cookies.',// Please read our Cookies Policy and our Privacy Policy pages for details. will be added


    // This is a list of third-party apps.
    // The apps will appear in the same order as defined here.
    apps : [
        {
            // Each app should have a unique (and short) name.
            name: 'AnalyticalCookies',


            //description about the cookies app
            description: 'provide information about how this site is being used so we can improve the user experience. Data captured is aggregated and anonymized.',
           
            // The title of you app as listed in the consent modal.
            cookietitle: 'Analytical Cookies',

            // The purpose(s) of this app. Will be listed on the consent notice.
            purpose : 'Google Analytics',

            //cookie that will be created need to be mentioned
            cookies : ['_ga' ,'_gid'],
            
            // If "required" is set to true,will not allow this app to
            // be disabled by the user.
            required : false,

        },
        
        {
            name : 'EssentialCookies',
            cookietitle : 'Essential Cookies',
            description: 'are necessary for this site to function properly, authenticating logins, for instance. You can only disable essential cookies via browser settings.',
            purpose : 'Privacy Policy',
            cookies : ['PrivacyPolicy'],
            required:true,
        },
        //if there is more cookie apps used mention it below as a next set of elements like above
        // creation of the newly added app cookies must be done in the dynamic.js file
    ]
}