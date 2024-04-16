// 2. Create a webpage with a 16x16 grid of square divs.

// Get container element
const container = document.getElementById("container");
const SCREEN_HEIGHT = 600;

let squareSideLength = 0;

// Function to create a grid element and add it into the container div
let createGridElement = function(n) {
    // Create gridElement
    let gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");

    // Set width and height of elements
    const SQUARE_SIDE_LENGTH = Math.floor(SCREEN_HEIGHT / n) - 2; // Subtract 2px for borders

    gridElement.style.width = `${SQUARE_SIDE_LENGTH}px`;
    gridElement.style.height = `${SQUARE_SIDE_LENGTH}px`;
    // gridElement.addEventListener('mouseenter', (e) => {
    //     e.currentTarget.style.backgroundColor = "green";
    // });
    gridElement.addEventListener('mouseenter', mouseEvent);
    // Add borders
    gridElement.style.border = "1px solid black";

    // Append it into the container
    container.appendChild(gridElement);
}


// Function to create 16 * 16 grid elements
let createGrid = function(n) {
    for(let i = 0; i < n*n; i++) {
        createGridElement(n);
    }
}

// Instantiate a square Grid 16 * 16
let n = 16;
createGrid(n);



// Adjust Length of container's width and height
let SquaresTotalLength = SCREEN_HEIGHT - (SCREEN_HEIGHT % n);

container.style.width = `${SquaresTotalLength}px`;
container.style.height = `${SquaresTotalLength}px`;


function mouseEvent(e) {
    e.currentTarget.style.backgroundColor = "green";
}