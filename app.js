let gameSeq = [];
let userSeq = [];
let level = 0;
let highScore = 0;
let gameStart = false;
let btnColors = ["red", "green", "orange", "blue"];
let btns = document.querySelectorAll(".btn");
let body = document.querySelector("body");

let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
  reset();

  if (gameStart == false) {
    gameStart = true;
    levelUp();
    console.log("game start");
  }
});

function btnFlash(btn) {
  btn.classList.add("btn-flash");

  setTimeout(function () {
    btn.classList.remove("btn-flash");
  }, 100);
}

function levelUp() {
  userSeq = [];

  level++;
  h3.innerText = `level ${level}`;

  let ranInx = Math.floor(Math.random() * 3);
  let randColor = btnColors[ranInx];
  gameSeq.push(randColor);
  let ranBtn = document.querySelector(`.${randColor}`);
  btnFlash(ranBtn);
}

function checkAns(inx) {
  if (gameSeq[inx] === userSeq[inx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (level > highScore) {
      highScore = level;
      h2.innerHTML = `High Score: ${highScore}`;
    }
    body.classList.add("wrong-indicate");
    setTimeout(function () {
      body.classList.remove("wrong-indicate");
    }, 100);
    h3.innerHTML = `Game is Over ! You was at level <b>${level}</b> - Next Button was: ${
      gameSeq[userSeq.length - 1]
    } <br> Press any key to start.`;
  }
}

function btnPress() {
  console.log("Button is pressed");
  let btn = this;
  btnFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

for (btn of btns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  gameSeq = [];
  userSeq = [];
  level = 0;
  gameStart = false;
}
