const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let boardPrint =
  `Enter your choice by the numbers available below:

  ${board[0]} | ${board[1]} | ${board[2]}
  ---------
  ${board[3]} | ${board[4]} | ${board[5]}
  ---------
  ${board[6]} | ${board[7]} | ${board[8]}
  `;

const winSequences = [[1, 2, 3], [4, 5, 6],[7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

const playerMove = function(position, mark) {
  board[position] = mark;
}

const checkWin = function(mark) {
  let markCount = 0;
  for(let i = 0; i < winSequences.length; i++) {
    for(let j = 0; j < winSequences[i].length; j++) {
      if(winSequences[i][j] === mark) {
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

}

console.log(boardPrint);