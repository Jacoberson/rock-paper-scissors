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
    document.getElementById('computer_score').textContent = `Computer Score: ${computerScore}`
    document.getElementById('player_score').textContent = `Player Score: ${playerScore}`
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(getComputerChoice(), button.id);
    })
})

const container = document.querySelector('#container')
const div = document.createElement('div');
container.appendChild(div);

const computerScoreOutput = document.createElement('p');
computerScoreOutput.setAttribute('id', 'computer_score');
computerScoreOutput.textContent = `Computer Score: ${computerScore}`;

const computerChoiceOutput = document.createElement('p');
computerChoiceOutput.setAttribute('id', 'computer_choice');

const playerScoreOutput = document.createElement('p');
playerScoreOutput.setAttribute('id', 'player_score');
playerScoreOutput.textContent = `Player Score: ${playerScore}`;

const playerChoiceOutput = document.createElement('p');
playerChoiceOutput.setAttribute('id', 'player_choice');

div.appendChild(computerScoreOutput);
div.appendChild(computerChoiceOutput);
div.appendChild(playerScoreOutput);
div.appendChild(playerChoiceOutput);