const promptUser = require("prompt-sync")();

const COMPUPTERWINS = "Computer Wins";
const USERWINS = "User Wins";
const TIE = "Tie";

function greetingUser() {
  console.log("Shall we play a game?");
}

function moveRequest() {
  console.log("Please pick 'Rock', 'Paper', or 'Scissors'");
}

function anouncementTie(computerPlayed) {
  console.log(`You both chose ${computerPlayed}. It is a Tie`);
}

function anouncementUserWin(computerPlayed) {
  console.log(`Congratulations. You win. The computer chose ${computerPlayed}`);
}

function anouncementComputerWin(computerPlayed) {
  console.log(`The computer chose ${computerPlayed}. Sorry you lose.`);
}

function computerAction() {
  let computerCall = Math.floor(Math.random() * 3);
  console.log(`Roll ${computerCall}`);
  if (computerCall === 0) {
    return "Rock";
  } else if (computerCall === 1) {
    return "Paper";Roc
  } else {
    return "Scissors";
  }
}

function decidesWinner(computerSelection, userSelection) {
  // console.log(computerSelection);
  // console.log(userSelection);
  if (computerSelection === userSelection) {
    return TIE;
  } else if (
    (computerSelection === "Rock" && userSelection === "Scissors") ||
    (computerSelection === "Paper" && userSelection === "Rock") ||
    (computerSelection === "Scissors" && userSelection === "Paper")
  ) {
    return COMPUPTERWINS;
  } else {
    return USERWINS;
  }
}

function gameMatch() {
  let winner = false;
  let result = false;
  let userScore = 0;
  let computerScore = 0;

  greetingUser();
  while (winner === false) {
    moveRequest();
    let computerPlayed = computerAction();
    let userPlayed = promptUser();
    result = decidesWinner(computerPlayed, userPlayed);
    console.log(`Result is ${result}`);
    if (result === USERWINS) {
      userScore++;
      anouncementUserWin(computerPlayed);
    } else if (result === COMPUPTERWINS) {
      computerScore++;
      anouncementComputerWin(computerPlayed);
    } else {
      anouncementTie(computerPlayed);
    }
    if (userScore >= 5 || computerScore >= 5) {
      winner = true;
    }
    console.log(`Player score ${userScore}`);
    console.log(`Computer score ${computerScore}`);
    console.log(`Results are ${winner}`);
  }
  console.log("Game Over!");
}

gameMatch();
