const container = document.querySelector(".container");

// Commented out to make a new function where the CSS for width/height
// are included within the function

/* function createGrid(a, b) {
  for (i = 0; i < a * b; i++) {
    const div = document.createElement("div");
    
    div.classList.add('divGrid');
    div.classList.add('hover')

    container.appendChild(div);
  }
} */
//creates a 16x16 grid

function createGrid(a) {
  const dimensionOfDivs = 480 / a;
  removeChildren(container);

  for (i = 0; i < a ** 2; i++) {
    const div = document.createElement("div");

    div.style.height = `${dimensionOfDivs}px`;
    div.style.width = `${dimensionOfDivs}px`;

    div.classList.add("divGrid");

    div.classList.add("hover");
    container.appendChild(div);
  }
    const divs = document.querySelectorAll(".hover");

    divs.forEach((div) => {
      div.addEventListener("mouseover", (e) => {
        e.target.classList.add("hovered");
      });
    });
}

createGrid(16);

//add a button that clears + asks for input

const btn = document.createElement("button");
btn.textContent = "Clear";
btn.classList.add("clear");

document.querySelector("#btn-holder").appendChild(btn);

btn.addEventListener("click", clear); //learned that you don't need () when calling function as argument
btn.addEventListener("click", promptGrid);

function clear() {
  const squares = document.querySelectorAll(".hover");
  squares.forEach((square) => {
    square.classList.remove("hovered");
  });
}

function promptGrid() {
  let a = prompt("Enter grid size");
  a = Number(a);
  if (a > 100) {
    alert("100x100 is maximum grid size");
    a = 100;
  }
  if (isNaN(a)) {
      alert ('Please enter a number')
      a = 16
  }
  createGrid(a);
}

function removeChildren(parent) {
  while (parent.firstElementChild) {
    parent.removeChild(parent.firstElementChild);
  }
}