/*global CMS, Backbone*/

CMS.Models = CMS.Models || {};

(function () {
    'use strict';

    CMS.Models.Userdata = Backbone.Model.extend({

        url: CMS.API+'/check_login',

        initialize: function() {
            this.set({
                username : sessionStorage['username'],
                token   : sessionStorage['token']
            });
        },

        defaults: {
            username : '',
            token : ''
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
