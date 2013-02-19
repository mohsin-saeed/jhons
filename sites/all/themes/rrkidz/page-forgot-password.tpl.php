<?php
// $Id: page.tpl.php,v 1.1.2.1 2009/02/24 15:34:45 dvessel Exp $
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language ?>" lang="<?php print $language->language ?>" dir="<?php print $language->dir ?>" class="login-signup">
<head>
<?php print $styles; ?><?php print $scripts; ?>
<script type="text/javascript">

     $(document).ready(function() {

          window.top.set_fancybox_height(325);
     });

    </script>
    <style>
        .container-12 #main #main-content{
            height: 250px;
            color: red;
        }
        .login-popup-header,resend-pass-head{
/*            height: 85px;
            margin-top: 20px;*/
        }
        #page{
            height: 325px;
        }

    </style>
</head>

<body class="<?php print $body_classes; ?>" style="background:none;">
<div id="page" class="container-12 clear-block page-login" style="background:none; width:auto; overflow:hidden;">
  <div id="main" class="column <?php print ns('grid-12', $left, 3, $right, 3) . ' ' . ns('push-3', !$left, 3); ?>"> <?php //print $breadcrumb; ?>
    
    <?php print $messages; ?> <?php print $help; ?>
    <div id="main-content" class="region clear-block login-popup"> <?php print $content; ?> </div>
    <?php print $feed_icons; ?>

  </div>
</div>

<?php //print $closure; ?>
</body>
</html>
