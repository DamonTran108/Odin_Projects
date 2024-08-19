
const container = document.querySelector(".container");

const rockButton = document.createElement("button");

rockButton.textContent = "Rock";

rockButton.id = "Rock";

const paperButton = document.createElement("button");

paperButton.textContent = "Paper";

paperButton.id = "Paper";

const scissorButton = document.createElement("button");

scissorButton.textContent = "Scissor";

scissorButton.id = "Scissor";


const humanScoreDisplay = document.querySelector(".humanScoreValue");

const cpuScoreDisplay = document.querySelector(".cpuScoreValue");


container.appendChild(rockButton);

container.appendChild(paperButton);

container.appendChild(scissorButton);




container.addEventListener('click', (event) => {

    let choice = event.target;



    switch(choice.id){

        case 'Rock' :
            console.log("rock button clicked");
            playRound(choice.id, getComputerChoice());
            break;

        case 'Paper' :
             console.log("Paper button clicked");  
             playRound(choice.id, getComputerChoice());
             break;
        
        case 'Scissor' :
            console.log("Scissor button clicked");  
            playRound(choice.id, getComputerChoice());
            break;
    }
})






var humanScore = 0

var computerScore = 0;


function getComputerChoice(){

    var choice = Math.floor(Math.random() * (3 - 1  + 1)+ 1);


    var choiceAction = "";


    if(choice == 1){

        choiceAction = "Rock";

    }

    if(choice == 2){
        choiceAction = "Paper";
    }

    if(choice == 3){
        choiceAction = "Scissor";
    }

    console.log("CPU CHOICE : " + choiceAction);



    return choiceAction

}



function getHumanChoice(){

    var choice = window.prompt("Pick a choice");

    console.log("Human choice : " +  choice);


    return choice;
}


function playRound(humanChoice, computerChoice){

    let result = document.querySelector(".results");

    if (humanChoice == "Rock" && computerChoice == "Paper"){

        result.textContent = "You Lose!";

        computerScore++;

    }


   
    if (humanChoice == "Paper" && computerChoice == "Rock"){

        result.textContent = "You Win!";

        humanScore++;

    }


    if (humanChoice == "Scissor" && computerChoice == "Paper"){

        result.textContent = "You Win!";

        humanScore++;

    }


   
    if (humanChoice == "Paper" && computerChoice == "Scissor"){

        result.textContent = "You Lose!";

        computerScore++;

    }


    if (humanChoice == "Rock" && computerChoice == "Scissor"){

        result.textContent = "You Win!";

        humanScore++;

    }


   
    if (humanChoice == "Scissor" && computerChoice == "Rock"){

        result.textContent = "You Lose!";

        computerScore++;

    }


    if (humanChoice == computerChoice ){

        result.textContent = "You Draw!";

       

    }



    console.log(result);


    humanScoreDisplay.textContent = humanScore;

    cpuScoreDisplay.textContent = computerScore;

}








function playGame(){

  
    

}