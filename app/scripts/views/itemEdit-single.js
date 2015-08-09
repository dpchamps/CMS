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
            'click #modal-click-close': 'closeDialog',
            'click .edit-item--delete': 'deleteItem',
            'click .edit-item--update ': 'updateItem'
        },
        deleteItem : function(e){
            e.preventDefault();
            this.model.destroy();
        },
        updateItem: function(e){
            e.preventDefault();
            var form = this.$el.find("form").serializeObject();
            console.log(form, form.item);
            this.model.set(form.item);
            console.log(this.model);
            this.model.save({
                success : function(){
                    this.render();
                }
            });

        },
        closeDialog: function(e){
            e.stopPropagation();
            this.$el.css('visibility', 'hidden');
            this.undelegateEvents();
            window.history.back();

        },
        initialize: function () {
        },

        render: function () {
            console.log(this.model.url, this.model.toJSON());
            this.$el
                .html(this.template(this.model.toJSON()))
                .append('<div id="modal-click-close"></div>')
                .css('visibility', 'visible');
        }

    });

})();
