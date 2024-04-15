// 2. Create a webpage with a 16x16 grid of square divs.
const newDiv = document.createElement("grid-element");
// newDiv.style.backgroundColor = ""
const container = document.getElementById("container");

// console.log(container);
// container.appendChild(newDiv);

// Function to create a grid element and add it into the container div
let createGridElement = function() {
    // Create gridElement
    let gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    // Style
    // gridElement.style.width = "36px";
    // gridElement.style.height = "36px";
    // gridElement.style.backgroundColor = "white";


    // Append it into the container
    container.appendChild(gridElement);
}

// createGridElement();

// Function to create 16 * 16 grid elements
let createGrid = function(n) {
    for(let i = 0; i < n*n; i++) {
        createGridElement();
    }
}

createGrid(16);

    // Create the divs using JavaScript. Don’t try to create them by hand by copying and pasting them in your HTML file!
    // It’s best to put your grid squares inside a “container” div. This div can be written in your HTML file.
    // Use Flexbox to make the divs appear as a grid (versus just one on each line). Despite the name, do not be tempted to research or use CSS Grid, as it will be taught in a later lesson after the foundations path. This project is an opportunity specifically to practice Flexbox!
    // Be careful with borders and margins, as they can adjust the size of the squares!
    // “OMG, why isn’t my grid being created???”
    // Did you link your CSS stylesheet?
    // Open your browser’s developer tools.
    // Check if there are any errors in the JavaScript console.
    // Check your “elements” panel to see if the elements have actually shown up but are somehow hidden.
    // Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.