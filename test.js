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

let playGame = function(choice){
    
    if (choice == 0) {
        console.log("rock");
    } else if (choice == 1 ) {
        console.log("Paper");
    }
    else {
        console.log("Scissors");
    }
}