// definindo cores no ultimo sera aleatorio.
const colors = document.querySelectorAll('.color');
colors[0].style.background = 'black';
colors[1].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 254})`;
colors[2].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 254})`;
colors[3].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 254})`;



// tabela 
// lembrar tr sao linhas e td sao celulas
const tabela = document.querySelector('#pixel-board');
function pixelsTable(numeros){
  for (let linha = 0; linha < numeros; linha += 1) {
    const lines = document.createElement('tr');
    tabela.appendChild(lines);
    for (let celulas = 0; celulas < numeros; celulas += 1) {
      const celula = document.createElement('td');
      lines.appendChild(celula);
      celula.className = 'pixel';
      celula.style.backgroundColor = 'white';
      // tabela.border = "1px"; borda da celula
      // tabela.cellPadding = "40px"; tamanho da celula
      // tabela.cellSpacing = "0px"; espaco da celula
    }
  }
}
pixelsTable(5);


// selecionar no inicio
window.addEventListener('load', () => {
    colors[0].classList.add('selected');
  });


// alterar cor do pixel selecionado
// pixel selecionado para mudar de cor etc
  function colorSelector() {
    const selectedColor = document.querySelector('#color-palette');
    selectedColor.addEventListener('click', (event) => {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
  colorSelector();


// mudanca de cor selecionado na tabela
  function colorFill() {
    const pixelsFill = document.querySelector('#pixel-board');
    pixelsFill.addEventListener('click', (event) => {
      const newColor = document.querySelector('.selected').style.backgroundColor;
      event.target.style.backgroundColor = newColor;
    });
  }
  colorFill();

//   limpar quadro
   function clearMan() {
    const boxTable = document.querySelectorAll('.pixel');
    for (let index = 0; index < boxTable.length; index += 1) {
      boxTable[index].style.backgroundColor = 'white';
    }
  }
  const limpado = document.querySelector('#clear-board');
  limpado.addEventListener('click', clearMan);
 
  function clear() {
    tabela.innerHTML = '';
  }

  function criarTabela() {
    const botao = document.getElementById('generate-board')
    botao.addEventListener('click', () => {
      let quantidades = document.getElementById('board-size').value;
      document.getElementById('board-size').value = '';
      clear()
      if (quantidades == '') {
        window.alert('Board inválido!');
      } 
      if (quantidades < 5) {
        quantidades = 5;
      }
      if (quantidades > 50) {
        quantidades = 50;
      }
      pixelsTable(quantidades);
    }
    )
    // body
  }
  criarTabela();
  



  

    // vamos criar o corpo da tabela, ou seja, o tbody 
   

    // const tabela = document.querySelector('#pixel-board');
    // function criarTabela(n){
    //     for(let indice = 0; indice < n; indice += 1){
    //         const createRow = document.createElement('div');
    //         createRow.className = 'pixel-board'
    //             for (let index = 0; index < n; index += 1){
    //                 const novoPixel = document.createElement('div');
    //                 novoPixel.className = 'pixel'
    //                 createRow.appendChild(novoPixel);
    //             }
    //             tabela.appendChild(createRow);
    //     }
    // }
    // criarTabela(10);
