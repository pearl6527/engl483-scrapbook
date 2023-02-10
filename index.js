
const max = 2;
const min = 0.1;
function display(stanza, line, item) {

}

window.onload = startDisplay();


function startDisplay() {
  let boxes = document.getElementsByClassName("box");
  for (const box of boxes) {
    updateDisplay(box);
  }  
}
function updateDisplay(elem) {
  // var elem = document.getElementById(id);
  const indices = elem.id.split("-");
  const item = CORR[indices[0]][indices[1]][indices[2]];
  // console.log(item);
  let randIdx = Math.floor(Math.random() * item.list.length);
  if (item.list[randIdx] === item.word) {
    elem.classList.add("redacted");
  } else {
    elem.classList.remove("redacted");
  }
  elem.innerHTML = item.list[randIdx];

  let randTime = generateRandTime();
  while (randTime < 0.7) {
    if (Math.random() < 0.5) {
      randTime = generateRandTime()
    } else {
      break;
    }
  }
  // console.log(randTime)

  setTimeout(updateDisplay, randTime, elem);
}

function generateRandTime() {
  return (Math.random() * (max - min) + min) * 1000;
}
