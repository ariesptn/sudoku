class Sudoku {
    board: Array<Array<number>> = [];
    constructor() {
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
    checkHorizontal(num: number, row: number): boolean {
        for (let col = 0; col < 9; col++) {
            if (this.board[row][col] === num) {
                return false;
            }
        }
        return true;
    }
    checkVertical(num: number, col: number): boolean {
        for (let row = 0; row < 9; row++) {
            if (this.board[row][col] === num) {
                return false;
            }
        }
        return true;
    }
    checkBlock(num: number, col: number, row: number): boolean {
        for (let iRow = Math.floor(row / 3) * 3; iRow < Math.floor(row / 3) * 3 + 3; iRow++) {
            for (let iCol = Math.floor(col / 3) * 3; iCol < Math.floor(col / 3) * 3 + 3; iCol++) {
                if (this.board[iRow][iCol] === num) {
                    return false;
                }
            }
        }
        return true;
    }
    checkAll(num: number, col: number, row: number): boolean {
        return this.checkHorizontal(num, row) && this.checkVertical(num, col) && this.checkBlock(num, col, row);
    }
    insertData(num: number, col: number, row: number): boolean {
        if (this.checkAll(num, col, row)) {
            this.board[row][col] = num;
            return true;
        } else {
            return false;
        }
    }
    getBoard(): Array<Array<number>> {
        return this.board;
    }
    getRandomInt(): number {
        return Math.floor(Math.random() * Math.floor(10));
    }

}

let sudoku = new Sudoku();
console.log(sudoku.getBoard());
