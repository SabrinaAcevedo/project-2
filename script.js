const wins = document.querySelector('win')
const ties = document.querySelector('tie')
const loses = document.querySelector('lose')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let resultDisplay

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.value
    //ties.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.random() * possibleChoices.length
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    possibleChoices.innerHTML = computerChoice
}
 function getResult() {
    if (computerChoice === userChoice){
    result = 'tie'
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'win'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'lose'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'win'
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'lose'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'win'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'lose'
    }
    //resultDisplay.innerHTML = result
 }



//const buttons = document.querySelectorAll('button');

//const rock = document.querySelector('#rock');
////const paper = document.querySelector('#paper');
//const scissors = document.querySelector('#scissors');


//foo.addEventListener('click', function(event) {
 //   console.log(event.target.value);
