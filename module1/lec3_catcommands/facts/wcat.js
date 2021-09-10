let fs = require('fs');
let f1 = fs.readFileSync("./f1.txt", "utf8");
let f2 = fs.readFileSync("./f2.txt", "utf8");
//console.log(f1 + "\n" + f2);
function splitData(f1) {


  let emptyIncluded = false;
  let removedspaces = [];
  let splitteddata = f1.split("\r\n");
  console.log(splitteddata);
  for (let i = 0; i < splitteddata.length; i++) {
    if (splitteddata[i] == "" && emptyIncluded == false) {
      removedspaces.push(splitteddata[i]);
      
      emptyIncluded = true;

    } else if (splitteddata[i] != "") {
      removedspaces.push(splitteddata[i]);
      if(i < splitteddata.length-2)
      emptyIncluded = false;
    }
  }
  // console.log(removedspaces);
  let removedspacestring = removedspaces.join("\r\n");
  return (removedspacestring);
}
// splitData(f1);
let removedspacestring = splitData(f1);
console.log(removedspacestring);