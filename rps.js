var choices = ["boot", "cockroach", "atomic-bomb"]
var compChoice;
var userChoice;
var nWins = 0;
var nLoses = 0;
var nTies = 0;
var uWinner;

function rpsShoot(userChoice) {
    compChoice = GetCompChoice();
    setImages(userChoice, compChoice)

    if (compChoice == userChoice) {
        nTies++;
        document.getElementById("computer-result").innerHTML = "Tied!!!";
        document.getElementById("user-result").innerHTML = "Tied!!!";
    } 

    else if (compChoice == "boot") 
    {

        if (userChoice == "atomic-bomb") 
        {
            winnerOutput("User");
        } 
        else 
        {
        	winnerOutput("Computer");
        }
    } 
    else if (compChoice == "cockroach") 
    {
        if (userChoice == "boot") 
        {
            winnerOutput("User");
        } 
        else 
        {
            winnerOutput("Computer");     
        }
    } 
    else if (compChoice == "atomic-bomb") 
    {
        if (userChoice == "cockroach") 
        {
            winnerOutput("User");
        } 
        else 
        {
        	winnerOutput("Computer");
        }
    }
    reportScore();
}

function setImages(userChoice, compChoice)
{
    document.getElementById("user-choice-image").src = "images/" + userChoice + ".jpg";
    document.getElementById("comp-choice-image").src = "images/" + compChoice + ".jpg";
}

function GetCompChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function winnerOutput(uWinner)
{
    if (uWinner == "Computer")
    {
        nLoses++;
        document.getElementById("computer-result").innerHTML = "Winner!!!";
        document.getElementById("user-result").innerHTML = "Loser!!!";
    }
    else
    {
        nWins++;
        document.getElementById("user-result").innerHTML = "Winner!!!";
        document.getElementById("computer-result").innerHTML = "Loser!!!";
    }
}

function reportScore(){
	document.getElementById("score-wins").innerHTML = nWins;
	document.getElementById("score-loses").innerHTML = nLoses;
	document.getElementById("score-ties").innerHTML = nTies;
}

function resetGame() {
    document.getElementById("computer-result").innerHTML = "";
    document.getElementById("user-result").innerHTML = "";
    document.getElementById("score-wins").innerHTML = 0;
    document.getElementById("score-loses").innerHTML = 0;
    document.getElementById("score-ties").innerHTML = 0;
    nWins = 0;
    nLoses = 0;
    nTies = 0;

}