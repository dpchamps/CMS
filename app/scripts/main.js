/*global CMS, $*/


window.CMS = {
    //the api path
    API: "http://localhost/CMS/api",
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Global: {},
    init: function () {
        'use strict';
        //initialize the router and backbone history
        CMS.Global.userdata = new CMS.Models.Userdata();
        CMS.Global.router = new CMS.Routers.AdminRouter();
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    CMS.init();
});
