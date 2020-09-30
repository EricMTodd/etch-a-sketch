function updateGrid() {
  let gridNum = document.getElementById("input").value;
  buildGrid(gridNum);
}

function buildGrid(gridNum) {
  let root = document.documentElement;
  root.style.setProperty("--gridNum", gridNum);
  for (let i = 0; i < gridNum ** 2; i++) {
    let grid = document.getElementById("grid");
    let box = document.createElement("div");
    box.className = "box";
    box.id = `box-${[i + 1]}`;
    box.innerHTML = i + 1;
    grid.appendChild(box);
  }
}
