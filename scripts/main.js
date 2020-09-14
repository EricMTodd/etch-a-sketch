console.log("Hello world!");

function grid(el) {
  let container = document.createElement("div");
  container.id = "main";
  container.className = "container";

  for (i = 0; i < 16; i += 1) {
    let row = document.createElement("div");
    row.classname = "row";
    row.id = "row" + i;

    for (k = 0; k < 16; k += 1) {
      let box = document.createElement("div");
      box.className = "box";
      row.appendChild(box);
    }

    container.appendChild(row);
  }

  el.appendChild(container);
}

grid(document.body);
