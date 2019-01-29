# Cookie Consent Banner

# Usage

Download the whole CookieConsent directory and put it the src folder where the index page resides.

Copy the head scripts from **Cookies.html** to the pages where the Cookie Consent is required.

**Head Scripts**
```html
    <link rel="stylesheet" href="cookieconsent/css/style.css">
    <link rel="stylesheet" type="text/css" href="cookieconsent/css/component.css" />
    <script src="cookieconsent/js/classie.js"></script>
    <script src="cookieconsent/js/gnmenu.js"></script>
```
Put an **onload()** function to the body tag on every page.
```html
   <body onload="checkCookies()">
   ...
   </body>
```
Copy body part codes from **Cookie.html** to the pages where cookie Consent banner is required.

Place the copied code below the top navigation bar inside the body tag on your page. Place the code right below the **div** of
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





