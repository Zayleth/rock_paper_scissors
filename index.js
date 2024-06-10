// ROCK, PAPER, SCISSORS

const options = ["rock", "paper", "scissors"];

// Paso 2: escriba la lógica para elegir la computadora

function getComputerChoice(options) {
  let random_options = options[Math.floor(Math.random() * (options.length))];
  return random_options;
}

// Paso 3: Escribe la lógica para obtener la elección humana.

function getHumanChoice() {
  let humanChoice = prompt ("rock, paper, scissors: ")

  if (humanChoice !== "rock" || humanChoice !== "paper" || humanChoice !== "scissors") {
    
  }
}

