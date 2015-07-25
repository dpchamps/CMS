/*global CMS, Backbone*/

CMS.Models = CMS.Models || {};

(function () {
    'use strict';

    CMS.Models.PageContentItem = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
