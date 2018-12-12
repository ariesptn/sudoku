class Sudoku {
    constructor() {
        this.board = [];
        for (let row = 0; row < 9; row++) {
            this.board.push([]);
            for (let col = 0; col < 9; col++) {
                this.board[row].push(0);
            }
        }
        for (let iRow = 0; iRow < 9; iRow++) {
            for (let iCol = 0; iCol < 9; iCol++) {
                this.insertData(this.getRandomInt(), iCol, iRow);
            }
        }
    }
    checkHorizontal(num, row) {
        for (let col = 0; col < 9; col++) {
            if (this.board[row][col] === num) {
                return false;
            }
        }
        return true;
    }
    checkVertical(num, col) {
        for (let row = 0; row < 9; row++) {
            if (this.board[row][col] === num) {
                return false;
            }
        }
        return true;
    }
    checkBlock(num, col, row) {
        for (let iRow = Math.floor(row / 3) * 3; iRow < Math.floor(row / 3) * 3 + 3; iRow++) {
            for (let iCol = Math.floor(col / 3) * 3; iCol < Math.floor(col / 3) * 3 + 3; iCol++) {
                if (this.board[iRow][iCol] === num) {
                    return false;
                }
            }
        }
        return true;
    }
    checkAll(num, col, row) {
        return this.checkHorizontal(num, row) && this.checkVertical(num, col) && this.checkBlock(num, col, row);
    }
    insertData(num, col, row) {
        if (this.checkAll(num, col, row)) {
            this.board[row][col] = num;
            return true;
        }
        else {
            return false;
        }
    }
    getBoard() {
        return this.board;
    }
    getRandomInt() {
        return Math.floor(Math.random() * Math.floor(10));
    }
}
let sudoku = new Sudoku();
console.log(sudoku.getBoard());
//# sourceMappingURL=sudoku.js.map