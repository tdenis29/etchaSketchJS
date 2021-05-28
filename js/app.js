
const container = document.getElementById("container");
const reset = document.getElementById('reset');
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


reset.addEventListener("click", (e) =>{
    let newGrid = prompt("Enter a number between 16-100");
    let newGridInt = parseInt(newGrid);
    if(newGridInt > 100){
        alert("Too Big")
    }
    else{
        makeRows(newGridInt, newGridInt);
        
    }
})
//get grid items we could make this a function
const gridCollection = document.getElementsByClassName('grid-item');
//get array because collection sucks
const gridItems = Array.from(gridCollection);

//nested event listener 
gridItems.forEach(item => {
    item.addEventListener('mouseover', (e) =>{
        item.style.backgroundColor = "grey";
    })
});