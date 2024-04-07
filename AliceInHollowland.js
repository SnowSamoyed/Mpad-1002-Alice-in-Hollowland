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

const observer1 = new IntersectionObserver((entries)=>{
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
          entry.target.classList.add('showText');    
      } else {
          entry.target.classList.remove('showText');
      }

  });
});
const hiddenText = document.querySelectorAll ('.hidden')
hiddenText.forEach((el)=> observer1.observe(el));

const observer2 = new IntersectionObserver((entries)=>{
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
          entry.target.classList.add('showTitle');    
      } else {
          entry.target.classList.remove('showTitle');
      }

  });
});
const hiddenTitle = document.querySelectorAll ('.chapter-title')
hiddenTitle.forEach((el)=> observer2.observe(el));
const hiddenPanel = document.querySelectorAll ('.panel')
hiddenPanel.forEach((el)=> observer2.observe(el));

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

const observer3 = new IntersectionObserver((entries)=>{
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
          entry.target.classList.add('current');    
          console.log("list current");
      } else {
          entry.target.classList.remove('current');
      }

  });
});

let chapterList = document.getElementById("chapter-list-content");
// for (let i = 0; i< chapterList.length; i++){
//   chapterList[i].forEach((el)=> observer3.observe(el));
// }

let active = false;
callChapter.addEventListener("click", function(e){
  console.log("chapter clicked");
  active = !active
    if (active) {
        chapterList.classList.add('active');
        // chapterList.style.animation = "fadeIn 1s";
        chapterList.style.opacity = 1;

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
const chapterTitle = document.querySelectorAll(".chapter-title")
  // for(var x = 0; x < chapterTitle.length; x++){
  //   chapterTitle[x].style.opacity = 1;
  //   chapterTitle[x].style.transition = "all 2s linear";
  // }
chapterTitle.forEach((el)=> observer.observe(el));

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }

  mainTitleBox = document.querySelector(".title-container")
  mainTitleBox.style.opacity = 1;
  mainTitleBox.style.height = "10rem";

  
  
  // console.log("title opacity 100%");
});

//prologue and all chapter title


// let prologueEnd = document.getElementById("prologue-p6");
// prologueEnd.addEventListener("scroll", function(e){

// });
