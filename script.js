const grid = document.querySelector("#grid");
grid.addEventListener("mouseover", (event) => {
    switch (activeMode) {
        case "Black":
            event.target.style.backgroundColor = "black";
            event.target.style.opacity = 1;
            break;
        case "Random":
            event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
            event.target.style.opacity = 1;
            break;
        case "Darken":
            const backgroundColor = window.getComputedStyle(event.target).backgroundColor;
            if (backgroundColor === "rgb(0, 0, 0)" || backgroundColor === "rgb(255, 255, 255)") {
                const opacity = parseFloat(window.getComputedStyle(event.target).opacity);
                event.target.style.opacity = opacity + 0.1;
                event.target.style.backgroundColor = "black";
            }
            break;
    }
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

const modes = document.querySelector(".modes");
modes.addEventListener("click", (event) => {
    for (let mode of event.currentTarget.children) {
        mode.classList.remove("active");
    }

    event.target.classList.add("active");
    activeMode = event.target.textContent;
});

let activeMode = "Black";

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