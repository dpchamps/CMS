/*global CMS, Backbone, JST*/

CMS.Views = CMS.Views || {};

(function () {
    'use strict';

    CMS.Views.Login = Backbone.View.extend({

        template: JST['app/scripts/templates/login.ejs'],
        tagName : 'div',

        events: {
            'click .login--submit' : 'login',
            'click .login--pass-reset' : 'passwordReset'
        },
        'login' : function(e){
            e.preventDefault();
            console.log('login');
        },
        'passwordReset': function(e){
            e.preventDefault();
            console.log('password reset');
        },
        initialize: function () {

        },

        render: function () {
            console.log(this.$el);
            this.$el.html(this.template());
        }

    });

})();
