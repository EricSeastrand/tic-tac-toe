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

/* Tells us the X, Y coordinate of a given 'space' in the table. */
/* Graciously copied+pasted from http://stackoverflow.com/a/6691501 */
function getSpaceXY(space){
	col = $(space).parent().children().index($(space));
	row = $(space).parent().parent().children().index($(space).parent());

	return [col, row];
}

/* Attach an *event listener* to the body, so that any time a space is clicked, the code below is executed. */
$(document).on('click', 'td.tic-tac-toe-space', function onSpaceClicked(e){
	$(this).text(whoseTurnIsIt);
		/* Set the text of this cell to whoever's turn it is */

	var coordinatesOfSpace = getSpaceXY(this);
		/* Find the XY coords of the space clicked. */

	console.log('TicTacToe space ',coordinatesOfSpace,'was clicked by ',whoseTurnIsIt);
		/* Output debugging information to console log. */


});

/* Checks a given row for a winner */
function checkForWinnerInRow(row) {
	var countX=0; /* How many spaces player X has claimed */
	var countO=0; /* How many spaces player Y has claimed */
	for(var col=0; col<3; col++) {
		var spaceClaimedBy = whichPlayerHoldsSpaceAt(row, col);

		if( spaceClaimedBy === 'X' )
			countX = countX+1;
		else if( spaceClaimedBy === 'Y' )
			countY = countY+1;
	}

	if(countX === 3)
		return 'X';
	if(countO === 3)
		return 'O';
	else
		return undefined;
}

/* Checks a given column for a winner */
function checkForWinnerInCol() {

}
/* Checks for diagonal winner */
function checkForWinnerDiagonal() {

}


/* Tells the browser to run resetGameboard() when the page has loaded. */
$(resetGameboard);