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

describe('TicTacToe.checkWin', () => {
  it('should exist', () => {
    expect(ticTacToeGame.checkWin).to.exist;
  });

  it('should be a function', () => {
    expect(ticTacToeGame.checkWin).to.be.a('function');
  });

  it('should return false if a win is not detected', () => {
    expect(ticTacToeGame.checkWin('X')).to.equal(false);
  });

  it('should return true if a vertical win is detected', () => {
    ticTacToeGame.board = ['O', 2, 3, 'O', 5, 6, 'O', 8, 9];
    expect(ticTacToeGame.checkWin('O')).to.equal(true);
  });

  it('should return true if a horizontal win is detected', () => {
    ticTacToeGame.board = ['O', 'O', 'O', 4, 5, 6, 7, 8, 9];
    expect(ticTacToeGame.checkWin('O')).to.equal(true);
  });

  it('should return true if a diagonal win is detected', () => {
    ticTacToeGame.board = ['O', 2, 3, 4, 'O', 6, 7, 8, 'O'];
    expect(ticTacToeGame.checkWin('O')).to.equal(true);
  });
});

describe('TicTacToe.catWins', () => {
  it('should exist', () => {
    expect(ticTacToeGame.catWins).to.exist;
  });

  it('should be a function', () => {
    expect(ticTacToeGame.catWins).to.be.a('function');
  });

  it('should return false as long there is a move remaining', () => {
    ticTacToeGame.board = ['O', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 9];
    expect(ticTacToeGame.catWins()).to.equal(false);
  });

  it('should return true if there are no more valid moves', () => {
    ticTacToeGame.board = ['O', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 'X'];
    expect(ticTacToeGame.catWins()).to.equal(true);
  });
});
