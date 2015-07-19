/*global CMS, Backbone*/

CMS.Routers = CMS.Routers || {};

(function () {
    'use strict';

    CMS.Routers.AdminRouter = Backbone.Router.extend({
        loginPage : null,
        dashboard: null,

        initialize: function(){
            this.loginPage = new CMS.Views.Login({
                model: new CMS.Models.Login(),
                el: $("#content")
            });
            this.dashboard = new CMS.Views.DashboardView({
                model: new CMS.Models.DashboardModel(),
                el: $('#content')
            });
        },

        routes:{
            'login' : 'showLogin',
            'main' : 'showMain',
            'main/settings' : 'showSettings',
            'main/logout' : 'showLogout',
            'main/itemEdit/:item' : 'itemEdit',
            'main/pageEdit/:page' :'pageEdit',
            'api' : 'fetchApi'
        },
        checkLogin : function(){
            return $.when(CMS.Global.userdata.save());
        },
        showLogin: function(){
            var self = this;
            this.checkLogin()
                .done(function(){
                    console.log('success');
                    CMS.Global.router.navigate('#/main');
                })
                .fail(function(m,r,o){
                    console.log('fail');
                    self.loginPage.render(r.responseJSON);
                });

        },
        showMain: function(){
            var self = this;
           this.checkLogin()
                .done(function(m,r,o){
                    self.dashboard.render();
                })
                .fail(function(m,r,o){
                    self.loginPage.render(r.responseJSON);
                })
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

