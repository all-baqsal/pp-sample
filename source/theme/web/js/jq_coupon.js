$(document).ready(function(){
    
    //coupon_left_arrow
   $('.coupon_left_arrow').click(function(){ 
		 $('.slide_banner a img:last').prependTo('.slide_banner a');
		 //console.log($('.slide_banner a img:first').attr('src'));

		$('.dot img:first').appendTo('.dot');
		//console.log($('.dot img:first').attr('src'));
   });
    
    //coupon_right_arrow
   $('.coupon_right_arrow').click(function(){ 
		$('.slide_banner a img:first').appendTo('.slide_banner a');
		//console.log($('.slide_banner a img:first').attr('src'));
		$('.dot img:last').prependTo('.dot');
   });
    
    //dot
    
    $('.dot img').click(function(){
        var c_num = $(this).attr('data-num');
        $('.slide_banner a img.banner'+c_num).prependTo('.slide_banner a');
		$('.dot img').attr('src','images/coupon/dot_off.png');
		$('.dot img:eq('+(c_num-1)+')').attr('src','images/coupon/dot_on.png');
    });
    
    //.coupon_notice
    $('.coupon_notice').hide();
    $('.info').click(function(){
        $('.coupon_notice').show(); 
    });
    $('.c_notice_close').click(function(){
        $('.coupon_notice').hide();
    });
});