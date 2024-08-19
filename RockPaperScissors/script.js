var humanScore = 0

var computerScore = 0;


function getComputerChoice(){

    var choice = Math.floor(Math.random() * (3 - 1 )+ 1);


    var choiceAction = "";


    if(choice == 1){

        choiceAction = "Rock";

    }

    if(choice == 2){
        choiceAction = "Paper";
    }

    if(choice == 3){
        choiceAction = "Scissors";
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

    result = ""

    if (humanChoice == "Rock" && computerChoice == "Paper"){

        result = "You Lose!";

        computerScore++;

    }


   
    if (humanChoice == "Paper" && computerChoice == "Rock"){

        result = "You Win!";

        humanScore++;

    }


    if (humanChoice == "Scissors" && computerChoice == "Paper"){

       result = "You Win!";

        humanScore++;

    }


   
    if (humanChoice == "Paper" && computerChoice == "Scissors"){

        result = "You Lose!";

        computerScore++;

    }


    if (humanChoice == "Rock" && computerChoice == "Scissors"){

        result = "You Win!";

        humanScore++;

    }


   
    if (humanChoice == "Scissors" && computerChoice == "Rock"){

        result = "You Lose!";

        computerScore++;

    }


    if (humanChoice == computerChoice ){

        result = "You Draw!";

       

    }



    console.log(result);

}








function playGame(){

    for(let i = 0 ; i < 4; i++){

        const humanChoice =  getHumanChoice();


        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice)

        console.log("Your Score : " +  humanScore);

        console.log("CPU Score : " +  computerScore);
    }


    

}