const gridContainer = document.getElementById("grid-container");
const clearButton = document.getElementById("clear-button");
const createButton = document.getElementById("generate-grid");
const gridSizeInput = document.getElementById("grid-size");

// Create the grid
function createGrid(rows, cols) {

    gridContainer.innerHTML = "";

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridContainer.appendChild(cell);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
}

function clearGrid() {
    const cells = gridContainer.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "aqua";
    });

}

// Event listener to change cell color when hovered
gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("cell")) {
        e.target.style.backgroundColor = "black";
    }
});

// Event listener to clear the grid
clearButton.addEventListener("click", clearGrid);

// Event listener to clear the grid

createButton.addEventListener("click", function() {
    const newSize = parseInt(gridSizeInput.value);
    if (newSize >= 1 && newSize <= 100) { // Limit grid size to a reasonable range
        createGrid(newSize, newSize);
    } else {
        alert("Please enter a valid grid size between 1 and 100.");
    }  
});