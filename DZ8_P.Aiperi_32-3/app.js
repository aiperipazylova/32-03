
  function changeColor() {
    const randomColor = getRandomColor()
    const square = document.getElementById('colorSquare')
    square.style.backgroundColor = randomColor
    square.innerText = randomColor
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
