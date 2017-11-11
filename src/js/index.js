var prevImg;
var isImg = true;
var heroViewing = true;

inView(".title-scrollspy").on("enter", (el) => {
    setActive(el);
});

inView(".title-image").on("enter", (el) => {
    $("#nav-main").toggleClass("over-image");
    $("#nav-main").css("background", "rgba(0, 0, 0, 0)");
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

    if (isImg) {
        $("#nav-main").toggleClass("over-image");
        $("#navbar-img1").fadeOut(150, () => {
            $("#navbar-img2").fadeIn(150);
        });
        isImg = false;
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
    $(".navbar").toggleClass("active");
    setTimeout(() => {
        if ($(".navbar-toggler").hasClass("collapsed")) {
            $("#nav-main").css("background", "rgba(0, 0, 0, 0)");
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
    //if ($(".navbar-toggler").hasClass("collapsed")) $("#nav-main").css("background", color);

    // DEBUG
    console.log("set colors to " + color);
}

function setActive(el) {
    $("#nav-items").find(".nav-item.active").removeClass("active");
    var navEle = $("#nav-items").find("a[href='#" + $(el).attr("data-ssid") + "']");
    navEle.addClass("active");
}

$(".nav-scroll").click(function(e) {
    var href = $(this).attr("href");
    if (!$(".navbar-toggler").hasClass("collapsed")) {
        $(".navbar-toggler").click(); // close navbar
        // set active class on nav
        $("#nav-items").find(".nav-item.active").removeClass("active");
        var navEle = $("#nav-items").find("a[href='#" + href + "']");
        navEle.addClass("active");
    } else if ($(".navbar-toggler").hasClass("collapsed")) {
        $("html, body").stop().animate({
            scrollTop: $(href).offset().top - $("#nav-main").height()
        }, 300);
        e.preventDefault();
    } else {
        console.log("ERROR: Unexpected navbar state.");
    }
});

$(".smooth-scroll").click(function(e) {
    var href = $(this).attr("href");
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top - $("#nav-main").height()
    }, 300);
    e.preventDefault();
});

$(window).scroll(() => {
    var st = $(this).scrollTop();
    var limit = 350;
    if (st <= limit) $("#hero-bottom").css("opacity", (1 - st/limit));
});

$(document).ready(() => {
    $("body").removeClass("preload"); // no anims before page loads :)
});
