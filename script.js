let computerScore = 0;
let playerScore = 0;

const getComputerChoice = () => {
    let options = ['rock', 'paper', 'scissors'];

    return options[Math.floor(Math.random() * options.length)];
}

const playRound = (computerChoice, playerChoice) => {
    if ((computerChoice === 'rock' && playerChoice === 'scissors') ||
        (computerChoice === 'scissors' && playerChoice === 'paper') ||
        (computerChoice === 'paper' && playerChoice === 'rock')) {
        computerScore++;
    } else if ((computerChoice === 'rock' && playerChoice === 'paper') ||
        (computerChoice === 'paper' && playerChoice === 'scissors') ||
        (computerChoice === 'scissors' && playerChoice === 'rock')) {
        playerScore++;
    } 
    displayChoices(computerChoice, playerChoice);
    updateScore();
}

const displayChoices = (computerChoice, playerChoice) => {
    document.getElementById('computer_choice').textContent = `Computer Choice: ${computerChoice}`;
    document.getElementById('player_choice').textContent = `Player Choice: ${playerChoice}`;
}

const updateScore = () => {
    document.getElementById('computer_score').textContent = `Computer Score: ${computerScore}`;
    document.getElementById('player_score').textContent = `Player Score: ${playerScore}`;

    if (computerScore === 5) {
        declareWinner('computer');
    } else if (playerScore === 5) {
        declareWinner('player');
    }
}

const declareWinner = winner => {
    document.getElementById('winner').textContent = `${winner} is the winner!`;
    endGame();
}

const endGame = () => {
    const buttons = document.querySelectorAll('.choice');
    // make buttons invisible so player cannot continue playing
    buttons.forEach(button => {
        document.getElementById(button.id).style.visibility = 'hidden';
    })
    document.getElementById('winner').style.visibility = 'visible';
}

const restartGame = () => {
    const buttons = document.querySelectorAll('.choice');
    const choices = document.querySelectorAll('.player_choice');
    buttons.forEach(button => {
        document.getElementById(button.id).style.visibility = 'visible';
    })
    choices.forEach(choice => {
        document.getElementById(choice.id).style.visibility = 'hidden';
    })
    document.getElementById('winner').style.visibility = 'hidden';
    computerScore = 0;
    playerScore = 0;
    updateScore();
}

const buttons = document.querySelectorAll('.choice');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(getComputerChoice(), button.id);
    })
})

const container = document.querySelector('#container')
const div = document.createElement('div');
container.appendChild(div);

const restartGameButton = document.querySelector('#restart_game');
restartGameButton.addEventListener('click', () => {
    restartGame();
})

const computerScoreOutput = document.createElement('p');
computerScoreOutput.setAttribute('id', 'computer_score');
computerScoreOutput.textContent = `Computer Score: ${computerScore}`;

const computerChoiceOutput = document.createElement('p');
computerChoiceOutput.setAttribute('id', 'computer_choice');
computerChoiceOutput.setAttribute('class', 'player_choice');

const playerScoreOutput = document.createElement('p');
playerScoreOutput.setAttribute('id', 'player_score');
playerScoreOutput.textContent = `Player Score: ${playerScore}`;

const playerChoiceOutput = document.createElement('p');
playerChoiceOutput.setAttribute('id', 'player_choice');
playerChoiceOutput.setAttribute('class', 'player_choice');

const winnerOutput = document.createElement('p');
winnerOutput.setAttribute('id', 'winner');

div.appendChild(computerScoreOutput);
div.appendChild(computerChoiceOutput);
div.appendChild(playerScoreOutput);
div.appendChild(playerChoiceOutput);
div.appendChild(winnerOutput);