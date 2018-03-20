sol = [
[0,7,0,2,3,8,0,0,0],
[0,0,0,7,4,0,8,0,9],
[0,6,8,1,0,9,0,0,2],
[0,3,5,4,0,0,0,0,8], 
[6,0,7,8,0,2,5,0,1], 
[8,0,0,0,0,5,7,6,0], 
[2,0,0,6,0,3,1,9,0], 
[7,0,9,0,2,1,0,0,0], 
[0,0,0,9,7,4,0,8,0]];


var printBoard = function(s) { // display the beginning board
 
  var row;       
  var col;

  
  for (row=1; row<=sol.length; row++){
    for(col=1; col<=sol.length; col++){
      var test = document.getElementById('r'+row+col);
      test.innerHTML = sol[row-1][col-1];
      
      }
    }
};

// only check what is empty once in the beginning of the program
var detectEmpty = function(s){
   var x;
   var y;
   
   var EmptyIndex=[[],[]];
   for (x=0; x<9; x++){
      for (y=0; y<9; y++){
        if (s[x][y]==0){
           EmptyIndex[0].push(x);
           EmptyIndex[1].push(y);
          }
        }
      }
      holdEmpty = EmptyIndex;
     };

// do a real time check for what possible numbers are available
var delImpos = function (r, c){
   var row = r;
   var col = c;
   
      for (col=0; col<9; col++)
         while (NumAv.indexOf(sol[r][col])!=-1)
            NumAv.splice(NumAv.indexOf(sol[r][col]),1);
         

      
      for (row=0; row<9; row++)
         while (NumAv.indexOf(sol[row][c])!=-1)
            NumAv.splice(NumAv.indexOf(sol[row][c]),1);
         
            
      var R;
      var C;
         for (R= (r-r%3); R<(r-r%3+3); R++)
            for (C= (c-c%3); C<(c-c%3+3); C++)
               while (NumAv.indexOf(sol[R][C])!=-1)
                  NumAv.splice(NumAv.indexOf(sol[R][C]),1);
               
};

 


var solve = function(s) {

   var figure;
   var x = holdEmpty[0][count];
   var y = holdEmpty[1][count];
   
   document.write("this is index "+x + ", "+ y +"<br>");

   NumAv = [1,2,3,4,5,6,7,8,9];
   delImpos(x,y);
   var localNum = NumAv;
   document.write("localNumAvailable: [" +localNum +"]"+"<br>");
   
   if (localNum.length>0){
      if (count==(holdEmpty[0].length-1)){
         document.write("we win at count = " + count + " (of coure... This is the only condition to win)");
         // win
         s[x][y]=localNum[0];
         win=1;
         return;
      }  
      else
      { 
        
         for(figure=0; figure<localNum.length; figure++){
            trial++;
            s[x][y]=localNum[figure];
            document.write("try "+ localNum[figure] +"<br>");
            count++;
            solve(s);
            if (win==1){
               return;
            }
            document.write("fail at count= " + count+ "; "+ "<br>");
            count--;
            s[x][y]=0;
         }
         return;
      }
   }
   else
      return;

};

      var holdEmpty;
      var trial=0;
      var win =0;
      var count = 0;


printBoard(sol);
detectEmpty(sol);
solve(sol);
printBoard(sol);