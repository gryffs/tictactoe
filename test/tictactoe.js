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