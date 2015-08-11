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
        },
        routes:{
            'login' : 'showLogin',
            'dashboard' : 'showDashboard',
            'dashboard/settings' : 'showSettings',
            'dashboard/settings/change-username' : 'changeUsername',
            'dashboard/settings/change-password' : 'changePassword',
            'logout' : 'showLogout',
            'dashboard/itemEdit/:item' : 'itemEdit',
            'dashboard/pageEdit/:page' :'pageEdit',
            'dashboard/page-content' : 'showDashboard',
            'dashboard/page-content(/)(:page)(/)(:subPage)' : 'pageContent',
            'dashboard/page-content(/)(:page)(/)(:subPage)/edit/(:item)' : 'itemEdit',
            '' : 'showDefault',
            '#/' : 'showDefault'

        },
        
        showLogin: function(e){
            var self = this;
            //no use in logging in multiple times
            CMS.Modules.Auth.checkSession()
                .done(function(){
                    self.showDashboard();
                })
                .fail(function(){
                    self.loginPage.render();
                });
        },
        showDashboard: function(args){
            var self = this;
            this.dashboard = new CMS.Views.DashboardView({
                model: new CMS.Models.DashboardModel(),
                el: $('#content')
            });
            _.extend(this.dashboard, args);
            self.dashboard.render();
        },
        showSettings: function(){
            this.showDashboard();
            var settings = new CMS.Views.Settings({
                el: $('#modal')
            }).render();

        },
        changeUsername: function(){
            this.showDashboard();
            this.showSettings();
            new CMS.Views.Changeusername({
                model: new CMS.Models.SettingsModel(),
                el: $('.modal-content-inner')
            }).render();
        },
        changePassword: function(){
            this.showDashboard();
            this.showSettings();
            new CMS.Views.Changepassword({
                model: new CMS.Models.SettingsModel(),
                el: $('.modal-content-inner')
            }).render();
        },
        showLogout: function(){
            var logout = new CMS.Models.Logout();

            logout.fetch().done(function(){
                CMS.Global.userdata.unset('token');
                CMS.Global.router.navigate('login', {trigger:true});
            });
        },
        pageContent: function(page, subPage){
            var self = this,
                dashPromise = $.Deferred(),
                contentPanel = new CMS.Views.Pagecontent({
                    collection: new CMS.Collections.PageContentItems([], {
                        page: page,
                        subContent: subPage
                    })
                });
            contentPanel.page = page;
            contentPanel.subPage= subPage;
            contentPanel.collection.fetch({
                success: function(c,r,m){
                    console.log(r);
                    var subDivide = contentPanel.collection.toJSON()[0].type;
                    if(!subPage && subDivide){
                        contentPanel.collection.subContent = subDivide;
                        contentPanel.subPage = subDivide;
                        self.navigate('#dashboard/page-content/'+page+'/'+subDivide, {trigger: true});
                    }
                    self.showDashboard({contentPanel : contentPanel})
                        .done(function(){
                            dashPromise.resolve();
                        });
                }
            });

            return dashPromise;
        },
        itemEdit: function(page, subPage, item){
            var self = this;
            this.pageContent(page, subPage)
                .done(function(){
                    var collection = self.dashboard.contentPanel.itemCollection,
                        itemEdit = new CMS.Views.ItemEditSingle({
                            model: collection.get(item),
                            el : $('#modal')
                        });
                    itemEdit.model.url = CMS.API+"/pages/"+page.toLowerCase()+"/"+subPage;
                    itemEdit.render();

                });

        },
        pageEdit: function(page){

        },
        showDefault: function(){
            CMS.Global.router.navigate('#login', {trigger:true});
        }
    });

})();

