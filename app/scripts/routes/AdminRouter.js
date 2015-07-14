/*global CMS, Backbone*/

CMS.Routers = CMS.Routers || {};

(function () {
    'use strict';

    CMS.Routers.AdminRouter = Backbone.Router.extend({
        loginPage : null,

        initialize: function(){
            this.loginPage = new CMS.Views.Login({ el: $("#content")});
        },

        routes:{
            'login' : 'showLogin',
            'main' : 'showMain',
            'main/settings' : 'showSettings',
            'main/logout' : 'showLogout',
            'main/itemEdit/:item' : 'itemEdit',
            'main/pageEdit/:page' :'pageEdit'
        },
        showLogin: function(){
            this.loginPage.render();
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

