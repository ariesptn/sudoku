class Sudoku {
    constructor(boardString) {
        this.originalBoard = [];
        this.board = [];
        if (!this.parseBoardString(boardString)) {
            this.generateEmptyBoard();
        }
    }
    generateEmptyBoard() {
        let result = [];
        for (let row = 0; row < 9; row++) {
            result.push([]);
            for (let col = 0; col < 9; col++) {
                result[row].push(0);
            }
        }
        this.originalBoard = result;
        this.resetBoard();
    }
    parseBoardString(input) {
        if (input.length !== 81) {
            return false;
        }
        let board = [];
        while (input.length > 0) {
            let col = input.substring(0, 9);
            input = input.substring(9);
            if (isNaN(parseInt(col))) {
                return false;
            }
            board.push(col.split('').map(e => parseInt(e)));
        }
        this.originalBoard = board;
        this.resetBoard();
        return true;
    }
    resetBoard() {
        this.board = this.originalBoard.map(e => e.slice());
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
        return Math.floor(Math.random() * 9) + 1;
    }
    solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (this.board[row][col] === 0) {
                    for (let num = 0; num < 9; num++) {
                        if (this.insertData(num, row, col)) {
                            break;
                        }
                    }
                }
            }
        }
    }
}
let sudoku = new Sudoku('361025900080960010400000057008000471000603000259000800740000005020018060005470329');
sudoku.solve();
console.log(sudoku.getBoard());
//# sourceMappingURL=sudoku.js.map