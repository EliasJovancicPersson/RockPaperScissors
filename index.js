function getComputerChoice(){
    let randomNuber = Math.floor(Math.random() * 3);
    if(randomNuber === 0){
        return "Rock";
    }
    else if(randomNuber === 1){
        return "Paper";
    }
    else
    {
        return "Scissors"
    }
}


