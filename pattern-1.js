
/**
 -------------------
 * 
 * *
 * * *
 * * * * 
 * * * * *
 * * * * * *
 * * * * * * *
 * * * * * * * *
 -------------------
 */

const row = 8; // Enter row which you want to print
for (let i = 0; i < row; i++) {
    let line = '';
    for (let j = 0; j <= i; j++) {
        line += '* ';
    }
    console.log(line);
}
