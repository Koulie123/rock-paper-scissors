// console.log("Hello world!");
let options = ['Rock', 'Paper', 'Scissors'];
let validOptions = ['rock', 'paper', 'scissors']

function getCompChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return validOptions[randomIndex];
};

// function processInput() {
//     let inputFromUser = document.getElementById("userInput");
//     let inputValue = inputFromUser.ariaValueMax;
//     return inputValue

// }

// function playerSelection() {
// }


// console.log(processInput())

function getUserInput() {
    let userChoice = prompt("Rock, Paper or Scissors?");
    return userChoice.toLowerCase();
};

let playerScore = 0
let compScore = 0


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

function playGame() {
    let compAnswer = getCompChoice();
    let userAnswer = getUserInput()
    printResults(compAnswer, userAnswer)
    
}
while (playerScore + compScore < 5) {
    playGame()
    console.log(playerScore)
    console.log(compScore)
}
console.log(`The final score is ${playerScore} for you and ${compScore} for the computer!`)



