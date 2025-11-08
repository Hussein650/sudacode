
let progress = document.querySelectorAll(".prog span");
let section = document.querySelector(".skills");

let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 400) {
    progress.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
  started = true;
};
