const max = 4;
const min = 2.5;

const max1 = 0.5;
const min1 = 0.01;

var displayOn = false;
var timeouts = [];

window.onload = setupHover;

function setupHover() {
  let boxes = document.getElementsByClassName("box");
  for (const box of boxes) {
    box.addEventListener("mouseover", (e) => {
      const indices = box.id.split("-");
      const item = CORR[indices[0]][indices[1]][indices[2]];
      let randIdx = Math.floor(Math.random() * item.list.length);
      if (item.list[randIdx] === item.word) {
        box.classList.add("redacted");
        long = true;
      } else {
        box.classList.remove("redacted");
      }
      box.innerHTML = item.list[randIdx];
    })
  }
}

function startDisplay() {
  let boxes = document.getElementsByClassName("box");
  for (const box of boxes) {
    updateDisplay(box);
  }
  updateTitle();
  // clearTimeouts();
}
function updateDisplay(elem) {

  const indices = elem.id.split("-");
  const item = CORR[indices[0]][indices[1]][indices[2]];
  // console.log(item);
  if (elem.innerHTML === item.word && Math.random() < 0.75) {
    setTimeout(updateDisplay, generateRandTime(Math.random() < 0.5 ? true : false), elem);
    return;
  }
  if (elem.innerHTML === item.word && !displayOn) {
    return;
  }
  let randIdx = Math.floor(Math.random() * item.list.length);
  let long = false;
  if (item.list[randIdx] === item.word) {
    elem.classList.add("redacted");
    long = true;
  } else {
    elem.classList.remove("redacted");
  }
  elem.innerHTML = item.list[randIdx];

  let randTime = generateRandTime(long);
  if (displayOn) {
    var timeout = setTimeout(updateDisplay, randTime, elem);
    // timeouts.push(timeout);
  }
}
function resetDisplay() {
  let boxes = document.getElementsByClassName("box");
  for (const box of boxes) {
    const indices = box.id.split("-");
    const item = CORR[indices[0]][indices[1]][indices[2]];
    box.classList.add("redacted");
    box.innerHTML = item.word;
  }
}
// function clearTimeouts() {
//   var newTimeouts = [];
//   const n = timeouts.length;
//   for (let i = Math.floor(n / 2); i < n; i++) {
//     newTimeouts.push(timeouts[i]);
//   }
//   timeouts = newTimeouts;
//   setTimeout(clearTimeouts, 4000);
// }

function updateTitle() {
  let newTitle = "";
  const items = CORR["title"];
  for (const item of items) {
    let randIdx = Math.floor(Math.random() * item.list.length);
    newTitle += item.list[randIdx] + " ";
  }
  document.title = newTitle;
  // document.getElementById("poemTitle").innerHTML = newTitle;
  if (displayOn) {
    setTimeout(updateTitle, generateRandTime(false));
  }
}

function generateRandTime(long) {
  if (long) {
    return (Math.random() * (max - min) + min) * 1000;
  } else {
    return (Math.random() * (max1 - min1) + min1) * 1000;
  }
  
}
