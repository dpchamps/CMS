/*global CMS, Backbone*/

CMS.Models = CMS.Models || {};

(function () {
    'use strict';

    CMS.Models.EditItemModel = Backbone.Model.extend({

        url: CMS.API+'cms/edit',

        initialize: function() {
        },

        defaults: {
            title : '',
            id: '',
            description: '',
            list_order: '',
            price: '',
            header: ''
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
