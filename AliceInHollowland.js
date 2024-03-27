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

//ui that always stay on the page
let settings = document.getElementById("footer-settings");
let callChapter = document.getElementById("chapter-button");
callChapter.style.opacity = 0; 
// if (callChapter == null){
//   console.log(callChapter)
// }

heroMoon.addEventListener("click", function (e) {
    heroMoon.style.transform = 'scale(0.8)';
    const checkpoint = 100;
    const currentSize = 100;
    heroMoon.style.width = "30%";
    heroMoon.style.width = "30%";
    heroMoon.style.transition = "all 2s linear";
    
    // heroMoon.style.filter = 'brightness(0%)';
    title.style.animation = "fadeIn s";
    title.style.opacity = "100%";

    pageScrollHtml.style.overflow = "visible";
    pageScrollBody.style.overflow = "visible";

    settings.style.bottom = "0";
    settings.style.animation = "fadeIn 3s";

    callChapter.style.opacity = 100; 
  

    console.log("my opacity is", callChapter.style.opacity);
    console.log("my width is", callChapter.style.width);
    
});

let chapterList = document.getElementById("chapter-list-content");
let active = false;
callChapter.addEventListener("click", function(e){
  console.log("chapter clicked");
  active = !active
    if (active) {
        chapterList.classList.add('active');
        // chapterList.style.animation = "fadeIn 1s";
        chapterList.style.opacity = 100;

        console.log("open");
    } else {
        chapterList.classList.remove('active');
        chapterList.style.opacity = 0;

        console.log("close");
    }

  // if (chapterList.style.opacity == 0){
  //   chapterList.style.animation = "fadeIn 1s";
  //   console.log("open");
  // }
  // else if (chapterList.style.opacity == 100){
  //   chapterList.style.opacity = "0%";
  //   console.log("close");
  // }
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