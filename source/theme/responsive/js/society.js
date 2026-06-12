$(document).ready(function(){
	//s02_list2_menu
	$('.s02_list2_menu li a').click(function(){
		var menu_num = $(this).attr('href');
		$('.s02_list2_menu li a').removeClass('menu_on');
		$(this).addClass('menu_on');
		$('.list_img img').hide();
		$('.list_img img#list_img'+menu_num).show();
		$('.s02_list3_txt div').hide();
		$('.s02_list3_txt div#s02_list3_txt'+menu_num).show();
		event.preventDefault();
	});
	
	// s02_arrow1
	$('.s02_list3_txt div:not(:first)').hide();
	$('.s02_arrow1').click(function(){
		var img_num1 = $('.list_img img:last').attr('data-list');
		$('.list_img img:last').prependTo('.list_img');
		
		$('.s02_list3_txt div').hide();
		$('#s02_list3_txt'+img_num1).show();
		
		var li_num1 = parseInt(img_num1) - 1;
		$('.s02_list2_menu li a').removeClass('menu_on');
		$('.s02_list2_menu li:eq('+ li_num1 +') a').addClass('menu_on');
		
		return false;
	});
	
	$('.s02_arrow2').click(function(){
		$('.list_img img:first').appendTo('.list_img');
		var img_num2 = $('.list_img img:first').attr('data-list');
		
		$('.s02_list3_txt div').hide();
		$('#s02_list3_txt'+ img_num2).show();
		
		var li_num2 = parseInt(img_num2) - 1;
		$('.s02_list2_menu li a').removeClass('menu_on');
		$('.s02_list2_menu li:eq('+ li_num2 +') a').addClass('menu_on');

		return false;
	});
		
});