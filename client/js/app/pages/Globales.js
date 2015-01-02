define([
    'dojo/_base/declare',
    'dojo/dom', 
    'app/_Page',
    'dojo/text!./html/Globales.html'
], function(declare, dom, _Page, htmlContent) {
 
    return declare([_Page], {
                
        pageName: "globales",

        pageTitle: "Les globales de Dojo",

        pageContent: htmlContent,
        
        postCreate: function () {
            this.inherited(arguments);
            this.showTypeOfGlobales();
        },

        showTypeOfGlobales: function () {
            dom.byId('typeofRequire').innerHTML = typeof require;
            dom.byId('typeofDefine').innerHTML = typeof define;
        }

    });
 
});