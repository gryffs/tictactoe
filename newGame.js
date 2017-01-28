const prompt = require('prompt');
const TicTacToe = require('../tictactoe');

const ticTacToeGame = new TicTacToe();

const play = (player) => {
  ticTacToeGame.boardPrint();
  console.log(`It is Player ${player}'s turn`);
  prompt.start();
  prompt.get(['position'], function (err, result) {
    if (err) console.log(err);
    if (!ticTacToeGame.validMove(result.position)) {
      console.log(`Invalid move, check your position and try again`);
      play(player);
    } else {
      ticTacToeGame.playerMove(result.position, player);
      if (ticTacToeGame.checkWin(player)) {
        ticTacToeGame.boardPrint();
        console.log(`${player} wins!`);
        return;
      }
      if (ticTacToeGame.catWins()) {
        ticTacToeGame.boardPrint();
        console.log("Game Over, Cat wins!");
        return;
      }
      if (player === 'X') {
        play('O');
      } else {
        play('X');
      }
    }
  });
};

play('X');
