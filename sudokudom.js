class SudokuDom {
    constructor() {
        this.sudoku = new Sudoku();
    }
    generateBoard() {
        const board = sudoku.getBoard();
        let html = `<table>`;
        for (let h = 0; h < board.length; h++) {
            html += `<tr>`;
            for (let w = 0; w < board[h].length; w++) {
                html += `<td>${board[h][w]}</td>`;
            }
            html += `</tr>`;
        }
        html += `</table>`;
        let el = document.getElementById('board');
        if (el !== null) {
            el.innerHTML = html;
        }
    }
}
let sudokuDom = new SudokuDom();
let w = window;
if (w !== null) {
    w.onload = () => {
        sudokuDom.generateBoard();
    };
}
//# sourceMappingURL=sudokudom.js.map