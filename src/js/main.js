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
}

function start() {
    // Create event listeners on every button
    let buttons = document.getElementsByClassName("space");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", Move);

    }
}

// function buttonLogic (event) {
//
//   let button = event.target;
//   Move(button);
//
// }
function Move(event) {

  let button = event.target;

  if (counter%2 == 0){
    xTurn(button);
    counter++;
    message.innerHTML = "It's O's Turn"
  }
  else {
    oTurn(button);
    counter++;
    message.innerHTML = "It's X's Turn"

}
}
function xTurn(button){
  x.push(button.id);
  //read x input
  button.innerHTML = buttonTextX;
  button.removeEventListener('click', Move);
  checkXWin(button);
  //go to y turn

}

function oTurn(button){
  o.push(button.id);
  button.innerHTML = buttonTextO;
  button.removeEventListener('click', Move);
  checkOWin(button);
}


function checkXWin(button) {
  if ((x.includes("1") && x.includes("2") && x.includes("3"))
  || (x.includes("4") && x.includes("5") && x.includes("6"))
  || (x.includes("7") && x.includes("8") && x.includes("9"))
  || (x.includes("1") && x.includes("4") && x.includes("7"))
  || (x.includes("2") && x.includes("5") && x.includes("8"))
  || (x.includes("3") && x.includes("6") && x.includes("9"))
  || (x.includes("1") && x.includes("5") && x.includes("9"))
  || (x.includes("3") && x.includes("5") && x.includes("7"))){
    message.innerHTML = "X Wins.";
    removeClicksFromSpaces();
  }
  else{
  }
}

function checkOWin(button) {
  if ((o.includes("1") && o.includes("2") && o.includes("3"))
  || (o.includes("4") && o.includes("5") && o.includes("6"))
  || (o.includes("7") && o.includes("8") && o.includes("9"))
  || (o.includes("1") && o.includes("4") && o.includes("7"))
  || (o.includes("2") && o.includes("5") && o.includes("8"))
  || (o.includes("3") && o.includes("6") && o.includes("9"))
  || (o.includes("1") && o.includes("5") && o.includes("9"))
  || (o.includes("3") && o.includes("5") && o.includes("7")))
  {
    message.innerHTML = "O Won!";
    removeClicksFromSpaces();

  }
  else{
  }
}

function removeClicksFromSpaces() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].removeEventListener('click', Move);
    }
}
