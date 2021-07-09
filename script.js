// definindo cores no ultimo sera aleatorio.
const colors = document.querySelectorAll('.color');
colors[0].style.background = 'black';
colors[1].style.background = 'blue';
colors[2].style.background = 'red';
colors[3].style.background = 'green';

window.addEventListener('load', () => {
    colors[0].classList.add('selected');
  });

  function colorSelector() {
    const selectedColor = document.querySelector('#color-palette');
    selectedColor.addEventListener('click', (event) => {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
  colorSelector();

  function colorFill() {
    const pixelsFill = document.querySelector('.tabela');
    pixelsFill.addEventListener('click', (event) => {
      const newColor = document.querySelector('.selected').style.backgroundColor;
      event.target.style.backgroundColor = newColor;
    });
  }
  colorFill();

//   limpar quadrp
  function clearBoard() {
    const pixelBoard = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelBoard.length; index += 1) {
      pixelBoard[index].style.backgroundColor = 'white';
    }
  }
  const clearBoardButton = document.querySelector('#clear-board');
  clearBoardButton.addEventListener('click', clearBoard);