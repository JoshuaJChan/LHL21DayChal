function loadModule(index) { 
  if(availableModules[index].essential !== true){
    return null;
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
