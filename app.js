let user = "";
let play = ["rock", "paper", "scissors"];
let computerScore = 0;
let userScore = 0;
let repeat = false;


function round() {

    user = (prompt("Computer: " + computerScore + " | You: " + userScore + "\nType Rock/Paper/Scissors!")).toLowerCase();

    let number = Math.floor(Math.random()*3);
    let computer = play[number];

    let win = "Computer plays " + computer + ". You win!";
    let lose = "Computer plays " + computer + ". You lose!";
    let draw = "Computer plays " + computer + ". It's a draw!";

    if (play.includes(user)) {
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
            }
        }
    } else {
        alert("What is that.");
        repeat = !repeat;
    };
};


function game() {

    for (let i = 0; i < 5; i++) {
        
        let n = i;

        round();

        if (repeat) {
            i--;
            repeat = !repeat;
        }

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