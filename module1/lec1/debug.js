let a=10;
function sayhi(){
    console.log("function says hi");
}

function sayhii(){
    console.log("i am a argument")
}
function different(cb){
    cb();
}
different(sayhii);

