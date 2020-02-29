var teamABoard = document.getElementById('team-a');
var teamBBoard = document.getElementById('team-b');
var scoreATag = document.getElementById('score-a');
var scoreA = 0;
var scoreBTag = document.getElementById('score-b');
var scoreB = 0;
var maxScoreTag = document.getElementById('max-score');
var maxScore = maxScoreTag.value;
var reset = document.getElementById('reset');


scoreATag.innerHTML = scoreA;
scoreBTag.innerHTML = scoreB;

teamABoard.addEventListener('click', function() {
  scoreA++;
  scoreATag.innerHTML = scoreA;
  if(scoreA == maxScoreTag.value && scoreA != 0) {
    alert('Team A won!');
    teamABoard.style.backgroundColor = "#00CC6A";
    teamBBoard.style.backgroundColor = "#FF4343";
  }
});

teamBBoard.addEventListener('click', function() {
  if (scoreB == maxScoreTag.value && scoreB != 0) {
    alert('Team B won!');
    teamABoard.style.backgroundColor = "#FF4343";
    teamBBoard.style.backgroundColor = "#00CC6A";
  }
  scoreB++;
  scoreBTag.innerHTML = scoreB;
});

reset.addEventListener('click', function() {
  scoreA = 0;
  scoreB = 0;
  maxScoreTag.value = 0;
  scoreATag.innerHTML = scoreA;
  scoreBTag.innerHTML = scoreB;
  teamABoard.style.backgroundColor = "#FFB900";
  teamBBoard.style.backgroundColor = "#FFB900";
})
