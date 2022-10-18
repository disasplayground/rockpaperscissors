let user = "";
let play = ["rock", "paper", "scissors"];


function start() {

    user = (prompt("Type Rock/Paper/Scissors!")).toLowerCase();
    return user;

};


function game() {

    let number = Math.ceil(Math.random()*3);
    let computer = play[number];

    let win = "Computer plays " + computer + ". You win!";
    let lose = "Computer plays " + computer + ". You lose!";
    let draw = "Computer plays " + computer + ". It's a draw!"

    if (user === computer) {
        alert(draw)
    } else {
        if (user === "rock") {
            switch(computer) {
                case "paper":
                    alert(lose);
                    break;
                case "scissors":
                    alert(win);
                    break;
            }
        } if (user === "paper") {
            switch(computer) {
                case "scissors":
                    alert(lose);
                    break;
                case "rock":
                    alert(win);
                    break;
            }
        } if (user === "scissors") {
            switch(computer) {
                case "rock":
                    alert(lose);
                    break;
                case "paper":
                    alert(win);
                    break;
            }
        } else {
            alert("What is that.")
        }
    };

};