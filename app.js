const SQUARES_NUMBER = 440
const board = document.querySelector('#board')
const colors = ['pink', 'yellow', 'violet', 'cyan']

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', setColor)

  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}

function setColor(event) {
  const element = event.target
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
  const element = event.target
  element.style.backgroundColor = '#ffffff'
  element.style.boxShadow = `0 0 2px #ffffff`
}



function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}