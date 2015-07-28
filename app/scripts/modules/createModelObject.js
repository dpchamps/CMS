/*global CMS, Backbone, JST*/

CMS.Modules = CMS.Modules || {};

//module that create an object sent by the slowbar api
(function(){
    'use strict';
    CMS.Modules.createModelObject = function(o){
        var itemList = [];
        //first we sort by group
        _.each(o, function(group){
            //now we sort by items, which is an array of all items and subitems
            _.each(group, function(items){
                //dig through each array
                _.each(items, function(item){
                    //if the id exists push to subitem array
                    var last = itemList[itemList.length-1];

                    if(typeof last !== 'undefined' && last.id === item.id){
                        last.subItem.push({
                            list_order : item.list_order,
                            description: item.description,
                            subprice : item.subprice,
                            subprice_desc_id : item.subprice_desc_id
                        });
                    }else{

                        itemList.push({
                            id : item.id,
                            title: item.title,
                            price: item.price,
                            header: item.header,
                            subItem: [],
                            list_order : item.list_order
                        });
                        if(!itemList[itemList.length-1].price && item.description){
                            itemList[itemList.length-1].subItem.push({
                                list_order : item.list_order,
                                description: item.description,
                                subprice : item.subprice,
                                subprice_desc_id : item.subprice_desc_id
                            });
                        }else{
                            _.extend(itemList[itemList.length-1],{
                                description: item.description
                            });
                        }
                    }
                });
            });
        });
        return(itemList);
    }
}());