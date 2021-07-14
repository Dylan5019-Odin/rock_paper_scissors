//getRandomInt
//Returns a Random Int from 0 to max
const getRandomInt = (max) => {
    return Math.floor(Math.random()* max)
}; 

//computerPlay()
//Randomly Return Rock, Paper, or Scissors
const computerPlay = () => {
  
    const dict = {
        0: `rock`  ,
        1: `paper` ,
        2: `scissors`
    };

    return dict[getRandomInt(3)];


}

//playRound()
//Compares the computer choice to the Player choice and returns the 
//apropriate string
const playRound = (playerSelection, computerSelection) => {

   let playerChoice = playerSelection.toLowerCase();

    if (playerChoice === `rock` && computerSelection === 'scissors'){
        return 1;
    } else if (playerChoice === `rock` && computerSelection === 'paper'){
        return 0;
    } else if (playerChoice === `rock` && computerSelection === 'rock'){
        return -1;

    } else if (playerChoice === `scissors` && computerSelection === 'paper'){
        return 1;
    } else if (playerChoice === `scissors` && computerSelection === 'rock'){
        return 0;
    } else if (playerChoice === `scissors` && computerSelection === 'scissors'){
        return -1;

    } else if (playerChoice === `paper` && computerSelection === 'rock'){
        return 1;
    } else if (playerChoice === `paper` && computerSelection === 'scissors'){
        return 0;
    } else if (playerChoice === `paper` && computerSelection === 'paper'){
        return -1;
    }
}

let playerScoreText = document.getElementById('playerScore');
let computerScoreText = document.getElementById('computerScore');
let resultMessage = document.getElementById('resultText')
let playerScore = 0;
let computerScore = 0;

let playGame = function(choice){
    

    if (choice == 0) {
        let result = playRound('rock', computerPlay());
        if (result == 1) {
            playerScore += 1;
            resultMessage.textContent = "Rock Beats Scissors, Player Wins";
        } else if (result == 0) {
            computerScore += 1;
            resultMessage.textContent = "Paper Beats Rock, Computer Wins";
        }
        else {
            resultMessage.textContent = "Tie Game";
        }
       
    } else if (choice == 1 ) {
        let result = playRound('paper', computerPlay());
        if (result == 1) {
            playerScore += 1;
            resultMessage.textContent = "Paper Beats Rock, Player Wins";
        } else if (result == 0) {
            computerScore += 1;
            resultMessage.textContent = "Scissors Beats Paper, Computer Wins";
        }
        else {
            resultMessage.textContent = "Tie Game";
        }
    }
    else {
        let result = playRound('scissors', computerPlay());
        if (result == 1) {
            playerScore += 1;
            resultMessage.textContent = "Scissors Beats Paper, Player Wins";
        } else if (result == 0) {
            computerScore += 1;
            resultMessage.textContent = "Rock Beats Scissors, Computer Wins";
        }
        else {
            resultMessage.textContent = "Tie Game";
        }
    }
    

    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;

    if(playerScore < 5 && computerScore < 5){
        
    } else {
     if(computerScore >= 5) {
        resultMessage.textContent = "Game Over, The Computer Wins";
     } else {
        resultMessage.textContent = "Congrats! You Win! ";
     }
 }


}