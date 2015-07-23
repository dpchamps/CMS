/*global CMS, Backbone, JST*/

CMS.Views = CMS.Views || {};

(function () {
    'use strict';

    CMS.Views.Settings = Backbone.View.extend({

        template: JST['app/scripts/templates/settings.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click .modal-close': 'closeDialog'
        },

        initialize: function () {

        },
        closeDialog : function(){
            this.$el.css('visibility', 'hidden');
            CMS.Global.router.navigate('dashboard');
        },
        render: function () {
            this.$el
                .html(this.template)
                .css('visibility', 'visible');

        }

    });

})();
