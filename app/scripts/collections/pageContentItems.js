/*global CMS, Backbone*/

CMS.Collections = CMS.Collections || {};

(function () {
    'use strict';

    CMS.Collections.PageContentItems = Backbone.Collection.extend({
        content : '',
        page: '',
        subContent: '',
        urlRoot : CMS.API+'/pages/',
        url: '',
        model: CMS.Models.PageContentItem,
        initialize: function(models, options){
            this.page = options.page;
            this.subContent = options.subContent;
            this.url = this.urlRoot +this.page.toLowerCase();
            if(this.subContent){
                this.url += '/'+this.subContent;
            }
        }
    });

})();
