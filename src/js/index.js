inView(".title").on("enter", (el) => {
    $("body").css("background", $(el).parent().attr("data-background"));
    console.log("set body background to " + $(el).parent().attr("data-background"));
});

inView(".title-main").on("enter", (el) => {
    $("body").css("background", $(el).parent().attr("data-background"));
    console.log("set body background to " + $(el).parent().attr("data-background"));
});

console.log("js load success");
