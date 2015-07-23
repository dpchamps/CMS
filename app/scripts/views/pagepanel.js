/*global CMS, Backbone, JST*/

CMS.Views = CMS.Views || {};

(function () {
    'use strict';

    CMS.Views.Pagepanel = Backbone.View.extend({

        template: JST['app/scripts/templates/pagepanel.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.render();
        },

        render: function () {
            var self = this;
            this.collection.fetch()
                .done(function(){
                    console.log(self.collection.toJSON());
                    _.each(self.collection.toJSON(), function(page){
                        self.$el.append(self.template(page));
                    });
                });
        }

    });

})();
