/*global CMS, Backbone, JST*/

CMS.Views = CMS.Views || {};

(function () {
    'use strict';

    CMS.Views.Pagecontent = Backbone.View.extend({

        template: JST['app/scripts/templates/pagecontent.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},
        createModelObject: function(o){
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
                                description: item.description,
                                list_order : item.list_order,
                                price: item.price,
                                header: item.header,
                                subItem: []
                            });
                        }
                    })
                });
            });
            return(itemList);
        },
        getSectionOrder: function(o){
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
        },
        sortItemsById : function(groups){
            var collection = new CMS.Collections.EditItems();
            var itemList = this.createModelObject(groups);
            collection.add(itemList);
            return collection;
        },

        initialize: function () {

            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            var subDivide = this.collection.toJSON()[0].subDivide,
                items = this.collection.toJSON()[0].group;
            //this.$el.html(this.template(this.model.toJSON()));
            var templateHash = {
                "subDivide" : subDivide,
                "items": this.sortItemsById(items)

            };
            templateHash['sectionOrder'] = this.getSectionOrder(templateHash['items'].toJSON());
            console.log(templateHash['sectionOrder']);
            this.$el.html(this.template(templateHash));
        }

    });

})();
