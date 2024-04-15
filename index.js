// 2. Create a webpage with a 16x16 grid of square divs.

// Get container element
const container = document.getElementById("container");


// Function to create a grid element and add it into the container div
let createGridElement = function() {
    // Create gridElement
    let gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");

    // Append it into the container
    container.appendChild(gridElement);
}


// Function to create 16 * 16 grid elements
let createGrid = function(n) {
    for(let i = 0; i < n*n; i++) {
        createGridElement();
    }
}

// Instantiate a square Grid 16 * 16
createGrid(16);
