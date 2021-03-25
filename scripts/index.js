console.log("Hello JS!");

window.onload = runAfterPageload;
function runAfterPageload() {
  after3Sec();
  countAfterload();
  changeColor3Sec();
  resizeChange();
  clickAddLi();
  clickUrl();
  clickTyping();
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

//Put the windows width in my when the screen is resized
const divResizeWidth = document.getElementById("change-to-current-width");
const divResizeHeight = document.getElementById("change-to-current-height");
function resizeChange() {
  window.addEventListener("resize", function () {
    changeToCurrent();
    console.log("running");
  });
}
function changeToCurrent() {
  let widthCurrent = window.innerWidth;
  let heightCurrent = window.innerHeight;
  divResizeWidth.innerHTML = `Width: ${widthCurrent}`;
  divResizeHeight.innerHTML = `Height: ${heightCurrent}`;
}

//add a html li when i clicked
const divAddList = document.getElementById("add-list-item");
let countLi = 1;
function clickAddLi() {
  divAddList.onclick = function () {
    addNewLi();
  };
}

function addNewLi() {
  const newLi = document.createElement("li");
  let newContent = document.createTextNode(
    `this is a new Li number ${countLi}`
  );
  newLi.appendChild(newContent);
  divAddList.appendChild(newLi);
  countLi++;
}

//show website URL when clicked
const divUrl = document.getElementById("change-to-url");
function changeToUrl() {
  let urlCurrent = document.URL;
  divUrl.innerHTML = urlCurrent;
}
function clickUrl() {
  divUrl.onclick = function () {
    changeToUrl();
  };
}

//Add some typewriteing when the next box is clicked.

const divTyping = document.getElementById("type-a-sentence");
let stepTyping = 0;
let textTyping = " |haha nothing to say here";
let speedTyping = 50;

function typeWriter() {
  // console.log("hahah");
  if (stepTyping < textTyping.length) {
    divTyping.innerHTML += textTyping.charAt(stepTyping);
    console.log("here", divTyping.innerHTML);

    stepTyping++;

    setTimeout(typeWriter, speedTyping);
  } else {
    stepTyping = 0;
  }
}
function clickTyping() {
  divTyping.addEventListener("click", typeWriter);
  console.log("typing");
}
//Email sign in sign out
const buttonSignIn = document.getElementById("buttonSignIn");
const buttonSignOut = document.getElementById("buttonSignOut");
const divSignIn = document.getElementById("emailSignIn");
const divSignOut = document.getElementById("emailSignOut");
function signIn() {
  if (divSignIn.style.display === "none") {
    divSignIn.style.display = "flex";
    divSignOut.style.display = "none";
  } else {
    divSignIn.style.display = "none";
    divSignOut.style.display = "flex";
  }
}
function signOut() {
  if (divSignOut.style.display === "none") {
    divSignOut.style.display = "flex";
    divSignIn.style.display = "none";
  } else {
    divSignOut.style.display = "none";
    divSignIn.style.display = "flex";
  }
}
