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
    for(let row = 5 ; row >= 0 ; row--){

    }
  }
}



let myBoard = new CFBoard();
