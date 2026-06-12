$(document).ready(function(){
    
    //quick_banner
    $('.q_arrow_left').click(function(){
        $('.quick_img img:last').prependTo( $('.quick_img'));
        var num1 = $('.quick_img img:first').attr('data-num');
        $('.q_val').text(num1);
    });
    
    $('.q_arrow_right').click(function(){
        $('.quick_img img:first').appendTo( $('.quick_img'));
        var num2 = $('.quick_img img:first').attr('data-num');
        $('.q_val').text(num2);
    });
    
});