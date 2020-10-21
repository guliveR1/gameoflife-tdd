const { expect } = require("chai");
const Game = require("../src/game");

describe("Game test", () => {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    function createBoard(rows, cols, init) {
        const board = Array(rows).fill().map(() => Array(cols).fill(init));

        return board;
    }

    it("Initialize game with 2x2 empty board", () => {
        game.initializeBoard(createBoard(2, 2, 0));

        expect(game.getBoard()).to.eql(createBoard(2, 2, 0));
    });

    it("game with 1 cell should die", () => {
        const board = createBoard(2, 2);
        board[0][0] = 1;
        game.initializeBoard(board);
        game.step();

        expect(game.getBoard()).to.eql(createBoard(2, 2, 0));
    });

    it("game with 2 cells should die", () => {
        const board = createBoard(4, 4);
        board[0][0] = 1;
        board[3][3] = 1;
        game.initializeBoard(board);
        game.step();

        expect(game.getBoard()).to.eql(createBoard(4, 4, 0));
    });

    it("game with 3 cells all should live", () => {
        const board = createBoard(2, 2, 0);
        board[0][0] = 1;
        board[0][1] = 1;
        board[1][0] = 1;

        game.initializeBoard(board);
        game.step();

        expect(game.getBoard()).to.eql(createBoard(2, 2, 1));
    });

    it("game with 2 cells 2 should live, 2 should die", () => {
        const board = createBoard(2, 2, 0);
        board[0][0] = 1;
        board[0][1] = 1;

        game.initializeBoard(board);
        game.step();

        const resultBoard = createBoard(2, 2, 0);
        resultBoard[1][0] = 1;
        resultBoard[1][1] = 1;

        expect(game.getBoard()).to.eql(resultBoard);
    });
});