console.log("hello  world");
var mazeContainer = document.getElementById("maze_container");

var size = 10;

for(var i = 0; i < size; i++){
  var row = document.createElement("div");
  row.id = "row"+(i+1);
  for(var j = 0; j < size; j++){
    var col = document.createElement("div");
    col.id = "col"+((i*10)+(i+j+1)); 
    row.appendChild(col);
  }
  mazeContainer.appendChild(row);
}

