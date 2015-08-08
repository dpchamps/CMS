/*global CMS, Backbone*/

CMS.Models = CMS.Models || {};

(function () {
    'use strict';

    CMS.Models.SettingsModel = Backbone.Model.extend({

        url: CMS.API+'/user',

        initialize: function() {
            this.set('username', CMS.Global.userdata.get('username'));
        },

        defaults: {
            parentView: 'Settings',
            waiting : false,
            serverMessage: ''
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            if(response.error){
                this.set('serverMessage', response.error);
            }else{
                this.set('serverMessage', response);
            }
        }
    });

})();
