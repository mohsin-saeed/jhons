dojo.require("dojox.grid.EnhancedGrid");
dojo.require("dojox.grid.enhanced.plugins.Pagination");
dojo.require("dojo.data.ItemFileWriteStore");

dojo.ready(function(){
    /*set up data store*/
    var data = {
      identifier: 'id',
      items: []
    };

    var data_list = null;
    data_list = window.top.getDataArray();

    var data_list_pub;
    var data_l = [];
    
    if ((data_list != null)&&(data_list != 'null')){

         data_list_pub = jQuery.parseJSON(data_list);

         if (data_list_pub != null){

              for(var i=0; data_list_pub[i]; i++){
                   var items = {col1: "important",
                        col2: data_list_pub[i][0],
                        col3: data_list_pub[i][1],
                        col4: data_list_pub[i][2]
                   }
                   data_l.push(items);

              }
         }
         else{
              console.log('data is not parsed in dojo');
         }
         var total_down = 0;
         var rows = data_l.length; //number of results
         for(i=0; i<rows; i++){
           if (data_l[i].col4 > 0){
                total_down += data_l[i].col4;
           }
         }

         $('.hidden_total_downloads_pub').text(total_down);
         for(i=0, l=data_list.length; i<rows; i++){
           data.items.push(dojo.mixin({id: i+1}, data_l[i%l]));
         }
         var store = new dojo.data.ItemFileWriteStore({data: data});

         /*set up layout*/
         var layout = [[
           {name: 'COUNT', field: 'id'},
           {name: 'TITLE', field: 'col2', classes: 'pub_title'},
           {name: 'AUTHOR', field: 'col3'},
           {name: 'NUMBER OF UNIQUE DOWNLOADS', field: 'col4'}
         ]];

         /*create a new grid:*/
         var grid = new dojox.grid.EnhancedGrid({
             id: 'grid',
             store: store,
             structure: layout,
             rowSelector: '20px',
             plugins: {
               pagination: {
                   description: false,
                   sizeSwitch: false,
                   pageStepper: true,
                   gotoButton: true,
                           /*page step to be displayed*/
                   //maxPageStep: 5,
                           /*position of the pagination bar*/
                   position: "bottom"
               }
             }
         }, document.createElement('div'));

         /*append the new grid to the div*/
         dojo.byId("gridDiv").appendChild(grid.domNode);

         /*Call startup() to render the grid*/
         grid.startup();
    }
    else{
         $("#grid_error").show();
         $("#grid_error").html('<label>No Results Found</label>');
         $("#gridDiv").hide();
    }
    
});