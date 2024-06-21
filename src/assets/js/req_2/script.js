// Los nombres del ejercicio fueron cambiados para tener una convención real. En inglés

const colorInput = document.querySelector('#color-selector')
const container = document.querySelector('#ele1')
const textDisplay = document.querySelector('#text-display')
const changecolor = (color) => {
  container.style.backgroundColor = color
  textDisplay.style.color = color
  textDisplay.innerHTML = color
}

// Init listeners
container.addEventListener("click", () => changecolor(colorInput.value));