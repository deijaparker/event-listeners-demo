// JavaScript code to handle event listeners

// Select the main screen element
const mainScreen = document.querySelector(".screen");

// Function to handle click event
const handleClick = () => {
  const clickButton = document.querySelector("#clickButton");
  clickButton.addEventListener("click", () => {
    mainScreen.innerHTML = "You clicked the button!";
  });
};

// Function to handle mouseover event
const handleMouseOver = () => {
  const gridSquares = document.querySelectorAll(".gridSq");
  gridSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "pink";
    });
    square.addEventListener("mouseout", () => {
      square.style.backgroundColor = "";
    });
  });
};

// Initialize event listeners
handleClick();
handleMouseOver();
