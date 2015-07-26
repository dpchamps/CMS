/*global CMS, Backbone, JST*/

CMS.Views = CMS.Views || {};

(function () {
    'use strict';

    CMS.Views.Pagecontent = Backbone.View.extend({

        template: JST['app/scripts/templates/pagecontent.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},


        initialize: function () {

            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            var subDivide = this.collection.toJSON()[0].subDivide,
                items = this.collection.toJSON()[0].group,
                itemList = CMS.Modules.createModelObject(items);

            var templateHash = {
                subDivide : subDivide,
                items: CMS.Modules.getItemCollection(itemList)
            };
            templateHash.sectionOrder = CMS.Modules.getSectionOrder(templateHash.items.toJSON());
            this.$el.html(this.template(templateHash));
        }

    });

})();
