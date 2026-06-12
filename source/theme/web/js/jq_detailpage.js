$(document).ready(function(){  
    //option_box
    $('.option_box').hide();
    
    $('.right_txt_wrap').mouseover(function(){
        $('.right_txt5 img').attr('src','images/detailpage/bg_btn_over.png');
    }).mouseout(function(){
        $('.right_txt5 img').attr('src','images/detailpage/bg_btn.png');
    }).click(function(){
        $('.right_txt5 img').attr('src','images/detailpage/bg_btn_over.png');
        $('.option_box').show();
        
    });
    
    $('.opt_close').click(function(){
        $('.option_box').hide();
        
    });
    
    $('.opt_txt').click(function(){
        var total_price = $(this).attr('data-price');
        $('.opt_box_txt2').text( total_price );
        $('.line1 span').text( $(this).text() );
        $('.line2 span').text( total_price );
        $('.buy_price').text( total_price );
        
    });
});



