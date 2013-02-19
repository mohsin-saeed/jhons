
$(document).ready(function() {

$('.blog-sidebar').each(function(){
      $(this).parent().parent().hide();
});

var counter = 1;

$('.blog-sidebar .views-field-title > span').each(function(){
     
     var val = $('.blog-right-navigation #'+counter+' > a').html();
     val = val + '<span>'+$(this).text()+'</span>';
     $('.blog-right-navigation #'+counter+' > a').html(val);

     counter++;
});


//val = $('#block-views-blog-block_7 .views-field-field-blog-header-value .field-content').html();
//$('#book_top').html(val);
//
//val = $('#block-views-blog-block_6 .views-field-field-blog-header-value .field-content').html();
//$('#kid_top').html(val);
//
//val = $('#block-views-blog-block_8 .views-field-field-blog-header-value .field-content').html();
//$('#app_top').html(val);

});