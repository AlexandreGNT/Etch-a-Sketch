const grid_container = document.querySelector('#grid_container')

function createGrid(container){
    for(i=0;i<9;i++){
            const cell  = document.createElement('div')
            cell.classList.add('cell')
            container.appendChild(cell)
    }
}

createGrid(grid_container)