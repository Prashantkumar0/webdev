const f2 = require("fs");   //require is predefined function
//console.log(f2);
let f1 = f2.readFileSync("./activity.txt","utf-8");
console.log(f1);
//f2.writeFileSync("./activity.txt","hello");
