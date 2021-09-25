let choices = ['rock', 'paper', 'scissors']
var playerScore = 0;
var computerScore = 0;
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');
const ngBtn = document.querySelector('#new-game');
const resetBtn = document.querySelector('#reset');

function computerPlay() {
    choice_index = Math.floor(Math.random() * choices.length)
    return choices[choice_index]
}

// let computerChoice = choices[Math.floor(Math.random() * choices.length)]

function playerPlay() {
    const playerChoice = window.prompt("Rock, Paper, or Scissors: ").toLowerCase();
    return playerChoice
}

function playRound(playerChoice, computerChoice) {

    // playerChoice = playerPlay()
    computerChoice = computerPlay()

    if (playerChoice == 'rock' && computerChoice == 'paper') {
        computerScore += 1;
        return (`Round lost!`)
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore += 1;
        return (`Round won!`)
    } else if (playerChoice == 'rock' && computerChoice == 'rock') {
        return ("Draw!")
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore += 1;
        return (`Round won!`)
    } else if (playerChoice == 'scissors' && computerChoice == 'scissors') {
        return ("Draw!")
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        computerScore += 1;
        return (`Round lost!`)
    } else if (playerChoice == 'paper' && computerChoice == 'paper') {
        return ("Draw!")
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        computerScore += 1;
        return (`Round lost!`)
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore += 1;
        return (`Round won!`)
    } else {
        return ('Not a valid choice!')
    }
}

function newGame() {
    computerScore = 0;
    playerScore = 0;
    document.querySelector('#results').textContent = playerScore;
    document.querySelector('#computer-results').textContent = computerScore;
    document.querySelector('#output').textContent = '--';
}

function disableButton() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

function game() {
    // for (let i = 0; i < 5; i++) {
    //     console.log(`Round ${i+1}: ` + playRound())
    // }

    // if (playerScore >= 5) {
    //     return ('Game over, you won!')
    // } else if (computerScore >= 5) {
    //     return ('Game over, you lost!')
    // }

    if (playerScore < 5 && computerScore < 5) {
        void(0);
    } else {
        if (playerScore > computerScore) {
            document.querySelector('#output').textContent = 'You won the game!';
            disableButton();
            // return (`You won the game! You won ${playerScore} rounds and the computer won ${computerScore}.`)
        } else if (playerScore < computerScore) {
            document.querySelector('#output').textContent = 'Computer won the game!';
            disableButton();
            // return (`You lost the game! You won ${playerScore} rounds and the computer won ${computerScore}.`)
        } else {
            return (`The game was a draw! You and the computer both won ${playerScore} rounds.`)
        }
    }
}

//     if (playerScore > computerScore) {
//         return (`You won the game! You won ${playerScore} rounds and the computer won ${computerScore}.`)
//     } else if (playerScore < computerScore) {
//         return (`You lost the game! You won ${playerScore} rounds and the computer won ${computerScore}.`)
//     } else {
//         return (`The game was a draw! You and the computer both won ${playerScore} rounds.`)
//     }
// }

ngBtn.addEventListener('click', () => {
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
    newGame();
});

resetBtn.addEventListener('click', () => {
    newGame();
})

rockBtn.addEventListener('click', () => {
    // console.log(playRound(playerChoice='rock'));
    document.querySelector('#output').textContent = playRound(playerChoice='rock');
    document.querySelector('#results').textContent = playerScore;
    document.querySelector('#computer-results').textContent = computerScore;
    game();
});

rockBtn.addEventListener('mouseover', event => {
    document.getElementById('rock').style.scale = '1.1';
})

rockBtn.addEventListener('mouseout', event =>{
    document.getElementById('rock').style.scale = '1';
})

paperBtn.addEventListener('click', () => {
    // console.log(playRound(playerChoice='paper'));
    document.querySelector('#output').textContent = playRound(playerChoice='paper');
    document.querySelector('#results').textContent = playerScore;
    document.querySelector('#computer-results').textContent = computerScore;
    game();
});

paperBtn.addEventListener('mouseover', event => {
    document.getElementById('paper').style.scale = '1.1';
})

paperBtn.addEventListener('mouseout', event =>{
    document.getElementById('paper').style.scale = '1';
})

scissorBtn.addEventListener('click', () => {
    // console.log(playRound(playerChoice='scissors'));
    document.querySelector('#output').textContent = playRound(playerChoice='scissors');
    document.querySelector('#results').textContent = playerScore;
    document.querySelector('#computer-results').textContent = computerScore;
    game();
});

scissorBtn.addEventListener('mouseover', event => {
    document.getElementById('scissors').style.scale = '1.1';
})

scissorBtn.addEventListener('mouseout', event =>{
    document.getElementById('scissors').style.scale = '1';
})

