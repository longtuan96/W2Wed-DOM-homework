console.log("Hello JS!");

window.onload = runAfterPageload;
function runAfterPageload() {
  after3Sec();
  countAfterload();
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
let count = 0;

// window.onload = countAfterload();
function countAfterload() {
  setInterval(counting(), 1000);
}

function counting() {
  document.getElementById("change-count").innerHTML = count;
  count++;
}
