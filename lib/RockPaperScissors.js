// Function to animate icons //
function animateLinks() {
      $('.animate').show(1000);
    }
$(function() {
      animateLinks();
    })

function Player(playerName){
	this.playerName = playerName;
}

// Prototype used to create a method //
Player.prototype.picks = function(pick){
   this.pick = pick;
}

Player.prototype.randomPick = function(){
	var randomNumber = Math.floor(Math.random( ) * 5);
	var options = ['rock', 'paper','scissors','lizard','spock'];
	return options[randomNumber];
}

// Initialize players. 'this' is the equivalent of the @ symbol//
function Game(player1, player2){
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.winner = function(){
	var pairs = {
		rock : {
			beats : 'scissors',
			beats1 : 'lizard'
		},
		paper : {
			beats : 'rock',
			beats1 : 'spock'
		},	
		scissors : {
			beats : 'paper',
			beats1 : 'lizard'
		},
		lizard: {
			beats: 'paper',
			beats1 :'spock'
		},
		spock : {
			beats :'rock',
			beats1 : 'scissors'
		}
	}

	if (this.samePick() == true) {
		return null;
	}

	if(pairs[this.player1.pick]['beats'] == this.player2.pick || pairs[this.player1.pick]['beats1'] == this.player2.pick) {
		this.winnerPick = this.player1.pick
		this.loserPick = this.player2.pick
		return this.player1;
	} else {
		this.winnerPick = this.player2.pick
		this.loserPick = this.player1.pick
		return this.player2;
	}
}

Game.prototype.samePick = function(){
	if (this.player1.pick == this.player2.pick) {
		return true;
	} else {
		return false;
	}
}

Game.prototype.showWinner = function() {
	this.winner();
	var messages = {
		scissorspaper : 'cut',
		paperrock : 'covers',
		rocklizard : 'crushes',
		lizardspock : 'poisons',
		spockscissors : 'smashes',
		scissorslizard : 'decapitates',
		lizardpaper : 'eats',
		paperspock : 'disproves',
		spockrock : 'vaporizes',
		rockscissors : 'breaks'
	}
	
	if(this.winnerPick == undefined) {
		return 'Its a draw!';
	} else {
		messageIndex = this.winnerPick.concat(this.loserPick);
		return this.winnerPick + ' ' + messages[messageIndex]  + ' ' + this.loserPick;
	}

}

