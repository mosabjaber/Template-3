// get data in event section
let countDownDate = new Date("Dec 31, 2026 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

//Animate Width On Scrolling In Skills section

let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".prog span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.wid;
    });
  }
};

//Increase Numbers On Scrolling

let stats = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .number");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (scrollY >= stats.offsetTop + -100) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let counter2 = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter2);
    }
  }, 2000 / goal);
}

//Create Page Scroll Progress
let scroller = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

//scroll up
let scrl = document.querySelector(".up");
window.onscroll = () => {
  if (window.scrollY >= 900) {
    scrl.style.display = "block";
  } else {
    scrl.style.display = "none";
  }
};
scrl.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
