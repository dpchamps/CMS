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
            this.on('change', function(){
                var userdata = CMS.Global.userdata;
                if(userdata.hasChanged('username')){
                    sessionStorage.setItem('username', userdata.get('username'));
                }
                if(userdata.hasChanged('token')){
                    sessionStorage.setItem('token', userdata.get('token'));
                }
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
