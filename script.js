// console.log("Hello world!");
let options = ['Rock', 'Paper', 'Scissors'];
let validOptions = ['rock', 'paper', 'scissors']
let currentUserChoice;
function getCompChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return validOptions[randomIndex];
};

const compDiv = document.querySelector("#comp");
const userDiv = document.querySelector("#user");
const currentWinnerDiv = document.querySelector("#currentWinner")
const playerScoreSpan = document.querySelector("#player-score");
const compScoreSpan = document.querySelector("#comp-score");
const winnerDiv = document.querySelector("#winner-div");

function getUserInput() {
    let userChoice = prompt("Rock, Paper or Scissors?");
    return userChoice.toLowerCase();
};

let playerScore = 0
let compScore = 0
mostRecentWinner = "";

function printResults(comp, user) {
    let winStatement = `You Win! You chose ${user} and the computer chose ${comp}.`;
    let loseStatement = `You Lose! You chose ${user} and the computer chose ${comp}.`;
    if (comp === user) {
        console.log(`Tie! you both chose ${comp}`);
    } else if (comp === 'rock' && user === 'paper') {
        console.log(winStatement);
        playerScore ++;
    } else if (comp === 'rock' && user === 'scissors') {
        console.log(loseStatement);
        compScore ++;
    } else if (comp === 'paper' && user === 'scissors') {
        console.log(winStatement);
        playerScore ++;
    } else if (comp === 'paper' && user === 'rock') {
        console.log(loseStatement);
        compScore ++;
    } else if (comp === 'scissors' && user === 'rock') {
        console.log(winStatement);
        playerScore ++;
    } else if (comp === 'scissors' && user === 'paper') {
        console.log(loseStatement);
        compScore ++;
    }
}
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        currentUserChoice = button.id;
        userDiv.textContent = "You choose: " + currentUserChoice;
        console.log("You have chosen " + currentUserChoice);
        if (!checkForWinner()) {playGame()};
    });
});

function playGame() {
    userAnswer = currentUserChoice;
    compAnswer = getCompChoice();
    compDiv.textContent = "The computer choose: " + compAnswer;
    let previousUserScore = playerScore;
    let previousCompScore = compScore;
    
    printResults(compAnswer, userAnswer);
    if (playerScore == previousUserScore && previousCompScore == compScore){
        mostRecentWinner = "Tie";
    }
    else if (playerScore > previousUserScore){
        mostRecentWinner = "user";
    }
    else if (compScore > previousCompScore){
        mostRecentWinner = "comp";
    }
    currentWinnerDiv.textContent = createWinnerStatement(mostRecentWinner);
    playerScoreSpan.textContent = playerScore;
    compScoreSpan.textContent = compScore;
    if (checkForWinner()){
        winnerDiv.textContent = "The winner is of the game is " + whoIsWinner();
        if (winnerDiv == null) {console.log("winnerdiv is null.")}
    };
}



let winner;

function checkForWinner(){
    if (playerScore >= 5 || compScore >= 5){
        return true;
    }
    else {
        return false;
    }
};

function whoIsWinner(){
    if (playerScore > compScore){
        return "Player";
    }else {
        return "computer";
    }
}

function createWinnerStatement(winner){
    if (winner == "Tie") return "This round was a tie.";
    else if (winner == "user") return "You win this round!";
    else if (winner == "comp") return "The computer wins this round!";
    else return "";
}
console.log(`The final score is ${playerScore} for you and ${compScore} for the computer!`)



