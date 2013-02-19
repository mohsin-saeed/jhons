
$(document).ready(function() {
/******get page and apply active class on that menu********/

var file, n;
file = window.location.pathname;
n = file.lastIndexOf('/');
if (n >= 0) {
    file = file.substring(n + 1);
}

//*********************************
url = window.location.pathname;
tokens = url.split("/");
if(tokens[tokens.length-1] == "dashboard" && tokens[tokens.length-2] == "publishers"){
    $('li#publishers').addClass("active");
    $('li#publishers_dashboard').addClass("active");

}else if ((file == 'parents')||(file == 'dashboard')||(file == 'recentblogs')||(file == 'bookofweek')||(file == 'KidsAndTechnology')||(file == 'appnews')||(file == 'search')||(file == 'giftguide'))
{
	$('li#parents').addClass("active");
}
else if (file == 'educators')
{
        $('li#educators').addClass("active");
}
else if ((file == 'publishers')||(file == 'publishersDash'))
{
        $('li#publishers').addClass("active");
}
else if ((file == 'about-us')||(file == 'team')||(file == 'partner')||(file == 'press'))
{
        $('li#about-us').addClass("active");
}
else if ((file == 'contact-us') || (file == 'help') || (file == 'support'))
{
        $('li#contact-us').addClass("active");
}

/**********************************************************/
//$('.read-more-less .views-field-field-blog-desc-value-1').hide();//blog
//$('.read-more-less .blog-content-desc-1').hide();//search blog

$('.read-more-less .views-field-field-description-value-1').hide();//parent page block
$('.read-more-less .views-field-nothing-1').hide();
$('.view-blog .views-field-path').hide();
// read-more and read-less jquery effects on parents page
$('a.read-more').click(function(){
     
     $(this).parent().parent().prev().hide();
     $(this).parent().parent().hide('fast');

     $(this).parent().parent().next().css('display', 'inline');
     $(this).parent().parent().next().show('slow');
     $(this).parent().parent().next().next().show('fast');
     
     return false;
});

$('a.read-less').click(function(){

     //$(this).parent().parent().prev().css('display', 'none');
     $(this).parent().parent().prev().hide();
     $(this).parent().parent().hide('fast');
     
     $(this).parent().parent().prev().prev().prev().css('display', 'inline');
     $(this).parent().parent().prev().prev().show('slow');
     $(this).parent().parent().prev().prev().prev().show('fast');
     
     return false;
});

$('.title .nice-menu-show-title').hide(); //to hide about us/team... right side bar menu header

/***********To add numbers in data headings of privacy policy and terms of use data************/
var privacy_count = 1;
$('.views-field-field-privacy-header-value > span').each( function(){

	var head = privacy_count + '. ';
	head += $(this).text();
	$(this).text(head);
	privacy_count++;
});

privacy_count = 1;
$('.views-field-field-header-terms-value > span').each( function(){

	var head = privacy_count + '. ';
	head += $(this).text();
	$(this).text(head);
	privacy_count++;
});

/***********************************************************/

/***********For home blog readmore************/
if (($('.read-more-style .views-field-field-blog-desc-value > div').html() != null)&&($('.read-more-style .views-field-field-blog-desc-value > div').html().length>700))
{
     var htm = $('.read-more-style .views-field-field-blog-desc-value > div').html();
     htm = htm.substring(0, 690);
     $('.read-more-style .views-field-field-blog-desc-value > div').html(htm);
     $('.read-more-style .views-field-field-blog-desc-value > div').append('...<br>  <span><a href="blog/recentblogs">+Read More</a></span>');
}
else{
     $('.read-more-style .views-field-field-blog-desc-value > div').append('<br>   <span><a href="blog/recentblogs">+Read More</a></span>');
}
/***********************************************************/

/**********To add posted by and Post by in blog page***************/

$(' .view-blog .views-field-field-blog-posted-by-value').each(function(){

        var val = 'Posted by ';
	val = val + $(this).text();
	$(this).text(val);
	
});

$('#authLogin').attr("placeholder", 'email');
$('#authPassword').attr("placeholder", 'password');
$('#newsletter_field').attr("placeholder", 'enter e-mail address');
$('#rrkidz-first-login-popup-2-form #resend_activation').attr("placeholder", 'email (used in app)');
$('#-rrkidz-login-popup-form #resend_activation').attr("placeholder", 'email (used in app)');

/*****************************************************************/
/****************For PlaceHolder Input fields*********************/
   

    $('#-rrkidz-login-popup-form #resend_activation').focus(function(){
	var phvalue = $(this).attr("value");

        if (phvalue == "")
	{        
        	$(this).attr("placeholder", '');
	}
	
    });

   $('#-rrkidz-login-popup-form #resend_activation').blur(function(){

        var phvalue = $(this).attr("value");
        if (phvalue == "") {
		$(this).attr("placeholder", 'email (used in app)');
        }
    });

    $('#rrkidz-first-login-popup-2-form #login_username').focus(function(){
         
         var phvalue = $(this).attr("value");
         alert(phvalue);
         if (phvalue == "")
         {
              $(this).attr("placeholder", '');
         }
    });

   $('#rrkidz-first-login-popup-2-form #login_username').blur(function(){

        var phvalue = $(this).attr("value");
        if (phvalue == "") {  
		$(this).attr("placeholder", 'email (used in app)');
        }
    });

    $("#authLogin").focus(function(){
	var phvalue = $(this).attr("value");

        if (phvalue == "")
	{        
        	$(this).attr("placeholder", '');
	}
	
    });

   $("#authLogin").blur(function(){

        var phvalue = $(this).attr("value");
        if (phvalue == "") {  
		$(this).attr("placeholder", 'email');
        }
    });


    $("#authPassword").focus(function(){
	var phvalue = $(this).attr("value");

        if (phvalue == "")
	{        
        	$(this).attr("placeholder", '');
	}
    });

   $("#authPassword").blur(function(){

        var phvalue = $(this).attr("value");
        if (phvalue == "") {  
		$(this).attr("placeholder", 'password');
        }
    });

   $("#newsletter_field").focus(function(){
	var phvalue = $(this).attr("value");

        if (phvalue == "")
	{        
        	$(this).attr("placeholder", '');
	}
    });

   $("#newsletter_field").blur(function(){

        var phvalue = $(this).attr("value");
        if (phvalue == "") {  
		$(this).attr("placeholder", 'enter e-mail address');
        }
    });

   $("#BlogSearch").focus(function(){
	var phvalue = $(this).attr("value");

        if (phvalue == "Type to search...")
	{        
        	$(this).attr("value", '');
	}
	
    });

   $("#BlogSearch").blur(function(){

        var phvalue = $(this).attr("value");
        if (phvalue == "") {  
		$(this).attr("value", 'Type to search...');
        }
    });

   $("#login-popup-email-resend").focus(function(){
	var phvalue = $(this).attr("value");

        if (phvalue == "")
	{        
        	$(this).attr("placeholder", '');
	}
	
    });

   $("#login-popup-email-resend").blur(function(){

        var phvalue = $(this).attr("value");
        if (phvalue == "") {
		$(this).attr("placeholder", 'Email Address...');
        }
    });


/*************To truncate title of blog home page*****************/
if (($('.blog-home-content .views-field-title .field-content').html() != null)&&($('.blog-home-content .views-field-title .field-content').html().length > 20)){

	htm = $('.blog-home-content .views-field-title .field-content').html();
	htm = htm.substring(0, 18);
	$('.blog-home-content .views-field-title .field-content').html(htm);
	$('.blog-home-content .views-field-title .field-content').append('...');
}    
/******************************************************************/


//this will show and hide block content on parent page according to the size of content
$("div.read-more-less div.view-content .views-row .views-field-field-description-value-1 > div").each(function(){

	//console.log($(this).text().length);

	if ($(this).text().length < 250)
	{
	    $(this).parent().prev().hide();
	    $(this).parent().prev().prev().hide();
	    $(this).parent().show();
	}
});

//$("div.read-more-less div.view-content .views-row .views-field-field-blog-desc-value-1 > div").each(function(){
//
//	if ($(this).text().length < 600)
//	{
//	    $(this).parent().prev().hide();
//	    $(this).parent().prev().prev().hide();
//	    $(this).parent().show();
//	}
//});

//this is used in blog search page
//$("div.read-more-less div.view-content .views-row .blog-content-desc-1 > div").each(function(){
//
//	if ($(this).text().length < 600)
//	{
//	    $(this).parent().prev().hide();
//	    $(this).parent().prev().prev().hide();
//	    $(this).parent().show();
//	}
//});

/*For blog pagination*/

$('.blog-detail-content .pager .pager-last').hide();
$('.blog-detail-content .pager .pager-first').hide();
$('.blog-detail-content .pager .pager-item').hide();
$('.blog-detail-content .pager .pager-current').hide();
$('.blog-detail-content .pager .pager-ellipsis').hide();
$('.blog-detail-content .pager .pager-next > a').html('<< Older posts');
$('.blog-detail-content .pager .pager-previous > a').html('Newer posts >>');

/********************/

/*   this is for educators resources readmore and less
var links_count = $('.views-field-field-links-resourcs-url .field-content > div').size();
if (links_count > 3){

	$('.views-field-field-links-resourcs-url .field-content').summarize({
	  summaryElements:     1,
	  expandText:         '+ Read More',
	  collapseText:       '- Read Less'
	});

}*/

//used in partners page (about us) for files
$('.view-id-about_us_section .views-field-body-1').hide();


$('.summarize .views-field-field-files-files-fid .field-content').each(function(){
      if ($(this).children('.field-item').length > 2){

           $(this).summarize({
                summaryElements:    2,
                expandText:         '+ Read More',
                collapseText:       '- Read Less'
           });
      }
});

//used in partners page (about us) for links press
$('.summarize .views-field-field-links-links-url .field-content').each(function(){
      if ($(this).children('.field-item').length > 2){

           $(this).summarize({
                summaryElements:    2,
                expandText:         '+ Read More',
                collapseText:       '- Read Less'
           });
      }
});

var first_activate = window.location.href;
var token = first_activate.split('?');
if (token[1]){
     var token_val = token[1].split('&');
     token[2] = token_val[1];
     token[1] = token_val[0];
}



if( token[1] == 'activate=true' ) {

     $('#various1').attr('href', 'first-time-register');
     $('#various1').fancybox({
           overlayShow: true,
           type: 'iframe',
           autoDimensions: true,
           width: 870,
           height: 600
           }).trigger('click');

}else if(token[1] == 'login=true'){
     $('#various1').attr('href', 'login_popup');
     $('#various1').fancybox({
           overlayShow: true,
           type: 'iframe',
           autoDimensions: true,
           width: 870,
           height: 600
      }).trigger('click');
}else if(token[1] == 'register'){

     $('#various1').attr('href', 'change-temprary-password?'+token[2]);
     $('#various1').fancybox({
           overlayShow: true,
           type: 'iframe',
           autoDimensions: true,
           width: 870,
           height: 600
      }).trigger('click');

}else if(token[1] == 'change-pass'){
     $('#various1').attr('href', 'change-password');
     $('#various1').fancybox({
           overlayShow: true,
           type: 'iframe',
           autoDimensions: true,
           width: 870,
           height: 600
      }).trigger('click');
}else if(token[1] == 'forgot-pass'){
     
     $('#various1').attr('href', 'forgot-password');
     $('#various1').fancybox({
           overlayShow: true,
           type: 'iframe',
           autoDimensions: true,
           width: 870,
           height: 350
      }).trigger('click');
}else if(token[1] == 'resend-email'){
     $('#various1').attr('href', 'resend-email');
     $('#various1').fancybox({
           overlayShow: true,
           type: 'iframe',
           autoDimensions: true,
           width: 870,
           height: 350
      }).trigger('click');
}

if (( $('.pager-next').html() )&&( $('.pager-previous').html() ))
{
     var next_page = $('.pager-next').html();
     var prev_page = $('.pager-previous').html();
     
     $('.pager-previous').html(next_page);
     $('.pager-next').html(prev_page);
}

//find total number of images so that navigation arrows can show and hide
if ($('.carousel-images img:last-child').attr('id') == 0){

     $('.carousel-next').hide();
     $('.carousel-prev').hide();
}

if ($('.carousel-images img:last-child').attr('id') == 1){

     $('.carousel-prev').hide();
}


/***This js is to show video on blog page*****/
var base_path = Drupal.settings.basepath;
$('.views-field-field-blog-video1-fid').hide();

var count = 0;
$('.views-field-field-blog-video1-fid .field-content').each(function(){

     if ($(this).text() != ''){

          var path_to_video = base_path + $(this).text();

          $(this).parent().prev().prev().prev().prev().children().children().attr('id', 'container-'+count);
          jwplayer('container-'+count).setup({
               flashplayer: base_path+"sites/all/themes/rrkidz/js/jwplayer/player.swf",
               file: path_to_video,               
               height: 270,
               width: 480               

          });

          $(this).parent().prev().prev().prev().prev().show();
          alert($(this).parent().prev().prev().prev().prev().children().children().children().addParam('allowscriptaccess','never'));

          count++;
     }

});
/*****************************/

$('.fb-share').click(function(){

     var title = $(this).parent().parent().parent().prev().children('.field-content').text();     
     var img = $(this).parent().parent().parent().next().children('.field-content').children().attr('src');
     var desc = $(this).parent().parent().parent().next().next().next().next().next().children('.field-content').text();
     var location = window.location.href;
     location = encodeURIComponent(location);

     if(title.length > 50) {
          title = title.substring(0,50)+"...";
     }
     
     if(desc.length > 25) {
          desc = desc.substring(0,150)+"...";
     }
     window.open('http://www.facebook.com/sharer/sharer.php?s=100&p[url]='+location+'&p[images][0]='+img+'&p[title]='+title+'&p[summary]='+desc, 'ptm', 'height=450,width=440');

});

$('.twtr-share').click(function(){

     var title = $(this).parent().parent().parent().prev().children('.field-content').text();
     var location = window.location.href;
     location = encodeURIComponent(location);

     window.open('https://twitter.com/intent/tweet?url='+location+'&text='+title+'&hashtags=ReadingRainbow', 'ptm', 'height=450,width=440');
     
});

$('.gplus-share').click(function(){

     var path = $(this).parent().parent().parent().next().next().next().next().next().next().children('.field-content').text();

     path = document.domain + path;
     var url = 'https://plus.google.com/share?url='+path;
     window.open(url, 'ptm', 'height=450,width=440');

});
$('.mpace-share').click(function(){

     var title = $(this).parent().parent().parent().prev().children('.field-content').text();
     var img = $(this).parent().parent().parent().next().children('.field-content').children().attr('src');
     var desc = $(this).parent().parent().parent().next().next().next().next().next().children('.field-content').text();
     var location = window.location.href;
     //location = location + '&mytitle='+title+'&mydesc='+desc+'&myimage='+img;

     if(title.length > 50) {
          title = title.substring(0,50)+"...";
     }

     if(desc.length > 150) {
          desc = desc.substring(0,150)+"...";
     }

     var path = $(this).parent().parent().parent().next().next().next().next().next().next().children('.field-content').text();
     path = document.domain + path;

     //window.open('http://www.myspace.com/index.cfm?fuseaction=postto&t='+encodeURIComponent(title)+'&c='+encodeURIComponent(desc)+'&u='+encodeURIComponent(location));
     $('#my-title').attr('content', title);
     $('#my-desc').attr('content', desc);
     $('#my-image').attr('href', path);
                      //http://www.myspace.com/Modules/PostTo/Pages/?t=New%20technology%20will%20enh   &c=The%20Transportaty%20Admin  &u=http%3A%2F%2Fedition.cnn.com%2F2011%2FTRAVEL%2F07%2F20%2Ftsa.body.scans%2Findex.html
     var targetUrl = 'http://www.myspace.com/Modules/PostTo/Pages/?'+'t='+encodeURIComponent(title)+'&c='+encodeURIComponent(desc)+'&u='+path;
     
     window.open(targetUrl, 'ptm', 'height=450,width=440');

});

var check_val = param_url();  //for myspace

/***********show hide video and images on blog posts by checking is src present or not************/
$('.blog-detail-content .views-field-field-blog-image1-fid > span').each(function(){

     var url = $(this).html();

     if (url == ""){
          $(this).parent().hide();
     }
});

var counter_id = 1;

$('.views-field-field-youtube-video-url-blog-value > span').each(function(){

     var url = $(this).text();
     
     if (url != ''){

          var video_id="";

          for(var i=url.indexOf("watch")+8; ((url[i])&&(url[i] != '&')&&(i >= 8)); i++){               
               video_id += url[i];
          }          

          if ((video_id == null)||(video_id == "")){
               for(i=url.indexOf("youtu.be")+9; ((url[i])&&(url[i] != '&')); i++){
                    video_id += url[i];
               }
          }

          var blog_image = new Array();
          blog_image[0] = String(video_id);
          blog_image[1] = String(counter_id);

          blog_image = '"'+blog_image+'"';

          $(this).html('<div id='+counter_id+' class=blog_video_image name='+video_id+' onclick=play_blog_video('+blog_image+') ><img width=420 height=260 src=http://img.youtube.com/vi/'+video_id+'/0.jpg><span class="video-play-btn"></span></div>');
          counter_id++;
          
     }
     else{

          $(this).parent().hide();
     }
});

//$(".blog_video_image").click(function(){
//
//  });



/***********************************************************************************************/
$('.views-field-addthis-button').hover(function(e){

     var blog_title = $(this).prev().prev().prev().prev().prev().prev().prev().children().text();
     var blog_imgsrc = $(this).prev().prev().prev().prev().prev().prev().children().children().attr('src');
     var blog_desc = $(this).prev().prev().children().children().text();
     var blog_path = window.location.href;

     if (blog_imgsrc != null){
          $('#fb-tag-image').attr('content', blog_imgsrc);
     }

     $('#fb-tag-title').attr('content', blog_title);     
     //$('#fb-tag-link').attr('content', blog_desc);
     $('#fb-tag-link').attr('content', blog_path);
     
});

//for bookmarks of blog entities
var blog_row_count_to_add_tags = "blog_row_1";
$('.blog-detail-content .views-row').each(function(){

     $(this).attr('id', blog_row_count_to_add_tags);
     $(this).children('.views-field-phpcode').children('.field-content').children('#blog-top-link').attr('href', '#'+blog_row_count_to_add_tags);
     blog_row_count_to_add_tags = "blog_row_2";

});

$('.blog-detail-content .views-field-phpcode #blog_node_id').each(function(){

     var node_id = $(this).text();
     var path = document.domain;
     //alert(path);

     $(this).html('<strong>Blog URL: </strong>'+document.domain+'/blog?id='+node_id);

});

//for scrolling after page open on blog page
var selector = getURLParameter('select');
if ((selector != null)&&(selector != "")){
     $('html,body').animate({
        scrollTop: $("#"+selector).offset().top},
        'slow');
}

/////////////////////////////////

/************change color to red of popups if field is empty*********/
$('#rrkidz-first-login-popup-form .form-submit').click(function(){     

     var error_in_login = 0;

     if ($('#rrkidz-first-login-popup-form #login_username').val() == ''){
          
          $('#rrkidz-first-login-popup-form #login_username').css("border", "2px solid #d66");
          error_in_login++;
     }
     else{
          $('#rrkidz-first-login-popup-form #login_username').css("border", "1px solid #DCE0E0");
     }

     if ($('#rrkidz-first-login-popup-form #login_password').val() == ''){
          
          $('#rrkidz-first-login-popup-form #login_password').css("border", "2px solid #d66");
          error_in_login++;
     }
     else{
          $('#rrkidz-first-login-popup-form #login_password').css("border", "1px solid #DCE0E0");
     }


     if (error_in_login > 0){
          return false;
     }

     return true;
});

$('#rrkidz-first-login-popup-2-form .form-submit').click(function(){

     if ($('#rrkidz-first-login-popup-2-form #resend_activation').val() == ''){

          $('#rrkidz-first-login-popup-2-form #resend_activation').css("border", "2px solid #d66");
          return false;
     }
     else{
          $('#rrkidz-first-login-popup-2-form #resend_activation').css("border", "1px solid #DCE0E0");
     }

     return true;
});

$('#forgot-pass-form .form-submit').click(function(){
     
     if ($('#forgot-pass-form #email_address').val() == ''){

          $('#forgot-pass-form #email_address').css("border", "2px solid #d66");
          return false;
     }
     else{
          $('#forgot-pass-form #email_address').css("border", "1px solid #DCE0E0");
     }
     
     return true;
});

$('#forgot-email-form .form-submit').click(function(){

     if ($('#forgot-email-form #email_address').val() == ''){

          $('#forgot-email-form #email_address').css("border", "2px solid #d66");
          return false;
     }
     else{
          $('#forgot-email-form #email_address').css("border", "1px solid #DCE0E0");
     }

     return true;
});

$('#rrkidz-login-popup-form .form-submit').click(function(){

     var error_in_login = 0;

     if ($('#rrkidz-login-popup-form #login_username').val() == ''){

          $('#rrkidz-login-popup-form #login_username').css("border", "2px solid #d66");
          error_in_login++;
     }
     else{
          $('#rrkidz-login-popup-form #login_username').css("border", "1px solid #DCE0E0");
     }

     if ($('#rrkidz-login-popup-form #login_password').val() == ''){

          $('#rrkidz-login-popup-form #login_password').css("border", "2px solid #d66");
          error_in_login++;
     }
     else{
          $('#rrkidz-login-popup-form #login_password').css("border", "1px solid #DCE0E0");
     }

     if (error_in_login > 0){
          return false;
     }

     return true;
});

$('#-rrkidz-login-popup-form .form-submit').click(function(){

     if ($('#-rrkidz-login-popup-form #resend_activation').val() == ''){

          $('#-rrkidz-login-popup-form #resend_activation').css("border", "2px solid #d66");
          return false;
     }
     else{
          $('#-rrkidz-login-popup-form #resend_activation').css("border", "1px solid #DCE0E0");
     }

     return true;
});

$('#change-temp-pass-form .form-submit').click(function(){

     var error_in_login = 0;

     if ($('#change-temp-pass-form #temp_password').val() == ''){

          $('#change-temp-pass-form #temp_password').css("border", "2px solid #d66");
          error_in_login++;
     }
     else{
          $('#change-temp-pass-form #temp_password').css("border", "1px solid #DCE0E0");
     }

     if ($('#change-temp-pass-form #new_password').val() == ''){

          $('#change-temp-pass-form #new_password').css("border", "2px solid #d66");
          error_in_login++;
     }
     else{
          $('#change-temp-pass-form #new_password').css("border", "1px solid #DCE0E0");
     }

     if ($('#change-temp-pass-form #again_new_password').val() == ''){

          $('#change-temp-pass-form #again_new_password').css("border", "2px solid #d66");
          error_in_login++;
     }
     else{
          $('#change-temp-pass-form #again_new_password').css("border", "1px solid #DCE0E0");
     }

     if (error_in_login > 0){
          return false;
     }

     return true;
});

$('#change-pass-form .form-submit').click(function(){

     var error_in_login = 0;

     if ($('#change-pass-form #email').val() == ''){

          $('#change-pass-form #email').css("border", "2px solid #d66");
          error_in_login++;
     }
     else{
          $('#change-pass-form #email').css("border", "1px solid #DCE0E0");
     }

     if ($('#change-pass-form #old_password').val() == ''){

          $('#change-pass-form #old_password').css("border", "2px solid #d66");
          error_in_login++;
     }
     else{
          $('#change-pass-form #old_password').css("border", "1px solid #DCE0E0");
     }

     if ($('#change-pass-form #new_password').val() == ''){

          $('#change-pass-form #new_password').css("border", "2px solid #d66");
          error_in_login++;
     }
     else{
          $('#change-pass-form #new_password').css("border", "1px solid #DCE0E0");
     }

     if ($('#change-pass-form #again_new_password').val() == ''){

          $('#change-pass-form #again_new_password').css("border", "2px solid #d66");
          error_in_login++;
     }
     else{
          $('#change-pass-form #again_new_password').css("border", "1px solid #DCE0E0");
     }

     if (error_in_login > 0){
          return false;
     }

     return true;
});

    ///****************************To render to reset password popup******************************///
    var pageUrl = window.location.href;
    var pgToken = pageUrl.split('/');



    var gtToken = pgToken[(pgToken.length-1)].split('?');
    //alert(gtToken[4]);
    if(gtToken[0] == "password_reset"){
        $("#site-header").append("<a href='password-reset-popup' id='popup-link'>.</a>");
        $('#popup-link').attr('href', 'password-reset-popup?'+gtToken[1]);
        $('#popup-link').fancybox({
           overlayShow: true,
           type: 'iframe',
           autoDimensions: true,
           width: 870,
           height: 600
        }).trigger('click');
    }
    ////*******************************************//////

$('.pub_dash_date_dropdown').each(function(){
     
     $("#start-datepicker").attr("disabled", "disabled");
     $("#end-datepicker").attr("disabled", "disabled");
     $(".ui-datepicker-trigger").hide();

});

//$("#start-datepicker").change(function(){
//
//     var curr_date = $.datepicker.formatDate('mm/dd/yy', new Date());
//     $("#start-datepicker");
//});
//
//$("#end-datepicker").change(function(){
//
//});

$('.pub_dash_email_dropdown .jqTransformSelectWrapper >ul >li >a').click(function() {
     
     if ($(this).text() == 'Email PDF Version'){
          $('.publisher_email_message .publisher_email_message_img').show();
          $('.publisher_email_message .publisher_email_message_msg').hide();
          MailMePDF();          
     }
     else if ($(this).text() == 'Email CSV Version'){
          $('.publisher_email_message .publisher_email_message_img').show();
          $('.publisher_email_message .publisher_email_message_msg').hide();
          MailMeCSV();          
     }
});


$('.pub_dash_author .jqTransformSelectWrapper >ul >li >a').click(function() {

     var author_index = $(this).attr('index');
     if (author_index != 0){
          $('.pub_author_name_hidden').text($(this).text());
     }
     else{
          $('.pub_author_name_hidden').text('all');
     }
     
     changeBookDropDown(author_index);
     UpdateTable();
     
});

$('.pub_dash_book .jqTransformSelectWrapper >ul >li >a').click(function() {

     var ind = $(this).attr('index');
     if (ind != 0){
          ind--;
          var book_id = $('.pub_dash_title_dropdown_hidden .'+ind).attr('name');
          $('.pub_book_id_hidden').text(book_id);
     }
     else{
          $('.pub_book_id_hidden').text('all');
     }
     UpdateTable();
     
});

if ($('.pub_start_date_hidden')){

     var start_date = new Date();
     var end_date = new Date();
     start_date.setDate(start_date.getDate() - 6);


     var start_date_str = (start_date.getMonth()+1)+'/';
     start_date_str += start_date.getDate()+'/';
     start_date_str += start_date.getFullYear();

     var end_date_str = (end_date.getMonth()+1)+'/';
     end_date_str += end_date.getDate()+'/';
     end_date_str += end_date.getFullYear();

     $("#start-datepicker").attr('value', start_date_str);
     $("#end-datepicker").attr('value', end_date_str);

     $('.pub_start_date_hidden').text(start_date_str);
     $('.pub_end_date_hidden').text(end_date_str);
}

$('.pub_dash_date_dropdown .jqTransformSelectWrapper >ul >li >a').click(function() {

     //var start_date = $.datepicker.formatDate('mm/dd/yy', new Date());
     var start_date = new Date();
     var end_date = new Date();
     var flag = false;

     if ($(this).text() == 'Last Seven Days'){
          $('.date_error_msg').text('');          
          $(".ui-datepicker-trigger").hide();
          start_date.setDate(start_date.getDate() - 6);
     }
     else if ($(this).text() == 'Last 30 Days'){
          $('.date_error_msg').text('');
          $(".ui-datepicker-trigger").hide();
          start_date.setDate(start_date.getDate() - 29);
     }
     else{
          
          $("#start-datepicker").attr('value', 'Start Date');
          $("#end-datepicker").attr('value', 'End Date');
          $(".ui-datepicker-trigger").show();
          $('.pub_start_date_hidden').text('start_date');
          $('.pub_end_date_hidden').text('end_date');
          flag = true;
     }

     if (!flag){

          var start_date_str = (start_date.getMonth()+1)+'/';
          start_date_str += start_date.getDate()+'/';
          start_date_str += start_date.getFullYear();

          var end_date_str = (end_date.getMonth()+1)+'/';
          end_date_str += end_date.getDate()+'/';
          end_date_str += end_date.getFullYear();

          $('.pub_start_date_hidden').text(start_date_str);
          $('.pub_end_date_hidden').text(end_date_str);

          $("#start-datepicker").attr('value', start_date_str);
          $("#end-datepicker").attr('value', end_date_str);

          if (start_date_str != end_date_str){
               UpdateTable();
          }
     }
});

});

      
function param_url(){

  var title_value = getURLParameter('mytitle');
  if (title_value != null){
       var desc_value = getURLParameter('mydesc');
       var img_value = getURLParameter('myimage');

       $('#my-title').attr('content', title_value);
       $('#my-desc').attr('content', desc_value);
       $('#my-image').attr('href', img_value);
  }

}

function getURLParameter(paramname)
{
   paramname = paramname.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");

  var regexbuild = "[\\?&]"+paramname+"=([^&#]*)";
  var regex = new RegExp( regexbuild );
  var results = regex.exec( window.location.href );

  if( results == null )
    return "";
  else
    return results[1];
}
 
function play_blog_video(blog_image){

     var array = blog_image.split(",");

     //$('.blog_video_image #'+abc).parent().html("<div class='blog_video_frame' style='display:show'><iframe width='420' height='236' src=http://www.youtube.com/embed/"+video_id+"?fs=1&autoplay=1 frameborder='0' allowfullscreen></iframe><div>");
     //$('.blog_video_image').html("<div class='blog_video_frame' style='display:show'><iframe width='420' height='236' src=http://www.youtube.com/embed/"+video_id+"?fs=1&autoplay=1 frameborder='0' allowfullscreen></iframe><div>");

     //$("#"+array[1]).parent().html("<div class='blog_video_frame' style='display:show'><iframe id='ytplayer' width='420' height='260' src=http://www.youtube.com/embed/"+array[0]+"?enablejsapi=1&rel=0&fs=1&autoplay=1 frameborder='0' allowfullscreen></iframe><div>");
     $("#"+array[1]).html('<object type="application/x-shockwave-flash" id="ytplayer" data="http://www.youtube.com/v/'+array[0]+'?enablejsapi=1&autoplay=1&amp;playerapiid=ytplayer&amp;version=3" width="420" height="260"><param name="allowScriptAccess" value="always"></object>');
     $("#"+array[1]).addClass("videoActive");

}

function onYouTubePlayerReady(playerId) {
        var player = document.getElementById("ytplayer");
        player.addEventListener("onStateChange", "onytplayerStateChange");
}

function onytplayerStateChange(newState) {
        //alert("New state " + newState);
        if (newState == 0)
        {
             var videoId = $('.videoActive').attr('name');
             var divId = $('.videoActive').attr('id');
             $('#'+divId).removeClass("videoActive");

             $('#'+divId).html('<img width=420 height=260 src=http://img.youtube.com/vi/'+videoId+'/0.jpg>');

        }
}


function send_email_again()
{
     var email = $('#login-popup-email-resend').attr('value');
     if (email == ''){
          $('#again-email-message').text('*please enter email address');
     }
     else{
		$.ajax({
		type: "GET",
		url: "",
		contentType: "application/json; charset=utf-8",
		dataType: "jsonp",

		success: function(result) {
		var data = result.data;
		var totalItems = data.totalItems;
		var randNumber = RandNo(totalItems);

		    if (data)
		    {
		    $("#yt").html("<iframe wmode='Opaque' width='300' height='240' src='http://www.youtube.com/embed/" + data.items[randNumber].video.id + "?wmode=transparent' frameborder='0' allowfullscreen></iframe>");

		    $("#head").html(data.items[randNumber].video.title);
		    
		    var des = data.items[randNumber].video.description;
		    if (des.length > 110)
		    {
			    des = des.substr(0,110);
		            des = des + "...";
		    }
		    $("#video-desc").html(des);
		   }
		}
	    });
	}
}

/*************show and hide navigation buttons on carousel*****************/
function next_detail_dash(length)
{
     if ($('img.active').attr('id') == length-2){
          $('.carousel-next').hide();
     }

     if ($('.carousel-prev').css('display') == "none"){
          $('.carousel-prev').show();
     }

     var book_id = $('img.active').next().next().next().next().attr('class');
     var src = $('img.active').next().next().next().next().attr('src');
     src = src.replace("noImage.gif", "dynamic_carousel_images/"+book_id+'.jpg');
     if (book_id != null){
          $('img.active').next().next().next().next().attr('src', src);
     }
}

function prev_detail_dash(length)
{     
     if ($('img.active').attr('id') == 1){
          $('.carousel-prev').hide();
     }

     if ($('.carousel-next').css('display') == "none"){
          $('.carousel-next').show();
     }

     var book_id = $('img.active').prev().prev().prev().prev().attr('class');
     var src = $('img.active').prev().prev().prev().prev().attr('src');
     src = src.replace("noImage.gif", "dynamic_carousel_images/"+book_id+'.jpg');
     
     if (book_id != null){
          $('img.active').prev().prev().prev().prev().attr('src',  src);
     }
}

function next_detail(length)
{
     var sel = $('img.active').attr('id');     
//     var total = $('.count').text();
     var total = length;
//     alert(length);
//     alert(total);

     //for parent page popup to hide description below image
     
          
     $('.content-of-book-'+sel).hide();
     sel = parseInt(sel) + 1;
     if (sel == total){
          sel = 0;
     }

     $('.content-of-book-'+sel).show();
     $('.selected').html(sel);

     var book_id = $('img.active').next().next().next().next().next().next().next().attr('class');
     if (book_id != null){
          $('img.active').next().next().next().next().next().next().next().attr('src', 'sites/all/themes/rrkidz/images/dynamic_carousel_images/'+book_id+'.jpg');
     }

     next_detail_dash(length);
}


function prev_detail(length)
{
     var sel = $('img.active').attr('id');
     var total = $('.count').text();
     $('.content-of-book-'+sel).hide();
     sel = parseInt(sel) - 1;
     
     if (sel < 0){
          sel = parseInt(total) - 1;
     }

     $('.content-of-book-'+sel).show();
     $('.selected').html(sel);

     var book_id = $('img.active').prev().prev().prev().prev().prev().prev().prev().attr('class');
     if (book_id != null){
          $('img.active').prev().prev().prev().prev().prev().prev().prev().attr('src', 'sites/all/themes/rrkidz/images/dynamic_carousel_images/'+book_id+'.jpg');
     }

     prev_detail_dash(length);
     
}

/***********change values according to drop down value change in parent dashboard************/

function read_book_change(a, b, c)
{
	var mylist = document.getElementById("book_read");
	var val = mylist.options[mylist.selectedIndex].text;

	if (val == 'This Year')
	{
		document.getElementById("books_read_val").innerHTML = a;	
	}
	else if (val == 'This Month')
	{
		document.getElementById("books_read_val").innerHTML = b;
	}
	else
	{
		document.getElementById("books_read_val").innerHTML = c;
	}
}

function time_book_change(a, b, c)
{
	var mylist = document.getElementById("time_read");
	var val = mylist.options[mylist.selectedIndex].text;


	if (val == 'This Year')
	{
		document.getElementById("time_read_val").innerHTML = a;	
	}
	else if (val == 'This Month')
	{
		document.getElementById("time_read_val").innerHTML = b;
	}
	else
	{
		document.getElementById("time_read_val").innerHTML = c;
	}
}
/********************************************************************************************/

function expand_faq(a)
{
     $('#'+a).show('medium');
     $('#expand-'+a).hide();
     $('#collapse-'+a).show();
}

function toggle_faq(a)
{
     var str_result = $('#'+a).attr("style");
     var is_block = str_result.indexOf("block");

     if (is_block != -1)
     {
          $('#'+a).hide('medium');
          $('#expand-'+a).show();
          $('#collapse-'+a).hide();
     }
     else
     {
          $('#'+a).show('medium');
          $('#expand-'+a).hide();
          $('#collapse-'+a).show();
     }
}

function go_to_help_page(){
     window.top.location.href = Drupal.settings.basepath+'help';
}
function UpdateTable(){
     //$('.pub_dash_table').html('<iframe name="iframe" width="930" height="600" src="table"></iframe>');
     //$('.pub_table').attr("src", "table");
     document.getElementById('pub_table').contentDocument.location.reload(true);
}
function MailMePDF(){     

     var start_date= $('.pub_start_date_hidden').text();
     var end_date = $('.pub_end_date_hidden').text();

     var author = $('.pub_dash_author .jqTransformSelectWrapper >div >span').text();
     var book = $('.pub_dash_book .jqTransformSelectWrapper >div >span').text();

     if (author == '-- ALL Authors --'){
          author='none';
     }
     if (book == '-- ALL Books --'){
          book='none';
     }
     
     var url_path = window.location.href;           //cut url till certain substring
     var indTillCutStr = url_path.indexOf('publisher');
     url_path = url_path.substring(0,indTillCutStr);
     url_path = url_path + 'send_publisher_email_report?type=pdf&start_date='+start_date+'&end_date='+end_date+'&author='+author+'&book='+book;
     //http://localhost/rrkidz_production/send_publisher_email_report

      $.ajax({
        async: true,
        //type: "GET",
        url: url_path,
	//contentType: "application/json",
        //dataType: "jsonp",

        success: function(result) {
             
             $('.publisher_email_message .publisher_email_message_img').hide();
             $('.publisher_email_message .publisher_email_message_msg').show();

        }
    });
}
function MailMeCSV(){
     
     var url_path = window.location.href;           //cut url till certain substring
     var indTillCutStr = url_path.indexOf('publisher');
     url_path = url_path.substring(0,indTillCutStr);
     url_path = url_path + 'send_publisher_email_report?type=csv';     
     
      $.ajax({
        async: true,
        //type: "GET",
        url: url_path,
	//contentType: "application/json",
        //dataType: "jsonp",

        success: function(result) {

             $('.publisher_email_message .publisher_email_message_img').hide();
             $('.publisher_email_message .publisher_email_message_msg').show();

             
        }
    });
}
function changeBookDropDown(author_id){
   
   if (author_id == 0){

        var index = $('.pub_dash_book .jqTransformSelectWrapper >ul >li .selected').attr('index');
        
        $('.pub_dash_book .jqTransformSelectWrapper >ul >li').each(function(){
             $(this).show();

             if ($(this).children().attr('class') == 'selected'){
                  $(this).children().attr('class', '');
             }
        });

        $('.pub_dash_book .jqTransformSelectWrapper >ul >li').children(":first").attr('class', 'selected');
        $('.pub_dash_book .jqTransformSelectWrapper >div >span').text('--ALL--');

        $('.pub_dash_book .jqTransformSelectWrapper >div >span').text('-- ALL Books --');
        $('.pub_book_id_hidden').text('all');
   }
   else{
        $('.pub_dash_book .jqTransformSelectWrapper >ul >li').each(function(){
             $(this).hide();
        });
        $('.pub_dash_book .jqTransformSelectWrapper >ul').children(":first").show();
        $('.pub_dash_book .jqTransformSelectWrapper >ul >li').children(":first").attr('class', 'selected');
        
        author_id -= 1;
        $('.pub_dash_title_dropdown_hidden >option').each(function(){

             if ($(this).attr('id') == author_id){
                  var ind = $(this).attr('class');
                  ind++;                  
                  $('.pub_dash_book .jqTransformSelectWrapper >ul >li').each(function(){
                       if ($(this).children(":first").attr('index') == ind){
                            $(this).show();                            
                            $('.pub_dash_book .jqTransformSelectWrapper >div >span').text('-- ALL Books --');
                            $('.pub_book_id_hidden').text('all');
                       }
                  });
             }
        });
   }
}
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

function DateOptionSelected(index){

     if (index != 2){
          $('#start-datepicker').hide();
          $('#end-datepicker').hide();
     }
     else{
          $('#start-datepicker').show();
          $('#end-datepicker').show();
     }
}

function checkIsSelectedDateCorrect(){
     var start_date = $('.pub_start_date_hidden').text();
     var end_date =  $('.pub_end_date_hidden').text();

     if (Date.parse(start_date) > Date.parse(end_date)) {
          $('.date_error_msg').text('*Start date cannot be greater then End date');
          return false;
     }
     else{
          $('.date_error_msg').text('');
          return true;
     }
}
