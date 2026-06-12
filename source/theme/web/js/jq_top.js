$(document).ready(function(){
    // 검색text
    $('.search_txt').val('검색어를 입력하세요').css({'color':'#666','text-indent':'1em','font-size':'16px'}).one('focus',function(){ // 포커스가 있을 때 value값 초기화 / one() 메서드 이벤트를 한번만 실행
        $(this).val('').css('font-weight','bold');
    }).blur(function(){ // 포커스에서 벗어났을 때
       if( $(this).val()== ''){
           $(this).val('검색어를 입력하세요').css({'color':'#666','text-indent':'1em','font-size':'16px'}).one('focus',function(){
               $(this).val('').css('font-weight','bold');
           }); 
       }
    });
    
    $('.search_img img').mouseover(function(){
        $(this).attr('src','images/index/search_img_focus.png');   
    }).mouseout(function(){
        $(this).attr('src','images/index/search_img.png');   
    }).click(function(){
        $('.search_txt').val('');
    });
});