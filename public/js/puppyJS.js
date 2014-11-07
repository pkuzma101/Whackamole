$(document).ready(function() {

// Score begins at 0
var score = 0;

var currentRecord = 0;
// Links the 'scoreboard' tag to the JS document
var gameScore = document.getElementById('scoreboard');
// Links the 'recordBoard' tag to the JS document
var recordScore = document.getElementById('recordBoard');

function fadeInPuppy() {
	// Grabs the images inside each individual square
	var square = $('.col-sm-4').children();
	// Code for choosing a random square
	var rand = Math.floor(Math.random()* square.length);
	// Picks a random square and fades the puppy in
	var puppy = $(square[rand]).fadeIn();
	// Keeps it from adding points based on how many times puppy has appeared
	$(this).off();
	// Each puppy will fade out after three seconds
	setTimeout(function() {
		$(puppy).fadeOut();
		}, 3000);
	// The following effects will happen when a puppy is clicked...
	$(puppy).click(function() {
		// Picks an element at random from 0 to 2
		var randomSound = Math.floor(Math.random()* 3);
		// Applies random picking to the 'bark' audio files
		var puppySound = document.getElementById('bark' + randomSound);
		// Loads the sound
		puppySound.load();
		// Plays the sound
		puppySound.play();
		// Keeps game from adding points based on how many times this puppy is clicked on
		$(this).off();
		// Adds one point per click
		score++;
		// Puppy fades upon being clicked
		$(this).fadeOut();
	});
	// Makes player's score visible on the page
	gameScore.innerHTML = score;
}
		
function countDown() {
	var timeLeft = document.getElementById('timer');
	    // You have 45 seconds to pet all puppies
	    var gameTimer = 45; // seconds
	    // Exactly one second between count downs
	    var interval = 1000;
	    // Establishes what to do during countdown
	    var intervalId = setInterval(function () {
	        if(gameTimer == 0) {
	            clearInterval(intervalId);
	            //
	            var playAgain = document.getElementById('playAgain');
	            $(playAgain).show();
	            // Announces final score
	            alert("Done!  Your score is " + score + "!");
	            
	        }

	        else {
	        	// Timer counts down one by one
	            gameTimer--;
	            // Establishes new time
	            timeLeft.innerHTML = gameTimer;
	            // Calls the function that fades in the puppies and counts the score
	            fadeInPuppy();
	        }
	        // Counts down every one second
	        }, interval);
	}

function hideStart() {
	// Hides the start button
	$('#startButton').hide();
}

function hidePlayAgain() {
	// Hides the start button
	$('#playAgain').hide();
}

function resetScore() {
	if(score > currentRecord) {
		recordScore.innerHTML = score;
	}
	gameScore.innerHTML = 0;
	score = 0;
}

// Links the start button to a variable
var startButton = document.getElementById('startButton');
// Links the play again button to a variable
var playAgain = document.getElementById('playAgain');

// Game begins as soon as start button is clicked
startButton.addEventListener('click', countDown);
// Hides start button as soon as the game begins
startButton.addEventListener('click', hideStart);
// Starts the game again as soon as play again button is clicked
playAgain.addEventListener('click', countDown);
// Hides the play again button when play again button is clicked
playAgain.addEventListener('click', hidePlayAgain);

playAgain.addEventListener('click', resetScore);

});