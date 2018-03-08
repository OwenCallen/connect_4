class CFBoard {
  constructor(){
    this._arr = new Array(7);
    for(let i = 0 ; i<this._arr.length ; i++){
      this._arr[i] = [0, 0, 0, 0, 0, 0];
    }
    //turn will ether be 1 or 2
    this._turn = 1;
    this._player1IsComp = false;
    this._player2IsComp = false;
    //0 for nether, 3 for a draw
    this._winnerIs = 0;
    //keeps track of moves made
    this._moveHistory = [];
  }

  isPartOf4(col, row){
    let team = this._arr[col][row];
    if(team==0){
      return false;
    }

    let down = 0;
    let dist = 1;
    while(row-dist>=0){
      if(this._arr[col][row-dist]==team){
        down++;
      }
      else{
        dist=row;
      }
      dist++;
    }
    let up = 0;
    dist = 1;
    while(row+dist<6){
      if(this._arr[col][row+dist]==team){
        up++;
      }
      else{
        dist=6;
      }
      dist++;
    }
    if(down+1+up>=4){
      this._winnerIs = team;
      return true;
    }

    let left = 0;
    dist = 1;
    while(col-dist>=0){
      if(this._arr[col-dist][row]==team){
        left++;
      }
      else{
        dist=col;
      }
      dist++;
    }
    let right = 0;
    dist = 1;
    while(col+dist<7){
      if(this._arr[col+dist][row]==team){
        right++;
      }
      else{
        dist=7;
      }
      dist++;
    }
    if(left+1+right>=4){
      this._winnerIs = team;
      return true;
    }

    let downLeft = 0;
    dist = 1;
    while(col-dist>=0 && row-dist>=0){
      if(this._arr[col-dist][row-dist]==team){
        downLeft++;
      }
      else{
        dist=col;
      }
      dist++;
    }
    let upRight = 0;
    dist = 1;
    while(col+dist<7 && row+dist<6){
      if(this._arr[col+dist][row+dist]==team){
        upRight++;
      }
      else{
        dist=7;
      }
      dist++;
    }
    if(downLeft+1+upRight>=4){
      this._winnerIs = team;
      return true;
    }
    let downRight = 0;
    dist = 1;
    while(col+dist<7 && row-dist>=0){
      if(this._arr[col+dist][row-dist]==team){
        downRight++;
      }
      else{
        dist=7;
      }
      dist++;
    }
    let upLeft = 0;
    dist = 1;
    while(col-dist>=0 && row+dist<6){
      if(this._arr[col-dist][row+dist]==team){
        upLeft++;
      }
      else{
        dist=7;
      }
      dist++;
    }
    if(downRight+1+upLeft>=4){
      this._winnerIs = team;
      return true;
    }
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
          this.isPartOf4(num, i);
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
  }

  logHistory(){
    console.log('Move history: '+ this._moveHistory);
  }
}


// testing below
//let myBoard = new CFBoard();
//myBoard.logHistory();
