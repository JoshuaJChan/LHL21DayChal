function countModules(){
  return availableModules.length;
}
function countEssential(){
  var count = 0;
  for(i = 0;i < availableModules.length;i++){
    if (availableModules[i].essential === true){
      count++;
    }
  }
  return count;
}
