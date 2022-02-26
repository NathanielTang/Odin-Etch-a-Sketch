const container = document.querySelector(".container");
console.log(container);

function createGrid(a, b) {
  for (i = 0; i < a * b; i++) {
    const div = document.createElement("div");
    
    div.classList.add('divGrid');
    div.classList.add('hover')

    container.appendChild(div);
  }
}

createGrid(16,16);

const divs = document.querySelectorAll('.hover');

divs.forEach(div => {
    div.addEventListener('mouseover', (e) => {
        e.target.classList.add('hovered')
    })
})

