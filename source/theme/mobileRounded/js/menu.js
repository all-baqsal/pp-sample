$(document).ready(function(){
	//search_txt1
	$('.search_txt1 input').val('검색어를 입력하세요.').css({'color':'#666'});
	$('.search_txt1 input').click(function(){
		$(this).val('');
	}).blur(function(){
		$(this).val('검색어를 입력하세요.').css({'color':'#666'});
	});
	
	//search_img
	$('.search_img').click(function(){
		$('.search_txt1 input').val('검색완료');
	});
	
    //all_menu
    $('.all_menu').toggle(function(){
        $('#menu_wrap').stop().animate({left:'0'},'slow');
    },function(){
        $('#menu_wrap').stop().animate({left:'-100%'},'slow');
    });

    // search_wrap
    $('.search_right').click(function(){
        $('.search2').fadeIn(100);
    });
    
    $('.search2_img').click(function(){
        $('.search2').fadeOut(100);
    });
    
    //all_menu_wrap
    $('.all_menu_wrap div:not('+ $('.menu_list li a.selectd_m').attr('href') +')').hide();
    $('.menu_list li a').click(function(){
        $('.all_menu_wrap div').hide();
        $( $(this).attr('href') ).show();
        $('.menu_list li a').removeClass('selectd_m');
        $(this).addClass('selectd_m');
        
        return false;
    });
	
});
