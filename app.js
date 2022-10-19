let user = "";
let play = ["rock", "paper", "scissors"];
let computerScore = 0;
let userScore = 0;


function round() {

    user = (prompt("Computer: " + computerScore + " | You: " + userScore + "\nType Rock/Paper/Scissors!")).toLowerCase();

    let number = Math.floor(Math.random()*3);
    let computer = play[number];

    let win = "Computer plays " + computer + ". You win!";
    let lose = "Computer plays " + computer + ". You lose!";
    let draw = "Computer plays " + computer + ". It's a draw!";

    if (user === computer) {
        alert(draw)
    } else {
        if (user === "rock") {
            if (computer === "paper") {
                computerScore++;
                alert(lose);
            } else {
                userScore++;
                alert(win);
            } 
        } if (user === "paper") {
            if (computer === "scissors") {
                computerScore++;
                alert(lose);
            } else {
                userScore++;
                alert(win);
            } 
        } if (user === "scissors") {
            if (computer === "rock") {
                computerScore++;
                alert(lose);
            } else {
                userScore++;
                alert(win);
            } 
        } if (user !== "rock" && user !== "paper" && user !== "scissors") {
            alert("What is that.")
        };
    };

};


function game() {

    for (let i = 0; i < 5; i++) {
        
        round();

        if (i === 4) {
            if (computerScore > userScore) {
                alert("Computer: " + computerScore + " | You: " + userScore + "\nYou lose.")
            } if (computerScore < userScore) {
                alert("Computer: " + computerScore + " | You: " + userScore + "\nYou lose.")
            } if (computerScore === userScore) {
                alert("It's a draw!")
            }
        };
    };

};

game();