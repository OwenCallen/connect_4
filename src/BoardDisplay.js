

let board = new CFBoard();
displayBoard()

function displayBoard(){
  document.getElementById('htmlBoard').innerHTML = generateHTML(board.arr)

}

function generateHTML(matrix) {											// creates html to display inputed matrix, output string
  var code = "";
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 7; col++) {
      code += "<div class='player" + matrix[col][row] + "' style='position:absolute; top:" + row*50 + "px; left:" + col*50 + "px' >";
        matrix[col][row]
      code += "</div>";
    }
  }
  return code
}
