let generatedValue = [];
let pressedVal = [];

started = false;

let color = ["red", "blue", "green", "yellow"];

let level = 0;
let maxlvl = -1;

let lvltxt = document.querySelector(".lvl");
let goh1 = document.querySelector(".gover");
let max = document.querySelector(".max");

document.addEventListener("keypress", function () {
  if (started === false) {
    started = true;
    lvltxt.innerHTML = `Level ${level}`;
    goh1.innerHTML = "";
    max.innerHTML = "";
    setTimeout(() => {
      levelUp();
    }, 1000);
  }
});

function flash(Currbtn) {
  Currbtn.classList.add("flash");
  setTimeout(function () {
    Currbtn.classList.remove("flash");
  }, 250);
}

function levelUp() {
  pressedVal = [];
  level++;
  lvltxt.innerHTML = "Level " + level;
  let num = Math.floor(Math.random() * 4);
  let clr = color[num];
  let rdbtn = document.querySelector(`#${clr}`);
  generatedValue.push(clr);
  flash(rdbtn);
}

let btns = document.querySelectorAll(".btn");
for (let btn of btns) {
  btn.addEventListener("click", function () {
    btn.classList.add("press");
    setTimeout(function () {
      btn.classList.remove("press");
    }, 200);
    let clr = btn.getAttribute("id");
    pressedVal.push(clr);
    checkEntry(pressedVal.length - 1);
  });
}

function checkEntry(currnum) {
  if (generatedValue[currnum] === pressedVal[currnum]) {
    if (pressedVal.length === generatedValue.length) {
      setTimeout(() => {
        levelUp();
      }, 1000);
    }
  } else {
    gameOver();
  }
}

function gameOver() {
  let mbox = document.querySelector(".mainbox");
  mbox.style.backgroundColor = "red";
  setTimeout(() => {
    mbox.style.backgroundColor = "white";
  }, 250);
  if (maxlvl < level) {
    maxlvl = level;
  }
  goh1.innerHTML = "Game Over! Press Any Key to Start again!";
  lvltxt.innerHTML = `Achieved Level ${level}`;
  max.innerHTML = `Max Recoreded ${maxlvl}`;
  generatedValue = [];
  pressedVal = [];
  level = 0;
  started = false;
}
