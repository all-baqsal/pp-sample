$(document).ready(function(){
    $('.all_menu').click(function(){
         $('#menu_wrap').animate({'left':'0'},'fast');
    });
    
    $('.close').click(function(){
         $('#menu_wrap').animate({'left':'-250px'},'fast');
    });
    
    // 초기설정
    $('.banner img:eq(1), .banner img:eq(2)').hide();
});

function fading_big(){
    $('.banner_big img:first').fadeOut(1000, function(){
        $(this).appendTo('.banner_big');
    });
    $('.banner_big img:eq(1)').fadeIn(1000);
}
setInterval('fading_big()',1000);

function fading_small(){
    $('.banner_small img:first').fadeOut(1000, function(){
        $(this).appendTo('.banner_small');
    });
    $('.banner_small img:eq(1)').fadeIn(1000);
}
setInterval('fading_small()',1000);