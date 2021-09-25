let choices = ['rock', 'paper', 'scissors']
var playerScore = 0;
var computerScore = 0;
const btn = document.querySelector('#play');
btn.addEventListener('click', function(e) {
    e.target.style.background = 'blue';
});

function computerPlay() {
    choice_index = Math.floor(Math.random() * choices.length)
    return choices[choice_index]
}

function playerPlay() {
    const playerChoice = window.prompt("Rock, Paper, or Scissors: ").toLowerCase();
    return playerChoice
}

function playRound(playerChoice, computerChoice) {

    playerChoice = playerPlay()
    computerChoice = computerPlay()

    if (playerChoice == 'rock' && computerChoice == 'paper') {
        computerScore += 1;
        return (`You lost, ${computerChoice} beats ${playerChoice}!`)
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore += 1;
        return (`You won, ${playerChoice} beats ${computerChoice}!`)
    } else if (playerChoice == 'rock' && computerChoice == 'rock') {
        return ("It's a draw!")
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore += 1;
        return (`You won, ${playerChoice} beats ${computerChoice}!`)
    } else if (playerChoice == 'scissors' && computerChoice == 'scissors') {
        return ("It's a draw!")
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        computerScore += 1;
        return (`You lost, ${computerChoice} beats ${playerChoice}!`)
    } else if (playerChoice == 'paper' && computerChoice == 'paper') {
        return ("It's a draw!")
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        computerScore += 1;
        return (`You lost, ${computerChoice} beats ${playerChoice}!`)
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore += 1;
        return (`You won, ${playerChoice} beats ${computerChoice}!`)
    } else {
        return ('Not a valid choice!')
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}: ` + playRound())
    }

    if (playerScore > computerScore) {
        return (`You won the game! You won ${playerScore} rounds and the computer won ${computerScore}.`)
    } else if (playerScore < computerScore) {
        return (`You lost the game! You won ${playerScore} rounds and the computer won ${computerScore}.`)
    } else {
        return (`The game was a draw! You and the computer both won ${playerScore} rounds.`)
    }
}
