$(document).ready(function(){
	
	//cate_dot
	$('.dot1').mouseover(function(){
		$(this).attr('src','images/index/dot_on.png');
		$('.banner_l1').css('text-decoration','underline');
		$('.topm_l6 span').text( $('.topm_l li:first a').text() );
	}).mouseout(function(){
		$(this).attr('src','images/index/dot_off.png');
		$('.banner_l1').css('text-decoration','');
		$('.topm_l6 span').text('메뉴 선택');
	});

	$('.dot2').mouseover(function(){
		$(this).attr('src','images/index/dot_on.png');
		$('.banner_l2').css('text-decoration','underline');
		$('.topm_l6 span').text( $('.topm_l li:eq(1) a').text() );
	}).mouseout(function(){
		$(this).attr('src','images/index/dot_off.png');
		$('.banner_l2').css('text-decoration','');
		$('.topm_l6 span').text('메뉴 선택');
	});

	$('.dot3').mouseover(function(){
		$(this).attr('src','images/index/dot_on.png');
		$('.banner_l3').css('text-decoration','underline');
		$('.topm_l6 span').text( $('.topm_l li:eq(2) a').text() );
	}).mouseout(function(){
		$(this).attr('src','images/index/dot_off.png');
		$('.banner_l3').css('text-decoration','');
		$('.topm_l6 span').text('메뉴 선택');
	});

	$('.dot4').mouseover(function(){
		$(this).attr('src','images/index/dot_on.png');
		$('.banner_l4').css('text-decoration','underline');
		$('.topm_l6 span').text( $('.topm_l li:eq(3) a').text() );
	}).mouseout(function(){
		$(this).attr('src','images/index/dot_off.png');
		$('.banner_l4').css('text-decoration','');
		$('.topm_l6 span').text('메뉴 선택');
	});

	$('.dot5').mouseover(function(){
		$(this).attr('src','images/index/dot_on.png');
		$('.banner_l5').css('text-decoration','underline');
		$('.topm_l6 span').text( $('.topm_l li:eq(4) a').text() );
	}).mouseout(function(){
		$(this).attr('src','images/index/dot_off.png');
		$('.banner_l5').css('text-decoration','');
		$('.topm_l6 span').text('메뉴 선택');
	});
    
    //select
    $('.l3_select').hide();
    $('.l3').mouseenter(function(){
        $('.l3_select').slideDown('fast');
        $('.l3_p').css({'font-weight':'bold'});
    }).mouseleave(function(){
        $('.l3_select').slideUp('fast');
        $('.l3_p').css('font-weight','');
    });
    
    $('.l3_select ul li a').click(function(){
        $('.l3_p').text($(this).text());
        var href = $(this).attr('data-href');
        $(this).attr('href',href);
        
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
    $('.banner_img').delay(2000).animate({marginLeft:'-3200px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-2560px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-1920px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-1280px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'-640px'},'slow');
    $('.banner_img').delay(2000).animate({marginLeft:'0'},'slow');
    
}
setInterval('banner_slide()',0);