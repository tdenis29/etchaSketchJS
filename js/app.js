
const container = document.getElementById("container");

// this makes the grid
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);
//get grid items
const gridCollection = document.getElementsByClassName('grid-item');
//get array because collection sucks
const gridItems = Array.from(gridCollection);

//nested event listener 
gridItems.forEach(item => {
    item.addEventListener('mouseover', (e) =>{
        item.style.backgroundColor = "grey";
    })
});