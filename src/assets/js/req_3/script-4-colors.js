const container = document.querySelector('#container-colors');
const resetButton = document.querySelector('#reset-btn')
let elements = container.querySelectorAll('div');
elements = [...elements];

elements.forEach(element => element.addEventListener('click', () => element.style.backgroundColor = 'black'));
resetButton.addEventListener('click', () => {
  elements[0].style.backgroundColor = 'blue'
  elements[1].style.backgroundColor = 'red'
  elements[2].style.backgroundColor = 'green'
  elements[3].style.backgroundColor = 'yellow'
})