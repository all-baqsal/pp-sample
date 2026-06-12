$(document).ready(function(){

	//ul.store_sub
	$('ul.store_sub').hide();
	$('.store_search').click(function(){
		$('ul.store_sub').slideDown(500);
	});
	$('.store_search_wrap').mouseleave(function(){
		$('ul.store_sub').slideUp(500);
	});

	//dot
	$('.dot img').click(function(){
		var index = $(this).attr('data-num');
		$('.dot img').attr('src','images/index/dot.png');
		$('.dot img:eq('+ index +')').attr('src','images/index/dot_over.png');
		if( index == '0' ){
			$('.banner_inner').animate({marginLeft:'0'},'normal');
		}else if( index == '1' ){
			$('.banner_inner').animate({marginLeft:'-278px'},'normal');
		}else if( index == '2' ){
			$('.banner_inner').animate({marginLeft:'-556px'},'normal');
		}else if( index == '3' ){
			$('.banner_inner').animate({marginLeft:'-834px'},'normal');
		}else if( index == '4' ){
			$('.banner_inner').animate({marginLeft:'-1112px'},'normal');
		}
	});
});
/*
function banner(){
	$('.banner_inner').delay(2000).animate({marginLeft:'-278px'},'normal');
	$('.banner_inner').delay(2000).animate({marginLeft:'-556px'},'normal');
	$('.banner_inner').delay(2000).animate({marginLeft:'-834px'},'normal');
	$('.banner_inner').delay(2000).animate({marginLeft:'-1112px'},'normal');
	$('.banner_inner').delay(2000).animate({marginLeft:'-834px'},'normal');
	$('.banner_inner').delay(2000).animate({marginLeft:'-556px'},'normal');
	$('.banner_inner').delay(2000).animate({marginLeft:'-278px'},'normal');
	$('.banner_inner').delay(2000).animate({marginLeft:'0'},'normal');
};

setInterval('banner()', 2000);
*/