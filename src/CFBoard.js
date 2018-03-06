class CFBoard {
  constructor(){
    this._arr = new Array(7);
    for(let i = 0 ; i<this._arr.length ; i++){
      this._arr[i] = [0, 0, 0, 0, 0, 0];
    }
    this._turn = 1;
    this.compIsPlayer = 0
  }
  canAddToCol(num){
    if(this._arr[num][5]==0){
      return true;
    }
    else{
      return false;
    }
  }
  addToCol(num){
    let player = this._turn;
    for(let i = 0 ; i<this._arr.length ; i++){
      if(this._arr[num][i]==0){
        this._arr[num][i] = player;
        i=this._arr.length;
      }
    }
    if(player==1){
      this._turn = 2;
    }
    else{
      this._turn = 1;
    }
  }
  get arr(){
    return this._arr;
  }
  get turn(){
    return this._turn;
  }
  logBoard(){
    let str = '';
    for(let row = this._arr[0].length-1 ; row >= 0 ; row--){
      str = '';
      for(let col = 0 ; col < this._arr.length ; col++){
        str+=this._arr[col][row]+' ';
      }
      console.log(str);
    }
  }
}



let myBoard = new CFBoard();
myBoard.logBoard();
