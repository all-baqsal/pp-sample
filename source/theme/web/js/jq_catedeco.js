$(document).ready(function(){
	
	//cate_dot
    
	$('.topm_l6 a img').mouseover(function(){
        $(this).attr('src','images/index/dot_on.png');
        $('.topm_l6 span').text( $(this).parent().attr('title') );
        $('.topm_l .topm_l'+ $(this).parent().attr('data-num') +' a').addClass('over');
    }).mouseout(function(){
        $(this).attr('src','images/index/dot_off.png');
        $('.topm_l6 span').text('메뉴 선택');
        $('.topm_l .topm_l'+ $(this).parent().attr('data-num') +' a').removeClass('over');
    });
    
     //select
    $('.l3_select').hide();
    $('.l3').click(function(){
        $('.l3_select').slideDown('fast');
    }).mouseleave(function(){
        $('.l3_select').slideUp('fast');
    });
    
    //arrow
	$('.arrow_left').click(function(){
		$('.banner_img img:first').appendTo( $('.banner_img') );
	})
	
	$('.arrow_right').click(function(){
		$('.banner_img img:last').prependTo( $('.banner_img') );
	})
    
    //open_btn
    $('.open_btn').click(function(){ 
        $('#content3').css('display','block');
        $('#content2').css('display','none');
    });
    
    $('.close_btn').click(function(){ 
        $('#content2').css('display','block');
        $('#content3').css('display','none');
    });
    
});

function banner_slide(){
    $('.banner_img').delay(2000).animate({marginLeft:'-640px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-1280px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-1920px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-2560px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-3200px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-3840px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-4480px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-5120px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-4480px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-3840px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-3200px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-2560px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-1920px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-1280px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-640px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'0'},'slow');
    
}
setInterval('banner_slide()',0);