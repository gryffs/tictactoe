const prompt = require('prompt');
const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let boardPrint = function(boardArray) {
  console.log(
  `
  ${boardArray[0]} | ${boardArray[1]} | ${boardArray[2]}
  ---------
  ${boardArray[3]} | ${boardArray[4]} | ${boardArray[5]}
  ---------
  ${boardArray[6]} | ${boardArray[7]} | ${boardArray[8]}
  `);
};

const winSequences = [[1, 2, 3], [4, 5, 6],[7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

const playerMove = function(position, mark) {
  board[position - 1] = mark;
  console.log(board);
}

const checkWin = function(mark) {
  let markCount = 0;
  for(let i = 0; i < winSequences.length; i++) {
    markCount = 0;
    for(let j = 0; j < winSequences[i].length; j++) {
      if(board[winSequences[i][j] - 1] === mark) {
        markCount++;
      }
      if (markCount === 3) {
        return true;
      }
    }
  }
  return false;
}

const play = function(player) {
  console.log(`It is Player ${player}'s turn`);
  prompt.start();
  prompt.get(['position'], function (err, result) {
    playerMove(result.position, player);
    boardPrint(board);
    if (checkWin(player)) {
      console.log(`${player} wins!`);
      return;
    }
    if (player === 'X') {
      play('O');
    } else {
      play('X');
    }
  });

}
boardPrint(board);
play('X');