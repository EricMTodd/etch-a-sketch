console.log("Hello world!");

function buildGrid(rows, cols) {
  let container = document.createElement("div");
  container.id = "container";
  document.body.appendChild(container);
  for (let i = 0; i < rows * cols; i++) {
    let box = document.createElement("div");
    box.id = "box";
    box.innerHTML = i;
    container.appendChild(box);
  }
}


buildGrid(16, 16);
