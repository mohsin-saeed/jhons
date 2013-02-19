$(document).ready(function() {

     $('#header-region').mouseover(function(){
          $('#various1').attr('href', 'first-time-register');
     });

     $("#various1").fancybox({
           'overlayShow': true,
           'type': 'iframe',
           'autoDimensions': true,
           'width': 870,
           'height': 602
     });
     
});

function set_fancybox_height(height){

     $('#fancybox-content').height(height);
}
