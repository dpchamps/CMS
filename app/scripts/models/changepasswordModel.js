/*global CMS, Backbone*/

CMS.Models = CMS.Models || {};

(function () {
    'use strict';

    CMS.Models.ChangepasswordModel = Backbone.Model.extend({

        url: '',

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
            return response;
        }
    });

})();
