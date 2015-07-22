/*global CMS, Backbone, JST*/

CMS.Views = CMS.Views || {};

(function () {
    'use strict';

    CMS.Views.Changeusername = Backbone.View.extend({

        template: JST['app/scripts/templates/changeusername.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'submit' : 'formSubmit'
        },


        formSubmit : function(e){
            e.preventDefault();
            this.model.set('waiting', true);
            var self = this;
            setTimeout(function(){
                self.model.set({
                    waiting : false,
                    serverMessage: 'Username Successfully Updated'
                })
            }, 500);
        },
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
