class Game {
    constructor() {
    }

    initializeBoard(board) {
        this.board = this.createBoardCopy(board);
    }

    getBoard() {
        return this.board;
    }

    createBoardCopy(board) {
        return board.map(arr => arr.slice());
    }

    cellInBound(row, col) {
        return row >= 0 && row < this.board.length && col >= 0 && col < this.board[row].length;
    }

    countNeighbors(row, col) {
        let aliveNeighbors = 0;

        for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
            for (let colOffset = -1; colOffset <= 1; colOffset++) {
                if (this.cellInBound(row + rowOffset, col + colOffset)) {
                    aliveNeighbors += this.board[row + rowOffset][col + colOffset];
                }
            }
        }
        
        aliveNeighbors -= this.board[row][col];

        return aliveNeighbors;
    }

    step() {
        const boardCpy = this.createBoardCopy(this.board);

        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                const aliveNeighbors = this.countNeighbors(row, col);
                
                boardCpy[row][col] = (aliveNeighbors >= 2 && aliveNeighbors <= 3) ? 1 : 0;
            }
        }

        this.board = boardCpy;
    }
}

module.exports = Game;