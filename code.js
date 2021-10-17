let userScore = 0; 
let compScore = 0; 

const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".results > p")
const rock_div = document.getElementById("Rock")
const paper_div = document.getElementById("Paper")
const scissors_div = document.getElementById("Scissors")

let computerPlay = function () {
    let random = Math.floor(Math.random() * 3 )
    switch( random ) {
        case 0:
            return "Rock"
        case 1 :
            return "Paper"
        case 2 :
            return "Scissors"
        }
}

function win(user , computer) {
    result_div.innerHTML = user + " beats "  + computer + ". YOU WIN"
    userScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
}
function lose(user , computer) {
    result_div.innerHTML = user + " lose to  "  + computer + ". YOU lose "
    compScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;    
}
function draw() {
    result_div.innerHTML = "its a DRAW"
}

function game(userChoice){
    const computerChoice = computerPlay();
    switch( userChoice + computerChoice){
        case "RocksScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice , computerChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice , computerChoice);
            break;
        case "RockRock":
        case "ScissorsScissors":
        case "PaperPaper":
            draw(userChoice , computerChoice);
            break;
    }

    function resetScore() {
        userScore = 0;
        compScore = 0;
      }

    if (userScore == 5){
       alert("YOU HAVE WON ...") 
       resetScore();
    }
    else if (compScore == 5){
        alert("YOU HAVE lost  ...") 
        resetScore();
     }
 
}

function main() {

 rock_div.addEventListener('click', function() {
    game("Rock")
 })

 paper_div.addEventListener('click', function() {
    game("Paper")
 })
 scissors_div.addEventListener('click', function() {
    game("Scissors")
 })
 
}

main();

// const playerSelection = playerPlay;
// const computerSelection = computerPlay();

//   if ((playerSelection=="rock" && computerSelection=="scissors") || (playerSelection=="scissors" && computerSelection=="paper") || (playerSelection=="paper" && computerSelection=="rock")){
//         alert (`You Win! ${playerSelection} beats ${computerSelection}`)  
//     }
//     else if (playerSelection === computerSelection){
//         alert (`ITs A DRAW ! ${playerSelection} == ${computerSelection}`)
//     } 
//     else {
//         alert(`You lose! ${playerSelection} losses to  ${computerSelection}`)
//     } 
    
// }

// alert(computerPlay())
// }
// const playerSelection = playerPlay;
// const computerSelection = computerPlay();

    // if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
    //     alert (`You Win! ${playerSelection} beats ${computerSelection}`)  
    // }
    // else if (playerSelection == computerSelection){
    //     alert (`You Win! ${playerSelection}ITs A DRAW ! ${playerSelection} == ${computerSelection}`)
    // } 
    // else {
    //     alert(`You lose! ${computerSelection} beats ${playerSelection}`)
    // }    

// let playerScore , computerScore , score = 0 ; 

// score = playRound(playerPlay , computerPlay());
// console.log(score);

// if (score.search("Win") >= 1) 
//     {
//         playerScore ++;
//     }
// if (score.search("lose")>= 1)
//     {
//         computerScore++;
//     }

// if (playerScore > computerScore){
    
//     console.log( "YOU WON THE WHOLE GAME")
//  }
// else{
//     console.log("YOU ARE JUST A LOSER, SAME AS THE CODE WRITER")
//  }