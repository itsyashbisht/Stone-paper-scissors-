let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const comp = document.querySelector("#comp-score");
const user = document.querySelector("#user-score");

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin === true) {
    msg.innerText = `You win! Your ${userChoice} beats the ${compChoice}` ;
    msg.style.backgroundColor = "Red" ;
    userScore = user.innerText ;
    userScore++;
    user.innerText = userScore ;
  } else {
    msg.innerText = `You LOSE! ${compChoice} beats your ${userChoice} `;
    msg.style.backgroundColor = "Green" ;
    compScore = comp.innerText ;
    compScore++;
    comp.innerText = compScore ;
  }
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[Math.floor(Math.random() * 3)];
};

const drawGame = () => {
  msg.innerText = "Game was a DRAW!, Play Again";
  msg.style.backgroundColor = "black"
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  //Genrate computers choice
  const compChoice = genCompChoice();
  console.log("Comp choice =", compChoice);

  if (userChoice === compChoice) {
    //Draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "scissors") {
      //paper,rock
      userWin = compChoice === "paper" ? true : false;
    } else{
      //scissors,rock
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice , compChoice);
  }
};


choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});


