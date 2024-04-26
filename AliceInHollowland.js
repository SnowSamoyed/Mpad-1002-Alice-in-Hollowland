


//Scrollbar -----------------------------------------------------------------------
let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 80; /* @Change the 100 at the end for the scroll bar to not go off */
    progress.style.height = progressHeight + "%";
}


// hero page ------------------------------------------------------------
const heroMoon = document.getElementById("moon");
const title = document.getElementById("title");
const pageScrollHtml = document.querySelector("html");
const pageScrollBody = document.querySelector("body");

//ui that always stay on the page
const settings = document.getElementById("footer-settings");
const callChapter = document.getElementById("chapter-button");
callChapter.style.opacity = 0; 
// if (callChapter == null){
//   console.log(callChapter)
// }

// A bunch of observers for the animation of showing up----------------
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

const flowInText = document.querySelectorAll ('.flowInText')
flowInText.forEach((el)=> observer1.observe(el));

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
    title.style.animation = "fadeIn 7s";
    title.style.opacity = "100%";

    pageScrollHtml.style.overflow = "visible";
    pageScrollBody.style.overflow = "visible";

    settings.style.bottom = "0";
    settings.style.right = "0";
    settings.style.animation = "fadeIn 3s";

    callChapter.style.opacity = 100; 
  
    console.log("my opacity is", settings.style.opacity);
    console.log("my width is", settings.style.width);
    
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
});

// title ///////////////////////////////////////////////////////////////////
const checkpoint = 300;
const chapterTitle = document.querySelectorAll(".chapter-title")
  // for(var x = 0; x < chapterTitle.length; x++){
  //   chapterTitle[x].style.opacity = 1;
  //   chapterTitle[x].style.transition = "all 2s linear";
  // }
chapterTitle.forEach((el)=> observer1.observe(el));

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

// Chage backround per chapter ///////////////////////////////////////////////////

// $(window).scroll(function(){
//   var wScroll = $(this).scrollTop();

// if(wScroll >= $('h2').offset().top - ($(window).height() / 1.2 ) ){
//   $("body").css("background-image", "url(./backrounds/chapter-1-back.png)");
// }else{
//   $("body").css("background-color", "white");
// }

// });


// Display the chapters!
// let unlockChapter_1 = document.getElementById("click");
//         toggle.addEventListener("click", show);

//         function show() {
//             let p = document.getElementsByTagName("p")[0].style.display = "block";
//         }


// Alice run activity //////////////////////////////////////////////////////////////////////

// const runProgress = document.getElementById("run-progress");
// let progressValue = runProgress.getAttribute("value");

/* @put it back later */
const afterRun = document.querySelectorAll(".after-run");
const chapter2Link = document.querySelector("#chapter-2-link");
const chapter3Link = document.querySelector("#chapter-3-link");
const runSound = new Audio('./sounds/ch2-running.mp3');
// runProgress.addEventListener("click", showChapter);

const value = document.querySelector("#value");
const input = document.querySelector("#run-progress");
value.textContent = input.value;

input.addEventListener("click", (event) => {
  runSound.play();
})

input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
  console.log(value.textContent);
  if (value.textContent == "100"){
    console.log("she's there");
    chapter2Link.innerHTML ="2";
    // runSound.play();
    for (let i = 0; i < afterRun.length; i++) {
      afterRun[i].setAttribute("class", "reveal");
    }
  }
});

function showChapter() {
  console.log(progressValue);
}


/////Run ends


// Tea party activity

const aliceSpill = document.getElementById("alice-spill-act");
const afterSpill = document.querySelectorAll(".after-spill");
const spillStregth = document.getElementById("spill-strength");
const splashSound = new Audio('./sounds/ch2-splash-sound.wav');
const cupSound = new Audio('./sounds/ch2-cup-break.mp3');

let counter = 0;


aliceSpill.addEventListener("click", (event) => {
  counter = counter + 1;
  if(counter == 1){
    spillStregth.innerHTML = "25%";
  }

  if(counter == 2){
    spillStregth.innerHTML = "50%";
  }

  if(counter == 3){
    spillStregth.innerHTML = "75%";
  }


  if (counter == 4){
    for (let i = 0; i < afterRun.length; i++) {
      afterSpill[i].setAttribute("class", "reveal");
    }
    spillStregth.innerHTML = "100%";
    aliceSpill.setAttribute("src", "./images/splash.webp");
    splashSound.play();
    cupSound.play();
    chapter3Link.innerHTML = "3";
    resize();
    console.log("tea clicked 5 times");
  }
});

var flag = true;
function resize() {
    if(flag) {
      aliceSpill.style.width = "40rem";
    } else {
      aliceSpill.style.width = "10rem";
    }
    (flag)?flag=false:flag=true;
} 




// Change scroll direction after run ////////////////////////////////
// document.addEventListener('DOMContentLoaded', function(){
//   var scroller = document.getElementById('view-area');
//   var sectionContainer = document.getElementById('section-container');
//   var lastIndex = 0;
//   var indexArray = [
//     {x:0, y:0, horizontal: false},
//     {x:0, y:1, horizontal: true},
//     {x:1, y:1, horizontal: false},
//     {x:0, y:2, horizontal: false}
//   ];
//   var maxRows = 3;
//   var maxCols = 2;

//   //https://gist.github.com/gre/1650294
//   var easeInQuad = function (t) { return t*t };
//   var easeInCubic = function (t) { return t*t*t }

//   var handleScroll = function (e) {
//     var doc = document.documentElement;
//         var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

//         var index = Math.floor(top / window.innerHeight);
//         var percent = 1 / window.innerHeight *  (top - (window.innerHeight * index));
//         var	percentEasing = easeInCubic(percent);

//         $('section').removeClass('active');
//         $('section').eq(index).addClass('active');
//         $('section').eq(index+1).addClass('active');

//         if (index != lastIndex) {
//           lastIndex = index;
//           sectionContainer.style.transform = 'translate(0,0)';
//           console.log('activate: ', index);
//         }

//         if (indexArray[index].horizontal === false) {
//           sectionContainer.style.transform = 'translate(0,-'+( 50 * percentEasing) +'%)';
//         } else {
//       sectionContainer.style.transform = 'translate(-'+( 50 * percentEasing) +'%, 0)';
//         }
//       };

//       document.addEventListener('scroll', handleScroll);

//       // This is the magic, this gives me "live" scroll events
//       document.addEventListener('gesturechange', handleScroll);
// });


// Choice to display Endings //////////////////////////////////////////////////////
const ending_1 = document.getElementById("ending-1");
const ending_1_icon = document.getElementById("choice-img-1");
const ending_1_iconLink = document.querySelector("#ending-1-link");
const choiceBox_1 = document.querySelector("#choiceBox-1");
ending_1_icon.addEventListener("click", toggleEnding1);

function toggleEnding1() {
  if (ending_1.classList.contains("reveal")) {
    ending_1_iconLink.innerHTML ="?";
    ending_1.setAttribute("class", "endings");  
  } else if(ending_1.classList.contains("endings")) {
    ending_1_iconLink.innerHTML ="I";
    ending_1.setAttribute("class", "reveal"); 
  }
}

// --------------------------------------------------
const ending_23 = document.getElementById("ending-2/3");
const ending_23_icon = document.getElementById("choice-img-2");
const ending_23_iconLink = document.querySelector("#ending-2-link");
const choiceBox_2 = document.querySelector("#choiceBox-2");
ending_23_icon.addEventListener("click", toggleEnding23);

function toggleEnding23() {
  if (ending_23.classList.contains("reveal")) {
    ending_23.setAttribute("class", "endings");  
    choiceBox_2.setAttribute("class", "endings");
  } else if(ending_23.classList.contains("endings")) {
    ending_23.setAttribute("class", "reveal"); 
    choiceBox_2.setAttribute("class", "reveal");
  }
}

// --------------------------------------------------
const ending_2 = document.getElementById("ending-2");
const ending_2_icon = document.getElementById("choice-img-3");
const ending_2_iconLink = document.querySelector("#ending-2-link");
ending_2_icon.addEventListener("click", toggleEnding2);

function toggleEnding2() {
  if (ending_2.classList.contains("reveal")) {
    ending_2_iconLink.innerHTML ="?";
    ending_2.setAttribute("class", "endings");  
  } else if(ending_2.classList.contains("endings")) {
    ending_2_iconLink.innerHTML ="II";
    ending_2.setAttribute("class", "reveal"); 
  }
}

// --------------------------------------------------
const ending_3 = document.getElementById("ending-3");
const ending_3_icon = document.getElementById("choice-img-4");
const ending_3_iconLink = document.querySelector("#ending-3-link");
ending_3_icon.addEventListener("click", toggleEnding3);

function toggleEnding3() {
  if (ending_3.classList.contains("reveal")) {
    ending_3_iconLink.innerHTML ="?";
    ending_3.setAttribute("class", "endings");  
  } else if(ending_3.classList.contains("endings")) {
    ending_3_iconLink.innerHTML ="III";
    ending_3.setAttribute("class", "reveal"); 
  }
}


// settings /////////////////////////////////////////////////////////////
// sound -----------------------------------------------------------
// const soundIcon = document.getElementById("sound-icon");
// let isSound = true;

// function stopSound(){
//   window.MutationRecord;
// }

// function enbleSound(){

// }

// soundIcon.addEventListener('click', function() {
//   if (isSound) {
//     stopSound();
//     // this.textContent = 'Start Auto-Scroll';
//     // this.innerHTML = '<img src="./icons/autoscroll-dash.png" alt="Start Auto-Scroll">';
//     this.setAttribute("src", "./icons/sound-dash.png")
//     console.log("stopSound");
//   } else {
//     enbleSound();
//     // this.textContent = 'Stop Auto-Scroll';
//     // this.setAttribute = '<img src="./icons/autoscroll.png" alt="Stop Auto-Scroll">';
//     this.setAttribute("src", "./icons/sound.png")
//     console.log("sound");
//   }
//   isSound = !isSound; // Toggle the state
// });





// Autoscroll --------------------------------------------------------
// @put it back later!
let autoScrollInterval;
let isScrolling = false; // Define isScrolling as a global variable
let isDebouncing = false;

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    if (!isDebouncing) {
      isDebouncing = true;
      window.scrollBy(0, 1); // Adjust scroll speed
      setTimeout(() => {
        isDebouncing = false;
      }, 10); // Adjust debounce time as needed
    }
  }, 10); // Adjust interval for desired scroll speed
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

document.getElementById('autoscroll-icon').addEventListener('click', function() {
  if (isScrolling) {
    stopAutoScroll();
    // this.textContent = 'Start Auto-Scroll';
    // this.innerHTML = '<img src="./icons/autoscroll-dash.png" alt="Start Auto-Scroll">';
    this.setAttribute("src", "./icons/AutoScroll_Act.png")
    console.log("stop");
  } else {
    startAutoScroll();
    // this.textContent = 'Stop Auto-Scroll';
    // this.setAttribute = '<img src="./icons/autoscroll.png" alt="Stop Auto-Scroll">';
    this.setAttribute("src", "./icons/ManualScrolling.png")
    console.log("scroll");
  }
  isScrolling = !isScrolling; // Toggle the state
});


// fullscreen ////////////////////////////////////////////////////////
const fullscreenButton = document.getElementById("fullscreen-icon");
let isFullscreen = false;

fullscreenButton.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
  if (!isFullscreen) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
      document.documentElement.msRequestFullscreen();
    }
    isFullscreen = true;
    fullscreenButton.setAttribute("src", "./icons/fullscreen-dash.png")
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
    isFullscreen = false;
    fullscreenButton.setAttribute("src", "./icons/fullscreen.png")
  }
}

