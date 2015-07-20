/*global CMS, Backbone*/

CMS.Models = CMS.Models || {};

(function () {
    'use strict';

    CMS.Models.Logout = Backbone.Model.extend({

        url: CMS.API+'/logout',

        initialize: function() {
            this.set({
                username: CMS.Global.userdata.get('username'),
                token: CMS.Global.userdata.get('token')
            })
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
