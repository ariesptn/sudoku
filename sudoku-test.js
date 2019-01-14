"use strict";
const sudoku = require('./sudoku');
const fs = require('fs');
// The file has newlines at the end of each line,
// so we call split to remove it (\n)
let board_string = fs.readFileSync('set-01_sample.unsolved.txt')
    .toString()
    .split("\n")[7];
let game = new sudoku.Sudoku(board_string);
// Remember: this will just fill out what it can and not "guess"
console.log('Unsolved : ' + game.toString());
console.log(game.getBoard());
game.solve();
console.log('Solved : ' + game.toString());
console.log(game.getBoard());
//# sourceMappingURL=sudoku-test.js.map