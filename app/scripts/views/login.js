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
            /*
            $.ajaxSetup({
                headers : {
                    'Authorization' :'Basic '+ btoa(this.model.get('username')+":"+this.model.get('password'))
                }
            });
            */
            var authHeader = 'Basic '+ btoa(this.model.get('username')+":"+this.model.get('password'))
            this.model.fetch({
                beforeSend : function(xhr){
                    xhr.setRequestHeader('Authorization', authHeader);
                },
                success : function(c,r,o){
                    console.log(r);
                    Backbone.$.ajaxSetup({
                        //var tokenAuth = 'Basic '+ btoa(c.get('username')+":"+)
                        headers : {
                            'Authorization' :'Basic '+ btoa(c.get('username')+":"+r.token)
                        }
                    });
                    CMS.Global.router.navigate('dashboard', {trigger:true});
                },
                error : function(c,r,o){
                    console.log('error', r.statusText);
                }
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
