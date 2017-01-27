const expect = require('chai').expect;
const TicTacToe = require('../tictactoe');

const ticTacToeGame = new TicTacToe();

describe('TicTacToe', () => {
  it('should exist', () => {
    expect(ticTacToeGame).to.exist;
  });

  it('should be an object', () => {
    expect(ticTacToeGame).to.be.a('object');
  });

  it('should have a board property', () => {
    expect(ticTacToeGame.board).to.exist;
  });

  it('the board property should be an array', () => {
    expect(ticTacToeGame.board).to.be.a('array');
  });
});

describe('TicTacToe.boardPrint',  () => {
  it('should exist', () => {
    expect(ticTacToeGame.boardPrint).to.exist;
  });
});

describe('TicTacToe.playerMove', () => {
  it('should exist', () => {
    expect(ticTacToeGame.playerMove).to.exist;
  });

  it('should be a function', () => {
    expect(ticTacToeGame.playerMove).to.be.a('function');
  });

  it('should change the passed in this.board position with the passed in mark', () => {
    ticTacToeGame.playerMove(1, 'X');
    expect(ticTacToeGame.board).to.deep.equal(['X', 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe('TicTacToe.validMove', () => {
  it('should exist', () => {
    expect(ticTacToeGame.validMove).to.exist;
  });

  it('should be a function', () => {
    expect(ticTacToeGame.validMove).to.be.a('function');
  });

  it('should return true for a valid move', () => {
    expect(ticTacToeGame.validMove(2)).to.equal(true);
  });

  it('should return false for a invalid move', () => {
    expect(ticTacToeGame.validMove(1)).to.equal(false);
  });
});
