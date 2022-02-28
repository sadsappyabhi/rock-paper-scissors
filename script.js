//globally define the three choices in an array
let choice = ['rock', 'paper', 'scissors'];
let playerScore = 0
let computerScore = 0


function computerPlay(){
    //multiply math.random by the length of array 'choice' returns an index value, stored in variable 'index'
    let index = Math.floor(Math.random() * choice.length);
    //Make a new variable to get value from choice array based on index, then return that value
    let computerChoice = choice[index];
    return computerChoice;   

    //found on youtube this can all be condensed to 1 line by skipping the naming of new variables.
    //   return choice[Math.floor(Math.random() * choice.length)];

}


function playGame(){
    //The below loop was removed so the game can continue until there is a winner at 5 rounds won
    //for (var i=0; i<5; i++){
        let prompt = window.prompt('Rock, Paper or Scissors?');
            playerSelection = prompt.toLowerCase();
        let computerSelection = (computerPlay());
            console.log(playRound(playerSelection, computerSelection));
            console.log(score());
        if (playerScore < 5 && computerScore < 5){
            playGame();
        }
        else {
            return checkWinner();
        }
}

function playRound(playerSelection, computerSelection){   
         
    if (playerSelection === computerSelection) {
      return ("It's a tie! Play again!");
    }
    if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        return("Computer played Paper - You lose this round :(");
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        return("Computer played Scissors - You win this round!! :D");
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        return("Computer played Rock - You win this round!! :D");
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        return("Computer played Scissors - You lose this round :(");
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        return("Computer played Rock - You lose this round :(");
    }
    else if(playerSelection ==='scissors' && computerSelection === 'paper'){
        playerScore++;
        return("Computer played Paper - You win this round!! :D");
    }
} 

function score(){
    return('You: ' + playerScore + ' Computer: ' + computerScore)
}

function checkWinner(){
    if (playerScore > computerScore){
        alert("You beat the computer!");
    }
    else {
        return("The computer won this round. Want to try again?");
    }
}

