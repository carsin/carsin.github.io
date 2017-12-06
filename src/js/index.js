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


// Contact form hacks
$(document).ready(function() {
    $(".navbar-brand").click(() => {
        location.reload();
    });

	// Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){

            // Cache our selectors
            let element = $(this);
            let parent = element.parent().find("label");
            if (e.type == 'keyup') {
                if (element.val() == '') {
                    parent.addClass('js-hide-label');
                } else {
                    parent.removeClass('js-hide-label');
                }
            } else if (e.type == 'blur') {
                if (element.val() == '') {
                    parent.addClass('js-hide-label');
                } else {
                    parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } else if (e.type == 'focus') {
                if (element.val() !== '') {
                    parent.removeClass('js-unhighlight-label');
                }
            }
        });
    }
});
