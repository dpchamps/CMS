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
            var self = this;
            e.preventDefault();
            this.model.set({
                username: $('input.login--username').val(),
                password: $('input.login--password').val()
            });
            $.when(this.model.save())
                .fail(function(m,r,o){
                    self.render(r.responseJSON);
                })
                .done(function(m,r,o){
                    CMS.Global.router.navigate('#/dashboard', {trigger:true});
                });

        },
        'passwordReset': function(e){
            e.preventDefault();
            console.log('password reset');
        },
        initialize: function () {

        },

        render: function (response) {
            this.$el.html(this.template(response));
        }

    });

})();
