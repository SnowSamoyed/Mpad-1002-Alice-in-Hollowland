

// hero page ------------------------------------------------------------
let heroMoon = document.getElementById("moon")
let title = document.getElementById("title")
heroMoon.addEventListener("click", function (e) {
    heroMoon.style.transform = 'scale(0.4)';
    // heroMoon.style.filter = 'brightness(0%)';
    title.style.animation = "fadeIn 5s";
    title.style.opacity = "100%";
    console.log("moon clicked")
})