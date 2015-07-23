/*global CMS, Backbone*/

CMS.Collections = CMS.Collections || {};

(function () {
    'use strict';

    CMS.Collections.Pages = Backbone.Collection.extend({
        url: CMS.API+'/cms/page_data',
        model: CMS.Models.Page

    });

})();
