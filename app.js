/* create array with computer moves and function to select a random option */

var playerScore = 0
var computerScore = 0

function randomPlay() {
	var options = ["rock", "paper", "scissors"]
	return options[Math.floor(Math.random()* options.length)]
}

/* function to input playerChoice and play one round of rock paper and scissors */

function playRound() {
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

function playRound() {
	var playerChoice = prompt("Make your choice: ")
	var playerSelection = playerChoice.toLowerCase()
	
	const computerChoice = randomPlay()
	
	/* check if values are correct, to remove it */
	console.log(playerChoice, computerChoice)
	
	if (playerSelection == computerChoice) {
		return result = "It's a tie! " + playerChoice + " and " + computerChoice + " are the same!"
	}
	else if (playerSelection == "rock" && computerChoice == "scissors" || 
			playerSelection == "scissors" && computerChoice == "paper" ||
			playerSelection == "paper" && computerChoice == "rock") {
				playerScore++
				return result = "Human kind has won! " + playerChoice + " beats " + computerChoice + " !"
			}
	else {
		computerScore++
		return result = "Robots have won! " + computerChoice + " beats " + playerChoice + " !"
	}	
}

function game() {
	for (let i = 0; i < 5; i++) {
		playRound()
	}
	
	if (playerScore < computerScore) {
		console.log("Robots have won! Mankind is doomed")
	}
	else if (playerScore == computerScore) {
		console.log("Nobody won!")
	}
	else {
		console.log("Mankin has won! Robots are... still useful")
	}
}
