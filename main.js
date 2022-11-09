//ROCK PAPER SCISSORS
var userInput = 'PaPer';

function getUserChoice(){
if (userInput.toLowerCase() === 'rock') {
    return('You picked rock')
    }
        else if (userInput.toLowerCase() === 'paper') {
            return('You picked paper');
    }
                else if (userInput.toLowerCase() === 'scissors') {
                    return('You picked scissors');
    }
                    else {
                     return('Sorry that is not a choice');
    } 
};

var computerInput = Math.floor(Math.random() * 3);

function getComputerChoice(){
    if (computerInput === 0){
        return('The computer picked rock')
    }
            else if (computerInput === 1) {
                return('The computer picked paper');
    }
                    else if (computerInput === 2) {
                        return('The computer picked scissors');
    }
                            else {
                                return('Sorry that is not a choice');
    } 
}
const userChoice = getUserChoice(userInput);
const computerChoice = getComputerChoice();

function determineWinner(userChoice, computerChoice){

    if (userChoice === 'rock' && computerChoice === 'rock'){
        return('You tied.');
    }
    if (userChoice === 'rock' && computerChoice === 'paper'){
        return('You lose...');
    }
    else if (userChoice === 'rock' && computerChoice === 'scissors'){
        return('You won!');
    }
    if (userChoice === 'paper' && computerChoice === 'paper'){
        return('You tied.');
    }
    if (userChoice === 'paper' && computerChoice === 'scissors'){
        return('You lose...');
    }
    else if (userChoice === 'paper' && computerChoice === 'rock'){
        return('You won!');
    }
    if (userChoice === 'scissors' && computerChoice === 'scissors'){
        return('You tied.');
    }
    else if (userChoice === 'scissors' && computerChoice === 'rock'){
        return('You lose...');
    }
    else if (userChoice === 'scissors' && computerChoice === 'paper'){
        return('You won!');
    }   
 }
 const playGame = function () {
    
    console.log(userChoice);
    
    console.log(computerChoice);
    return(determineWinner(userChoice, computerChoice));
 }
 
 playGame ();
