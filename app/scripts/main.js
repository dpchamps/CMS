/*global CMS, $*/


window.CMS = {
    //the api path
    API: "http://localhost/CMS/api",
    Models: {},
    Modules: {},
    Collections: {},
    Views: {},
    Routers: {},
    Global: {},
    init: function () {
        'use strict';
        CMS.Modules.Auth.userSetup();
        CMS.Modules.Auth.sessionSetup();
        //initialize the router and backbone history
        CMS.Global.router = new CMS.Routers.AdminRouter();
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    CMS.init();
});
