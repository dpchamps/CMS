/*global CMS, Backbone*/

CMS.Collections = CMS.Collections || {};

(function () {
    'use strict';

    CMS.Collections.EditItems = Backbone.Collection.extend({

        model: CMS.Models.EditItemModel

    });

})();
