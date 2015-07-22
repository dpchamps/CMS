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
        CMS.Global.userdata.on('change', function(){
            var userdata = CMS.Global.userdata;
            if(userdata.hasChanged('username')){
                sessionStorage.setItem('username', userdata.get('username'));
            }
            if(userdata.hasChanged('token')){
                sessionStorage.setItem('token', userdata.get('token'));
            }
        });
        CMS.Global.router = new CMS.Routers.AdminRouter();
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    CMS.init();
});
