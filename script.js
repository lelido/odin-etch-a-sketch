createGrid();

function createGrid() {
    const grid = document.querySelector("#grid");
    grid.addEventListener("mouseover", (event) => {
        event.target.style.cssText = "background-color: black; border-color: white;";
    });

    for (let i = 0; i < 16 * 16; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
    }
}