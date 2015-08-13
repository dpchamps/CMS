/*global CMS, Backbone*/

CMS.Collections = CMS.Collections || {};

(function () {
    'use strict';

    CMS.Collections.PageContentItems = Backbone.Collection.extend({
        content : '',
        urlRoot : CMS.API+'/pages/',
        url: '',
        page: '',
        subPage: '',
        model: CMS.Models.PageContentItem,
        initialize: function(options){
            this.page = options.page;
            this.subPage = options.subPage;
            console.log(this.page, this.subPage);

            this.url = this.urlRoot +options.page.toLowerCase();
            if(this.subPage){
                this.url += '/'+this.subPage;
            }
        }
    });

})();
