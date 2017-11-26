var prevImg;
var isImg = true;
var heroViewing = true;

var navColor = $("#nav-main").css("background-color");

inView(".title-scrollspy").on("enter", (el) => {
    setActive(el);
});

inView(".title-image").on("enter", (el) => {
    prevImg = $("body").find($("#" + $(el).attr("data-bgid")));
    prevImg.css("opacity", "100")
    isImg = true;
});

inView(".title-color").on("enter", (el) => {
    setColors(el);
    if (heroViewing) {
        $("#hero").toggleClass("hero-black")
        $("#hero-button").toggleClass("btn-inverted");
        heroViewing = false;
    }

    prevImg.css("opacity", "0");
});

inView("#hero-title").on("enter", (el) => {
    if (!heroViewing) {
        $("#hero").toggleClass("hero-black")
        $("#hero-button").toggleClass("btn-inverted");
        $("#navbar-img2").fadeOut(150, () => {
            $("#navbar-img1").fadeIn(150);
        });
    }

    heroViewing = true;
});

$(".navbar-toggler").click(() => {
    $(".navbar-toggler").toggleClass("is-active");
    $("body").toggleClass("noscroll");
    $(".navbar").toggleClass("active");
    setTimeout(() => {
        if ($(".navbar-toggler").hasClass("collapsed")) {
            $("#nav-main").css("background", navColor);
        } else {
            // Set nav color to background
            // $("#nav-main").css("background", $("body").css("background-color"));

            // Set nav color to black on toggle
            $("#nav-main").css("background", "black");
        }
    }, 1);
});

function setColors(el) {
    var color = $(el).attr("data-background");
    $("body").css("background", color);
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
