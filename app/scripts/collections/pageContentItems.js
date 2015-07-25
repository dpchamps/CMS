/*global CMS, Backbone*/

CMS.Collections = CMS.Collections || {};

(function () {
    'use strict';

    CMS.Collections.PageContentItems = Backbone.Collection.extend({
        content : '',
        page: '',
        subContent: '',
        urlRoot : CMS.API+'/cms/page_content/',
        url: '',
        model: CMS.Models.PageContentItem,
        initialize: function(models, options){
            console.log(options.page, options.subContent);
            this.page = options.page;
            this.subContent = options.subContent;
            this.url = this.urlRoot + '/'+this.page;
            if(this.subContent){
                this.url += '/'+this.subContent;
            }
            console.log(this.url);
        }
    });

})();
