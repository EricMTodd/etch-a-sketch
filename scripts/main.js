document.onmouseover = function (e) {
  if (e.target.className === "cell") {
    let cellId = e.target.id;
    let selectedCell = document.getElementById(cellId);
    selectedCell.className = "etched";
  }
};

function buildGrid(gridSize) {
  let container = document.querySelector('#container');
  let currentDimensions = document.createElement("div");
  currentDimensions.innerHTML = (`${gridSize}x${gridSize}`)
  currentDimensions.id = `current-dimensions`;
  container.appendChild(currentDimensions);
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
  let input = document.getElementById("input");
  input.value = "";
}

function updateGrid() {
  let currentDimensions = document.querySelector("#current-dimensions");
  currentDimensions.remove();
  let grid = document.getElementById("grid");
  grid.remove();
  let input = document.getElementById("input").value;
  buildGrid(input);
}

buildGrid(16);