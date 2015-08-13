/*global CMS, Backbone, JST*/

CMS.Views = CMS.Views || {};

(function () {
    'use strict';

    CMS.Views.Pagecontent = Backbone.View.extend({

        template: JST['app/scripts/templates/pagecontent.ejs'],
        page : '',
        subPage: '',
        subDivide: '',
        itemCollection : {},
        tagName: 'div',

        id: '',

        className: '',
        fetchCollection : function(){
            var self = this;
            console.log(this.page, this.subPage);
            return this.collection.fetch({
                success : function(c,r,o){
                    var defaultSub = r[0]['type'];
                    self.subDivide = r;
                    if(!self.subPage && defaultSub){
                        self.subPage = defaultSub;
                        CMS.Global.router.navigate('dashboard/page-content/'+self.page+'/'+defaultSub);
                        self.collection.initialize({
                            page : self.page,
                            subPage: self.subPage
                        });
                    }else{
                        self.collection.initialize({
                            page : self.page,
                            subPage: self.subPage
                        });
                    }
                }
            });
        },
        fetchItems : function(){
            this.itemCollection = new CMS.Collections.EditItems({
                url : this.collection.url
            });
             return this.itemCollection.fetch();
        },
        generateTemplateObject : function(){
            var templateHash = {
                subDivide : this.subDivide,
                items: this.itemCollection
            };
            templateHash.page = this.page;
            templateHash.subPage = this.subPage;
            templateHash.sectionOrder = CMS.Modules.getSectionOrder(this.itemCollection.toJSON());

            return templateHash;
        },
        events: {
            'click .item-editable' : 'editItem'
        },
        editItem : function(e){
            var id = $(e.target).data('id');
        },

        initialize: function (options) {
            this.page = options.page;
            this.subPage = options.subPage;
            console.log(this.page, this.subPage);
            this.collection = new CMS.Collections.PageContentItems({
                page: this.page,
                subPage: this.subPage
            });

        },

        render: function () {
            var self = this;

            this.fetchCollection()
                .then(function() {
                    self.fetchItems()
                        .then(function(){
                            console.log(self.generateTemplateObject());
                            self.$el.html(self.template(self.generateTemplateObject()));
                        });
                });

            /*
            this.itemCollection = CMS.Modules.getItemCollection(this.collection.toJSON());
            var subDivide = Backbone.Collection.extend({
                url: CMS.API+"/pages/"+this.page.toLowerCase(),
                model : Backbone.Model.extend({
                    url: ''
                })
            }),
                self = this;
            subDivide = new subDivide;
            subDivide.fetch({
                success: function(){
                    var templateHash = {
                        subDivide : subDivide.toJSON(),
                        items: self.itemCollection
                    };
                    templateHash.page = self.page;
                    templateHash.subPage = self.subPage;
                    templateHash.sectionOrder = CMS.Modules.getSectionOrder(templateHash.items.toJSON());
                    self.$el.html(self.template(templateHash));
                }
            });
    */
        }
    });

})();
