const gridContainer = document.querySelector(".grid-container"); 
for(let i = 0; i < 16; ++i) {
  const rowBox = document.createElement("div"); 
  for(let j = 1; j < 16; ++j){
    const colBox = document.createElement("div"); 
    gridContainer.appendChild(colBox); 
  }
  gridContainer.appendChild(rowBox); 
}