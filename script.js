const grid = document.querySelector("#grid");
grid.addEventListener("mouseover", (event) => {
    event.target.style.cssText = "background-color: black; border-color: white;";
});

const newGridButton = document.querySelector("#new-grid");
newGridButton.addEventListener("click", () => {
    const gridSize = parseInt(prompt("Enter a number of cells per side (1-100):"));
    if (gridSize >= 1 && gridSize <= 100) {
        removeGrid();
        createGrid(gridSize);
    } else {
        alert("Wrong cell number: Should be 1-100. Try again.");
    }
});

createGrid(16);

function createGrid(cellNumberPerSide) {
    for (let i = 0; i < cellNumberPerSide; i++) {
        const column = document.createElement("div");
        column.classList.add("column");

        for (let j = 0; j < cellNumberPerSide; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            column.appendChild(cell);
        }

        grid.appendChild(column);
    }
}

function removeGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastElementChild);
    }
}