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
    
    for (i = 0; i < a ** 2; i++) {
        const div = document.createElement("div");

        div.style.height = `${dimensionOfDivs}px`
        div.style.width = `${dimensionOfDivs}px`

        div.classList.add('divGrid');

        div.classList.add('hover')
        container.appendChild(div);
    }

}

createGrid(16);

const divs = document.querySelectorAll('.hover');

divs.forEach(div => {
    div.addEventListener('mouseover', (e) => {
        e.target.classList.add('hovered')
    })
})

//add a button that clears + asks for input

const btn = document.createElement("button")
btn.textContent = "Clear"


document.querySelector('#btn-holder').appendChild(btn)

function clear() {
    const hovered = document.querySelectorAll('.hovered');
    console.log(hovered)
    console.log('pps')
}

btn.addEventListener('click', clear())



/*testing to see if I can change classes with a variable
const test = document.createElement('p')

test.textContent = "hello squirrel";

n=4

test.classList.add('hovered'+`${n}`)

container.appendChild(test) */