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
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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
      scrollTop: $(".page-section").offset().top,
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
