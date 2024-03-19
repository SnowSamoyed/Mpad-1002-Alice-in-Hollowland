//Scrollbar -----------------------------------------------------------------------
let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%"
}



// hero page ------------------------------------------------------------
let heroMoon = document.getElementById("moon");
let title = document.getElementById("title");
let pageScrollHtml = document.querySelector("html");
let pageScrollBody = document.querySelector("body");
heroMoon.addEventListener("click", function (e) {
    heroMoon.style.transform = 'scale(0.8)';
    const checkpoint = 100;
    const currentSize = 100;
    heroMoon.style.width = "30%";
    heroMoon.style.width = "30%";
    heroMoon.style.transition = "all 2s linear";
    
    // heroMoon.style.filter = 'brightness(0%)';
    title.style.animation = "fadeIn 2s";
    title.style.opacity = "100%";
    pageScrollHtml.style.overflow = "visible";
    pageScrollBody.style.overflow = "visible";
    console.log("moon clicked");
});

// title
const checkpoint = 300;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".title-container").style.opacity = opacity;
  document.querySelector(".title-container").style.height = "10rem";

  document.querySelector("h2").style.opacity = "100%";
  document.querySelector("h2").style.transition = "all 2s linear";
});

//prologue and all chapter title