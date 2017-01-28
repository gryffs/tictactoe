class TicTacToe {
  constructor() {
    this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  boardPrint() {
    console.log(
    `
    ${this.board[0]} | ${this.board[1]} | ${this.board[2]}
    ---------
    ${this.board[3]} | ${this.board[4]} | ${this.board[5]}
    ---------
    ${this.board[6]} | ${this.board[7]} | ${this.board[8]}
    `);
  };

  playerMove(position, mark) {
    this.board[position - 1] = mark;
  };

  validMove(position) {
    const boardPosition = position - 1;
    const equality = this.board[boardPosition];
    return parseInt(position) === equality;
  };

  checkWin(mark) {
    const winSequences = [[1, 2, 3],  // horizontal
                          [4, 5, 6],
                          [7, 8, 9],
                          [1, 4, 7],  // vertical
                          [2, 5, 8],
                          [3, 6, 9],
                          [1, 5, 9],  // diagonal
                          [3, 5, 7]];
    let markCount = 0;
    for(let i = 0; i < winSequences.length; i++) {
      markCount = 0;
      for(let j = 0; j < winSequences[i].length; j++) {
        if(this.board[winSequences[i][j] - 1] === mark) {
          markCount++;
        }
        if (markCount === 3) {
          return true;
        }
      }
    }
    return false;
  };

  catWins() {
    for(let i of this.board) {
      if (typeof i === "number") {
        return false;
      }
    }
    return true;
  };
}

module.exports = TicTacToe;