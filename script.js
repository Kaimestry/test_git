const botTextBox = document.getElementById('bot-selection');
const rock = document.getElementById('rockBtn');
const paper = document.getElementById('paperBtn');
const scissors = document.getElementById('scissorsBtn');
const resultText = document.getElementById('resultText');

const loseColor = 'red';
const winColor = 'green';
const drawColor = 'black';

const botChoiceText = ['ROCK🪨', 'PAPER📄', 'SCISSORS✂️'];

let bot;
let selection;
let result;
let resultColor;

// these add event listeners and trigger playRound()
rock.addEventListener('click', () => {
  selection = 0;
  playRound();
});
paper.addEventListener('click', () => {
  selection = 1;
  playRound();
});
scissors.addEventListener('click', () => {
  selection = 2;
  playRound();
});

function playRound() {
  bot = Math.floor(Math.random() * 3);
  const botPick = botChoiceText[bot];

  console.log('Player:', selection, 'Bot:', bot, 'BotPick:', botPick);

  if (selection === bot) {
    result = "It's a draw!";
    resultColor = drawColor;
  } else if (
    (selection === 0 && bot === 2) ||
    (selection === 1 && bot === 0) ||
    (selection === 2 && bot === 1)
  ) {
    result = "Player won!";
    resultColor = winColor;
  } else {
    result = "Player lost :(";
    resultColor = loseColor;
  }

  // update UI:
  botTextBox.textContent = botPick;
  botTextBox.style.color = 'white';
  botTextBox.style.backgroundColor = 'black';


  resultText.textContent = result;
  resultText.style.color = resultColor;

  // disable buttons and highlight selected
  disableButtons();
}

function disableButtons() {
  const selectionActivate = document.querySelectorAll('.option');
  selectionActivate.forEach(btn => {
    btn.disabled = true;
    btn.classList.remove('active');
  });
  // add active class only to clicked button
  if (selection === 0) rock.classList.add('active');
  if (selection === 1) paper.classList.add('active');
  if (selection === 2) scissors.classList.add('active');
}

// retry button reload
const reset = document.getElementById('retryBtn');
reset.addEventListener('click', () => {
  location.reload();
});
