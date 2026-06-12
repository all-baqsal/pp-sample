$(document).ready(function(){

/* notice_wrap */
	$('body').append('<div id="glayLayer2"></div><div id="overLayer2"></div>');
	$('#glayLayer2').show();
	$('#overLayer2').show();
	$('#notice_wrap').fadeIn('fast');
	
	$('.close_btn').click(function(){
		$('#glayLayer2').hide();
		$('#overLayer2').hide();
		$('#notice_wrap').fadeOut('fast');
	});

    // banner_l
    var visual = $('.banner_l_wrap > ul > li'); // 이미지
    var button = $('#btn_all > li'); // 버튼
    var current = 0;
    var setIntervalId;
    
    button.on({
        click:function(){
            var tg = $(this);
            var i = tg.index();

            button.removeClass('on'); // 클래스 이름 일치시켜야 함
            tg.addClass('on');

            move(i);
            return false;
        }
    });
    
    $('.banner_l').on({ // 마우스 오버시 멈추고 아웃시 다시 시작
        mouseover:function(){
            clearInterval(setIntervalId);
        },
        mouseout:function(){
            timer();
        }
    });
    
    timer();
    function timer(){
        setIntervalId = setInterval(function(){
            var n = current + 1;
            if(n == visual.size()){
                n = 0;
            }
            
            button.eq(n).trigger('click');
        }, 5000);
    }
    
    function move(i){
        if(current == i) return;
        
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);
        
        currentEl.css({left:0}).stop().animate({left:'-100%'});
        nextEl.css({left:'100%'}).stop().animate({left:0});

        current = i;
    }
  
	//cate_dot
	$('.banner_r6 a img').mouseover(function(){
        $(this).attr('src','images/index/dot_on.png');
        $('.banner_r6 span').text( $(this).parent().attr('title') );
        $('.banner_r .banner_r'+ $(this).parent().attr('data-num') +' a').addClass('over');
    }).mouseout(function(){
        $(this).attr('src','images/index/dot_off.png');
        $('.banner_r6 span').text('메뉴 선택');
        $('.banner_r .banner_r'+ $(this).parent().attr('data-num') +' a').removeClass('over');
    });
    
    
    //best_pro
    
    $('.best_arrow_left').click(function(){
        //console.log($('.best_pro div:first').attr('class'));
        $('.best_pro div:last').prependTo('.best_pro');
        
        return false;
    });
    
     $('.best_arrow_right').click(function(){
        //console.log($('.best_pro div:first').attr('class'));
        $('.best_pro div:first').appendTo('.best_pro');
        
         return false;
    });
    
    
});

