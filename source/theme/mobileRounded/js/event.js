$(document).ready(function(){
    /* event_btn_wrap button */
    $('.content_wrap2 div:not(:first)').hide();
    $('#btn_wrap div:not(:first)').hide(); //
	$('.event_btn_wrap p input').click(function(){
		$('.event_btn_wrap p input').removeClass('sel_Event');
		$(this).addClass('sel_Event');
		$('.content_wrap2 div').hide();
		$('#'+$(this).attr('data-title')).show();
        $('#btn_wrap div').hide();
		$('.'+$(this).attr('data-btn')).show();
        $('#top h2').text( $(this).attr('value') );
	});
    
    /* ing_left_btn */
    $('.ing_left_btn').click(function(){
        $('#event_con1 figure:first').appendTo( '#event_con1' );
    });
    
     /* ing_right_btn */
    $('.ing_right_btn').click(function(){
        $('#event_con1 figure:last').prependTo( '#event_con1' );
    });
    
    /* done_left_btn */
    $('.done_left_btn').click(function(){
        $('#event_con2 figure:first').appendTo( '#event_con2' );
    });
    
     /* done_right_btn */
    $('.done_right_btn').click(function(){
        $('#event_con2 figure:last').prependTo( '#event_con2' );
    });
});