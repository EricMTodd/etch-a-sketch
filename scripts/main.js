document.onmouseover = function (e) {
  if (e.target.className === "cell") {
    let cellId = e.target.id;
    let selectedCell = document.getElementById(cellId);
    selectedCell.className = "etched";
  }
};

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

function updateGrid() {
  let grid = document.getElementById("grid");
  grid.remove();
  let input = document.getElementById("input").value;
  buildGrid(input);
}

buildGrid(32);