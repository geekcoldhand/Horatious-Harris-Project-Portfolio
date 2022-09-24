const projectTarget = document.getElementById("projects");
const allCards = document.querySelectorAll(".my-card");

//get all cards and assign them left or right "show" class
function showLeftRight(card) {
  let flipSwitch = 0;
  if (flipSwitch % 2 === 0) card.target.classList.add("show-card-right");
  if (flipSwitch % 2 !== 0) card.target.classList.add("show-card-left");
  console.log(flipSwitch);
  flipSwitch++;
}

let options = {
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("isIntersecting: ", entry.isIntersecting);

    if (entry.isIntersecting) {
      entry.target.classList.remove("hide-card");
      entry.target.classList.add("show-card-right");
    }
  });
  console.log("entries Intersecting: ", entries);
}, options);

allCards.forEach((card) => observer.observe(card));
