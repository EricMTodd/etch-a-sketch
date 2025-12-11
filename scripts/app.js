// Global constants
const grid = document.querySelector(`.grid`)

// Function declarations
const renderGrid = (n) => {
	const ratio = 100 / n

	for (let i = 0; i < n; i++) {
		let newRow = document.createElement("div")
		newRow.classList.add(`row`, `row-${i}`)
		newRow.style.height = `${ratio}%`
		grid.appendChild(newRow)
		for (let j = 0; j < n; j++) {
			let newCell = document.createElement("div")
			newCell.classList.add(`cell`, `cell-${j}-${i}`)
			newCell.style.width = `${ratio}%`
			newCell.addEventListener(`mouseenter`, () => newCell.classList.add(`colored`))
			newRow.appendChild(newCell)
		}
	}
}

const eraseGrid = () => {
	let cells = document.querySelectorAll(`.cell`)
	cells.forEach(cell => {
		cell.classList.remove(`colored`)
	})
}

renderGrid(16)