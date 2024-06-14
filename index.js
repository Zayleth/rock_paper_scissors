// ROCK, PAPER, SCISSORS

const options = ["rock", "paper", "scissors"];

// Paso 2: escriba la lógica para elegir la computadora

function getComputerChoice(options) {
  let computerChoice = options[Math.floor(Math.random() * (options.length))];
  return computerChoice;
}

// Paso 3: Escribe la lógica para obtener la elección humana.

function getHumanChoice() {
  let humanChoice = prompt ("Play Game: rock, paper, scissors: ").toLowerCase();
  
  if (humanChoice === null) {
    return null;
  
  } else if (humanChoice !== "rock"
  && humanChoice !== "paper"
  && humanChoice !== "scissors") {
    alert ("Invalid character. Please enter rock, paper or scissors");
    humanChoice = prompt ("Play Game: rock, paper, scissors: ");
  }
  
  return humanChoice;
}

// Paso 4: declarar las variables globales de puntuación de los jugadores
// Tu juego realizará un seguimiento de la puntuación de los jugadores. Escribirás variables para realizar un seguimiento de la puntuación de los jugadores.



// Paso 5: Escribe la lógica para jugar una sola ronda.
// rock > scissors
// scissors > paper
// paper > rock

// let computerChoice = getComputerChoice(options);
// let humanChoice = getHumanChoice();

function playRound (computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    return("Oh! It is a tie");
  
  } else if (humanChoice === "rock" && computerChoice === "scissors" 
  || humanChoice === "scissors" && computerChoice == "paper" 
  || humanChoice === "paper" && computerChoice === "rock") {
    return("Nice! You win ;)");

  } else {
    return("You lost ");
  }
}

// Paso 6: escribe la lógica para jugar todo el juego.
/*
Tu juego se desarrollará en 5 rondas. Escribirás una función llamada playGame 
que llame playRound a jugar 5 rondas, 
realice un seguimiento de las puntuaciones y declare un ganador al final.

Crea una nueva función llamada playGame.
Mueva su playRound función y puntúe las variables 
para que se declaren dentro de la nueva playGamefunción

*/
let round_counter = 0; // para llevar el conteo de rondas

function playGame (playRound) {
  let humanScore = 0;
  let computerScore = 0;
  
  while (round_counter < 5) {
    let round = playRound(getHumanChoice(), getComputerChoice(options));
    
    if (round === "Nice! You win ;)") {
      humanScore++; 
      console.log("Nice! You win ;)" + " you have: " + humanScore + " ⭐, and the computer has: " + computerScore + " ⭐.");
    
    } else if (round === "You lost ") {
      computerScore++;
      console.log ("You lost, try again!. You have " + humanScore + " ⭐. And the computer has " + computerScore + " ⭐.");
    
    } else {
      console.log("Ohhh! It is a tie. You have: " + humanScore + " ⭐" + " and the computer has: " + computerScore + " ⭐")
    }
    round_counter++;
  }

  if (humanScore > computerScore) {
    alert("YAYYYY! YOU WON THE GAME. CONGRATULATIONS!")
  
  } else if (computerScore > humanScore) {
    alert("You lost the game. Try again :)")
  
  } else {
    alert("It is a tie. Good play!")
  }
  
}

// final result ---> winner
playGame(playRound);
