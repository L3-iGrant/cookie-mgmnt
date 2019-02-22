 /*!
 * GDPR-cookie - An iGrant.io javascript plugin to manage cookie settings in compliance with EU law
 *
 * Description: Javascript for downloading the Configuration file by taking the inputs from form.
 * 
 * Copyright (c) 2018-2019 LCubed AB
 *
 * Author: Anandhu K M
 *
 */
 
 
 //To JSON form input fields
 formToJSON = function (form) {
    form = $(form);
    if (form.length !== 1) return false;

    // Form data
    var formData ={ vendor_url:'https://vendorlist.consensu.org/vendorlist.json', 
                    cookieConsentSidebarSubTitle:'Manage Cookie Preferences',
                    cookieConsentSidebarSubDescription:'You can set your consent preferences based on the purposes below.',};
    // Skip input types
    var skipTypes = ['submit', 'image', 'button', 'file'];
    var skipNames = [];
    form.find('input, select, textarea').each(function () {
        var input = $(this);
        var name = input.attr('name');
        var type = input.attr('type');
        var tag = this.nodeName.toLowerCase();
        if (skipTypes.indexOf(type) >= 0) return;
        if (skipNames.indexOf(name) >= 0 || !name) return;
        if (tag === 'select' && input.prop('multiple')) {
            skipNames.push(name);
            formData[name] = [];
            form.find('select[name="' + name + '"] option').each(function () {
                if (this.selected) formData[name].push(this.value);
            });
        }
        else {
            switch (type) {
                case 'checkbox' :
                    skipNames.push(name);
                    formData[name] = [];
                    form.find('input[name="' + name + '"]').each(function () {
                        if (this.checked) formData[name].push(this.value);
                    });
                    break;
                case 'radio' :
                    skipNames.push(name);
                    form.find('input[name="' + name + '"]').each(function () {
                        if (this.checked) formData[name] = this.value;
                    });
                    break;
                default :
                    formData[name] = input.val();
                    break;
            }
        }
            
    });
    return formData;
};

// Function call from button download config
myFunction = function () {
var Config = formToJSON('#json_creator');
var filename = "config.js";
download(filename, Config);
}

// Download function of file
function download(filename, text) {
    var element = document.createElement('a');
   
    element.setAttribute('href', 'data:text/json;charset=utf-8,' +"Config = "+ encodeURIComponent(JSON.stringify(text)));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


