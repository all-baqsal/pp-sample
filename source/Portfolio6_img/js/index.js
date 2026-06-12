$(document).ready(function () {
    /* 페이지스크롤링 */
    var n = 0;
    var len = $(".page").length;
    var sc_pg = parseInt($(window).height());
    $(".page").height(sc_pg);
    $(window).on('mousewheel', function (e) {
        var sc_top = parseInt($(window).scrollTop());
        $("#quick a").removeClass("active");
        $("#quick a").eq(n).addClass("active");
        $("#quick").stop().animate({
            "right": "0px"
        }, 500);
        if (e.originalEvent.wheelDelta < 0 && sc_top < len * sc_pg) {
            n = parseInt(sc_top / sc_pg + 1);
            $('html, body').stop().animate({
                scrollTop: '+=' + sc_pg + 'px'
            }, 800);
        } else if (e.originalEvent.wheelDelta > 0 && sc_top > 0) {
            n = parseInt(sc_top / sc_pg);
            $('html, body').stop().animate({
                scrollTop: '-=' + sc_pg + 'px'
            }, 800);
        } else if (sc_top <= sc_pg) {
            n = 0;
        } else if (sc_top >= (len - 1) * sc_pg) {
            n = $(".page").length;
        }
        return false;

    });

    $(window).mousewheel
    $("#gnb a").after("<div class='line'></div>"); //메뉴라인설정
    $("#gnb a").on("mouseover", function () {
        $(this).next(".line").animate({
            "width": "100%"
        }, 300);
        $(this).prev(".line").animate({
            "width": "100%"
        }, 300);
    });
    $("#gnb a").on("mouseout", function () {
        $(this).prev(".line").animate({
            "width": "0px"
        }, 500);
        $(this).next(".line").animate({
            "width": "0px"
        }, 500);
    });
    /*	for(var i=0; i < len;i++) {		//퀵메뉴 자동value부여		
    		$("#quick").append("<a data-value="+i+"></a>"); 
    	}	*/
    $("#quick a:first").addClass("active");
    $("#quick").on("mouseover", function () {
        $(this).stop().animate({
            "right": "20px"
        }, 500);
    });
    $("#quick").on("mouseout", function () {
        $(this).stop().animate({
            "right": "-40px"
        }, 500);
    });
    $("#quick a").click(function () {
        var q_this = parseInt($(this).attr("data-value"));
        n = q_this;
        $("#quick a").removeClass("active");
        $(this).addClass("active");
        $('html, body').stop().animate({
            scrollTop: sc_pg * q_this + 'px'
        }, 800);
    });
    /* contact 페이지 - 그네 */
    var a = 1;
    var intv;
    $("#sisi img").attr("src", "images/sisi/1.png");
    var intv = setInterval(function () {
        if (a <= 16) {
            sisi(a);
            a = a + 1;
        } else {
            a = 1
        }
    }, 110); //총16장 마우스오버하면 0.11초마다 이미지가 바뀐다
    function sisi(b) {
        if (b <= 16) { //이미지 장수만큼 바꿔치기 설정
            $("#sisi img").attr("src", "images/sisi/" + b + ".png");
        }
    };
});