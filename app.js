/* create array with computer moves and function to select a random option */

function randomPlay(options) {
    var options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random()*options.length)]

}

/* function to input playerChoice and play one round of rock paper and scissors */

function play() {
    var playerChoice = prompt("Make your choice: ")
    var playerSelection = playerChoice.toLowerCase()

    const computerChoice = randomPlay()

    /* check if values are correct, to remove it */
    console.log(playerChoice, computerChoice)
    
    if (playerSelection == computerChoice) {
        console.log("It's a tie!")
    }
    else {
        console.log("It's not a tie!")
    }
}