"use strict";
class Sudoku {
    constructor(boardString) {
        this.originalBoard = [];
        this.board = [];
        this.solveStepRow = 0;
        this.solveStepCol = 0;
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
        return this;
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
        return this;
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
    toString() {
        return this.board.map(e => e.join('')).join('');
    }
    getOriginalBoard() {
        return this.originalBoard;
    }
    getRandomInt() {
        return Math.floor(Math.random() * 9) + 1;
    }
    backtrackTry(row, col) {
        let num = this.board[row][col] * 1;
        while (num < 9) {
            num++;
            if (this.insertData(num, row, col)) {
                return true;
            }
        }
        this.board[row][col] = 0;
        return false;
    }
    getEmpty() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (this.board[row][col] === 0) {
                    return { row, col };
                }
            }
        }
        return { row: -1, col: -1 };
    }
    getDifferent() {
        for (let row = 8; row >= 0; row--) {
            for (let col = 8; col >= 0; col--) {
                if (this.board[row][col] !== this.originalBoard[row][col]) {
                    return { row, col };
                }
            }
        }
        return { row: -1, col: -1 };
    }
    solveStep() {
        if (this.getEmpty().row != -1) {
            if (!this.backtrackTry(this.solveStepRow, this.solveStepCol)) {
                let coord = this.getDifferent();
                this.solveStepRow = coord.row;
                this.solveStepCol = coord.col;
            }
            else {
                let coord = this.getEmpty();
                this.solveStepRow = coord.row;
                this.solveStepCol = coord.col;
            }
            return false;
        }
        else {
            return true;
        }
    }
    solve() {
        while (!this.solveStep()) { }
        return this;
    }
}
module.exports = { Sudoku };
//# sourceMappingURL=sudoku.js.map