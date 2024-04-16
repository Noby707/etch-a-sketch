// 2. Create a webpage with a 16x16 grid of square divs.

// Get container element
const container = document.getElementById("container");
const SCREEN_HEIGHT = 600;

// Get Grid Maker button and add EventListener
const GRID_MAKER_BUTTON = document.getElementById("Grid-Maker");
GRID_MAKER_BUTTON.addEventListener('click', promptIt);

let squareSideLength = 0;

// Function to create a grid element and add it into the container div
let createGridElement = function(n) {
    // Create gridElement
    let gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");

    // Set width and height of elements
    const SQUARE_SIDE_LENGTH = Math.floor(SCREEN_HEIGHT / n) - 2; // Subtract 2px for borders
    console.log(SQUARE_SIDE_LENGTH + "  " + SCREEN_HEIGHT + " " + n);
    gridElement.style.width = `${SQUARE_SIDE_LENGTH}px`;
    gridElement.style.height = `${SQUARE_SIDE_LENGTH}px`;
    console.log(gridElement.style.width + " " + gridElement.style.height);


    // Add Event Listener
    gridElement.addEventListener('mouseenter', mouseEvent);
    
    // Add borders
    gridElement.style.border = "1px solid black";

    // Append it into the container
    container.appendChild(gridElement);
}


// Function to create 16 * 16 grid elements
let createGrid = function(n) {
    // Make sure grid is clean before adding new elements
    gridCleanUp();

    for(let i = 0; i < n*n; i++) {
        createGridElement(n);
    }

    // Adjust Length of container's width and height
    let SquaresTotalLength = SCREEN_HEIGHT - (SCREEN_HEIGHT % n);

    container.style.width = `${SquaresTotalLength}px`;
    container.style.height = `${SquaresTotalLength}px`;
}

// Instantiate a square Grid 16 * 16
let n = 16;
createGrid(n);



function mouseEvent(e) {
    e.currentTarget.style.backgroundColor = "yellow";
}



// A function to clean up the grid
function gridCleanUp() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Reset container size
    container.style.width = SCREEN_HEIGHT;
    container.style.height = SCREEN_HEIGHT;
}

// A function to prompt a number to make the grid
function promptIt() {
    let gridDimension = prompt("Enter Dimension of Grid.");
    if (!isNaN(gridDimension)) {
        console.log("Grid Clean Up: " + gridDimension);
        createGrid(gridDimension);
    } else {
        console.log("Enter a valid number!");
    }
}