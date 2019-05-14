function loadModule(index) { 
  if(availableModules[index].essential !== true){
    availableModules[index].essential = true
  }
    availableModules[index].enabled = true;       
    ship.modules.push(availableModules[index]);   
  
}
function findModuleIndex(name){  
  var index;
  for(i = 0;i < availableModules.length;i++){         
   if (availableModules[i].name === "life-support"){  
     loadModule(i);                                 
   }
   if (availableModules[i].name === name){ 
     index = i;
   }
 }
 return index;
}
loadModule(findModuleIndex("propulsion"));
loadModule(findModuleIndex("navigation"));

function resetLARRY(){
  for(i = 0;i<10;i++){
    LARRY.quack();
  }
}

resetLARRY();
loadModule(findModuleIndex("communication"));
