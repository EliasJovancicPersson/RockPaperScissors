let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerDiv = document.querySelector("#player");
const computerDiv = document.querySelector("#computer")
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
        DisplayChoices(playerSel, "player",false);
        DisplayChoices(computerSel, "computer",false);
        return "Tie";
    }
    else if(playerSel === "rock" && computerSel === "paper" || playerSel === "paper" && computerSel === "scissors" || playerSel === "scissors" && computerSel === "rock"){
        console.log("computer won ");
        DisplayChoices(playerSel, "player",false);
        DisplayChoices(computerSel, "computer",true);
        return ++computerScore;
    }
    else if(playerSel === "rock" && computerSel === "scissors" || playerSel === "scissors" && computerSel === "paper" || playerSel === "paper" && computerSel === "rock"){
        console.log("Player won ");
        DisplayChoices(playerSel, "player",true);
        DisplayChoices(computerSel, "computer",false);
        return ++playerScore;
    }
}

function CheckGameOver() {
    if (computerScore > 4) {
        DisplayResults("Computer won");
        ShowResetButton();
    }
    else if (playerScore > 4) {
        DisplayResults("Player won");
        ShowResetButton();
    }
}

function DisplayChoices(string,id,winner) {
    if (document.querySelector("#"+id+"Choice")) {
        const p = document.querySelector("#"+id+"Choice")
        p.textContent = string;
        if(winner){
            p.style.backgroundColor = "green";
        }
        if(!winner){
            p.style.backgroundColor = "red";
        }
    }
    else {
        const p = document.createElement('p');
        p.setAttribute('style', "justify-self: center;align-self: center; border-style:solid;border-width:2px;width:50px;text-align:center")
        p.setAttribute('id',id+"Choice")
        p.textContent = string;
        const target = document.querySelector("#"+id); 
        if(winner){
            p.style.backgroundColor = "green";
        }
        if(!winner){
            p.style.backgroundColor = "red";
        }
        target.appendChild(p);
    }
}

function DisplayResults(string) {
    const p = document.createElement('p');
    p.textContent = string;
    p.setAttribute('style', "justify-self: center;align-self: center; margin: 15px;");
    resultsDiv.appendChild(p);
}

function UpdateResults(){
    if(document.querySelector("#score .player") && document.querySelector("#score .computer")){
        const playerScoreP = document.querySelector("#score .player");
        const computerScoreP = document.querySelector("#score .computer")
        playerScoreP.textContent = "Player score: "+playerScore;
        computerScoreP.textContent = "Computer score: "+computerScore;
    }
}

function ShowResetButton(){
    const resetButton = document.createElement("button");
    resetButton.textContent = "Play again?";
    resetButton.setAttribute('style',"width: 100px;height:25px;justify-self:center;align-self:center;margin: 50px")
    resetButton.addEventListener('click',function(){
        ResetGame();
    });
    resultsDiv.appendChild(resetButton);
}

function ResetGame(){
    location.reload();
}

function PlayRound(sel) {
    if(playerScore < 5 && computerScore < 5){
        CheckWinner(PlayerSelection(sel), GetComputerChoice());
        UpdateResults()
        CheckGameOver();
    } 
}










