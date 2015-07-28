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
            var subDivide = this.collection.toJSON()[0].subDivide,
                items = this.collection.toJSON()[0].group,
                itemList = CMS.Modules.createModelObject(items);
            this.itemCollection = CMS.Modules.getItemCollection(itemList);
            var templateHash = {
                subDivide : subDivide,
                items: this.itemCollection
            };
            templateHash.page = this.page;
            templateHash.subPage = this.subPage;
            templateHash.sectionOrder = CMS.Modules.getSectionOrder(templateHash.items.toJSON());
            this.$el.html(this.template(templateHash));
        }

    });

})();
