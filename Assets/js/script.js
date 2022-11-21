//hero
const heroText = document.getElementById("hero-text");
const heroBox = document.getElementById("hero-box");
//projects
const projectTarget = document.getElementById("projects");
const allCards = document.querySelectorAll(".my-card");

//hero animations
const content = "hi, Horatious Harris here";
// grab each individual letter
let render = $("<span>" + content.split("").join("</span><span>") + "</span>");

render
  .hide()
  .addClass("intro")
  .appendTo(heroText)
  .each(function (i) {
    console.log("the this", $(this)[0].textContent);
    if ($(this)[0].textContent === "H") {
      $(this)
        .delay(100 * i)
        .css({
          display: "block",
          opacity: 0,
        })
        .animate(
          {
            opacity: 1,
          },
          100
        );
    } else {
      $(this)
        .delay(100 * i)
        .css({
          display: "inline",
          opacity: 0,
        })
        .animate(
          {
            opacity: 1,
          },
          100
        );
    }
  });

// for observer obj
let options = {
  rootMargin: "0px",
  // % on the screen until it animates
  threshold: 0.5,
};
// for projects animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log("isIntersecting: ", entry.isIntersecting);

    if (entry.isIntersecting) {
      entry.target.classList.remove("hide-card");
      entry.target.classList.add("show-card-right");
    }
  });
  // console.log("entries Intersecting: ", entries);
}, options);
// loop each DOM element to access observer
allCards.forEach((card) => observer.observe(card));
