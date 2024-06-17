const CANVAS_SIZE = 804; 
const gridContainer = document.querySelector(".grid-container"); 

function allowDraw() {
  const boxes = document.querySelectorAll(".grid-container div.box"); 
  boxes.forEach((box) => box.addEventListener("mouseenter", enterHandler)); 

  function enterHandler() { 
    this.classList.add("hovered");
  }
}

// create starting 16x16 grid
for(let i = 0; i < 16; ++i) {
  for(let j = 0; j < 16; ++j) {
    const box = document.createElement("div"); 
    box.classList.add("default"); 
    box.classList.add("box"); 
    gridContainer.appendChild(box); 
  }
}
allowDraw(); 

const changeBtn = document.querySelector("button.change-res"); 
changeBtn.addEventListener("click", () => {
  let newResolution = Number(prompt("Please enter the new number of pixels per row (max. 100)", "16")); 
  if(newResolution > 100 || newResolution < 1) {
    alert("Resolution cannot be greater than 100 or less than 1!"); 
  }
  else {
    while(gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.lastChild); 
    }
    const boxSize = Math.floor(CANVAS_SIZE / newResolution); 
    for(let i = 0; i < newResolution; ++i) {
      const columnWrapper = document.createElement("div"); 
      for(let j = 0; j < newResolution; ++j) {
        const newBox = document.createElement("div"); 
        newBox.style.cssText = `height: ${boxSize}px; width: ${boxSize}px; border: 1px solid darkgray; margin: 0px; padding: 0px;`; 
        console.log(boxSize); 
        newBox.classList.add("box");
        columnWrapper.appendChild(newBox); 
      }
      gridContainer.appendChild(columnWrapper); 
    }
    allowDraw(); 
  }
});  

window.addEventListener("beforeunload", (event) => {
  event.preventDefault(); 
  event.returnValue = true; 
}); 