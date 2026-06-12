$(document).ready(function(){
    /* right_arrow */
    $('.right_arrow').click(function(){
        $('.content_wrap1 figure:first').appendTo( '.content_wrap1' );
		return false;
    });
    
     /* left_arrow */
    $('.left_arrow').click(function(){
        $('.content_wrap1 figure:last').prependTo( '.content_wrap1' );
		return false;
    });
});