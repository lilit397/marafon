const board = document.querySelector('#board')
const colors = ['red','green','blue']

const NUMBER = 400

for(let i = 0; i < NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',() => setColor(square))
    square.addEventListener('mouseleave', () => {
        setTimeout(() => removeColor(square),1000)
    } )


    board.append(square)
}

function setColor(element) {
    let index = getRandomColor(colors)
    let color = colors[index]

    element.style.background = color;
    element.style.boxShadow = `0 0 12px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #333'
}

function getRandomColor(arr) {
    return Math.floor(Math.random() * (arr.length - 1))
}


