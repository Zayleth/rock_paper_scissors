// ROCK, PAPER, SCISSORS

const options = ["rock", "paper", "scissors"];

// Paso 2: escriba la lógica para elegir la computadora

function getComputerChoice(options) {
  let computerChoice = options[Math.floor(Math.random() * (options.length))];
  return computerChoice;
}

// Paso 3: Escribe la lógica para obtener la elección humana.

function getHumanChoice() {
  let humanChoice = prompt ("rock, paper, scissors: ");
  return humanChoice.slice([0]).toLowerCase();
}

// Paso 4: declarar las variables globales de puntuación de los jugadores
// Tu juego realizará un seguimiento de la puntuación de los jugadores. Escribirás variables para realizar un seguimiento de la puntuación de los jugadores.

let humanScore = 0;
let computerScore = 0;

// Paso 5: Escribe la lógica para jugar una sola ronda.
// rock > scissors
// scissors > paper
// paper > rock

let computerChoice = getComputerChoice(options);
let humanChoice = getHumanChoice();

function playRound (computerChoice, humanChoice, round_counter) {
  if (computerChoice === humanChoice) {
    computerScore++;
    humanScore++;
    return("Oh! It is a tie");
  
  } else if (humanChoice === "rock" && computerChoice === "scissors" 
  || humanChoice === "scissors" && computerChoice == "paper" 
  || humanChoice === "paper" && computerChoice === "rock") {

    humanScore++;
    return("Nice! You win ;)");

  } else {
    computerScore++;
    return("You lost dude ");
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
  
  while (round_counter < 5) {
    
    playRound(humanScore, computerScore, round_counter)

    if (humanScore > computerScore) {
      alert ("Final result: you are the WINNER");
    
    } else if (humanScore < computerScore) {
      alert ("Final result: you lost, try again! :)");
    
    } else {
      alert ("Final result: It's a tie");
    }
  }
}

playGame(playRound);
