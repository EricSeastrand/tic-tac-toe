var gameboard; /* Declare a *variable* called 'gameboard'. */
var whoseTurnIsIt; /* Declare a *variable* to remember whose turn it is. */

/* Sets 'whoseTurnIsIt' to the other player. (whoever's turn it ISN'T) */
function newTurn(){
	if( whoseTurnIsIt === 'X' )
		whoseTurnIsIt = 'Y';
	else
		whoseTurnIsIt = 'X';
}

/* Fill in all spaces with '?', to reset the gameboard. */
function resetGameboard() {
	gameboard = $('.tic-tac-toe-gameboard');
		/* The *variable* 'gameboard' now refers to the gameboard as a whole. */

	var allSpaces = gameboard.find('td').text('?');
		/* Find all of the spaces, and set their text to "?". */

	newTurn();
}


/* Tells the browser to run resetGameboard() when the page has loaded. */
$(resetGameboard);