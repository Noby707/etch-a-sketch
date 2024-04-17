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
    gridElement.classList.add("grid-element"); // Adds 2px border length to both width and height 

    // Set width and height of elements
    const SQUARE_SIDE_LENGTH = Math.floor(SCREEN_HEIGHT / n) - 2; // Subtract 2px for borders
    
    gridElement.style.width = `${SQUARE_SIDE_LENGTH}px`;
    gridElement.style.height = `${SQUARE_SIDE_LENGTH}px`;

    // Add opacity with js
    gridElement.style.opacity = 1;
    // console.log(gridElement.style.opacity + " opacity");

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
    let rgbColor = RGBRandomizer();
    e.currentTarget.style.backgroundColor = rgbColor;

    // Add darkening opacity, increase opacity by 10% for event target
    let currOpacity = e.currentTarget.style.opacity;
    
    if (currOpacity > 0) {
        e.currentTarget.style.opacity -= 0.1;
    }

    // let str = JSON.stringify(e.currentTarget.style)
    console.log("  value " + currOpacity);
}

function RGBRandomizer() {
    let rgbColor = "";
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    rgbColor = `rgb(${red} ${green} ${blue}`;

    return rgbColor;
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
        // Limit grid to 100
        if (gridDimension <= 100 && gridDimension > 0) {
            createGrid(gridDimension);
        } else {
            alert("Enter a valid number between 1 and 100!");
        }

    } else {
        // console.log("Enter a valid number!");
        alert("Enter a valid number between 1 and 100!");
    }
}