<?php
// $Id: page.tpl.php,v 1.1.2.1 2009/02/24 15:34:45 dvessel Exp $
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language ?>" lang="<?php print $language->language ?>" dir="<?php print $language->dir ?>" class="login-signup">
<head>
<?php //print $styles; ?>

<link rel="stylesheet" href="<?php echo $base_path.'sites/all/themes/rrkidz/js/data_grid/grid_css/table.css'?>"/>

<script type="text/javascript" language="javascript" src="<?php echo $base_path.'sites/all/themes/rrkidz/js/data_grid/jquery.js'?>"></script>
<script type="text/javascript" language="javascript" src="<?php echo $base_path.'sites/all/themes/rrkidz/js/data_grid/function.js'?>"></script>
<script type="text/javascript" charset="utf-8">
     /* Define two custom functions (asc and desc) for string sorting */
     jQuery.fn.dataTableExt.oSort['string-case-asc']  = function(x,y) {
            return ((x < y) ? -1 : ((x > y) ?  1 : 0));
     };

     jQuery.fn.dataTableExt.oSort['string-case-desc'] = function(x,y) {
            return ((x < y) ?  1 : ((x > y) ? -1 : 0));
     };

     $(document).ready(function() {

          var data_list = window.top.getDataArray();
          var data_list_pub;
          var total_down = 0;
          var data_table_html = '<table cellpadding="0" cellspacing="0" border="0" class="display" id="example">\n\
                                   <thead>\n\
                                        <tr>\n\
                                             <th class="count">COUNT</th>\n\
                                             <th class="title">TITLE</th>\n\
                                             <th class="author">AUTHOR</th>\n\
                                             <th class="downloads">NUMBER OF UNIQUE DOWNLOADS</th>\n\
                                        </tr>\n\
                                   </thead>\n\
                                   <tbody>';
                                             
          
          if ((data_list != null)&&(data_list != 'null')){

               data_list_pub = jQuery.parseJSON(data_list);

               if (data_list_pub != null){
                    
                    for(var i=0; data_list_pub[i]; i++)
                    {
                         j=i+1;
                        data_table_html += '<tr class="">\n\
                                             <td  class="count">'+j+'</td>\n\
                                             <td  class="title">'+data_list_pub[i][0]+'</td>\n\
                                             <td class="author">'+data_list_pub[i][1]+'</td>\n\
                                             <td class="downloads center">'+data_list_pub[i][2]+'</td>\n\
                                            </tr>';
                         total_down += data_list_pub[i][2];
                     }
               }
               data_table_html += '</tbody></table>';

               //console.log(data_table_html);
         }
         else{
              console.log('data is not parsed in dataGrid');
         }

         $('#publisher_table_container').html(data_table_html);

          $('#example').dataTable( {
               "aaSorting": [[0,'asc']],
               "aoColumnDefs": [
                       { "sType": 'string-case', "aTargets": [ 2 ] }
               ]
          });

          //var pub_down_value = $('.hidden_total_downloads_pub').text();

          $('#publisher_table_container .dataTables_length').hide();
          $('#publisher_table_container .dataTables_filter').hide();
          $('#publisher_table_container .dataTables_info').hide();

          $('#publisher_table_container .dataTable').after('<div class="pub_total_unique_downloads"><label class="total-caption">total unique downloads</label> <label class="pub_download_min">'+total_down+'</label></div>');

     //var html = '<div class="pub_total_unique_downloads"><label class="total-caption">total unique downloads</label> <label class="pub_download_min">'+pub_down_value+'</label></div>';
     //html += $('#dojox_grid_enhanced_plugins__Paginator_0').html();
     //$('#dojox_grid_enhanced_plugins__Paginator_0').html(html);
     
      });
</script>

<?php //print $scripts; ?>
</head>

<body class="<?php print $body_classes; ?> claro" style="background:none;">
<div id="grid_error" style="display:none"></div>
     <div id="publisher_table_container"></div>
<label class="hidden_total_downloads_pub" style="display:none"></label>
<div id="page" class="container-12 clear-block page-login" style="background:none; width:auto; overflow:hidden;">
  <div id="main" class="column <?php print ns('grid-12', $left, 3, $right, 3) . ' ' . ns('push-3', !$left, 3); ?>"> <?php //print $breadcrumb; ?>
    
    <?php print $messages; ?> <?php print $help; ?>
    <div id="main-content" class="region clear-block login-popup"> <?php print $content; ?> </div>
    <?php print $feed_icons; ?>

  </div>
</div>
     
</body>
</html>