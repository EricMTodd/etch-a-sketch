function updateGrid() {
  let grid = document.getElementById("grid");
  grid.remove();
  let gridNum = document.getElementById("input").value;
  buildGrid(gridNum);
}

function buildGrid(gridNum) {
  let root = document.documentElement;
  root.style.setProperty("--gridNum", gridNum);
  root.style;
  let container = document.getElementById("container");
  let grid = document.createElement("div");
  grid.id = "grid";
  container.appendChild(grid);
  for (let i = 0; i < gridNum ** 2; i++) {
    let box = document.createElement("div");
    box.className = "box";
    box.id = `box-${[i + 1]}`;
    box.innerHTML = i + 1;
    grid.appendChild(box);
  }
}

buildGrid(16);
