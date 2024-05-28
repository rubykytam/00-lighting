document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.getElementById('game-board');
  const size = 5;
  const cells = [];

  // Initialize the game board
  for (let row = 0; row < size; row++) {
    cells[row] = [];
    for (let col = 0; col < size; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.addEventListener('click', () => toggleCells(row, col));
      cells[row][col] = cell;
      gameBoard.appendChild(cell);
    }
  }

  function toggleCells(row, col) {
    toggleCell(row, col);
    if (row > 0) toggleCell(row - 1, col);
    if (row < size - 1) toggleCell(row + 1, col);
    if (col > 0) toggleCell(row, col - 1);
    if (col < size - 1) toggleCell(row, col + 1);
  }

  function toggleCell(row, col) {
    const cell = cells[row][col];
    cell.classList.toggle('black');
  }
});
