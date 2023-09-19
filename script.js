var tl = gsap.timeline();
var loadNum = 0; // Initialize the load-num variable

function increaseLoad() {
  if (loadNum < 100) {
    loadNum += Math.floor(Math.random() * 2);
    if (loadNum > 100) {
      loadNum = 100; // Ensure loadNum does not exceed 100
    }
  }

  const wid = document.querySelector(".loader-box");
  const percentage = loadNum + "%";
  wid.style.width = loadNum / 2.5 + "%";
  document.querySelector("#loader h1").innerHTML = percentage;

  if (loadNum < 100) {
    requestAnimationFrame(increaseLoad); // Continue the animation if loadNum is not 100%
  }
}

tl.to("#loader h1", {
  delay: 0.5,
  duration: 1,
  onStart: increaseLoad, // Call the function to increase loadNum gradually
});
tl.to(".loader-box", {
  delay: 0.5,
  duration: 1,
  ease: "power1.inOut", // Use an ease function for smoother animation
});
tl.to("#loader", {
  top: "-100vh",
  delay: 1,
  duration: 1.5,
  onComplete: startScrollReveal,
});

function startScrollReveal() {
const sr = ScrollReveal({
  duration: 900,
  delay: 100,
  distance: "20px",
  easing: "ease-in-out",
  origin: "bottom",
});

const elementsToReveal = [
  { selector: ".nav", origin: "bottom" },
  { selector: ".left-page1", origin: "left" },
  { selector: ".right-page1", origin: "right" },
  { selector: ".page-2-heading", origin: "left" },
  { selector: ".page-2-content", origin: "right" },
];

elementsToReveal.forEach((element) => {
  sr.reveal(element.selector, element);
});

}

