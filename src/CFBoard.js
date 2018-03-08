class CFBoard {
  constructor(){
    this._arr = new Array(7);
    for(let i = 0 ; i<this._arr.length ; i++){
      this._arr[i] = [0, 0, 0, 0, 0, 0];
    }
    //turn will ether be 1 or 2
    this._turn = 1;
    //0 for nether
    this._compIsPlayer = 0;
    //0 for nether, 3 for a draw
    this._winnerIs = 0;
    //keeps track of moves made
    this._moveHistory = [];
  }
  gameOver(){
    return false;
  }
  canAddToCol(num){
    if(this._arr[num][5]==0 && this._winnerIs==0){
      return true;
    }
    else{
      return false;
    }
  }
  addToCol(num){
    let player = this._turn;
    if(this.canAddToCol(num)){
      this._moveHistory.push(num);
      if(player==1){
        this._turn = 2;
      }
      else{
        this._turn = 1;
      }
      for(let i = 0 ; i<this._arr.length ; i++){
        if(this._arr[num][i]==0){
          this._arr[num][i] = player;
          i=this._arr.length;
        }
      }
    }
  }
  get arr(){
    return this._arr;
  }
  get turn(){
    return this._turn;
  }
  undo (){
    let lastMove = this._moveHistory.pop();
    for(let i = 5 ; i>=0 ; i--){
      if(this._arr[i]!==0){
        this._arr[i]=0;
        i=-1;
      }
    }
  }
  logBoard(){
    let str = '';
    for(let row = this._arr[0].length-1 ; row >= 0 ; row--){
      str = 'row '+row+': ';
      for(let col = 0 ; col < this._arr.length ; col++){
        str+=this._arr[col][row]+' ';
      }
      console.log(str);
    }
    console.log(this._moveHistory);
  }
}


// testing below
let myBoard = new CFBoard();
myBoard.logBoard();
