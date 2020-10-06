function buildGrid(gridSize) {
  let container = document.querySelector('#container');
  let grid = document.createElement("div");
  grid.id = ('grid');

  grid.style.setProperty('--gridSize', gridSize);

  container.appendChild(grid);

  for (let i = 0; i < (gridSize * gridSize); i++) {
    let cell = document.createElement("div");
    cell.className = ('cell');
    cell.id = i;

    grid.appendChild(cell)
  }
}

buildGrid(32);