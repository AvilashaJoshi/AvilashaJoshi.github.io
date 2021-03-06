window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
var revealElements = document.getElementsByClassName("picture");
//Controller
var controller = new ScrollMagic.Controller();
//Get the button
var mybutton = document.getElementById("myBtn");
//Nav
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const burger = document.querySelector(".burger");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

for (var i = 0; i < revealElements.length; i++) {
  // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
    offset: 50, // start a little later
    duration: "80%",
    triggerHook: 0.9,
  })
    .setClassToggle(revealElements[i], "show") // add class toggle
    // .addIndicators({ name: "digit " + (i + 1) }) // add indicators (requires plugin)
    .addTo(controller);
}
var scene = new ScrollMagic.Scene({
  triggerElement: ".picture",
})
  .setClassToggle(".picture", "show")
  .addTo(controller);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 3000 ||
    document.documentElement.scrollTop > 3000
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
$("#myBtn").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".music--player").offset().top,
    },
    "slow"
  );
});

// Nav Hamburger open
// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("open");

//   links.forEach((link) => {
//     link.classList.toggle("fade");
//   });
//   // alert("CLick");
// });

// function navToggle(e) {
//   if (!e.target.classList.contains("active")) {
//     e.target.classList.add("active");
//     gsap.to(".line1", 0.4, { rotate: "45", y: 5, background: "black" });
//     gsap.to(".line2", 0.4, { rotate: "-45", y: -5, background: "black" });

//     gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
//     document.body.classList.add("hide");
//   } else {
//     e.target.classList.remove("active");
//     gsap.to(".line1", 0.4, { rotate: "0", y: 0, background: "black" });
//     gsap.to(".line2", 0.4, { rotate: "0", y: 0, background: "black" });
//     document.body.classList.remove("hide");
//   }
//   navLinks.classList.toggle("open");

//   links.forEach((link) => {
//     link.classList.toggle("fade");
//   });
// }
function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", 0.5, { rotate: "45", y: 5, background: "black" });
    gsap.to(".line2", 0.5, { rotate: "-45", y: -5, background: "black" });
    gsap.to("#logo", 1, { color: "black" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "black" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "black" });
    gsap.to("#logo", 1, { color: "white" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
    document.body.classList.remove("hide");
  }
}
// hamburger.addEventListener("click", navToggle);

burger.addEventListener("click", navToggle);

(function IIFE() {
  const list = [
    {
      id: 1,
      url: "../music/song1.mp3",
      author: "Damaged Paintings",
      title: "",
      cover: "../img/damagedPainting.jpg",
    },

    {
      id: 2,
      url: "../music/untoldNarratives.mp3",
      author: "Untold Narratives",
      title: "",
      cover: "../img/poems_UntoldNarratives.png",
    },

    {
      id: 3,
      url: "../music/adultAcne.mp3",
      author: "Adult Acne",
      title: "",
      cover: "../img/adult.png",
    },

    {
      id: 4,
      url: "../music/skinCare.mp3",
      author: "Skin Care",
      title: "",
      cover: "../img/poems_GenderNeutral.png",
    },

    {
      id: 5,
      url: "../music/socialMedia.mp3",
      author: "Social Media Complaint",
      title: "",
      cover: "../img/social.jpg",
    },

    {
      id: 6,
      url: "../music/perfectComposition.mp3",
      author: "A Perfect Composition",
      title: "",
      cover: "../img/perfectComposition.jpg",
    },

    {
      id: 7,
      url: "../music/instantMiracle.mp3",
      author: "Instant Miracle",
      title: "",
      cover: "../img/instantMiracle.PNG",
    },

    {
      id: 8,
      url: "../music/socialDistancing.mp3",
      author: "Social/Emotional Distancing",
      title: "",
      cover: "../img/acne.JPG",
    },

    {
      id: 9,
      url: "../music/maskNe.mp3",
      author: "Mask-Ne",
      title: "",
      cover: "../img/poems_MaskNe.png",
    },
  ];

  let currentId = 0;
  let isPlaying = false;
  let isLoop = true;
  let isShuffle = false;
  let currentAudio = "music1";
  let timer = null;
  let loopOne = false;

  const currentTimeIndicator = document.querySelector(".music-time__current");
  const leftTimeIndicator = document.querySelector(".music-time__last");
  const progressBar = document.getElementById("length");
  const playBtn = document.querySelector(".play");
  const cover = document.querySelector(".cover");
  const title = document.querySelector(".music-player__title");
  const author = document.querySelector(".music-player__author");

  const loopBtn = document.getElementById("loop");
  const shuffleBtn = document.getElementById("shuffle");
  const forwardBtn = document.getElementById("forward");
  const backwardBtn = document.getElementById("backward");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const progressDiv = document.getElementById("progress");

  function play(e) {
    if (!isPlaying) {
      // console.log('play');
      e.target.src =
        "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/pause.svg";
      e.target.alt = "Pause";
      isPlaying = true;
      document.getElementById(currentAudio).play();
      showTime();
    } else {
      // console.log('pause');
      e.target.src =
        "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/play.svg";
      e.target.alt = "Play";
      document.getElementById(currentAudio).pause();
      isPlaying = false;
      clearInterval(timer);
    }
  }

  function changeBar() {
    const audio = document.getElementById(currentAudio);
    const percentage = (audio.currentTime / audio.duration).toFixed(3);
    progressBar.style.transition = "";
    // console.log(audio.currentTime);

    //set current time
    const minute = Math.floor(audio.currentTime / 60);
    const second = Math.floor(audio.currentTime % 60);
    const leftTime = audio.duration - audio.currentTime;
    currentTimeIndicator.innerHTML =
      ("0" + minute).substr(-2) + ":" + ("0" + second).substr(-2);

    //set left time
    const leftMinute = Math.floor(leftTime / 60);
    const leftSecond = Math.floor(leftTime % 60);

    leftTimeIndicator.innerHTML =
      ("0" + leftMinute).substr(-2) + ":" + ("0" + leftSecond).substr(-2);

    //set time bar
    progressBar.style.width = percentage * 100 + "%";
  }

  function showTime() {
    timer = setInterval(() => changeBar(), 500);
  }

  function nextMusic(mode) {
    playBtn.src =
      "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/play.svg";
    playBtn.alt = "Play";
    document.getElementById(currentAudio).pause();
    isPlaying = false;
    clearInterval(timer);

    if (mode === "next") {
      currentId = currentId + 1 > list.length - 1 ? 0 : currentId + 1;
      init();
    } else {
      currentId = currentId - 1 < 0 ? list.length - 1 : currentId - 1;
      init();
    }
  }

  function shuffle(e) {
    isShuffle = !isShuffle;
    if (isShuffle) {
      e.target.parentNode.classList.add("is-loop");
    } else {
      e.target.parentNode.classList.remove("is-loop");
    }
  }

  function backward() {
    const audio = document.getElementById(currentAudio);
    audio.currentTime -= 5;
    if (!isPlaying) {
      changeBar();
    }
  }

  function forward() {
    const audio = document.getElementById(currentAudio);
    audio.currentTime += 5;
    if (!isPlaying) {
      changeBar();
    }
  }

  function stopMusic() {
    playBtn.src =
      "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/play.svg";
    playBtn.alt = "Play";
    isPlaying = false;
  }

  function goToNextMusic() {
    let newId = currentId;
    while (isShuffle && !loopOne && newId === currentId) {
      newId = Math.floor(Math.random() * Math.floor(list.length - 1));
    }

    if (!isShuffle && !loopOne) {
      currentId = currentId + 1 > list.length - 1 ? 0 : currentId + 1;
    }
    if (!isShuffle && loopOne) {
      currentId = currentId;
    }

    if (isShuffle) {
      currentId = newId;
    }
    init();
    document.getElementById(currentAudio).play();
  }

  function loop(e) {
    const audio = document.getElementById(currentAudio);

    if (!isLoop && !loopOne) {
      isLoop = true;
      loopOne = false;
      // console.log('is loop');
      e.target.parentNode.classList.add("is-loop");
      e.target.src =
        "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/loop.svg";
      audio.loop = false;
      audio.onended = (e) => goToNextMusic();
      console.log(isLoop, loopOne);
    } else if (isLoop && !loopOne) {
      // console.log('is loop one');
      isLoop = true;
      loopOne = true;
      e.target.parentNode.classList.add("is-loop");
      e.target.src =
        "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/loopone.svg";
      audio.loop = true;
      audio.onended = (e) => goToNextMusic();
      console.log(isLoop, loopOne);
    } else {
      // console.log('not loop');
      isLoop = false;
      loopOne = false;
      e.target.parentNode.classList.remove("is-loop");
      e.target.src =
        "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/loop.svg";
      audio.loop = false;
      audio.onended = (e) => stopMusic();
      console.log(isLoop, loopOne);
    }
  }

  function progress(e) {
    const audio = document.getElementById(currentAudio);
    //get current position and minus progress bar's x position to get current position in progress bar
    const pos =
      (e.pageX - progressDiv.getClientRects()[0].x) /
      progressDiv.getClientRects()[0].width;
    audio.currentTime = pos * audio.duration;
    changeBar();
  }

  function init() {
    //reset music duration and setup audio
    const audio =
      document.getElementById(currentAudio) === null
        ? new Audio()
        : document.getElementById(currentAudio);
    audio.src = list[currentId].url;
    audio.id = currentAudio;
    document.getElementById(currentAudio) === null
      ? document.body.appendChild(audio)
      : "";

    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
    document.getElementById(currentAudio).currentTime = 0;

    title.innerHTML = list[currentId].title;
    author.innerHTML = list[currentId].author;
    cover.src = list[currentId].cover;

    //set current time
    audio.addEventListener("loadedmetadata", function () {
      const leftMinute = Math.floor(audio.duration / 60);
      const leftSecond = Math.floor(audio.duration % 60);
      currentTimeIndicator.innerHTML = "00:00";
      leftTimeIndicator.innerHTML =
        ("0" + leftMinute).substr(-2) + ":" + ("0" + leftSecond).substr(-2);
      progressBar.style.transition = "";
    });

    //set loop
    document.getElementById(currentAudio).onended = (e) => goToNextMusic(e);
  }

  playBtn.addEventListener("click", play);
  loopBtn.addEventListener("click", loop);

  shuffleBtn.addEventListener("click", shuffle);
  forwardBtn.addEventListener("click", forward);
  backwardBtn.addEventListener("click", backward);

  prevBtn.addEventListener("click", (e) => nextMusic("prev"));
  nextBtn.addEventListener("click", (e) => nextMusic("next"));
  progressDiv.addEventListener("click", (e) => {
    progress(e);
  });

  init();
})();

setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 3000);
