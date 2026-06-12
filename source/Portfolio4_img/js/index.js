$(function () {
    var n = 0;
    $('.wrap').on('mousewheel', function (event) {
        var page_h = $(".page").height();
        var page_cnt = $(".page").length;
        if (event.deltaY == -1 && !($(this).is(":animated"))) {
            n = n + 1;
            $(this).stop(true, false).animate({
                "scrollTop": page_h * n + "px"
            }, 1000);
        } else if (event.deltaY == 1 && !($(this).is(":animated"))) {
            n = n - 1;
            $(this).stop(true, false).animate({
                "scrollTop": page_h * n + "px"
            }, 1000);
        }
    });
    $("#gnb a").after("<div class='line'></div>");
    $("#gnb a").before("<div class='line'></div>");
    $("#gnb a").on("mouseover", function () {
        $(this).next(".line").animate({
            "width": "100%"
        }, 500);
        $(this).prev(".line").animate({
            "width": "100%"
        }, 500);
    });
    $("#gnb a").on("mouseout", function () {
        $(this).prev(".line").animate({
            "width": "0px"
        }, 500);
        $(this).next(".line").animate({
            "width": "0px"
        }, 500);
    });
});