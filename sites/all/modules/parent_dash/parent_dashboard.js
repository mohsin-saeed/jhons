function getDataArray(){

   var st_date = $('.pub_start_date_hidden').text();
   var end_date = $('.pub_end_date_hidden').text();

   var author = $('.pub_author_name_hidden').text();
   var book = $('.pub_book_id_hidden').text();

   if (author == ''){
        author = 'all';
   }
   if (book == ''){
        book = 'all';
   }
   var url_path = window.location.href;           //cut url till certain substring
   var index_till_cut_str = url_path.indexOf('/publishers/');
   url_path = url_path.substring(0, index_till_cut_str);
   url_path = url_path + '/get_data_of_publisher?author='+author+'&book='+book+'&start_date='+st_date+'&end_date='+end_date;

   var data_list = null;
   $.ajax({
        async: false,
        //type: "GET",
        url: url_path,
	//contentType: "application/json",
        //dataType: "jsonp",

        success: function(result) {

             data_list = result;
             return data_list;
        }
    });

   return data_list;   //here we get data array from hidden field and return it.
}
