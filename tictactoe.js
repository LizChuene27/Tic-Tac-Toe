const rowWin = [
    ["O", "O", "O"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ];
  
  const colWin = [
    ["-", "X", "-"],
    ["-", "X", "-"],
    ["-", "X", "-"]
  ];
  
  const diagonalWin = [
    ["-", "-", "O"],
    ["-", "O", "-"],
    ["O", "-", "-"]
  ];
  
  const diagonalWinInverse = [
    ["X", "-", "-"],
    ["-", "X", "-"],
    ["-", "-", "X"]
  ];
  
  function evaluatePlay(board, rowWin, colWin, diagonalWin, diagonalWinInverse) {
    let winner = null;
  
    // Check for row wins
    for (let i = 0; i < 3; i++) {
      if (
        board[0][0] === rowWin[i][0] &&
        board[0][1] === rowWin[i][1] &&
        board[0][2] === rowWin[i][2]
      ) {
        winner = rowWin[i][0];
        break;
      }
    }
  
    // Check for column wins
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === colWin[i][0] &&
        board[1][i] === colWin[i][1] &&
        board[2][i] === colWin[i][2]
      ) {
        winner = colWin[i][0];
        break;
      }
    }
  
    // Check for diagonal wins
    for (let i = 0; i < 3; i++) {
      if (
        board[0][0] === diagonalWin[i][0] &&
        board[1][1] === diagonalWin[i][1] &&
        board[2][2] === diagonalWin[i][2]
      ) {
        winner = diagonalWin[i][0];
        break;
      }
    }
  
    // Check for inverse diagonal wins
    for (let i = 0; i < 3; i++) {
      if (
        board[0][2] === diagonalWinInverse[i][0] &&
        board[1][1] === diagonalWinInverse[i][1] &&
        board[2][0] === diagonalWinInverse[i][2]
      ) {
        winner = diagonalWinInverse[i][0];
        break;
      }
    }
  
    if (winner) {
      console.log(`${winner} Won`);
      console.log(`${winner === "X" ? "O" : "X"} Lost`);
    } else {
      console.log("No winner yet");
    }
  }
  
  const diagonalWinInverseBoard = [
    ["X", "-", "-"],
    ["-", "X", "-"],
    ["-", "-", "X"]
  ];
  
  const rowWinBoard = [
    ["O", "O", "O"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ];
  
  const colWinBoard = [
    ["-", "X", "-"],
    ["-", "X", "-"],
    ["-", "X", "-"]
  ];
  
  const diagonalWinBoard = [
    ["-", "-", "O"],
    ["-", "O", "-"],
    ["O", "-", "-"]
  ];
  
  evaluatePlay(diagonalWinInverseBoard, rowWin, colWin, diagonalWin, diagonalWinInverse);
  evaluatePlay(rowWinBoard, rowWin, colWin, diagonalWin, diagonalWinInverse);
  evaluatePlay(colWinBoard, rowWin, colWin, diagonalWin, diagonalWinInverse);
  evaluatePlay(diagonalWinBoard, rowWin, colWin, diagonalWin, diagonalWinInverse);