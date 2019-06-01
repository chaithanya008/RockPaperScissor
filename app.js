let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function getComputerChoice(){

	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);

	return choices[randomNumber];
}

function convertToWord(letter){
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissor";
}

function win(userChoice, computerChoice){
	userScore++;

	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;

	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	/*result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win :)";*/

	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win :)`;
}

function lose(userChoice, computerChoice){
	compScore++;

	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;

	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	/*result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win :)";*/

	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost.. :(`;

}

function draw(userChoice,computerChoice){


	// userScore_span.innerHTML = userScore;
	// compScore_span.innerHTML = compScore;

	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	/*result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win :)";*/

	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. Its Draw :/`;

}

function game(userChoice){

	const computerChoice = getComputerChoice();

	switch( userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			/*console.log("user wins");*/
			break;

		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			/*console.log("comp wins");*/
			break;

		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			/*console.log("its draw");*/
			break;
	}
	/*console.log("user choice is " + userChoice);
	console.log("computer choice is " + compterChoice);*/
}

function main(){

rock_div.addEventListener('click', function(){
	game("r");
})


paper_div.addEventListener('click', function(){
	game("p");
})


scissor_div.addEventListener('click', function(){
	game("s");
})

}

main();







