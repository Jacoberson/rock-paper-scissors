const getComputerChoice = () => {
    let options = ['rock', 'paper', 'scissors'];

    return options[Math.floor(Math.random() * options.length)];
}

const getPlayerChoice = () => {
    let playerChoice = prompt('Choose rock, paper, or scissors');
    return playerChoice.toLowerCase();
}

const playRound = (computerChoice, playerChoice) => {
    if ((computerChoice === 'rock' && playerChoice === 'scissors') ||
        (computerChoice === 'scissors' && playerChoice === 'paper') ||
        (computerChoice === 'paper' && playerChoice === 'rock')) {
        return 'You Lose! ' + `${computerChoice} beats ${playerChoice}`
    } else if ((computerChoice === 'rock' && playerChoice === 'paper') ||
        (computerChoice === 'paper' && playerChoice === 'scissors') ||
        (computerChoice === 'scissors' && playerChoice === 'rock')) {
        return 'You Win! ' + `${playerChoice} beats ${computerChoice}`
    } else {
        return 'You Tie!';
    }
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const playerChoice = getPlayerChoice();
        console.log(playRound(computerChoice, playerChoice));
    }
}

game();