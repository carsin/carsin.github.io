inView(".title-scrollspy").on("enter", (el) => {
    setActive(el);
});

inView(".title-color").on("enter", (el) => {
    setColors(el);
});

function setColors(el) {
    var color = $(el).attr("data-background");
    $("body").css("background", color);
    $(".background-color-adapt").css("background", color);
}

function setActive(el) {
    $("#nav-items").find(".nav-item.active").removeClass("active");
    var navEle = $("#nav-items").find("a[href='#" + $(el).attr("data-ssid") + "']");
    navEle.addClass("active");
}

$(".nav-scroll").click(function(e) {
    var href = $(this).attr("href");
    $(".navbar-toggler").click(); // close navbar
    $("html,body").animate({
        scrollTop: $(href).offset().top - ($(window).height() - $(href).height()) / 2
    }, 500);
    e.preventDefault();
});

$(".smooth-scroll").click(function(e) {
    var href = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(href).offset().top - ($(window).height() - $(href).height()) / 2
    }, 500);
    e.preventDefault();
});

$(window).scroll(() => {
    var st = $(this).scrollTop();
    var limit = 350;
    if (st <= limit) $("#hero-bottom").css("opacity", (1 - st/limit));
});

$(document).ready(function() {
    $(".navbar-brand").click((e) => {
        location.reload();
        e.preventDefault();
    });
});
