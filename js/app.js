

/*onload needs to load starter grid and begin listener.
then on reset we need to 
1. erase colored squares ? function eraseSquares ? classlist maybe needed to handle rainbow squares.
2.draw grid new grid with new input
3.activate drawing with event listener 
4.start listening
*/
const container = document.getElementById("container");
//buttons
const reset = document.getElementById('reset');
const clearer = document.getElementById('clear');
const rainbow = document.getElementById('rainbow');
const pen = document.getElementById('pen');
//raibow getter returns a color


// this makes the grid for strarter and reset 
function makeRows(rows = 16, cols = 16) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
  const gridCollection = document.getElementsByClassName('grid-item');
  const gridItems = Array.from(gridCollection);
  //listen to draw
  gridItems.forEach(item => {
    item.addEventListener('mouseover', (e) =>{
        item.classList.toggle('colored');
        item.style.backgroundColor = pen.value;
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
        } if(item.style.backgroundColor !== "white"){
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
    if(newGridInt > 100 || newGridInt === NaN || newGridInt === 0 || newGridInt === ""){
        alert("Number is too big or not a number! C'MON DUDE! 0 doesnt count!")
        makeRows(16,16)
    }
    else{
        container.innerHTML = "";
        makeRows(newGridInt, newGridInt);
        pen.value = "#808080";
    }
})
//wait for clicks on rainbow 
rainbow.addEventListener('click', e =>{
    eraseSquares();
    const gridCollection = document.getElementsByClassName('grid-item');
    const gridItems = Array.from(gridCollection);
    gridItems.forEach(item => {
        item.addEventListener('mouseover', (e) =>{
            let newColor = "#";
            newColor += Math.floor(Math.random()*16777215).toString(16);
            item.style.backgroundColor = newColor;
        })
})});
