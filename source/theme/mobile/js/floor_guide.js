$(document).ready(function(){
    //box_txt input
    $('.box_txt input').val('브랜드명을 입력해 주세요.').css({'color':'#fff'});
    
    $('.box_txt input').click(function(){
        $('.box_txt input').val('');
    }).blur(function(){
        $('.box_txt input').val('브랜드명을 입력해 주세요.');
    });
    
	$('.box_txt img').click(function(){
		$('.box_txt input').val('검색완료');
	});
	
	
    //right_wrap
    $('.right_wrap article:not('+ $('.floor_list li a.selected').attr('data-floor') +')').hide();
    
    $('.floor_list li a').click(function(){
        $('.floor_list li a').removeClass('selected');
        $(this).addClass('selected');
        $('.right_wrap article').hide();
        $( $(this).attr('data-floor') ).show();
    });
    
    //con_txt1
    $('.con_txt1').toggle(function(){
        $(this).addClass('con_txt_click');
        $(this).next().hide();
    },function(){
        $(this).removeClass('con_txt_click');
        $(this).next().show();
    });
    
    //con_txt3
    $('.con_txt3').toggle(function(){
        $(this).addClass('con_txt_click');
        $(this).next().hide();
    },function(){
        $(this).removeClass('con_txt_click');
        $(this).next().show();
    });
    
});