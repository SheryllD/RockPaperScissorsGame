const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const ResultDisplay = document.getElementById("result-choice")
const possibleChoices = document.querySelector("button")
let userChoice
let computerChoice
let result 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice  
generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        generateComputerChoice = 'Rock'  
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() { 
    if (computerChoice === userChoice) {
        result = 'Its a draw!'
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'YOU WIN!'
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = 'YOU WIN!'
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'YOU LOST!'
    }
    if (computerChoice === 'ROCK' && userChoice === 'Scissors') {
        result = 'YOU LOST!'
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = 'YOU WIN!'
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'YOU Lost'
}
}