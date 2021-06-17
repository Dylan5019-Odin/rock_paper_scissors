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

//game()
//plays 5 rounds of rock, paper, scissors
//and reports the winner or loser at the end
const game = () => {

    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++){

        let computerSelection = computerPlay();
        let playerSelection = window.prompt("Please Enter Your Choice");
        let result = playRound(playerSelection, computerSelection);
        
        if (result === 1) {
            playerWins++;
        } else if (result === 0){
            computerWins++;
        }
        
    }

    if(playerWins > computerWins) {
        console.log(`Congrats! You Won!`)
    } else if (computerWins > playerWins) {
        console.log(`Sorry! You Lost!`)
    } else {
        console.log("Tie Game!")
    }

}

game();