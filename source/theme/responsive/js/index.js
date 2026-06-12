$(document).ready(function(){

	/* notice_wrap */
	$('body').append('<div id="glayLayer2"></div><div id="overLayer2"></div>');
	$('#glayLayer2').show();
	$('#overLayer2').show();
	$('#notice_wrap').fadeIn('fast');

	$('.close_btn').click(function(){
		$('#glayLayer2').hide();
		$('#overLayer2').hide();
		$('#notice_wrap').fadeOut('fast');
	});

});