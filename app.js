'use stric'
// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [0, 0],      
}
// ======================
var map = [
    [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],"M",[7,0],[8,0],[9,0]]
    [[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1]]
    [[0,2],[1,2],"M",[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2]]
    ["M", [1,3],[2,3],[3,3],[4,3],"M",[6,3],"R",[8,3], [9,3]]
    [[0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4]]
    [[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5]]
    [[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6]]
    [[0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7],[9,7]]
    [[0,8],"M",[2,8],"R","R",[5,8],[6,8],[7,8],[8,8],[9,8]]
    [[0,9],[1,9],[2,9],[3,9],[4,9],[5,9],[6,9],"M",[8,9],[9,9]]

];

 function turnLeft(rover){
  switch (rover.direction){
 case "N":
 return rover.direction = "W";
 break;
 console.log(rover.direction);
 case "W":
 return rover.direction = "S";
 break
 console.log(rover.direction);
 break ;
 case "S":
 return rover.direction = "E";
 console.log(rover.direction);
 break;
 case "E":
 return rover.direction = "N";
 console.log(rover.direction);
 break;
 

}
}



 function turnRight(rover){
  switch (rover.direction){
    case "N":
    return rover.direction = "E";
    break;
    console.log(rover.direction);
    case "E":
    return rover.direction = "S";
    break
    console.log(rover.direction);
    break ;
    case "S":
    return rover.direction = "W";
    console.log(rover.direction);
    break;
    case "W":
    return rover.direction = "N";
    console.log(rover.direction);
    break;
}
}; 

function moveForward(rover){
switch (rover.direction){
  case "W":
 if(rover.x -1 <= -1){
    console.log("Return to the grid");
  } else{
  return rover.x--,  
  rover.travelLog[0] --,
  console.log(rover.x);
  }

  break;
  case "N":
  if(rover.y -1 <= -1){
    console.log("Return to the grid");
  } else{  return rover.y--,
  rover.travelLog[1] --,
  console.log(rover.y);
  }
  break;
  
  case "S":
  if(rover.y +1 > 10){
    console.log("Return to the grid");
  } else{
  return rover.y++,
  rover.travelLog[1] ++,
  console.log(rover.y);
  }
  break;
  
  case "E":
  if(rover.x +1 > 10){
    console.log("Return to the grid");
  } else{
  return rover.x++,  
  rover.travelLog[0] ++,
  console.log(rover.x);
  }
  break;
    
  
    
    
  
}
};

switch(rover.x){
case -1:
  console.log("Return to the grid");
  break;
}

function moveBackward(rover){
  switch (rover.direction){
    case "W":
    if(rover.x +1 > 10){
      console.log("Return to the grid");
    } else{    
    return rover.x++,
    rover.travelLog[0] ++,
    console.log(rover.x);
    }
     break;
    case "N":
    if(rover.y +1 > 10){
      console.log("Return to the grid");
    } else{
    return rover.y++,
    rover.travelLog[1] ++,
    console.log(rover.y);
    }
     break;
    case "S":
    if(rover.y -1 <= -1){
      console.log("Return to the grid");
    } else{
    return rover.y--,
    rover.travelLog[1] --,
    console.log(rover.y);
    }
    break;
    case "E":
    if(rover.x -1 <= -1){
      console.log("Return to the grid");
    } else{
    return rover.x--,
    rover.travelLog[0] --,
    console.log(rover.x)
    }
    break;
  
  }
  };


  var k = "rfffffrjfff"
function commands(r,l,f){
  for(i = 0; i < r.length; i++) {
    if(r[i] == "r"){
     turnRight(rover);
     console.log(i);
    } else if(r[i] == "f"){
     moveForward(rover);
     console.log(i);
    } else if(r[i] == "l"){
     turnLeft(rover);
     console.log(i);
    } else if(r[i] == "b"){
      moveBackward(rover);
      console.log(i);
     }
     else console.log("Invalid command");
    }
  }
  for (var i = 0; i < 10; i++){
    var row = getNum();
    var colum = getNum();
    var travel = map[row][colum];
    if(map[row+1][colum] == "R"){
      console.log("a rock in your way")
    }else if(map[row][colum+1] == "R"){
      console.log("a rock in your way");
    }else if(map[row-1][colum] == "R"){
        console.log("a rock in your way");
      }else if(map[row][colum-1] == "R"){
        console.log("a rock in your way");
      
    }else if(map[row][colum+1] == "R"){
      console.log("a mountain in your way");
    }
    else if(map[row-1][colum] == "M"){
      console.log("a mountain in your way")
    }else if(map[row][colum-1] == "R"){
      console.log("a mountain in your way");
    }
    break;
  }
  function getNum(){
    return Math.floor(Math.random() * 10);
  }


















