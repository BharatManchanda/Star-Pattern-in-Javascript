
/**
 ---------------------------
             *
           * * *
         * * * * *
       * * * * * * *
     * * * * * * * * *
   * * * * * * * * * * *
 * * * * * * * * * * * * *
 ---------------------------
*/

let row = 8;

for (let i = 0; i < row; i++) {
	let line='';
	for (let j = 0; j < row*2; j++) {
		if (j >= row-i && j <= row+i ) {
			line += '* ';
		} else {
			line += '  ';
		}
	}
	console.log(line);
}