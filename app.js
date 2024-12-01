console.log("hello world");
let turnAudio = new Audio("./resources/click.mp3");
let isGameOver = false;
let turn = "0";

const changeTurn = () => {
  return turn === "0" ? "X" : "0";
};

const checkWin = () => {
  let boxTexts = document.querySelectorAll(".boxText");
  let win = [
    [0, 1, 2, 15, -5, 0],
    [3, 4, 5, 49, -5, 0],
    [6, 7, 8, 84, -5, 0],
    [0, 4, 8, 50, -5, 45],
    [2, 4, 6, 50, -5, 135],
    [0, 3, 6, 48, -40, 90],
    [2, 5, 8, 48, 27, 90],
    [1, 4, 7, 48, -6, 90],
  ];

  win.forEach((e) => {
    if (
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[1]].innerText === boxTexts[e[2]].innerText &&
      boxTexts[e[0]].innerText !== ""
    ) {
      let Winner = boxTexts[e[1]].innerText;
      document.querySelector(".info").innerText = `${Winner} Wins`;
      isGameOver = true;
      //document.querySelector("#winImg").style.width = "110px";
      let imgClass = document.querySelector(".imgBox");
      let img = imgClass.querySelector("img");
      img.style.width = "110px";

      let line = document.querySelector(".line");
      line.style.top = `${e[3]}%`;
      line.style.left = `${e[4]}%`;
      line.style.transform = `rotate(${e[5]}deg)`;
      line.style.display = "inline-block";
    }
  });
};

let boxs = document.querySelectorAll(".box");

boxs.forEach((box) => {
  let boxText = box.querySelector(".boxText");
  box.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turnAudio.play();
      checkWin();
      turn = changeTurn();
      if (!isGameOver) {
        document.querySelector(".info").innerText = `Turn for ${turn}`;
      }
    }
  });
});

let reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
  let boxTexts = document.querySelectorAll(".boxText");
  document.querySelector(".line").style.display = "none";

  boxTexts.forEach((e) => {
    e.innerText = "";
    turn = "0";
    document.querySelector(".info").innerText = `Turn for ${turn}`;
    isGameOver = false;
    let imgClass = document.querySelector(".imgBox");
    let img = imgClass.querySelector("img");
    img.style.width = "0";
  });
});
