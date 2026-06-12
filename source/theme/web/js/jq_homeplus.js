$(document).ready(function(){
    // 검색text
    $('.homeplus_search_box').val('검색어를 입력하세요').css({'color':'#666','text-indent':'1em','font-size':'16px'}).one('focus',function(){ // 포커스가 있을 때 value값 초기화 / one() 메서드 이벤트를 한번만 실행
        $(this).val('').css('font-weight','bold');
    }).blur(function(){ // 포커스에서 벗어났을 때
       if( $(this).val()== ''){
           $(this).val('검색어를 입력하세요').css({'color':'#666','text-indent':'1em','font-size':'16px'}).one('focus',function(){
               $(this).val('').css('font-weight','bold');
           }); 
       }
    });
    
    $('.Homeplus_search_icon img').mouseover(function(){
        $(this).attr('src','images/index/search_img_focus.png');   
    }).mouseout(function(){
        $(this).attr('src','images/index/search_img.png');   
    }).click(function(){
        $('.homeplus_search_box').val('');
    });
    
	
	//dot
	$('.dot_icon img').mouseover(function(){
		$('.dot_icon img').attr('src','images/homeplus/dot.png');
		$(this).attr('src','images/homeplus/dot_over.png');
		var dot_num = $(this).attr('data-num');
		$('#hp_banner_wrap figure#hp_banner'+dot_num).prependTo( $('#hp_banner_wrap') );
		
	});
	
	//arrow
	$('.banner_left_arrow').click(function(){
		$('#hp_banner_wrap figure:first').appendTo( $('#hp_banner_wrap') );
		$('.dot_icon img:first').appendTo('.dot_icon');
	})
	
	$('.banner_right_arrow').click(function(){
		$('#hp_banner_wrap figure:last').prependTo( $('#hp_banner_wrap') );
		$('.dot_icon img:last').prependTo('.dot_icon');
	});

	//box_wrap
	$('.box_wrap:not(:first)').hide();
	$('.hp_quick_m li').click(function(){
		var num = $(this).attr('data-num');
		$('.box_wrap').hide();
		$('.box_wrap:eq('+ num +')').show();

		return false;
	});
});

// hpbanner_txt
	function txt_ani(){
		$('.hpbanner_txt').animate({left:'120px'}, 1000);
		$('.hpbanner_txt').delay(2000).animate({opacity:'0'}, 1000);
		$('.hpbanner_txt').animate({left:'-400px'}, 100);
		$('.hpbanner_txt').animate({opacity:'1'}, 100);
		
	};

	setInterval('txt_ani()','slow');