<?php

// $Id: page.tpl.php,v 1.1.2.1 2009/02/24 15:34:45 dvessel Exp $
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language ?>" lang="<?php print $language->language ?>" dir="<?php print $language->dir ?>">

<head>

<!--<script type="text/javascript" src="http://fast.fonts.com/jsapi/75ddf206-d28f-4d92-a3f7-6b483abea427.js"></script>-->

<title><?php echo 'Reading Rainbow'//print $head_title; ?></title>

<!--<meta id="fb-tag-title" property="og:title" content="Reading Rainbow Kids" />
<meta id="fb-tag-type" property="og:type" content="book" />
<meta id="fb-tag-image" property="og:image" content="http://www.rrkidz.com/sites/all/themes/rrkidz/logo.png" />
<meta id="fb-tag-link" property="og:url" content="http://www.rrkidz.com" />
<meta id="fb-tag-site-name" property="og:site_name" content="Reading Rainbow" />-->

<meta id="my-title" name="TITLE" content="TITLE_GOES_HERE" />
<meta id="my-desc" name="description" content="EXCERPT_GOES_HERE" />
<link id="my-image" rel="image_src" href="IMAGE_URL_GOES_HERE" />


<?php print $head; ?><?php print $styles; ?>

<?php print $scripts; ?>

<link rel="stylesheet" href="<?php echo $base_path.'sites/all/themes/rrkidz/js/data_grid/grid_css/table.css'?>"/>

<script type="text/javascript" language="javascript" src="<?php echo $base_path.'sites/all/themes/rrkidz/js/data_grid/jquery.js'?>"></script>
<script type="text/javascript" language="javascript" src="<?php echo $base_path.'sites/all/themes/rrkidz/js/data_grid/function.js'?>"></script>


<?php
    global $base_url;
    global $base_path;
?>



<script>
    
    $(function() {
            
        var url_path = window.location.href;
        url_pathArr = url_path.split('?');
        tmp = url_pathArr[1].split('=');
        child_index = tmp[1];
        
        loadChildHistroyTable(child_index);
    });


    function loadChildHistroyTable(chlid_id){

          $('#summary_page_link').hide();
          $("#ajax-loader").show();
          $(".loader-sec").show();
          var data_list = getDataArray(chlid_id);
          var data_list_pub;
          var totoal_spent_time = 0;
          var data_table_html = '<table cellpadding="0" cellspacing="0" border="0" class="display" id="example">\n\
                                   <thead>\n\
                                        <tr>\n\
                                             <th class="count">Date</th>\n\
                                             <th class="title">TITLE</th>\n\
                                             <th class="author">AUTHOR</th>\n\
                                             <th class="island">ISLAND</th>\n\
                                             <th class="spent-time">TIME SPENT READING</th>\n\
                                        </tr>\n\
                                   </thead>\n\
                                   <tbody>';


          if ((data_list != null)&&(data_list != 'null')){

               data_list_pub = jQuery.parseJSON(data_list);


               if (data_list_pub != null){

                    for(var i=0; i < data_list_pub["activities"].length; i++)
                    {
                         j=i+1;
                        data_table_html += '<tr class="">\n\
                                             <td  class="count">'+data_list_pub["activities"][i].activity_date+'</td>\n\
                                             <td  class="title">'+data_list_pub["activities"][i].book_title+'</td>\n\
                                             <td class="author">'+data_list_pub["activities"][i].author+'</td>\n\
                                             <td class="island">'+data_list_pub["activities"][i].island+'</td>\n\
                                             <td class="spent-time center">'+data_list_pub["activities"][i].time_read+' minutes</td>\n\
                                            </tr>';
                         totoal_spent_time += data_list_pub["activities"][i].time_read;
                         //break;
                     }
               }
               data_table_html += '</tbody></table>';
               

               //console.log(data_table_html);
         }
         else{
              console.log('data is not parsed in dataGrid');
         }





        
         
          $('#summary_page_link').attr("href",data_list_pub.summary_page_link);
          $('#summary_page_link').show();

         $('#child-data-table').html(data_table_html);

          $('#example').dataTable( {
               "aaSorting": [[0,'asc']],
               "aoColumnDefs": [
                       { "sType": 'string-case', "aTargets": [ 2 ] }
               ]
          });

          //var pub_down_value = $('.hidden_total_downloads_pub').text();

          $('#example_info').hide();
          $('#example_length').hide();
          $('#example_filter').hide();

/////
//<div class="pub_total_unique_downloads"><label class="total-caption">total unique downloads</label> <label class="pub_download_min">260</label></div>
////

          chlilt_name_sec = data_list_pub.chlid_name+"'s Reading Adventure";
          $('.pub_dash_title #page-title').html(chlilt_name_sec+'<img class="loader-sec" style="display:none" id="ajax-loader" src="'+<?php echo $base_path ?>+'sites/all/themes/rrkidz/images/ajax-loader.gif"/>');
         //  $('.pub_dash_title #page-title').after('<img style="display:none" id="ajax-loader" src="'+<?php echo $base_path ?>+'sites/all/themes/rrkidz/images/ajax-loader.gif"/>')
          next_link = prev_link= "";
          if(data_list_pub.prev_child_index != "void"){
            prev_link = '<a href="javascript:;" onClick="loadChildHistroyTable('+data_list_pub.prev_child_index+')" class="prev_child_arrow"> << </a>';
          }

          if(data_list_pub.next_child_index != "void"){
            next_link = '<a href="javascript:;" onClick="loadChildHistroyTable('+data_list_pub.next_child_index+')" class="next_child_arrow"> >> </a>';
          }


          $('.prev_child_arrow').remove();
          $('.next_child_arrow').remove();
          $('.pub_dash_title').append(next_link);
          $('.pub_dash_title').prepend(prev_link);
          
          sp_time = (totoal_spent_time/60)+"";
          sp_time_arr = sp_time.split(".");
           sp_time = sp_time_arr[0]+" Hours," +sp_time_arr[1]+" Minutes";
           sp_time_arr[1] = Math.ceil((Number(0+'.'+sp_time_arr[1]))*100);
          sp_time = sp_time_arr[0]+" Hours," +Math.floor((sp_time_arr[1]/100)*60)+" Minutes";
          //alert(sp_time);
    //sp_time = totoal_spent_time
          $('#example').after('<div class="pub_total_unique_downloads"><label class="total-caption">total</label> <label class="pub_download_min">'+totoal_spent_time+'</label> <label class="total-caption">minutes</label> </div>');
    }



function getDataArray(chlid_id){
    var url_path = window.location.href;           //cut url till certain substring
    url_pathArr = url_path.split('?');
    url_path2 = url_pathArr[0]+'/table?id='+chlid_id;

    var data_list = null;
    $.ajax({
        async: false,
        url: url_path2,
        success: function(result) {
             //$("#ajax-loader").hide();
            data_list = result;
            return data_list;
        }
    });

    return data_list;   //here we get data array from hidden field and return it.
}



</script>

</head>

<body class="<?php print $body_classes; ?> ">
<!--show-grid-->
<div class="opacity"></div>
<div id="page" class="container-12 clear-block">
  <div id="site-header" class="clear-block">
    <div id="branding" class="grid-6 clear-block logo">
      <?php if ($linked_logo_img): ?>
      <span id="logo" class="grid-3 alpha logo-image"><?php print $linked_logo_img; ?></span>
      <span class="tagline"><img src = "<?php echo base_path()?>sites/all/themes/rrkidz/images/tagline.png"/></span>
      <?php endif; ?>
      <?php if ($linked_site_name): ?>
      <h1 id="site-name" class="grid-3 omega"><?php print $linked_site_name; ?></h1>
      <?php endif; ?>
      <?php if ($site_slogan): ?>
      <div id="site-slogan" class="grid-3 omega"><?php print $site_slogan; ?></div>
      <?php endif; ?>
    </div>

<!--    <div class="region grid-6 prefix-1 clear-block user-form">-->
    <?php if ($header): ?>
    <div id="header-region" class="region <?php print ns('grid-6', $mission, 7); ?> clear-block user-form"> <?php print $header; ?> </div>
    <?php endif; ?>

    <?php if ($search_box): ?>
<!--    <div id="search-box" class="region clear-block"><?php print $search_box; ?></div>-->
    <?php endif; ?>

<!--    </div>-->

    <?php if ($main_menu_links || $secondary_menu_links): ?>
    <div id="site-menu" class="grid-12"> <?php print $topmenu; ?></div>
<!--    <div id="site-menu" class="grid-12"> <?php print $main_menu_links; ?> <?php print $secondary_menu_links; ?> </div>-->
    <?php endif; ?>
  </div>
<!--  <div id="site-subheader" class="prefix-1 suffix-1 clear-block">
    <?php if ($mission): ?>
    <div id="mission" class="<?php print ns('grid-10', $header, 7); ?>"> <?php print $mission; ?> </div>
    <?php endif; ?>
  </div>-->
  <div id="main" class="column <?php print ns('grid-12', $left, 3, $right, 3) . ' ' . ns('push-3', !$left, 3); ?>"> <?php //print $breadcrumb; ?>
    <?php if ($title): ?>
<!--    <h1 class="title" id="page-title"><?php print $title; ?></h1>-->
    <?php endif; ?>
    <?php if ($tabs): ?>
    <div class="tabs"><?php print $tabs; ?></div>
    <?php endif; ?>
    <?php print $messages; ?> <?php print $help; ?>
    <div id="main-content" class="region clear-block"> <?php print $content; ?> </div>
    <?php print $feed_icons; ?> </div>
  <?php if ($left): ?>
  <div id="sidebar-left" class="column sidebar region grid-3 <?php print ns('pull-9', $right, 3); ?>"> <?php print $left; ?> </div>
  <?php endif; ?>
  <?php if ($right): ?>
  <div id="sidebar-right" class="column sidebar region grid-3"> <?php print $right; ?> </div>
  <?php endif; ?>

</div>
<div class="footer-wrap container-12 clear-block clearfix">
<div id="footer" class="region clear-block grid-12">
    <?php if ($footer): ?>
    <div id="footer-region" class="region clear-block"> <?php print $footer; ?> </div>
    <?php endif; ?>
    <?php if ($footer_message): ?>
    <div id="footer-message" class="grid-10"> <?php print $footer_message; ?> </div>
    <?php endif; ?>
  </div>
  </div>
<?php print $closure; ?>
</body>
  <script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-32737455-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</html>
