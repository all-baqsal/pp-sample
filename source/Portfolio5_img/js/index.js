$(function () {
    var n = 0;
    var len = $(".page").length;
    var sc_pg = parseInt($(window).height());
    $("#slider img").height(sc_pg);
    $("#content").height(sc_pg);
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
    $("#gnb a").after("<div class='line'></div>");
    $("#gnb a").on("mouseover", function () {
        $(this).next(".line").animate({
            "width": "200px"
        }, 500);
    });
    $("#gnb a").on("mouseout", function () {
        $(this).next(".line").animate({
            "width": "0px"
        }, 500);
    });
    $("#quick a:first").addClass("active");
    $("#quick").on("mouseover", function () {
        $(this).stop().animate({
            "right": "0px"
        }, 500);
    });
    $("#quick").on("mouseout", function () {
        $(this).stop().animate({
            "right": "-30px"
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

        $(document).ready(function () {
            $(".popup1").click(function () {
                $("#login_wrap").fadeIn(600);
            });
            $(".close").click(function () {
                $("#login_wrap").fadeOut(600);
            });
        });
    });
});