/*global CMS, Backbone*/

CMS.Routers = CMS.Routers || {};

(function () {
    'use strict';

    CMS.Routers.AdminRouter = Backbone.Router.extend({
        routes:{
            'login' : 'showLogin',
            'main' : 'showMain',
            'main/settings' : 'showSettings',
            'main/logout' : 'showLogout',
            'main/itemEdit/:item' : 'itemEdit',
            'main/pageEdit/:page' :'pageEdit'
        },
        showLogin: function(){

        },
        showMain: function(){

        },
        showSettings: function(){

        },
        showLogout: function(){

        },
        itemEdit: function(item){

        },
        pageEdit: function(page){

        }
    });

})();

