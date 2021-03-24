console.log("Hello JS!");

window.onload = runAfterPageload;
function runAfterPageload() {
  after3Sec();
  countAfterload();
  changeColor3Sec();
}

//Please change me after 3 sec
// window.onload = after3Sec(); //run after the page load
function after3Sec() {
  setTimeout(changeHTML, 3000);
}
function changeHTML() {
  document.getElementById("change-text").innerHTML = "Hello Change!";
}

//Increment the count in the next box every second

//console.log(divCountEverySecond.innerHTML);
// window.onload = countAfterload();
//counting
function countAfterload() {
  setInterval(counting, 1000);
}
let autoCount = 1;
function counting() {
  const divCountEverySecond = document.getElementById("change-count");
  document.getElementById("change-count").innerHTML = autoCount;
  autoCount++;
  //console.count();
}

//Change color every 3 seconds

function changeColor3Sec() {
  setInterval(changeColor, 3000);
}
function changeColor() {
  const divChangeColor3sec = document.getElementById("change-color");
  const color = ["red", "yellow", "green", "blue", "orange", "pink", "white"];
  let choosenColor = getRandomItem(color);
  divChangeColor3sec.style.backgroundColor = choosenColor;
}

//click count
const divClickCount = document.getElementById("change-click");
divClickCount.onclick = function () {
  countClick();
};
let clickCount = 1;
function countClick() {
  divClickCount.innerHTML = clickCount;
  clickCount++;
}

//hover count
const divHoverCount = document.getElementById("change-hover");
divHoverCount.onmouseover = function () {
  hoverCount();
};
let countHover = 1;
function hoverCount() {
  divHoverCount.innerHTML = countHover;
  countHover++;
}

//Toggle between he loves me and he loves me not between clicks
const divToggle = document.getElementById("change-he-loves-me");

divToggle.onclick = function () {
  toggleLove();
};

function toggleLove() {
  if (divToggle.innerHTML == "he loves me ") {
    divToggle.innerHTML = "he loves me not";
  }
  if (divToggle.innerHTML == "he loves me not") {
    divToggle.innerHTML = "he loves me";
  } else {
    divToggle.innerHTML = "he loves me not";
  }
}

//Show the time right now when I'm clicked!
const divClickTime = document.getElementById("change-to-current-date");
divClickTime.onclick = function () {
  clickTime();
};
function clickTime() {
  let currentDate = new Date();
  divClickTime.innerHTML = currentDate;
}
