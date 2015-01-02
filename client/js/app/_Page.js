define([
    "dojo/_base/declare",
    "dojo/html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/Page.html"
], function(declare, html, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template) {
 
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        
        templateString: template,
        
        pageName: "",

        pageTitle: "",

        pageContent: "",
        
	    constructor: function (args){
	        declare.safeMixin(this, args);
	    },

        postCreate: function () {
            this.inherited(arguments);
            this.startup();
            if (!this.pageName || !this.pageTitle) {
                console.error("Invalid page name or title");
                return;
            }
            html.set(this.pageTitleNode, this.pageTitle);
            html.set(this.pageContentNode, this.pageContent);

        }
    });
 
});