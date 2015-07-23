/*global CMS, Backbone, JST*/

CMS.Views = CMS.Views || {};

(function () {
    'use strict';

    CMS.Views.DashboardView = Backbone.View.extend({

        template: JST['app/scripts/templates/Dashboard.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click #logout' : 'logout',
            'click #settings' : 'showSettings'
        },
        'logout': function(e){
            e.preventDefault();
            CMS.Global.router.navigate('#logout', {trigger:true});

        },
        showSettings: function(e){

        },
        initialize: function () {

            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            this.pagePanel = new CMS.Views.Pagepanel({
                collection : new CMS.Collections.Pages(),
                el : this.$el.find('.page-panel')
            });
        }

    });

})();
