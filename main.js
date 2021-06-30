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



//Get Body element and Create a New Div and Paragraphs
const body = document.querySelector('body');
const resultDiv = document.createElement('div');
const resultText = document.createElement('p');
const playerScore = document.createElement('p');
const computerScore = document.createElement('p');
const tieGames = document.createElement('p');

//Variables for Keeping Track of Player Score
let playerWins = 0;
let computerWins = 0;
let tieGameCount = 0;

//OnClick for if the Player Chooses Rock
const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', () => {
    let result =  playRound("rock", computerPlay());
    
    displayResult(result);
})

//OnClick for if the Player Chooses Paper
const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', () => {
    let result =  playRound("paper", computerPlay());
    displayResult(result);
})

//OnClick for if the Player Chooses Scissors
const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', () => {
    let result =  playRound("scissors", computerPlay());
    displayResult(result);
})

//Displays the Results of the Game
const displayResult = (result) => {

    switch(result) {
        case 1: 
        playerWins++;
        break;
        case 0:
        computerWins++; 
        break;
        default:
        tieGameCount++;
        break;
    }

    if(playerWins == 5) {
        resultText.textContent = `Congrats! You Won!`;
        resultDiv.appendChild(resultText);
       

    } else if (computerWins == 5) {

        resultText.textContent = `Sorry! You Lost!`;
        resultDiv.appendChild(resultText);
        
    }

    playerScore.textContent = `Player Score: ` + playerWins;
    computerScore.textContent = `Computer Score: ` + computerWins;
    tieGames.textContent = `Tie Games: ` + tieGameCount;
    resultDiv.appendChild(playerScore);
    resultDiv.appendChild(computerScore);
    resultDiv.appendChild(tieGames);
    body.appendChild(resultDiv);
    
}