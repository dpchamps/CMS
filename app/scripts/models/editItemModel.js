/*global CMS, Backbone*/

CMS.Models = CMS.Models || {};

(function () {
    'use strict';

    CMS.Models.EditItemModel = Backbone.Model.extend({

        url: CMS.API+'cms/pages/',

        initialize: function() {

        },

        defaults: {
            title : '',
            id: '',
            descriptions: '',
            list_order: '',
            price: '',
            header: ''
        },
        save : function(attrs, options){
            if(typeof this.attributes.item === 'undefined'){
                this.attributes = {
                    "item" : this.attributes
                }
            }
            return Backbone.Model.prototype.save.call(this, attrs, options);
        },
        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
