class Sudoku {
    originalBoard: Array<Array<number>> = [];
    board: Array<Array<number>> = [];

    constructor(boardString: string) {
        if (!this.parseBoardString(boardString)) {
            this.generateEmptyBoard();
        }
    }
    generateEmptyBoard() {
        let result: Array<Array<number>> = []
        for (let row = 0; row < 9; row++) {
            result.push([]);
            for (let col = 0; col < 9; col++) {
                result[row].push(0);
            }
        }
        this.originalBoard = result
        this.resetBoard()
    }
    parseBoardString(input: string) {
        if (input.length !== 81) {
            return false
        }
        let board: Array<Array<number>> = []
        while (input.length > 0) {
            let col = input.substring(0, 9)
            input = input.substring(9)
            if (isNaN(parseInt(col))) {
                return false
            }
            board.push(col.split('').map(e => parseInt(e)))
        }
        this.originalBoard = board
        this.resetBoard()
        return true;
    }
    resetBoard() {
        this.board = this.originalBoard.map(e => e.slice())
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
    checkBlock(num: number, row: number, col: number): boolean {
        for (let iRow = Math.floor(row / 3) * 3; iRow < Math.floor(row / 3) * 3 + 3; iRow++) {
            for (let iCol = Math.floor(col / 3) * 3; iCol < Math.floor(col / 3) * 3 + 3; iCol++) {
                if (this.board[iRow][iCol] === num) {
                    return false;
                }
            }
        }
        return true;
    }
    checkAll(num: number, row: number, col: number): boolean {
        return this.checkHorizontal(num, row) && this.checkVertical(num, col) && this.checkBlock(num, row, col);
    }
    insertData(num: number, row: number, col: number): boolean {
        if (this.checkAll(num, row, col)) {
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
        return Math.floor(Math.random() * 9) + 1;
    }
    solve(): void {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (this.board[row][col] === 0) {
                    for (let num = 0; num < 9; num++) {
                        if (this.insertData(num, row, col)) {
                            break
                        }
                    }
                }
            }
        }
    }
}

let sudoku = new Sudoku('361025900080960010400000057008000471000603000259000800740000005020018060005470329');
sudoku.solve()
console.log(sudoku.getBoard());
