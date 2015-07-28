/*global CMS, Backbone, JST*/

CMS.Views = CMS.Views || {};

(function () {
    'use strict';

    CMS.Views.ItemEditSingle = Backbone.View.extend({

        template: JST['app/scripts/templates/itemEdit-single.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click .modal-close': 'closeDialog',
            'click #modal-click-close': 'closeDialog'
        },
        closeDialog: function(e){
            e.stopPropagation();
            this.$el.css('visibility', 'hidden');
            CMS.Global.router.navigate('dashboard');
        },
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el
                .html(this.template(this.model.toJSON()))
                .append('<div id="modal-click-close"></div>')
                .css('visibility', 'visible');
        }

    });

})();
