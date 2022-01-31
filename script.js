//globally define the three choices in an array
let choice = ['rock', 'paper', 'scissors'];



function computerPlay(){
    //multiply math.random by the length of array 'choice' returns an index value, stored in variable 'index'
    let index = Math.floor(Math.random() * choice.length);
    //Make a new variable to get value from choice array based on index, then return that value
    let computerChoice = choice[index];
    return computerChoice;   

    //found on youtube this can all be condensed to 1 line by skipping the naming of new variables.
    //   return choice[Math.floor(Math.random() * choice.length)];

}
// Commenting these out so I can test below
/*
let prompt = window.prompt('Rock, Paper or Scissors?');
playerSelection = prompt.toLowerCase();
*/

//let playerSelection = 'rock';

/*
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){   
     
    if (playerSelection === computerSelection) {
      console.log("It's a tie!");
    }
    if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log("Computer played Paper - You lose :(");
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log("Computer played Scissors - You win!! :D");
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        console.log("Computer played Rock - You win!! :D");
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log("Computer played Scissors - You lose :(");
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log("Computer played Rock - You lose :(");
    }
    else if(playerSelection ==='scissors' && computerSelection === 'paper'){
        console.log("Computer played Paper - You win! :D");
    }
}
*/

for (var i=0; i<5; i++){
let prompt = window.prompt('Rock, Paper or Scissors?');
playerSelection = prompt.toLowerCase();
let computerSelection = (computerPlay());
    console.log(playRound(playerSelection, computerSelection));
}
function playRound(playerSelection, computerSelection){   
         
    if (playerSelection === computerSelection) {
      return ("It's a tie!");
    }
    if (playerSelection === 'rock' && computerSelection === 'paper'){
        return("Computer played Paper - You lose :(");
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return("Computer played Scissors - You win!! :D");
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return("Computer played Rock - You win!! :D");
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return("Computer played Scissors - You lose :(");
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return("Computer played Rock - You lose :(");
    }
    else if(playerSelection ==='scissors' && computerSelection === 'paper'){
        return("Computer played Paper - You win! :D");
    }
} 

