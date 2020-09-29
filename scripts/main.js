console.log("Hello world!");

function buildBox() {
  let container = document.createElement("div");
  container.id = "container";
  document.body.appendChild(container);

  let box = document.createElement("div");
  box.id = "box";
  container.appendChild(box);
}

buildBox();
