<?php
// $Id: page.tpl.php,v 1.1.2.1 2009/02/24 15:34:45 dvessel Exp $
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language ?>" lang="<?php print $language->language ?>" dir="<?php print $language->dir ?>" class="login-signup">
<head>
<?php print $styles; ?><?php print $scripts; ?>

</head>

<body class="<?php print $body_classes; ?> " style="background:none;">HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
<div id="page" class="container-12 clear-block page-login"  style="background:none; width:auto; overflow:hidden;">
  <div id="main" class="column"> <?php //print $breadcrumb; ?>
    
    <?php print $messages; ?> <?php print $help; ?>
    <div id="main-content" class="region clear-block"> <?php print $content; ?> </div>
    <?php print $feed_icons; ?>

  </div>
</div>

<?php //print $closure; ?>
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
