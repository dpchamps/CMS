/*global CMS, Backbone, JST*/

CMS.Modules = CMS.Modules || {};

(function(){
    'use strict';
    CMS.Modules.getSectionOrder = function(o){
        var section = [];

        _.each(o, function(item){
            var last = section[section.length-1];
            if(typeof last === 'undefined'){
                section.push(item['header']);
                return
            }
            if(last !== item['header']){
                section.push(item['header']);
            }
        });
        return section;
    }
}());