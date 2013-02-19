$(document).ready(function() {
	var popup_val = $.urlParam('activate');
	if (popup_val == 'true')
	{
		$('#various1').attr('href', 'first-time-register');
		$('#various1').fancybox().trigger('click');
	}

	popup_val = $.urlParam('login');
	if (popup_val == 'true')
	{
		$('#various1').attr('href', 'login_popup');
		$('#various1').fancybox().trigger('click');
	}
});

$.urlParam = function(name){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}
