$(document).ready(function(){
	//btn_wrap
	$('.txt_btn1').mouseover(function(){
		$(this).stop().animate({opacity:'0'},'fast');
	}).mouseout(function(){
		$(this).stop().animate({opacity:'1'},'fast');
	});
});