inView(".title-setcolor").on("enter", (el) => {
    $("body").css("background", $(el).parent().attr("data-background"));
    console.log("set body background to " + $(el).parent().attr("data-background"));
});

inView(".fadeSectionDetector").on("enter", (el) => {
    $(el).parent().parent().parent().parent().css("opacity", "100");
    $(el).parent().parent().parent().parent().css("transform", "translateX(0)");
});

inView(".fadeSectionDetector").on("exit", (el) => {
    $(el).parent().parent().parent().parent().css("opacity", "0");
    $(el).parent().parent().parent().parent().css("transform", "translateX(-10vw)");
});

inView(".title-main").on("enter", (el) => {
    $("body").css("background", $(el).parent().attr("data-background"));
    console.log("set body background to " + $(el).parent().attr("data-background"));
});

$(window).scroll(() => {
    if ($(document).scrollTop() >= 100) {
        $("#hero-bottom").css("opacity", 0);
    } else {
        $("#hero-bottom").css("opacity", 100);
    }

    if ($(document).scrollTop() >= 320) {
        $("#hero-text").css("opacity", 0);
    } else {
        $("#hero-text").css("opacity", 100);
    }
});

console.log("js load success");
