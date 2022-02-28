
const choice = ['rock', 'paper', 'scissors'];
let playerScore = 0
let computerScore = 0

function computerSelection(){
    let index = Math.floor(Math.random() * choice.length);
    let result = choice[index];
    return result;
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let playerSelection = 'rock';
    alert(playRound('rock', computerSelection()));
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let playerSelection = 'paper';
    alert(playRound('paper', computerSelection()));
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let playerSelection = 'scissors';
    alert(playRound('scissors', computerSelection()));
})


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
