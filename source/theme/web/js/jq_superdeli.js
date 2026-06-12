$(document).ready(function(){
    // procon_wrap
    $('#procon2,#procon3,#procon4,#procon5,#procon6,#procon7,#procon8,#procon9,#procon10').hide();
    $('li.c_menu1 a').css({'color':'#333','border-top':'5px solid #fff'});
    
    $('.c_menu li').click(function(){
        var num = $(this).attr('data-num');
        $('.c_menu li a').css({'color':'','border-top':''});
        $('li.c_menu'+num+' a').css({'color':'#333','border-top':'5px solid #fff'});
        $('#procon1,#procon2,#procon3,#procon4,#procon5,#procon6,#procon7,#procon8,#procon9,#procon10').hide();
        $('#procon'+num).show();
    });
});
