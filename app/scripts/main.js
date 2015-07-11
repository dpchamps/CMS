/*global CMS, $*/


window.CMS = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        //initialize the router and backbone history
        new CMS.Routers.AdminRouter();
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    CMS.init();

});
