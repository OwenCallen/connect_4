

let board = new CFBoard();
displayBoard();

function colClick(col){
  if(board.canAddToCol(col)){
    board.addToCol(col);
    board.logBoard();
    displayBoard();
  } else {

  }
}


function displayBoard(){
  document.getElementById('htmlBoard').innerHTML = generateHTML(board.arr)
}

function generateHTML(matrix) {											// creates html to display inputed matrix, output string
  var code = "";
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 7; col++) {
      code += "<div class='players player" + matrix[col][row] + "' style='position:absolute; top:" +
        (250 - (row*50)) + "px; left:" + col*50 + "px' >";
      matrix[col][row]
      code += "</div>";
    }
  }
  return code;
}
