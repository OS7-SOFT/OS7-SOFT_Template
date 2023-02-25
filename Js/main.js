let ourSkill_section = document.getElementById("our-skill");
let spanProgress = document.querySelectorAll(".prog span");
let spanCount = document.querySelectorAll("h4 span");

let scrollUp = document.querySelector(".scroll-up");

let otherLink = document.querySelector("#other");
let megaMenu = document.querySelector(".mega-menu");

let servicesSection = document.getElementById("service");
let boxServices = document.querySelectorAll(".service .box");

let workStepSection = document.getElementById("work-steps");
let boxWork = document.querySelectorAll(".work-steps .box");

let stats_section = document.getElementById("stats");
let nums = document.querySelectorAll(".stats .number");
let c = 0;

window.onscroll = function () {
  if (window.scrollY >= ourSkill_section.offsetTop - 300) {
    spanProgress.forEach((span) => {
      span.style.width = span.dataset.width;
    });
    setTimeout(ShowSpanCount, 1000);
  }

  if (window.scrollY >= servicesSection.offsetTop - 100) {
    boxServices.forEach((box) => {
      box.classList.remove("right");
      box.classList.remove("left");
    });
  }

  if (window.scrollY >= workStepSection.offsetTop) {
    boxWork.forEach((box) => {
      box.style.cssText = "transform: scale(1); opacity:1;";
    });
  }

  if (window.scrollY >= 1000) {
    megaMenu.classList.remove("open");

    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
};

//Scroll to top
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//Open menu other links
otherLink.addEventListener("click", () => {
  megaMenu.classList.toggle("open");
  megaMenu.classList.toggle("in-top");
});

function ShowSpanCount() {
  spanCount.forEach((span) => {
    span.style.opacity = 1;
  });
}
