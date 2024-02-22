/**
 ---------------------------
 * * * * * * * * * * * * *
 * * * * * *   * * * * * *
 * * * * *       * * * * *
 * * * *           * * * *
 * * *               * * *
 * *                   * *
 *                       *
 ---------------------------
*/

let row = 15 // Enter odd number
if (row % 2 == 1) {
	for (let i = 0; i < row; i++) {
		let line = '';
		for (let j = 0; j < (row * 2)-1; j++) {
			// if (j>=row-1-j && j<=row-1+j) {
			if (j<=((row*2)/2)-i-1 || j>=((row*2)/2)+i-1) {
				line += '* '
			} else {
				line += '  '
			}
		}
		console.log(line);
	}
} else {
	console.log("Please assign odd number to row");
}