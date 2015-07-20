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

        logout : function(){
            this.set({
                token: undefined
            });
            sessionStorage.removeItem('token');
        },
        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
