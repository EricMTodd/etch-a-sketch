function buildGrid(gridNum) {
  let root = document.documentElement;
  let container = document.getElementById("container");
  let grid = document.createElement("div");

  root.style.setProperty("--gridNum", gridNum);
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

function updateGrid() {
  let grid = document.getElementById("grid");
  let gridNum = document.getElementById("input").value;

  grid.remove();
  buildGrid(gridNum);
  document.getElementById("input").value = "";
}


buildGrid(16);
