// -- BUTTONS in this script each represent a quare on the tic tac toe grid

// -- global variables
const player1 = "red";
const player2 = "blue";

let currentplayer = "red";

// -- generate an array of button element references
const buttonsRef = document.querySelectorAll("button");

// -- when a button is click, do the following
function clickButton(e) {
  let clickButtonRef = e.target;
  clickButtonRef.setAttribute("disabled", "");

  if (currentplayer === "red") {
    clickButtonRef.setAttribute("style", "background-color:red");
    currentplayer = "blue";
    checkGameStatus();
  } else {
    clickButtonRef.setAttribute("style", "background-color:blue");
    currentplayer = "red";
    checkGameStatus();
  }
}

// -- Functino runs each time a selection is made to determine if there is a winner
function checkGameStatus() {
  console.log("checking");
}

// -- add an event listener to all the buttons
buttonsRef.forEach((element) => element.addEventListener("click", clickButton));
