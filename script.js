const gridContainer = document.querySelector(".grid-container"); 
for(let i = 0; i < 16; ++i) {
  for(let j = 0; j < 16; ++j) {
    const box = document.createElement("div"); 
    gridContainer.appendChild(box); 
  }
}
const boxes = document.querySelectorAll(".grid-container div"); 
boxes.forEach((box) => box.addEventListener("mouseenter", enterHandler)); 

function enterHandler() {
  this.classList.add("hovered");
}



window.addEventListener("beforeunload", (event) => {
  event.preventDefault(); 
  event.returnValue = true; 
}); 