<?php
// $Id: page.tpl.php,v 1.1.2.1 2009/02/24 15:34:45 dvessel Exp $
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language ?>" lang="<?php print $language->language ?>" dir="<?php print $language->dir ?>" class="login-signup">
<head>
<?php print $styles; ?><?php print $scripts; ?>
    <script>
        $(document).ready(function() {
            $('form').submit(function() {
//              if($("#new_password").val() == ""){
//                   $("#popup-msg").show();
//                   return false;
//              }
              if($("#new_password").val() == ""){
                   $("#popup-msg").show();
                   $("#popup-msg").text("Password field is required, Please try again.");
                   return false;
              }
              if($("#new_password").val().length < 8){
                   $("#popup-msg").show();
                   $("#popup-msg").text("Your password should be minimum 8 characters long.");
                   return false;
              }
              return validate_password();
            });
        });

        function validate_password(){
            //return false;
            var pass1 = $('input[name=new_password]').val();
            var pass2 = $('input[name=again_new_password]').val();
            if(pass1 == pass2){
                  return true;
            }
            $("#popup-msg").show();
            $("#popup-msg").text("Confirm password does not match.");
            return false;
        }
    </script>
</head>

<body class="<?php print $body_classes; ?>" style="background:none;">

    <div class="messages error" style="display:none" id="popup-msg">

    </div>

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
