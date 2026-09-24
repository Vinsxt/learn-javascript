let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  document.querySelector(".score-text").innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function displayResultDOM(result, playerMove, computerMove) {
  document.querySelector(".result-text").innerHTML = result;
  document.querySelector(".moves-text").innerHTML =
    `You <img src="images/${playerMove}-emoji.png" class="move-icon">  <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
  document.querySelector(".score-text").innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function playGame(playerMove) {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerMove = "";

  if (randomNumber === 1) {
    computerMove = "rock";
  } else if (randomNumber === 2) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }

  console.log(`Computer move: ${computerMove}`);

  let result = "";

  if (playerMove === computerMove) {
    result = "Tie.";
    score.ties++;
    displayResultDOM(result, playerMove, computerMove);
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = "You win.";
    score.wins++;
    displayResultDOM(result, playerMove, computerMove);
  } else {
    result = "You lose.";
    score.losses++;
    displayResultDOM(result, playerMove, computerMove);
  }

  localStorage.setItem("score", JSON.stringify(score));
}
