$(document).ready(function(){
	//u_search *t& m*
	$('#u_search').val('바른먹거리').css({'color':'#000'});
	
	//2개(u_search와 u_search1)의 입력 내용 연동 시작 ***
	$('#u_search').keypress(function(){
		var text1 = $('#u_search').val();
		$('#u_search1').val(text1);
	});
	
	$('#u_search1').keypress(function(){
		var text2 = $('#u_search1').val();
		$('#u_search').val(text2);
	});
	
	//2개(u_search와 u_search1)의 입력 내용 연동 끝 ***
	
	$('#u_search').click(function(){
		$(this).val('');
	});

	$('#search_txt').click(function(){
		$('#u_search').val('검색완료');
	}).blur(function(){
		$('#u_search').val('');
	});
	
	//u_search1
	$('#u_search1').val('바른먹거리').css({'color':'#fff'});
	$('#u_search1').click(function(){
		$(this).val('');
	});

	$('#search_btn').click(function(){
		$('#u_search1').val('검색완료');
	}).blur(function(){
		$('#u_search1').val('');
	});

	
	// main_menu
	$('.sub_menu_wrap').hide();
	$('.main_menu').mouseover(function(){
		$('.sub_menu_wrap').fadeIn('fast');
	});
	
	$('.sub_menu_wrap').mouseleave(function(){
		$('.sub_menu_wrap').fadeOut('fast');
	});
	
	$('.sub_menu_close').click(function(){
		$('.sub_menu_wrap').hide();
	});
	
	//sub_menu
	$('.sub_menu ul').mouseover(function(){
		var ul_num = $(this).attr('data-num');
		$('.sub_menu').css({'background-image':'url(images/index/submenu'+ ul_num +'_img.png'});
	});
	
	//search1 *t& m*
	$('.search1,.search4').hide();
	$('#m_search_btn').toggle(function(){
		$('.search1').slideDown(500);
		$('.search4').slideDown(600);
	},function(){
		$('.search1').slideUp(500);
		$('.search4').slideUp(350);
	});
		
	//m_menu_wrap *t& m*
	$('.m_menu_wrap').hide();
	
	$('.all_menu').click(function(){
		$('.m_menu_wrap').fadeIn(500);
	});
	
	$('.m_menu_close').click(function(){
		$('.m_menu_wrap').fadeOut(500);
	});
	
});