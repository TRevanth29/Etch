const container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square"); // Add the "grid-square" class to the div
    container.appendChild(square); // Append the div to the container
}
