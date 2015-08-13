/*global CMS, Backbone*/

CMS.Collections = CMS.Collections || {};

(function () {
    'use strict';

    CMS.Collections.EditItems = Backbone.Collection.extend({
        url : '',
        model: CMS.Models.EditItemModel,
        initialize: function(options){
            this.options = options || {};
            console.log(options);

            this.url = options.url;
        }
    });

})();
