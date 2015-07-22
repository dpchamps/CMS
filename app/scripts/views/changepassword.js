/*global CMS, Backbone, JST*/

CMS.Views = CMS.Views || {};

(function () {
    'use strict';

    CMS.Views.Changepassword = Backbone.View.extend({

        template: JST['app/scripts/templates/changepassword.ejs'],

        tagName: 'div',

        events: {
            'keyup #confirm-password' : 'validatePassword',
            'submit' : 'formSubmit'
        },
        validatePassword :  function(e){
            e.preventDefault();
            var pwd = this.$el.find('#new-password'),
                confPwd = this.$el.find('#confirm-password'),
                pass = false;
            if(confPwd.val() != pwd.val()){
                confPwd[0].setCustomValidity("Passwords Must Match");
            }else{
                confPwd[0].setCustomValidity("");
                pass=true;
            }

            return pass;
        },
        formSubmit : function(e){
            e.preventDefault();
            if(this.validatePassword(e)){
                this.model.set('waiting', true);
                var self = this;
                setTimeout(function(){
                    self.model.set({
                        waiting : false,
                        serverMessage: 'Password Successfully Updated'
                    })
                }, 500);
            }
        },
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
