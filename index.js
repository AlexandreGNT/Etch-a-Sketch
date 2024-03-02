const grid_container = document.querySelector('#grid_container')
function isInteger(number) {
    return number === Math.round(number);
  }
function createGrid(container,numberCells){
    numberCells = prompt('Number of cells')
    const rootNumber = Math.pow(numberCells, 0.5)
    let checkRootNumber = isInteger(rootNumber)
    if(checkRootNumber){
        for(i=0;i<numberCells;i++){
            grid_container.setAttribute('style', `grid-template-columns: repeat(${rootNumber}, 1fr)`);
            const cell  = document.createElement('div')
            cell.classList.add('cell')
            container.appendChild(cell)
            cell.addEventListener('mouseenter',()=> {
                cell.classList.add('hovered')
            })
        }} else {
            alert('Invalid input. Please enter a valid integer to create a perfect .');
        }
    
}
createGrid(grid_container)