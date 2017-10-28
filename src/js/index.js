inView(".title").on("enter", (el) => {
    $("body").css("background", $(el).parent().attr("data-background"));
    console.log("set body background to " + $(el).parent().attr("data-background"));
});

console.log("js load success");

var options = {
    strings: ["> Web developer", "> Car enthusiast", "> Freelancer", "> Entrepreneur"],
    typeSpeed: 60,
    shuffle: true,
    backDelay: 1550,
    smartBackspace: true,
    loop: true,
    showCursor: false,
    backSpeed: 30
}

var typed = new Typed(".sub-title", options);
