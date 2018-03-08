class randoComp {
  constructor(playerNum){
    if(playerNum==1 || playerNum==2){
      this._playerNum = playerNum;
    }
  }

  get playerNum(){
    return this._playerNum;
  }

  nextMove(cFBoard){
    if(cFBoard.turn()!==playerNum){
      return "Not my turn.";
    }
    let moves = [];
    for(let i = 0 ; i<7 ; i++){
      if(cFBoard.canAddToCol(i)){
        moves.push(i);
      };
    }
    move = Math.floor(Math.random()*moves.length);
    return moves[move];
  }

}
