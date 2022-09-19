let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const choicesDiv = document.querySelector("#choices");
const resultsDiv = document.querySelector("#results");


rock.addEventListener('click', function () {
    PlayRound("rock");
});
paper.addEventListener('click', function () {
    PlayRound("paper");
});
scissors.addEventListener('click', function (){
    PlayRound("scissors");
});

function GetComputerChoice(){
    let randomNuber = Math.floor(Math.random() * 3);
    if(randomNuber === 0){
        console.log("rock");
        return "rock";
    }
    else if(randomNuber === 1){
        console.log("paper")
        return "paper";
    }
    else
    {
        console.log("scissors");
        return "scissors"
    }
}

function PlayerSelection(input){
    if(input === "rock" || input === "paper" || input === "scissors"){
        console.log(input);
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
        console.log("Tie");
        DisplayChoices(playerSel, "player");
        DisplayChoices(computerSel, "computer");
        return "Tie";
    }
    else if(playerSel === "rock" && computerSel === "paper" || playerSel === "paper" && computerSel === "scissors" || playerSel === "scissors" && computerSel === "rock"){
        console.log("computer won ");
        DisplayChoices(playerSel, "player");
        DisplayChoices(computerSel, "computer");
        return computerScore++;
    }
    else if(playerSel === "rock" && computerSel === "scissors" || playerSel === "scissors" && computerSel === "paper" || playerSel === "paper" && computerSel === "rock"){
        console.log("Player won ");
        DisplayChoices(playerSel, "player");
        DisplayChoices(computerSel, "computer");
        return playerScore++;
    }
}

function CheckGameOver() {
    if (computerScore > 4) {
        DisplayResults("Computer won");
    }
    else if (playerScore > 4) {
        DisplayResults("Player won");
    }
}

function DisplayChoices(string,id) {
    if (document.querySelector("#"+id)) {
        const p = document.querySelector("#"+id)
        p.textContent = id + " " + string;
    }
    else {
        const p = document.createElement('p');
        p.setAttribute('style', "justify-self: center;align-self: center; margin: 15px;")
        p.setAttribute('id',id)
        p.textContent = id + " " + string;
        choicesDiv.appendChild(p);
    }
}

function DisplayResults(string) {
    const p = document.createElement('p');
    p.textContent = string;
    p.setAttribute('style', "justify-self: center;align-self: center; margin: 15px;");
    resultsDiv.appendChild(p);
}

function PlayRound(sel) {
    CheckWinner(PlayerSelection(sel), GetComputerChoice());
    CheckGameOver();
}










