/*global CMS, $*/


window.CMS = {
    //the api path
    API: "../api",
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Global: {},
    init: function () {
        'use strict';
        //initialize the router and backbone history
        new CMS.Routers.AdminRouter();
        Backbone.history.start();
        CMS.Global.userdata = new CMS.Models.Userdata();
    }
};

$(document).ready(function () {
    'use strict';
    CMS.init();
});
