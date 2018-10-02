let x = [];
let o = [];
let buttonTextX = "X";
let buttonTextO = "O";
let counter = 2;

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    alert("Welcome to Tic Tac Toe.  X will go first.  Click where you want to go.");
    start();
  }
};

function start() {
  // Create event listeners on every button
  let buttons = document.getElementsByClassName("editbtn");
  for (let i = 0; i < buttons.length; i++) {
    console.log("anything");
    buttons[i].addEventListener("click", buttonLogic);
  }
}

function buttonLogic(event) {

  let button = event.target;
  console.log(button.id);
  Move(button);
}
function Move(button) {

  if (counter % 2 == 0) {
    console.log(counter);
    xTurn(button);
    counter++;
  } else {
    oTurn(button);
    counter++;
  }
}
function xTurn(button) {
  x.push(button.id);
  //read x input
  button.innerHTML = buttonTextX;
  checkXWin(button);
  //go to y turn
}

function oTurn(button) {
  o.push(button.id);
  button.innerHTML = buttonTextO;
  checkOWin(button);
}

function checkXWin(button) {
  console.log(x);
  if (x.includes("1") && x.includes("2") && x.includes("3") || x.includes("4") && x.includes("5") && x.includes("6") || x.includes("7") && x.includes("8") && x.includes("9") || x.includes("1") && x.includes("4") && x.includes("7") || x.includes("2") && x.includes("5") && x.includes("8") || x.includes("3") && x.includes("6") && x.includes("9") || x.includes("1") && x.includes("5") && x.includes("9") || x.includes("3") && x.includes("5") && x.includes("7")) {
    alert("X Wins.  Game Over");
  } else {}
}

function checkOWin(button) {
  console.log(o);
  if (o.includes("1") && o.includes("2") && o.includes("3") || o.includes("4") && o.includes("5") && o.includes("6") || o.includes("7") && o.includes("8") && o.includes("9") || o.includes("1") && o.includes("4") && o.includes("7") || o.includes("2") && o.includes("5") && o.includes("8") || o.includes("3") && o.includes("6") && o.includes("9") || o.includes("1") && o.includes("5") && o.includes("9") || o.includes("3") && o.includes("5") && o.includes("7")) {
    alert("O Wins.  Game Over");
  } else {}
}

// function clear() {
//
//
// }