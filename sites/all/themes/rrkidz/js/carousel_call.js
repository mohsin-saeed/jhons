$(document).ready(function() {

  $('.dynamic-carousal-images').css('display','none');
});

function ShowMe()
{

$('#basic-modal-content1').css('visibility','visible');
$('.dynamic-carousal-images').css('display','block');
$('.opacity').height($(document).height());
$('.opacity').css('display','block');

$("html, body").animate({ scrollTop: 0 }, "slow");
  return false;


//$(document).height();

}

function CloseMe()
{
	
$('#basic-modal-content1').css('visibility','hidden');
$('.dynamic-carousal-images').css('display','none');
$('.opacity').css('display','none');

}
