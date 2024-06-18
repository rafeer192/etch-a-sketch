const CANVAS_SIZE = 804;  // Effective canvas size not including offset
const gridContainer = document.querySelector(".grid-container"); 

// create starting 16x16 grid
for(let i = 0; i < 16; ++i) {
  const columnWrapper = document.createElement("div"); 
  for(let j = 0; j < 16; ++j) {
    const box = document.createElement("div"); 
    box.classList.add("default"); 
    box.classList.add("box"); 
    columnWrapper.appendChild(box); 
  }
  gridContainer.appendChild(columnWrapper); 
}
allowDraw(); 

const changeResBtn = document.querySelector("button.change-res"); 
changeResBtn.addEventListener("click", changeResolutionHandler);  

function changeResolutionHandler() {
  let newResolution = Number(prompt("Please enter the new number of pixels per row (max. 100)", "16")); 
  if(newResolution > 100 || newResolution < 1) {
    alert("Resolution cannot be greater than 100 or less than 1!"); 
  }
  else {
    clearCanvas();
    const boxSize = Math.floor(CANVAS_SIZE / newResolution); 
    for(let i = 0; i < newResolution; ++i) {
      const colWrapper = document.createElement("div"); 
      for(let j = 0; j < newResolution; ++j) {
        const newBox = document.createElement("div"); 
        newBox.classList.add("box");
        newBox.style.cssText += `height: ${boxSize}px; width: ${boxSize}px;`; 
        colWrapper.appendChild(newBox); 
      }
      gridContainer.appendChild(colWrapper); 
    }
    if(changeColorBtn.classList.contains("randomize")) {
      allowDraw(); 
    }
    else {
      allowRandomDraw();
    }
  }
}

const changeColorBtn = document.querySelector("button.change-color"); 
changeColorBtn.addEventListener("click", changeColorHandler);

function changeColorHandler() { 
  if(changeColorBtn.classList.contains("randomize")) {
    allowRandomDraw(); 
  }
  else if(changeColorBtn.classList.contains("change-black")) {
    allowDraw(); 
  }
  if(changeColorBtn.classList.contains("randomize")) {
    changeColorBtn.classList.remove("randomize"); 
    changeColorBtn.classList.add("change-black"); 
    changeColorBtn.textContent = "Change to black coloring"; 
  }
  else {
    changeColorBtn.classList.remove("change-black"); 
    changeColorBtn.classList.add("randomize"); 
    changeColorBtn.textContent = "Change to random colors"; 
  }
}

function allowDraw() {
  const boxes = document.querySelectorAll(".box"); 
  boxes.forEach((box) => {
    box.removeEventListener("mouseenter", randomEnterHandler); 
    box.addEventListener("mouseenter", enterHandler); 
  }); 
}
function enterHandler() { 
  if(!this.classList.contains("hovered")) {
    this.style.opacity = "0.1"; 
    this.style.backgroundColor = "black";
    this.classList.add("hovered"); 
  }
  else if(this.style.opacity != "1") {
    this.style.opacity = 0.1 + Number(this.style.opacity);
  }
}

function clearCanvas() {
  while(gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild); 
  }
}

function allowRandomDraw() {
  const allBoxes = document.querySelectorAll(".box"); 
  allBoxes.forEach((box) => {
    box.removeEventListener("mouseenter", enterHandler); 
    box.addEventListener("mouseenter", randomEnterHandler); 
  }); 
}
function randomEnterHandler() {
  if(!this.classList.contains("hovered")) {
    let newColorCode = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.style.opacity = "0.1"; 
    this.style.backgroundColor = `${newColorCode}`; 
    this.classList.add("hovered"); 
  }
  else if(this.style.opacity != "1") {
    this.style.opacity = 0.1 + Number(this.style.opacity);
    console.log(this.style.backgroundColor); 
    console.log(this.style.opacity); 
  }
}

/*window.addEventListener("beforeunload", (event) => {
  event.preventDefault(); 
  event.returnValue = true; 
}); */
