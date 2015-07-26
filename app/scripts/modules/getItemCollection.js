/*global CMS, Backbone, JST*/

CMS.Modules = CMS.Modules || {};

(function(){
    'use strict';
    CMS.Modules.getItemCollection = function(itemList){
        var collection = new CMS.Collections.EditItems();
        collection.add(itemList);
        return collection;
    }
}());