/*global CMS, Backbone*/

CMS.Models = CMS.Models || {};

(function () {
    'use strict';

    CMS.Models.Changeusername = Backbone.Model.extend({

        url: CMS.API+'/changeusername',

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
                this.set('serverMessage', 'Username Successfully Changed');
            }
        }
    });

})();
