// console.log("Hello world!");
let options = ['rock', 'paper', 'scissors'];

function getCompChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
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

console.log(getUserInput())

