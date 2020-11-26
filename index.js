// -- BUTTONS in this script each represent a quare on the tic tac toe grid

// -- global variables
const player1 = "red";
const player2 = "blue";

let currentplayer = "red";

const turnKeeper = document.querySelector("#turnKeeper");

// -- generate an array of button element references
const buttonsRef = document.querySelectorAll("button");

// -- when a button is click, do the following
function clickButton(e) {
  let clickButtonRef = e.target;
  clickButtonRef.setAttribute("disabled", "");

  if (currentplayer === "red") {
    clickButtonRef.setAttribute("style", "background-color:red");
    clickButtonRef.classList.add("red");
    // -- check if there is a winner
    checkGameStatus(clickButtonRef);
    // -- if no winner, then change player
    changePlayer();
  } else {
    clickButtonRef.setAttribute("style", "background-color:blue");
    clickButtonRef.classList.add("blue");
    checkGameStatus(clickButtonRef);
    changePlayer();
  }
}

function changePlayer() {
  if (currentplayer === "red") {
    currentplayer = "blue";
    turnKeeper.setAttribute("style", "background-color:blue");
  } else {
    currentplayer = "red";
    turnKeeper.setAttribute("style", "background-color:red");
  }
}

// -- Functino runs each time a selection is made to determine if there is a winner
function checkGameStatus(playerSelection) {
  //   console.log(playerSelection.className); //value is either red or blue
  //   const winningPlayer = currentplayer; // -- either red of blue
  switch (playerSelection.id) {
    case "a1":
      if (
        document.querySelector("#a2").className === currentplayer &&
        document.querySelector("#a3").className === currentplayer
      ) {
        declareWinner();
      }
      if (
        document.querySelector("#b1").className === currentplayer &&
        document.querySelector("#c1").className === currentplayer
      ) {
        declareWinner();
      }
      if (
        document.querySelector("#b2").className === currentplayer &&
        document.querySelector("#c3").className === currentplayer
      ) {
        declareWinner();
      }
      break;
    case "a2":
      if (
        document.querySelector("#a1").className === currentplayer &&
        document.querySelector("#a3").className === currentplayer
      ) {
        declareWinner();
      }
      if (
        document.querySelector("#b2").className === currentplayer &&
        document.querySelector("#c2").className === currentplayer
      ) {
        declareWinner();
      }
      break;
    case "a3":
      if (
        document.querySelector("#a1").className === currentplayer &&
        document.querySelector("#a2").className === currentplayer
      ) {
        declareWinner();
      }
      if (
        document.querySelector("#b3").className === currentplayer &&
        document.querySelector("#c3").className === currentplayer
      ) {
        declareWinner();
      }
      if (
        document.querySelector("#b2").className === currentplayer &&
        document.querySelector("#c1").className === currentplayer
      ) {
        declareWinner();
      }
      break;
    case "b1":
      if (
        document.querySelector("#b2").className === currentplayer &&
        document.querySelector("#b3").className === currentplayer
      ) {
        declareWinner();
      }
      if (
        document.querySelector("#a1").className === currentplayer &&
        document.querySelector("#c1").className === currentplayer
      ) {
        declareWinner();
      }
      break;
    case "b2":
      if (
        document.querySelector("#b1").className === currentplayer &&
        document.querySelector("#b3").className === currentplayer
      ) {
        declareWinner();
      }
      if (
        document.querySelector("#a2").className === currentplayer &&
        document.querySelector("#c2").className === currentplayer
      ) {
        declareWinner();
      }
      if (
        document.querySelector("#a1").className === currentplayer &&
        document.querySelector("#c3").className === currentplayer
      ) {
        declareWinner();
      }
      if (
        document.querySelector("#a3").className === currentplayer &&
        document.querySelector("#c1").className === currentplayer
      ) {
        declareWinner();
      }
      break;
    case "b3":
      if (
        document.querySelector("#b1").className === currentplayer &&
        document.querySelector("#b2").className === currentplayer
      ) {
        declareWinner();
      }
      if (
        document.querySelector("#a3").className === currentplayer &&
        document.querySelector("#c3").className === currentplayer
      ) {
        declareWinner();
      }
      break;
    case "c1":
      if (
        document.querySelector("#c2").className === currentplayer &&
        document.querySelector("#c3").className === currentplayer
      ) {
        declareWinner();
      }
      if (
        document.querySelector("#a1").className === currentplayer &&
        document.querySelector("#b1").className === currentplayer
      ) {
        declareWinner();
      }
      if (
        document.querySelector("#b2").className === currentplayer &&
        document.querySelector("#a3").className === currentplayer
      ) {
        declareWinner();
      }
      break;
    case "c2":
      if (
        document.querySelector("#c1").className === currentplayer &&
        document.querySelector("#c3").className === currentplayer
      ) {
        declareWinner();
      }
      if (
        document.querySelector("#a2").className === currentplayer &&
        document.querySelector("#b2").className === currentplayer
      ) {
        declareWinner();
      }
      break;
    case "c3":
      if (
        document.querySelector("#c1").className === currentplayer &&
        document.querySelector("#c2").className === currentplayer
      ) {
        declareWinner();
      }
      if (
        document.querySelector("#a3").className === currentplayer &&
        document.querySelector("#b3").className === currentplayer
      ) {
        declareWinner();
      }
      if (
        document.querySelector("#b2").className === currentplayer &&
        document.querySelector("#a1").className === currentplayer
      ) {
        declareWinner();
      }
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
