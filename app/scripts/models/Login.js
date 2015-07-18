/*global CMS, Backbone*/

CMS.Models = CMS.Models || {};

(function () {
    'use strict';

    CMS.Models.Login = Backbone.Model.extend({

        url: CMS.API+'/login',
        parse: function(response, options){
          if(response.error){

          }else{

              CMS.Global.userdata.set({
                  username: response.username,
                  token: response.token
              });
              sessionStorage.setItem('username', response.username);
              sessionStorage.setItem('token', response.token);
          }

        },
        initialize: function(username, password) {

        },

        defaults: {
            username: '',
            password: ''
        },

        validate: function(attrs, options) {
        }
    });

})();
