const { expect } = require("chai");
const Game = require("../src/game");

describe("Game test", () => {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    it("Initialize game with 2x2 empty board", () => {
        game.initializeBoard([
            [0, 0],
            [0, 0]
        ]);

        expect(game.getBoard()).to.eql([
            [0, 0],
            [0, 0]
        ]);
    });

    it("1 cell with no neighbours should die", () => {
        game.initializeBoard([
            [1, 0],
            [0, 0]
        ]);
        game.step();

        expect(game.getBoard()).to.eql([
            [0, 0],
            [0, 0]
        ]);
    });

    it("2 cells with no neighbours should die", () => {
        game.initializeBoard([
            [1, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 1]
        ]);
        game.step();

        expect(game.getBoard()).to.eql([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0 ,0]
        ]);
    });

    it("when there are 3 cells alive, all cells should be alive", () => {
        game.initializeBoard([
            [1, 1],
            [1, 0]
        ]);
        game.step();

        expect(game.getBoard()).to.eql([
            [1, 1],
            [1, 1]
        ]);
    });

    it("when there are 2 cells alive they should die and their neighbours should live", () => {
        game.initializeBoard([
            [1, 1],
            [0, 0]
        ]);
        game.step();

        expect(game.getBoard()).to.eql([
            [0, 0],
            [1, 1]
        ]);
    });
});