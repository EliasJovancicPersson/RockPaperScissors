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
        return "Tie";
    }
    else if(playerSel === "rock" && computerSel === "paper"){
        return "Computer wins!";
    }
    else if(playerSel === "paper" && computerSel === "scissors"){
        return "Computer wins!";
    }
    else if(playerSel === "scissors" && computerSel === "rock"){
        return "Computer wins!";
    }
    else if(playerSel === "rock" && computerSel === "scissors"){
        return "Player wins!";
    }
    else if(playerSel === "paper" && computerSel === "rock"){
        return "Player wins!";
    }
    else if(playerSel === "scissors" && computerSel === "paper"){
        return "Player wins!";
    }
}

console.log(CheckWinner(PlayerSelection(),GetComputerChoice()));


