const container = document.querySelector(".container");
function getNumberOfSquares() {
    let no = prompt("Enter the number of squares on each side (max 100):");
    while (no < 1 || no > 100) {
        no = prompt("Please enter a valid number between 1 and 100:");
    }
    return no;
}   
const no = getNumberOfSquares();
for (let i = 0; i < no * no; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.style.width = `${100 / no}%`;
    square.style.height = `${100 / no}%`;

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "tomato";
    });

    container.appendChild(square);
}