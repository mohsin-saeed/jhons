<?php

// $Id: page.tpl.php,v 1.1.2.1 2009/02/24 15:34:45 dvessel Exp $
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language ?>" lang="<?php print $language->language ?>" dir="<?php print $language->dir ?>">

<head>
<?php if(isset($_GET['activate'])){?>

<script type="text/javascript">
	var first_activate = <?php echo $_GET['activate']?> 
</script>
<?php } ?>

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
<?php global $base_url; ?>

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
