/* jshint esversion: 6 */
/**
 * Add an event listener to the document and run the main screen with user log-in
 */
document.addEventListener('DOMContentLoaded', function () {
    runMainScreen();
});

/**
 * Set up of game variables to vary display/hide
 */
let mainLoginScreen = document.getElementById("login-screen");
let getInstructions = document.getElementById("instructions-icon");
let errorMessage = document.getElementById("error-message");
let mainGameScreen = document.getElementById("main-game-container");
let resetBtn = document.getElementById("reset-btn");
let newGameBtn = document.getElementById("newgame-btn");
let msgContainer = document.getElementsByClassName("msg-container")[0];
let msg = document.getElementById("msg");
let boxes = document.getElementsByClassName("box");

/**
* Show the main screen with user log-in and instruction icon
*/
function runMainScreen() {
    errorMessage.style.display = "none";
    mainLoginScreen.style.display = "block";
    mainGameScreen.style.display = "none";
    newGameBtn.style.display = "none";
    msgContainer.style.display = "none";
    document.getElementById("user-icon").style.display = "none";
    document.getElementById("username").innerText = "";
    // Remove following comment letter
    document.getElementById("user").focus(); //focus on input element with cursor ready for username input
}

/**
 * Verification of the user name input on the log-in screen
 */
document.getElementById("user-log").addEventListener("click", checkUsername);

function checkUsername() {
    let username = document.getElementById("user").value.trim();

    if (username.length >= 1 && username.length <= 12) {
        mainGameScreen.style.display = "block";
        mainLoginScreen.style.display = "none";
        document.getElementById("user-icon").style.display = "block";
        document.getElementById("username").innerText = username;
    } else {
        errorMessage.style.display = "block";
        // Remove following comment letter
        document.getElementById("user").focus(); 
        document.getElementById("user").value = "";
    }
}
checkUsername();


/**
 * Show and close modal with game instructions
 */
getInstructions.addEventListener("click", showInstructions);

function showInstructions() {
    let modal = document.getElementById("myModal");
    modal.classList.add("show-modal");
    document.body.classList.add('greyout-background'); //grey out the background picture when modal pops-up.
}

function closeInstructions() {
    let modal = document.getElementById("myModal");
    modal.classList.remove("show-modal");
    document.body.classList.remove('greyout-background');
}

/**
 * Allow users to input their username by pressing the enter key
 */
document.getElementById("user").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkUsername();
    }
});

/**
 * Set variables and win pattern combinations for Tic Tac Toe game screen 
 */
let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

// 2D Array of win Patterns
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

/**
 *  Logic of Tic Tac Toe game
 */
for (let i = 0; i < boxes.length; i++) {    
    boxes[i].addEventListener("click", function() {
        //logic for determining whose turn it is in the game, whether it's X's or O's.
        if (turnO) {
            // playerO
            boxes[i].innerText = "O";
            turnO = false;
        } else {
            // playerX
            boxes[i].innerText = "X";
            turnO = true;
        }

        boxes[i].disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
}

/**
 *  Logic for checking winner
 */

function checkWinner() {
    for (let i = 0; i < winPatterns.length; i++) {
      let pattern = winPatterns[i];
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            return true;
        }
      }
    }
}

/**
 *  Logic for showing winner message
 */
function showWinner(winner) {
    msg.innerText = "Congratulations, Winner is " + winner;
    msgContainer.style.display = "block";
    newGameBtn.style.display = "block";
    mainGameScreen.style.display = "none";
    disableBoxes();
}

/**
 *  Logic for Game draw message
 */
function gameDraw() {
    msg.innerText = "Game was a Draw.";
    msgContainer.style.display = "block";
    newGameBtn.style.display = "block";
    mainGameScreen.style.display = "none";
    disableBoxes();
}

/**
 *  Logic to reset the game and disable all boxes when clicking the reset game or new game button
 */
function resetGame() {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.style.display = "none";
    mainGameScreen.style.display = "block";
}

function disableBoxes() {
    for (let box of boxes) {
        box.disabled = true;
    }
}

function enableBoxes() {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
