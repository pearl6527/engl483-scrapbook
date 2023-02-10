const max = 4;
const min = 2;

const max1 = 0.5;
const min1 = 0.05;
// window.onload = startDisplay();
var displayOn = false;

function startDisplay() {
  let boxes = document.getElementsByClassName("box");
  for (const box of boxes) {
    updateDisplay(box);
  }  
}
function updateDisplay(elem) {

  const indices = elem.id.split("-");
  const item = CORR[indices[0]][indices[1]][indices[2]];
  // console.log(item);
  // if (elem.innerHTML === item.word && Math.random() < 0.5) {
  //   setTimeout(updateDisplay, generateRandTime(true), elem);
  //   return;
  // }

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
    setTimeout(updateDisplay, randTime, elem);
  }
}

function generateRandTime(long) {
  if (long) {
    return (Math.random() * (max - min) + min) * 1000;
  } else {
    return (Math.random() * (max1 - min1) + min1) * 1000;
  }
  
}
