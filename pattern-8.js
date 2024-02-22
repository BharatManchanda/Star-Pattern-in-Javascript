/**
 ----------------------------------------
         *                 *
       * * *             * * *
     * * * * *         * * * * *
   * * * * * * *     * * * * * * *
 * * * * * * * * * * * * * * * * * *
 ----------------------------------------
*/


let row = 6, k=1;
for (let i = 0; i < row; i++) {
	let line = "";
  	for (let j = 0; j <= (row * 2 - 1) + (row * 2 -1) ; j++) {
		if (j < row*2) {
			if (j >= row-i && j <= row+i) {
				line += "* ";
			} else {
				line += "  ";
			}
		}
		if (j >= row * 2 - 1) {
			if ((j > (row * 2 ) + (row / 2) - k) && (j < (row * 2 ) + (row / 2) + k)) {
				line += "* ";
			} else {
				line += "  ";
			}
		}
	}
	k++;
	console.log(line);
}