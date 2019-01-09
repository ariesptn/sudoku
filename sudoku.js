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
                this.insertData(this.getRandomInt(), iRow, iCol);
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
    checkBlock(num, row, col) {
        for (let iRow = Math.floor(row / 3) * 3; iRow < Math.floor(row / 3) * 3 + 3; iRow++) {
            for (let iCol = Math.floor(col / 3) * 3; iCol < Math.floor(col / 3) * 3 + 3; iCol++) {
                if (this.board[iRow][iCol] === num) {
                    return false;
                }
            }
        }
        return true;
    }
    checkAll(num, row, col) {
        return this.checkHorizontal(num, row) && this.checkVertical(num, col) && this.checkBlock(num, row, col);
    }
    insertData(num, row, col) {
        if (this.checkAll(num, row, col)) {
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
    solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (this.board[row][col] === 0) {
                    for (let test = 1; test <= 9; test++) {
                        if (this.checkAll(test, row, col)) {
                            this.insertData(test, row, col);
                        }
                    }
                }
            }
        }
    }
}
let sudoku = new Sudoku();
sudoku.solve();
console.log(sudoku.getBoard());
//# sourceMappingURL=sudoku.js.map