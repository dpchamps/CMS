/*global CMS, Backbone*/

CMS.Models = CMS.Models || {};

(function () {
    'use strict';

    CMS.Models.Userdata = Backbone.Model.extend({

        url: CMS.API+'/check_login',

        initialize: function() {
            this.checkSessionStorage();
            this.on('change', function(){
                var userdata = CMS.Global.userdata;
                if( userdata.hasChanged('username') ){

                    if( typeof userdata.get('username') !== 'undefined' ){
                        sessionStorage.setItem('username', userdata.get('username'));
                    }else{
                        sessionStorage.removeItem('username');
                    }


                }
                if( userdata.hasChanged('token') ){
                    if( typeof userdata.get('token') !== 'undefined' ){
                        sessionStorage.setItem('token', userdata.get('token'));
                    }else{
                        sessionStorage.removeItem('token');
                    }
                }
            });
        },
        checkSessionStorage: function(){
            if(typeof sessionStorage.username !== 'undefined'){
                this.set('username', sessionStorage.username)
            }
            if(typeof sessionStorage.token !== 'undefined'){
                this.set('token', sessionStorage.token)
            }
        },
        defaults: {

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
