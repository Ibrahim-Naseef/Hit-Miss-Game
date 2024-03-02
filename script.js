var timer = 30;
var score = 0;
var rn = 0;
function incScr() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function getNewHit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = rn;
}
function makeBubble() {
  var clutter = "";

  for (var i = 0; i <= 125; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".bpanel").innerHTML = clutter;
}
function runTimer() {
  setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval();
      document.querySelector(".bpanel").innerHTML = `<h1>GAME OVER</h1>\n<p>You have scored ${score} points</p>`;

    }
  }, 1000);
}

document.querySelector(".bpanel").addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum == rn){
        incScr();
        makeBubble();
        getNewHit();

    }
});

getNewHit();
runTimer();
makeBubble();
