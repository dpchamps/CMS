/*global CMS, Backbone*/

CMS.Routers = CMS.Routers || {};

(function () {
    'use strict';

    CMS.Routers.AdminRouter = Backbone.Router.extend({
        loginPage : null,
        mainPage: null,

        initialize: function(){
            this.loginPage = new CMS.Views.Login({
                model: new CMS.Models.Login(),
                el: $("#content")
            });
            this.mainPage = new CMS.Views.Main({
                model: new CMS.Models.MainModel(),
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
        gateway : function(){
            return CMS.Global.userdata.save();
        },
        showLogin: function(){
            var self = this;
            $.when(this.gateway())
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
            $.when(this.gateway())
                .done(function(m,r,o){
                    self.mainPage.render();
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

