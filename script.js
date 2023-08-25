const getComputerChoice = () => {
    let options = ['rock', 'paper', 'scissors'];

    return options[Math.floor(Math.random() * options.length)];
}

const getPlayerChoice = () => {
    let playerChoice = prompt('Choose rock, paper, or scissors');
    return playerChoice.toLowerCase();
}


console.log(getPlayerChoice());