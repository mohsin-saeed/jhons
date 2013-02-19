<?php
// $Id: page.tpl.php,v 1.1.2.1 2009/02/24 15:34:45 dvessel Exp $
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language ?>" lang="<?php print $language->language ?>" dir="<?php print $language->dir ?>">
<head>
<title><?php print 'Reading Rainbow';//$head_title; ?></title>
<?php print $head; ?>
<?php print $styles; ?>
<script type="text/javascript" src="<?php echo $base_path.'sites/all/themes/rrkidz/js/carousel_js/jquery-1.6.1.min.js' ?>" ></script>

<script type="text/javascript" >
  var jq161 = jQuery.noConflict();
</script>
<script type="text/javascript" src="<?php echo $base_path.'sites/all/themes/rrkidz/js/carousel_js/jquery.waterwheelCarousel.js' ?>" ></script>
<!--<script type="text/javascript" src="<?php echo $base_path.'sites/all/themes/rrkidz/js/carousel_js/carousel.js' ?>" ></script>-->

<script type="text/javascript" src="../sites/all/modules/jquery_update/replace/jquery.min.js"></script>
<script type="text/javascript" src="../misc/drupal.js"></script>
<script type="text/javascript" defer="defer" src="../modules/acquia/admin_menu/admin_menu.js"></script>
<script type="text/javascript" src="../sites/all/modules/nice_menus/superfish/js/superfish.js"></script>
<script type="text/javascript" src="../sites/all/modules/nice_menus/superfish/js/jquery.bgiframe.min.js"></script>
<script type="text/javascript" src="../sites/all/modules/nice_menus/superfish/js/jquery.hoverIntent.minified.js"></script>
<script type="text/javascript" src="../sites/all/themes/rrkidz/js/info_parent_dash_call.js"></script>
<script type="text/javascript" src="../sites/all/themes/rrkidz/js/drop.js"></script>
<script type="text/javascript" src="<?php echo $base_path.'sites/all/themes/rrkidz/js/custom.js' ?>" ></script>


<?php //print $scripts; ?>
<?php global $base_url; ?>

</head>

<body class="<?php print $body_classes; ?> ">
<!--show-grid-->
<div class="opacity"></div>
<div id="page" class="container-12 clear-block page-parents">
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
    
    <div class="region grid-6 prefix-1 clear-block user-form">
    <?php if ($header): ?>
    <div id="header-region" class="region <?php //print ns('grid-5', $mission, 7); ?> clear-block"> <?php print $header; ?> </div>
    <?php endif; ?>
    
    <?php if ($search_box): ?>
    <div id="search-box" class="region clear-block"><?php print $search_box; ?></div>
    <?php endif; ?>
    
    </div>
    
    <?php if ($main_menu_links || $secondary_menu_links): ?>
    <div id="site-menu" class="grid-12"> <?php print $topmenu; ?></div>
<!--    <div id="site-menu" class="grid-12"> <?php print $main_menu_links; ?> <?php print $secondary_menu_links; ?> </div>-->
    <?php endif; ?>
  </div>
  <div id="site-subheader" class="prefix-1 suffix-1 clear-block">
    <?php if ($mission): ?>
    <div id="mission" class="<?php print ns('grid-10', $header, 7); ?>"> <?php print $mission; ?> </div>
    <?php endif; ?>
  </div>
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
