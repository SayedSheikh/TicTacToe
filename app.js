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
    [0, 1, 2, -1.5, 3.3, 0],
    [3, 4, 5, -1.5, 10.5, 0],
    [6, 7, 8, -1.5, 17.5, 0],
    [0, 4, 8, -1, 10.5, 45],
    [2, 4, 6, -2, 10.5, 135],
    [0, 3, 6, -8.5, 10, 90],
    [2, 5, 8, 5.6, 10, 90],
    [1, 4, 7, -1.5, 10, 90],
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
      document.querySelector(".line").style.width = "24vw";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
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
  document.querySelector(".line").style.width = "0";

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
