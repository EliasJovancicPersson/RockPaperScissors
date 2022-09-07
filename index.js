let playerScore = 0;
let computerScore = 0;
let rounds = 5;
let currentRound = 0;

function GetComputerChoice(){
    let randomNuber = Math.floor(Math.random() * 3);
    if(randomNuber === 0){
        return "rock";
    }
    else if(randomNuber === 1){
        return "paper";
    }
    else
    {
        return "scissors"
    }
}

function PlayerSelection(){
    let input = prompt("Rock, Paper or Scissors?").toLowerCase();
    if(input === "rock" || input === "paper" || input === "scissors"){
        return input;
    }
    else
    {
        console.log("Error")
        playerSelection();
    }
}

function CheckWinner(playerSel,computerSel){

    if(playerSel === computerSel){
        currentRound--
        console.log("Tie");
        return "Tie";
    }
    else if(playerSel === "rock" && computerSel === "paper" || playerSel === "paper" && computerSel === "scissors" || playerSel === "scissors" && computerSel === "rock"){

        return computerScore++;
    }
    else if(playerSel === "rock" && computerSel === "scissors" || playerSel === "scissors" && computerSel === "paper" || playerSel === "paper" && computerSel === "rock"){

        return playerScore++;
    }
}

function GameLogic(){
    for (currentRound; currentRound < rounds; currentRound++) {
        CheckWinner(PlayerSelection(),GetComputerChoice());
        console.log(playerScore + " player score " + computerScore + " computer score");
    }
    if(playerScore > computerScore){
        console.log("Player won most rounds with a " + (playerScore - computerScore) + " point lead");
    }
    else{
        console.log("computer won most rounds with a " + (computerScore - playerScore) + " point lead");
    }
}

GameLogic();




