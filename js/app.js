
/*onload needs to load starter grid and begin listener.
then on reset we need to 
1. erase colored squares ? function eraseSquares ? classlist maybe needed to handle rainbow squares.
2.draw grid new grid with new input
3.activate drawing with event listener 
4.start listening
*/
const container = document.getElementById("container");
const reset = document.getElementById('reset');
const clearer = document.getElementById('clear')
// this makes the grid for strarter and reset 
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
  const gridCollection = document.getElementsByClassName('grid-item');
  const gridItems = Array.from(gridCollection);
  gridItems.forEach(item => {
    item.addEventListener('mouseover', (e) =>{
        item.style.backgroundColor = "grey";
        // add class to toggle for draw/erase? 
    })
});
};
makeRows(16, 16);
// erase grid
function eraseSquares(){
    const gridCollection = document.getElementsByClassName('grid-item');
    const gridItems = Array.from(gridCollection);
    gridItems.forEach(item => {
        if(item.style.backgroundColor === "grey"){
            item.style.backgroundColor = "white";
        }
    })
}

//event listenrs
clearer.addEventListener('click', e => {
    eraseSquares();
})
reset.addEventListener("click", (e) =>{
    let newGrid = prompt("Enter a number between 16-100");
    let newGridInt = parseInt(newGrid);
    if(newGridInt > 100 || newGridInt === NaN){
        alert("Number is too big or not a number! C'MON MAN!")
    }
    else{
        container.innerHTML = "";
        makeRows(newGridInt, newGridInt);
    }
})
//get grid items we could make this a function or add to above function.
// const gridCollection = document.getElementsByClassName('grid-item');
// //get array because collection sucks
// const gridItems = Array.from(gridCollection);

// //nested event listener 
// gridItems.forEach(item => {
//     item.addEventListener('mouseover', (e) =>{
//         item.style.backgroundColor = "grey";
//     })
// });