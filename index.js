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
    clickButtonRef.classList.add("red");
    checkGameStatus(clickButtonRef);
    currentplayer = "blue";
  } else {
    clickButtonRef.setAttribute("style", "background-color:blue");
    clickButtonRef.classList.add("blue");
    checkGameStatus(clickButtonRef);
    currentplayer = "red";
  }
}

// -- Functino runs each time a selection is made to determine if there is a winner
function checkGameStatus(playerSelection) {
  //   console.log(playerSelection.className); //value is either red or blue
  switch (playerSelection.id) {
    case "a1":
      break;

    default:
      break;
  }
}

// -- to declare the winner
function declareWinner() {
  if (currentplayer === "red") {
    alert("Player 1: Red wins the game!");
    location.reload();
  } else {
    alert("Player 2: Blue wins the game!");
    location.reload();
  }
}

// -- add an event listener to all the buttons
buttonsRef.forEach((element) => element.addEventListener("click", clickButton));
