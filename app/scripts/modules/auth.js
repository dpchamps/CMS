/*global CMS, $*/

CMS.Modules = CMS.Modules || {};

(function(){
    CMS.Modules.Auth = {
        sessionSetup : function(){
            if(
                typeof sessionStorage.getItem('username') !== 'undefined' &&
                typeof sessionStorage.getItem('token') !== 'undefined'
            ){
                var user = sessionStorage.getItem('username'),
                    token = sessionStorage.getItem('token');
                Backbone.$.ajaxSetup({
                    //var tokenAuth = 'Basic '+ btoa(c.get('username')+":"+)
                    headers : {
                        'Authorization' :'Basic '+ btoa(user+":"+token)
                    }
                });
            }else{
                return false;
            }
        },
        userSetup : function(){
            CMS.Global.userdata = CMS.Global.userdata || new CMS.Models.Userdata();
        },
        checkSession: function(){
            var userdata = CMS.Global.userdata.toJSON(),
                response  = $.Deferred().reject();

            if(typeof userdata.token !== 'undefined') {
                console.log(
                    typeof userdata.token,
                    userdata.token
                );
                $.ajaxSetup({
                    headers : {
                        'Authorization' :'Basic '+ btoa(userdata.username+":"+userdata.token)
                    }
                });

                response = $.when(CMS.Global.userdata.fetch());
            }

            return response;

        }
    }
}());
