const getComputerChoice = () => {
    let options = ['rock', 'paper', 'scissors'];

    return options[Math.floor(Math.random() * options.length)];
}

const getPlayerChoice = () => {
    let playerChoice = prompt('Choose rock, paper, or scissors');
    return playerChoice.toLowerCase();
}

const playRound = (computerChoice, playerChoice) => {
    if (computerChoice === 'rock' && playerChoice === 'scissors') {
        return 'You Lose! ' + `${computerChoice} beats ${playerChoice}`
    } else if (computerChoice === 'rock' && playerChoice === 'paper') {
        return 'You Win! ' + `${playerChoice} beats ${computerChoice}`
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        return 'You Win! ' + `${playerChoice} beats ${computerChoice}`
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        return 'You Lose! ' + `${computerChoice} beats ${playerChoice}`
    } else {
        return 'same choice';
    }
}

const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

console.log(playRound(computerChoice, playerChoice));