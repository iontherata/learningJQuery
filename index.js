const allColours = ["red", "yellow", "green", "blue"];

let gamePattern = [];
let playerPattern = [];

let score = 1;
let started = false;

$(document).keypress(function () {
  $("#level").text("Score: ");
  gameStart();
  let started = true;
});

$(".btn").click(function () {
  const clickedColour = $(this).attr("id");
  console.log(clickedColour);
  $("#" + clickedColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playerPattern.push(clickedColour);

  checkAnswer(playerPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === playerPattern[currentLevel]) {
    if (playerPattern.length === gamePattern.length) {
      $("#level").text("Score: " + score);
      score++;
      setTimeout(function () {
        gameStart();
      }, 1000);
    }
  } else {
    $("#level").text("YOU FAILED, TRY AGAIN. Press any button");
    newGame();
  }
}

function gameStart() {
  playerPattern = [];
  const randomColour = Math.floor(Math.random() * 4);
  gamePattern.push(allColours[randomColour]);

  $("#" + allColours[randomColour])
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
}

function newGame() {
  gamePattern = [];
  score = 1;
  started = false;
}

// $("#" + allColours[randomColour]).addClass("pressed");
// setTimeout(function () {
//   $("#" + allColours[randomColour]).removeClass("pressed");
// }, 1000);
