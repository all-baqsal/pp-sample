$(document).ready(function(){
    // control button
    $('.control a').mouseover(function(){
        $(this).stop().animate({width:'30px'},10);
    }).mouseout(function(){
        $(this).stop().animate({width:'15px'},10);    
    });
    
    // top icon
    $('.gototop').hide();
    $(window).scroll(function(){
        var nowScroll = $(window).scrollTop();
        if( nowScroll > 0 ){
            $('.gototop').fadeIn(100);
        }else{
            $('.gototop').fadeOut(100);    
        }
    });
});

