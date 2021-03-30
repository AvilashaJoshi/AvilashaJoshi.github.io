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
