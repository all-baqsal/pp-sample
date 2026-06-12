$(document).ready(function(){
	//dots
	$('.dots img:first').addClass('over');
	$('.dots img').click(function(){
		var num = $(this).attr('data-num');
		$('.dots img').removeClass('over');
		$(this).addClass('over');
		$('.banner .banner_content'+num).prependTo('.banner');
		return false;
	});
    
    //box_wrap
    $('.box:not(:first)').hide();
    $('li.c_menu1 a').css({'color':'#333','border-top':'5px solid #fff'});
    $('.c_menu li').click(function(){
        var num = $(this).attr('data-num');
        var num1 = parseInt(num) + 1;
        $('.c_menu li a').css({'color':'','border-top':''});
        $('li.c_menu'+num1+' a').css({'color':'#333','border-top':'5px solid #fff'});
        $('.box').hide();
        $('.box:eq('+ num +')').show();
    });
});