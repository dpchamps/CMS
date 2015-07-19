/*global CMS, Backbone*/

CMS.Models = CMS.Models || {};

(function () {
    'use strict';

    CMS.Models.DashboardModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
            this.set({
                username: CMS.Global.userdata.get('username')
            })
        },

        defaults: {
            username: '',
            pageContent: {}

        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
