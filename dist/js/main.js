let x = [];
let o = [];
let buttonTextX = "X";
let buttonTextO = "O";
let counter = 2;
let buttons = document.getElementsByClassName("space");
let message = document.getElementById('message');

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    document.getElementById('restartButton').onclick = start;
    start();
  }
};

function start() {
  // Create event listeners on every button
  counter = 2;
  x = [];
  o = [];

  message.innerHTML = "It's X's turn";
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = '';
    buttons[i].addEventListener("click", Move);
  }
}

function Move(event) {

  let box = event.target;
  counter++;
  if (counter % 2 == 1) {
    xTurn(box);
  } else {
    oTurn(box);
  }
}
function xTurn(box) {
  x.push(box.id);
  //read x input
  box.innerHTML = buttonTextX;
  box.removeEventListener('click', Move);
  checkXWin(box);
  if (checkOWin == true) {
    message.innerHTML("O Won!");
    removeClicksFromSpaces();
  } else {}
}

function oTurn(box) {
  o.push(box.id);
  box.innerHTML = buttonTextO;
  box.removeEventListener('click', Move);
  checkOWin(box);
  if (checkOWin == true) {
    message.innerHTML("O Won!");
    removeClicksFromSpaces();
  } else {
    message.innerHTML = "It's X's Turn";
  }
}

function checkXWin(box) {
  if (x.includes("1") && x.includes("2") && x.includes("3") || x.includes("4") && x.includes("5") && x.includes("6") || x.includes("7") && x.includes("8") && x.includes("9") || x.includes("1") && x.includes("4") && x.includes("7") || x.includes("2") && x.includes("5") && x.includes("8") || x.includes("3") && x.includes("6") && x.includes("9") || x.includes("1") && x.includes("5") && x.includes("9") || x.includes("3") && x.includes("5") && x.includes("7")) {
    console.log("You're in x win");
    message.innerHTML = "X Won.";
    removeClicksFromSpaces();
  } else {
    message.innerHTML = "It's O's Turn";
  }
}

function checkOWin(box) {
  if (o.includes("1") && o.includes("2") && o.includes("3") || o.includes("4") && o.includes("5") && o.includes("6") || o.includes("7") && o.includes("8") && o.includes("9") || o.includes("1") && o.includes("4") && o.includes("7") || o.includes("2") && o.includes("5") && o.includes("8") || o.includes("3") && o.includes("6") && o.includes("9") || o.includes("1") && o.includes("5") && o.includes("9") || o.includes("3") && o.includes("5") && o.includes("7")) {
    console.log("You're in y win");
    message.innerHTML = "O Won.";
    removeClicksFromSpaces();
  } else {
    message.innerHTML = "It's X's Turn";
  }
}

function removeClicksFromSpaces() {
  //let buttons = document.getElementsByClassName("space");
  for (let i = 0; i < buttons.length; i++) {
    console.log("you are in remove clicks");
    buttons[i].removeEventListener('click', Move);
  }
}