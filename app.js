let user = (prompt("Type Rock/Paper/Scissors!")).toLowerCase();

game();

function game() {

    let number = Math.ceil(Math.random()*3);
    let computer = "";

    switch(number) {
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper";
            break;
        case 3:
            computer = "scissors";
            break;
    };

 
    let win = "Computer plays " + computer + ". You win!";
    let lose = "Computer plays " + computer + ". You lose!";
    let draw = "Computer plays " + computer + ". It's a draw!"


    if (computer === user) {
        alert(draw)
    } else {
        if (computer === "rock") {
            if (user === "paper") {
                alert(win)
            } else {
                alert(lose)
            }
        } if (computer === "paper") {
            if (user === "rock") {
                alert(lose)
            } else {
                alert(win)
            }
        } if (computer === "scissors") {
            if (user === "paper") {
                alert(lose)
            } else {
                alert(win)
            }
        }
    };

};