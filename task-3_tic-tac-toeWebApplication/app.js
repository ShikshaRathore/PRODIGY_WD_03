let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

function cellClicked(index) {
  if (!gameOver && board[index] === "") {
    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameOver = true;
      alert(`${currentPlayer} wins!`);
      return;
    }
  }

  if (!board.includes("")) {
    gameOver = true;
    alert("It's a tie!");
  }
}
