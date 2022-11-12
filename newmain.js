//ROCK PAPER SCISSORS

var getUserChoice = function(userInput){
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    } else {
    console.log('Please enter rock, paper or scissors');
    }
};

var getComputerChoice = function(){
    var randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0){
        return 'rock';
    }else if (randomNumber === 1){
        return 'paper';
    }else if (randomNumber === 2){
        return 'scissors'
    }
};

var determineWinner = function (userChoice, computerChoice) {
    if (userChoice === 'bomb'){
        return 'The user won!!!';
    }
    
    
    if (userChoice === computerChoice){
        return 'Game was tie!'
    }
    if (userChoice === 'rock' &&  computerChoice === 'paper'){
        return 'The computer won!'
    }
    if (userChoice === 'rock' && computerChoice === 'scissors'){
        return 'The user won!'
    }
    if (userChoice === 'paper' && computerChoice === 'scissors'){
        return 'The computer won!'
    }
    if (userChoice === 'paper' && computerChoice === 'rock'){
        return 'The user won!'
    }
    if (userChoice === 'scissors' && computerChoice === 'rock'){
        return 'The computer won!'
    }
    if (userChoice === 'scissors' && computerChoice === 'paper'){
        return 'The user won!'
    }
};
 
var playGame = function(userInput) {
    var userChoice = getUserChoice(userInput);
    var computerChoice = getComputerChoice();

    console.log('User choice is', userChoice);
    console.log('Computer choice is', computerChoice);  
    
    var winnerText = determineWinner(userChoice, computerChoice);

console.log(winnerText);

};

var userInput = prompt();

playGame(userInput);


