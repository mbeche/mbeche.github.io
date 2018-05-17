let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
  numSquares = 3;
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  squares.forEach(function (square, index){
    if (index < colors.length){
      square.style.backgroundColor = colors[index];
    }
    else {
      square.style.display = "none";
    }
  })
  messageDisplay.textContent = "";
})

hardBtn.addEventListener("click", function(){
  numSquares = 6;
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  squares.forEach(function (square, index){
    square.style.backgroundColor = colors[index];
    square.style.display = "block";
  })
  messageDisplay.textContent = "";
})

resetButton.addEventListener("click", function(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  squares.forEach(function (square, index){
    square.style.backgroundColor = colors[index];
  })
  resetButton.textContent = "New Colors";
  h1.style.background= "steelblue";
  messageDisplay.textContent = "";
})

colorDisplay.textContent = pickedColor;

squares.forEach(function (square, index){
    square.style.backgroundColor = colors[index];
    square.addEventListener("click", function(){
      const clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        resetButton.textContent= "Play again!"
      }
      else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
);

function changeColors(color) {
  squares.forEach(function (square){
    square.style.backgroundColor = color;
  })
  h1.style.background=color;
};

function pickColor(){
  const random =  Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColors(num){
  arr = [];
  for (var i=0; i<num; i++){
    arr.push(randomColor());
  }
  return arr
}

function randomColor(){
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `rgb(${r}, ${g}, ${b})`
}

// for (var i=0; i < colors.length; i++){
//   squares[i].style.backgroundColor = colors[i];
//   squares[i].addEventListener("click", function(){
//     const clickedColor = this.style.backgroundColor;
//     if (clickedColor === pickedColor){
//       messageDisplay.textContent = "Correct!";
//       changeColors(clickedColor);
//     }
//     else {
//       this.style.backgroundColor = "steelblue";
//       messageDisplay.textContent = "Try Again";
//     }
//   });
// }

// function changeColors(color){
//   for (var i=0; i < colors.length; i++){
//     squares[i].style.backgroundColor = color;
//   };
// };
