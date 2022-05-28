const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
    } else {
    console.log('Error');
    }
  };
  
  function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      } 
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice){
      return('Tie Game!!!');
    }
     if (userChoice === 'rock') {
       if (computerChoice === 'paper'){
         return 'Paper Covers Rock!';
       } else {
        return 'You won!';
       }
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors') {
        return 'Scissors cuts paper!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Rock smashes paper!';
      } else {
        return 'You Won!'
      }
    }
    if (userChoice === 'bomb') {
      return 'GAME OVER, YOU WIN!!!'
    } 
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You chose: ' + userChoice);
    console.log('The computer chose: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice)); 
  };
  playGame();