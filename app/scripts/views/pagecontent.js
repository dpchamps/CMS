/*global CMS, Backbone, JST*/

CMS.Views = CMS.Views || {};

(function () {
    'use strict';

    CMS.Views.Pagecontent = Backbone.View.extend({

        template: JST['app/scripts/templates/pagecontent.ejs'],
        page : '',
        subPage: '',
        itemCollection : {},
        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click .item-editable' : 'editItem'
        },
        editItem : function(e){
            var id = $(e.target).data('id');
        },

        initialize: function () {

            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            console.log(this.collection);
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



        }

    });

})();
