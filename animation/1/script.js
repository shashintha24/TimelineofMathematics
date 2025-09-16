// Set random starting positions for both math items and tools
const mathItems = document.querySelectorAll('.math-item');
const toolItems = document.querySelectorAll('.tool-item');

// Function to set random positions for math items and tools
function setRandomPositions(items) {
  items.forEach(item => {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    item.style.left = `${randomX}px`;
    item.style.top = `${randomY}px`;
  });
}

// Apply random positions to both math symbols and tools
setRandomPositions(mathItems);
setRandomPositions(toolItems);
