const playerButtons = document.querySelectorAll(".selection");
let rps = ["Rock", "Paper", "Scissors"];
let result = document.getElementById("result");
let score = document.getElementById("score");
let game = {
    round: 0,
    computerScore: 0,
    userScore: 0
    };


playerButtons.forEach(button => {

    button.addEventListener("click", function() {
        let playerSelection = this.innerHTML;
        let computerSelection = rps[Math.floor(Math.random()*3)];
        game.round++;
        playerRound(playerSelection, computerSelection);
    });

});


function playerRound(user, computer) {


    let gameText = "Computer plays " + computer + ". ";

    let lose = () => {
        result.innerText = gameText + "You lose!";
        game.computerScore++;
    };

    let win = () => {
        result.innerText = gameText + "You win!";
        game.userScore++;
    };

    let draw = () => {
        result.innerText = gameText + "It's a draw!";
    };


    if (user !== computer) {
        if (user === "Rock") {
            computer === "Paper" ? lose() : win();
        } if (user === "Paper") {
            computer === "Scissors" ? lose() : win();
        } if (user === "Scissors") {
            computer === "Rock" ? lose() : win();
        };
    } else {
        draw();
    };


    count(game.round, game.computerScore, game.userScore);

    
};


function count(round, comp, user) {

    let scoreCard = "Round: " + game.round + " | Computer: " + game.computerScore + " | Player: " + game.userScore;

    if (round < 5) {
        score.innerText = scoreCard;
    } if (round === 5) {
        if (comp > user) {
            score.innerText = scoreCard + ". You lose!";
        } if (comp < user) {
            score.innerText = scoreCard + ". You win!";
        } if (comp === user) {
            score.innerText = scoreCard + ". It's a draw!";
        };
    };

        
    if (game.round === 5) {
        game = {
            round: 0,
            computerScore: 0,
            userScore: 0
        };
    };
    
};



