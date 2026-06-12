$(document).ready(function(){
	//상위메뉴와 하위메뉴의 wrap에 화살표
	$('.select_wrap').click(function(){ 
		$('.select1').css('background-image','url(images/login/arrow_up.png)');
		$('.homemenu').show();	
	}).mouseleave(function(){
		$('.homemenu').hide();
	});

	//홈메뉴 숨기기
	function event1(){
		$('.select1').css('background-image','');
		$('.homemenu').hide();
	};
	$('.homemenu').bind('mouseleave',event1);

	//아이디 기억하기 underline
	$('.txt2 .id_chk').mouseover(function(){
		$(this).css('text-decoration','underline');
	}).mouseout(function(){
		$(this).css('text-decoration','');
	});

	//아이디 기억하기
	$('.txt2 .id_chk' ).toggle(function() {
		$(this).css('background-image','url(images/login/check_img_on.png)');
	}, function() {
		$(this).css('background-image','url(images/login/check_img.png)');
	});
    
    //로그인 버튼
    $('#btn1').mouseover(function(){
        $(this).stop().animate({top:'-50px'},'fast');
    });
    $('#btn2').mouseout(function(){
        $('#btn1').stop().animate({top:'0px'},'fast');
        
    });
});