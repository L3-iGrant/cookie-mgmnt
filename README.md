# Manage Consent Cookies as per IAB/GDPR Transparency and Consent Framework

# Usage Instructions for developers

### Getting Set Up

1. Fork this repository on GitHub as part of your project. You can fork by clicking on "Fork" on the top right corner:

![](githubfork.png)

2. Clone your forked repository (not our original one) to your hard drive with git clone `https://github.com/YOURUSERNAME/cookie-mgmnt.git` 
   
   The clone directory is: 
  `https://github.com/L3-iGrant/cookie-mgmnt.git`

3. `cd cookie-mgmnt/js`
	
	Use the `config.js` file to configure the Cookie consent banner of your choice. You are able to modify the text and headings etc using this config file. The table below summarises the variables used and its description.

	| Variable Name | Description |
	|---|----|
	| companyName | Name of the company/organization |
	| cookieBannerHeader | Header for the Cookie Banner |
	| cookieBannerDescription | Description text for the Cookie Banner |
	| cookieConsentSidebarMainText| Top description text for the Cookie manager sidebar |
	| cookieConsentSidebarSubTitle| Sub Heading for the Cookie manager sidebar|
	| cookieConsentSidebarSubDescription| Sub Heading Description for the Cookie manager sidebar|
	| privacyPolicy| Path to the privacy policy file eg.`privacy.html`|
	| cookiePolicy| Path to the cookie policy file eg.`cookiePolicy.html`|
	| numberOfPurposes| Number of purposes/cookie apps used|

	Below is the description on how to fill the details of Purposes/cookie apps which are used.

	| Purpose Variable| Description |
	|---|----|
	| name | Each app/purpose should have unique name to be identified |
	| cookietitle | Name of the purpose. This will be shown in the manager as purpose title|
	| description | Description about the purpose|
	| cookies | Mention which cookies are used for this purpose|
	| required | Value- `true` or `false` If true, user won't be able to disable the cookie of this purpose.|

### Calling the consent banners from your web files

1. Copy the head scripts from **Cookies.html** to the pages where the Cookie Consent is required.

**Head Scripts**
```html
    <script type="text/javascript" src="cookieconsent/js/dynamic.js"></script>
    <script type="text/javascript" src="cookieconsent/js/config.js"></script>
    <script type="text/javascript" src="cookieconsent/js/cookie-manager.js"></script>
    <link rel="stylesheet" href="cookieconsent/css/cookieBanner.css">
    <link rel="stylesheet" type="text/css" href="cookieconsent/css/cookieSidebar.css" />
    <script src="cookieconsent/js/sidebar.js"></script>
    <script src="cookieconsent/js/sidebar-main.js"></script>
```
2. Copy body part codes from **Cookie.html** to the pages where cookie Consent banner is required.

3. Place the copied code below the top navigation bar inside the body tag on your page. Place the code right below the **div** of
navigation buttons and inside the **nav** navigation tag.
```html
   <nav><!--Fixed top navigation bar-->
   <div><!-- Container begins --> 
   <div> <!-- Nav bar div -->
   ...
   </div> <!-- Nav bar div Ends -->
   <!--Begin cookie consent-->
      
      <!-- copy the code here -->
   
   <!--End cookie consent -->
   </div><!-- /.container ends here-->
   </nav><!--Top navigation ends here--><!-- /Fixed Top Navigation ends here-->
```

## SetUp for non-gitHub users or non-developers
**Recommendations to Install or implement cookie consents using iGrant.io provided framework:**

1. Download the Cookie Consent directory files and put it the “Source/src” folder of your project where the index page resides.

2. Copy the head scripts from Cookies.html to the pages where the Cookie Consent is required.

3. Copy body part codes from Cookie.html to the pages where Cookie Consent banner is required. 

4. Place the copied code below the top navigation bar inside the body tag on your page. Be sure to put the code in the same <div> tag of the top navigation bar so that is appears top of every other element in the page. 

5. Use the config.js file to configure the Cookie consent banner of your own choice.







