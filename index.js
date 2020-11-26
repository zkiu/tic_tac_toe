// -- BUTTONS in this script each represent a quare on the tic tac toe grid

// -- global variables
const player1 = "red";
const player2 = "blue";

// -- generate an array of button element references
const buttonsRef = document.querySelectorAll("button");

// -- when a button is click, do the following
function clickButton(e) {
  let clickButtonRef = e.target;
  clickButtonRef.setAttribute("disabled", "");
}

// -- add an event listener to all the buttons
buttonsRef.forEach((element) => element.addEventListener("click", clickButton));
