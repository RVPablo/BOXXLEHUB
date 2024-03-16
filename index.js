document.addEventListener("keydown", function(event) {
  let direction = "";
  switch(event.key) {
      case "ArrowUp":
          direction = "Haut";
          break;
      case "ArrowDown":
          direction = "Bas";
          break;
      case "ArrowLeft":
          direction = "Gauche";
          break;
      case "ArrowRight":
          direction = "Droite";
          break;
      default:
          return;
  }
  console.log("Direction : " + direction);
});


const gridContainer = document.getElementById('grid-container');
const numRows = 13;
const numCols = 12;

for (let i = 0; i < numRows; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');
    for (let j = 0; j < numCols; j++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        row.appendChild(cell);
    }
    gridContainer.appendChild(row);
}

const firstCell = document.querySelector('.grid-cell');
firstCell.classList.add('blue-cell');