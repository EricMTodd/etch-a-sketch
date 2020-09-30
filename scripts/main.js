console.log("Hello world!");

function buildGrid(gridNum) {
  let root = document.documentElement;
  root.style.setProperty("--gridNum", gridNum);
  let container = document.createElement("div");
  container.id = "container";
  document.body.appendChild(container);
  for (let i = 0; i < gridNum * gridNum; i++) {
    let box = document.createElement("div");
    box.id = "box";
    box.innerHTML = i + 1;
    container.appendChild(box);
  }
}

buildGrid(16);
