const gridContainer = document.querySelector(".grid-container"); 
for(let i = 0; i < 16; ++i) {
  //const rowBox = document.createElement("div"); 
  for(let j = 0; j < 16; ++j){
    const box = document.createElement("div"); 
    gridContainer.appendChild(box); 
  }
  //gridContainer.appendChild(rowBox); 
}