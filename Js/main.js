let ourSkill_section = document.getElementById("our-skill");

let spanProgress = document.querySelectorAll(".prog span");
let spanCount = document.querySelectorAll("h4 span");

let scrollUp = document.querySelector(".scroll-up");

function ShowSpanCount() {
  spanCount.forEach((span) => {
    span.style.opacity = 1;
  });
}
window.onscroll = function () {
  if (window.scrollY >= ourSkill_section.offsetTop - 300) {
    spanProgress.forEach((span) => {
      span.style.width = span.dataset.width;
    });
    setTimeout(ShowSpanCount, 1000);
  }

  if (window.scrollY >= 1000) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
};

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
