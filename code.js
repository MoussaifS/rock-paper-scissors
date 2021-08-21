
function game(){
    
let computerPlay = function () {
    let ramdom = Math.floor(Math.random() * 3 )
    
    if (ramdom == 2){
        return "scissors"
    }
    else if (ramdom == 1){
        return "paper"
    }
    else{
         return "rock"
    }
}

let playerPlay = function () {
    let player = prompt("enter your play")
    return player.toLowerCase(); 
}


const playerSelection = playerPlay();
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){
    
    
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
        
    }
    else if (playerSelection == computerSelection){
        return `ITs A DRAW ! ${playerSelection} == ${computerSelection}`
    } 
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
        
    }

    
}


let playerScore = 0 ; 
let computerScore = 0 ;

let score ; 
for (let i = 0 ; i < 5 ; i++) {
    score = playRound(playerPlay() , computerPlay());
    console.log(score);

    if (score.search("Win") >= 1) {
        playerScore ++;
    }
    if (score.search("lose")>= 1){
        computerScore++;
    }

}


if (playerScore > computerScore)
{
    return "YOU WON THE WHOLE GAME"
}
else{
    return "YOU ARE JUST A LOSER, SAME AS THE CODE WRITER"
}

}

console.log(game())