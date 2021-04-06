document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

var revealElements = document.getElementsByClassName("picture");

var controller = new ScrollMagic.Controller();

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

//Get the button
var mybutton = document.getElementById("myBtn");

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
