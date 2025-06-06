let compScore = 0;
let userScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    // rock, paper scissors
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame = () => {
    // console.log("Game was draw.");
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "#081b31";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lose.");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}


const playGame = (userChoice) => {
    // console.log(`User choice = ${userChoice}`);
    
    //Generate Computer Choice
    const compChoice = genCompChoice();
    // console.log(`Computer choice = ${compChoice}`);

    if (userChoice === compChoice) {
        //Draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // paper scissors
            userWin = compChoice === "paper" ? false : true;
        } else if
         (userChoice === "paper") {
            // rock scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock paper     user have scissors
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})