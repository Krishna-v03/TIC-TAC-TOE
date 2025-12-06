let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#result");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");
let newbtn = document.querySelector("#newbtn");
let count = 0;

let turnO = true;
let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetgame = () => {
  turnO = true;
  btnsenable();
  msgcontainer.classList.add("hide");
  count = 0;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Button was Clicked");
    if (turnO) {
      box.innerHTML = "X";
      turnO = false;
    } else {
      box.innerHTML = "O";
      turnO = true;
    }
    box.disabled = true;
    count++;
    let isWinner = checkWinner();
    if (count == 9 && !isWinner) {
      draw();
    }
  });
});

const btnsdisable = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const btnsenable = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulaions, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  btnsdisable();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        console.log("Winner " + pos1);
        showWinner(pos1);
      }
    }
  }
};

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);

const draw = () => {
  msg.innerText = "Game has No Winners";
  msgcontainer.classList.remove("hide");
  boxes.disabled = true;
};
