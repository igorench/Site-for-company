$(document).ready(function () {

    $(".owl-carousel").owlCarousel();

    function heightDetect() {
        $("header").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function () {
        heightDetect();
    });

    $(".header-form-link").each(function (i) {
        $("#header-form-link-" + (i + 1)).click(function () {
            $(".header-form-link").removeClass("form-active");
            $(this).addClass("form-active");
        })
    });

    $(".popup").magnificPopup({type:"image"});
    $(".popup_content").magnificPopup({
        type: "inline",
        midClick: true
    });

    $(".home-item").each(function(i) {
        $(this).find("a").attr("href", "#work_" + i);
        $(this).find(".port_descr").attr("id", "work_" + i);
    });
});