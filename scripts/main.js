function buildGrid(rows, cols) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      document.write(`(${i}, ${j}) `)
    }
    document.write("<br>")
  }
}

buildGrid(5, 5);