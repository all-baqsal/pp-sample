$(document).ready(function(){
    //best_arrow_left 버튼 클릭
    $('.best_arrow_left').click(function(){
        $('.best_white_wrap div.best_white:last').prependTo('.best_white_wrap');
    });
    
    //best_arrow_right 버튼 클릭
    $('.best_arrow_right').click(function(){
        $('.best_white_wrap div.best_white:first').appendTo('.best_white_wrap');
    });
    
    //hot_item
    $('.hot_list li a:first').addClass('over');
    $('.hotitem_outer_wrap .hot_item_wrap:not(:first)').hide();
    $('.hot_list li a').click(function(){
        $('.hot_list li a').removeClass('over');
        $(this).addClass('over');
        var list_num = $(this).attr('href');
		 $('.hotitem_outer_wrap .hot_item_wrap').hide();
        $('.hotitem_outer_wrap .hot_item_wrap:eq('+ list_num +')').show();
       
        return false;
    });
});