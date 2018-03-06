

let board = new CFBoard();
displayBoard();

function colClick(col){
  if(board.canAddToCol(col)){
    board.addToCol(col);
    board.logBoard();
    displayBoard();
    showTurn();
  } else {
    document.getElementById('status').innerHTML = "<div class='player0'>Invalid move!</div>";
    setTimeout(showTurn, 800);
  }
}

function displayBoard(){
  document.getElementById('htmlBoard').innerHTML = generateHTML(board.arr)
}

function showTurn(){
  document.getElementById('status').innerHTML = "<div class='player" + board.turn + "'>Turn " + board.turn + "</div>";
}


function generateHTML(boardArr) {											// creates html to display inputed boardArr, output string
  var code = "";
  for (var col = 0; col < 7; col++) {
    code += "<div style='position:absolute; top:0px; left:" + col*50 + "px' >";
    code += "<button type='button' name='col" + col + "' onclick='colClick(" + col + ")'>&#x21E9</button>";
    code += "</div>";
    for (var row = 0; row < 6; row++) {
      code += "<div class='piece player" + boardArr[col][row] + "' style='top:" +
        (280 - (row*50)) + "px; left:" + col*50 + "px' >";
      code += boardArr[col][row]
      code += "</div>";
    }
  }
  return code;
}
