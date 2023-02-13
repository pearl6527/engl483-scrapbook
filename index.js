const max = 4.5;
const min = 2.5;

const max1 = 0.5;
const min1 = 0.01;

var displayOn = false;
var changed = false;
var timeouts = [];

window.onload = setupHover;

// set up change-on-hover for each "box" element
function setupHover() {
  let boxes = document.getElementsByClassName("box");
  for (const elem of boxes) {
    elem.addEventListener("mouseover", (e) => {
      setNewItem(elem);
      if (!displayOn && changed) {
        document.getElementById("startButton").innerHTML = "reset";
      }
    })
  }
}

// select and set representation of a given "box" element
function setNewItem(elem) {
  const indices = elem.id.split("-");
  const item = CORR[indices[0]][indices[1]][indices[2]];
  let randIdx = Math.floor(Math.random() * item.list.length);
  let long = false;
  if (item.list[randIdx] === item.word) {
    if (Math.random() < 0.3) {
      elem.classList.add("white");
      elem.classList.remove("redacted");
      changed = true;
    } else {
      elem.classList.add("redacted");
      elem.classList.remove("white");
      // long = true;
    }
    long = true;
  } else {
    elem.classList.remove("redacted");
    elem.classList.remove("white");
    changed = true;
  }
  elem.innerHTML = item.list[randIdx];
  return long;
}

// begin random display
function startDisplay() {
  let boxes = document.getElementsByClassName("box");
  for (const box of boxes) {
    updateDisplay(box);
  }
  updateTitle();
}

// update given "box" element
function updateDisplay(elem) {
  const indices = elem.id.split("-");
  const item = CORR[indices[0]][indices[1]][indices[2]];
  // console.log(item);
  if (elem.innerHTML === item.word && elem.classList.contains("redacted") && Math.random() < 0.7) {
    setTimeout(updateDisplay, generateRandTime(Math.random() < 0.5 ? true : false), elem);
    return;
  }
  if (elem.innerHTML === item.word && !displayOn) {
    return;
  }
  let long = setNewItem(elem);

  let randTime = generateRandTime(long);
  if (displayOn) {
    setTimeout(updateDisplay, randTime, elem);
  }
}

// reset all "box" elements to default representation
function resetDisplay() {
  let boxes = document.getElementsByClassName("box");
  for (const box of boxes) {
    const indices = box.id.split("-");
    const item = CORR[indices[0]][indices[1]][indices[2]];
    box.classList.add("redacted");
    box.classList.remove("white");
    box.innerHTML = item.word;
  }
  changed = false;
}

// set changing title
function updateTitle() {
  let newTitle = "";
  const items = CORR["title"];
  for (const item of items) {
    let randIdx = Math.floor(Math.random() * item.list.length);
    newTitle += item.list[randIdx] + " ";
  }
  if (Math.random() < 0.4) {
    list = CORR["title"][CORR["title"].length - 1].list;
    let randIdx = Math.floor(Math.random() * list.length);
    newTitle = list[randIdx] + " " + newTitle;
  }
  document.title = newTitle;
  // document.getElementById("poemTitle").innerHTML = newTitle;
  if (displayOn) {
    setTimeout(updateTitle, generateRandTime(false));
  }
}

// generate random time (ms)
function generateRandTime(long) {
  if (long) {
    return (Math.random() * (max - min) + min) * 1000;
  } else {
    return (Math.random() * (max1 - min1) + min1) * 1000;
  }
  
}
