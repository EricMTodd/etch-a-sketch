let input = document.getElementById("input");

input.addEventListener("keydown()", function (e) {
  if (e.keyCode === 13) {
    document.getElementById("update-grid").click();
    e.preventDefault();
  }
});

function updateGrid() {
  console.log("get fukt nerd")
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

buildGrid(16);