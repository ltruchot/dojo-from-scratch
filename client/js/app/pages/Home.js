define([
    'dojo/_base/declare',
    'dojo/dom',
    'dojo/fx',    
    'app/_Page',
    'dojo/text!./html/Home.html'
], function(declare, dom, fx, _Page, htmlContent) {
 
    return declare([_Page], {
                
        pageName: "home",

        pageTitle: "Un peu de code simple en Dojo",

        pageContent: htmlContent,
        
        postCreate: function () {
            this.inherited(arguments);
            this.animateDom();
        },

        animateDom: function () {
            //animate "greetings" message with dojo
            var greeting = dom.byId('greeting');
            greeting.innerHTML += ' from Dojo!';
            fx.slideTo({
                node: greeting,
                top: 100,
                left: 200
            }).play();
        }

    });
 
});