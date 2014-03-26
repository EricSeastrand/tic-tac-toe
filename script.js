var gameboard; /* Declare a *variable* called 'gameboard'. */
var whoseTurnIsIt; /* Declare a *variable* to remember whose turn it is. */

/* Sets 'whoseTurnIsIt' to the other player. (whoever's turn it ISN'T) */
function newTurn(){
	if( whoseTurnIsIt === 'X' )
		whoseTurnIsIt = 'Y';
	else
		whoseTurnIsIt = 'X';

	$('.whose-turn-is-it').text('Player '+whoseTurnIsIt+', GO!');
		/* Updates the text on the player's screen to show whose turn it is. */
}


/* Fill in all spaces with '?', to reset the gameboard. */
function resetGameboard() {
	gameboard = $('.tic-tac-toe-gameboard');
		/* The *variable* 'gameboard' now refers to the gameboard as a whole. */

	var allSpaces = gameboard.find('td').text('?');
		/* Find all of the spaces, and set their text to "?". */

	newTurn();
}

/* This can be used to check and see which player has claimed a given space. */
function whichPlayerHoldsSpaceAt(x, y) {
	var row = gameboard.find('tr').eq(x);
		/* Find row number 'x' on the 'gameboard' and remember it as the *variable* 'row' */
	var space = row.find('td').eq(y);
		/* Within that 'row', find the cell in column number 'y', and remember it as the *variable* 'cell' */

	return space.text();
		/* Return the text of the cell at (x, y), which will be X or O or ? */
}




/* Tells the browser to run resetGameboard() when the page has loaded. */
$(resetGameboard);