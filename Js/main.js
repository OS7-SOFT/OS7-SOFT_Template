let ourSkill_section = document.getElementById("our-skill");

let spanProgress = document.querySelectorAll(".prog span");
let spanCount = document.querySelectorAll("h4 span");

function ShowSpanCount() {
  spanCount.forEach((span) => {
    span.style.display = "block";
  });
}
window.onscroll = function () {
  if (window.scrollY >= ourSkill_section.offsetTop - 300) {
    spanProgress.forEach((span) => {
      span.style.width = span.dataset.width;
    });
    setTimeout(ShowSpanCount, 1000);
  }
};
