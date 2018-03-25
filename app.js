// alert("I'm working!");

// let p1 = document.getElementById('player1');
// let p2 = document.getElementById('player2');


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
let currentSecond = document.getElementById("second");



const playerOne = () => {
  console.log("PRESSED");
  current.classList.remove("red");
  current.nextElementSibling.classList.add("red");
  current = current.nextElementSibling;
  boxOne.push(1);
  if (boxOne.length >= 19) {
    alert("Player 1 Won");
  }
}

  const playerTwo = () => {
    console.log("Two PRESSED");
    currentSecond.classList.remove("blue");
    currentSecond.nextElementSibling.classList.add("blue");
    currentSecond = currentSecond.nextElementSibling;
    boxTwo.push(1);
    if (boxTwo.length >= 19) {
      alert("Player 2 Won");
    }
  }

// document.getElementsByClassName('className');
// });


const moveBox = (event) => {
  if (event.keyCode == 39) {
    playerOne();
  }
  if (event.keyCode == 68) {
    playerTwo();
  }
}

document.onkeydown = moveBox;
