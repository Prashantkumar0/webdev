let fs = require('fs');
let f1 = fs.readFileSync("./f1.txt","utf8");
let f2 = fs.readFileSync("./f2.txt","utf8");
//console.log(f1 + "\n" + f2);
function splitData(f1){
   
  let splitteddata =f1.split("\n");
  console.log(splitteddata);  
}
splitData(f1);
