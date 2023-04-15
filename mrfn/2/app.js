const board = document.querySelector('#board')
const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
const input = document.querySelector('#num')

startBtn.addEventListener('click', start)
resetBtn.addEventListener('click', reset)

function start() {
  const squaresAmount = input.value
  
  for (let i = 0; i < squaresAmount; i++) {
    let square = document.createElement('div')
    square.classList.add('square')
    board.append(square)
  }
  
  board.addEventListener('mouseover', addColor)
  board.addEventListener('mouseout', deleteColor) 
}

function reset() {
  input.value = '400'
  board.innerHTML = ''
}

function addColor(event) {
  let sq = event.target.closest('.square')
  if (!sq) return
  let sqColor = getRandomColor()
  sq.style.backgroundColor = sqColor
  sq.style.boxShadow = `0 0 2px ${sqColor}, 0 0 10px ${sqColor}`
}

function deleteColor(event) {
  let sq = event.target.closest('.square')
  if (!sq) return
  sq.style.backgroundColor = '#1d1d1d'
  sq.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  let red = Math.floor(Math.random() * 256)
  let green = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}