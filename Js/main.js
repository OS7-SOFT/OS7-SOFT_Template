let ourSkill_section = document.getElementById("our-skill");

let spanProgress = document.querySelectorAll(".prog span");

window.onscroll = function () {
  if (window.scrollY >= ourSkill_section.offsetTop - 300) {
    spanProgress.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
