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
  let grid = document.getElementById("grid");
  let input = document.getElementById("input").value;

  if (input === "") {
    alert("Please enter a number.")
  } else if (input < 16) {
    alert("Please pick a number greater than 15.")
  } else if (input > 100) {
    alert("Please pick a number less than 101.")
  } else {
    currentDimensions.remove();
    grid.remove();
    buildGrid(input);
  }
  return;
}

buildGrid(16);