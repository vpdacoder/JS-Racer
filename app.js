// alert("I'm working!");

let p1 = document.getElementById('player1');
let p2 = document.getElementById('player2');


//make array to push values from car movements
boxOne = [];
boxTwo = [];

// const movePlayerOne = () => {
//   document.getElementsByClassName('red').classList.remove('red').nextElementSibling.classList.add('red');
// }

// document.addEventListener('click', () => {
//   console.log("PRESSED");
//   let first = document.querySelector("red");
//   first.classList.remove("red");
// })


let current = document.querySelector("td");


document.addEventListener('click', () => {
  console.log("PRESSED");
  current.classList.remove("red");
  current.nextElementSibling.classList.add("red");
  current = current.nextElementSibling;
  boxOne.push(1);
  if (boxOne.length > 18) {
    alert("Player 1 Won");
  }


// document.getElementsByClassName('className');
});





// document.keydown = moveBox;



// button.addEventListener("click", () => {
// document.body.classList.toggle("back");
// });
