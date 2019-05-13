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
function loadModule(index) { 
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
  if(availableModules[index].essential !== true){
    return null;
  }
}
function loopModule(){
  loadModule(availableModules.indexOf("life-support"));
}
loopModule();
