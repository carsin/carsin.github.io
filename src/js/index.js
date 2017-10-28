inView(".title").on("enter", (el) => {
    $("body").css("background", $(el).parent().attr("data-background"));
    console.log("set body background to " + $(el).parent().attr("data-background"));
});

inView(".title-main").on("enter", (el) => {
    $("body").css("background", $(el).parent().attr("data-background"));
    console.log("set body background to " + $(el).parent().attr("data-background"));
});

$(window).scroll(() => {
    console.log($(document).scrollTop());
    if ($(document).scrollTop() !== 0) {
        $("#hero-bottom").css("opacity", 0);
    } else {
        $("#hero-bottom").css("opacity", 100);
    }
});

console.log("js load success");
