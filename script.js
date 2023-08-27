let computerScore = 0;
let playerScore = 0;

const getComputerChoice = () => {
    let options = ['rock', 'paper', 'scissors'];

    return options[Math.floor(Math.random() * options.length)];
}

const playRound = (computerChoice, playerChoice) => {
    makeVisible('computer_score')
    makeVisible('player_score')
    makeVisible('computer_choice')
    makeVisible('player_choice')

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
        makeInvisible(button.id);
    })
    makeVisible('winner');
}

const restartGame = () => {
    const buttons = document.querySelectorAll('.choice');
    const choices = document.querySelectorAll('.player_choice');
    const scores = document.querySelectorAll('.player_score')
    buttons.forEach(button => {
        makeVisible(button.id);
    })
    choices.forEach(choice => {
        makeInvisible(choice.id);
    })
    scores.forEach(score => {
        makeInvisible(score.id);
    })
    makeInvisible('winner');
    computerScore = 0;
    playerScore = 0;
    updateScore();
}

const makeVisible = id => {
    document.getElementById(id).style.visibility = 'visible';
}

const makeInvisible = id => {
    document.getElementById(id).style.visibility = 'hidden';
}

const buttons = document.querySelectorAll('.choice');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(getComputerChoice(), button.id);
    })
})

const restartGameButton = document.querySelector('#restart_game');
restartGameButton.addEventListener('click', () => {
    restartGame();
})

const computerScoreOutput = document.querySelector('#computer_score');
computerScoreOutput.textContent = `Computer Score: ${computerScore}`;

const computerChoiceOutput = document.querySelector('#computer_choice');

const playerScoreOutput = document.querySelector('#player_score');
playerScoreOutput.textContent = `Player Score: ${playerScore}`;

const playerChoiceOutput = document.querySelector('#player_choice');

const winnerOutput = document.querySelector('#winner');