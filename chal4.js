// Problems Encountered:
// 1. not able to input correct index number since "Cannot read property 'essential' of undefined", must be a problem in loopModule
function loadModule(index) { 
  if(availableModules[index].essential !== true){ //if the essential flag from the module is true
    return null;
  }
    availableModules[index].enabled = true;       //change enabled flag to be true
    ship.modules.push(availableModules[index]);   //add object to ship.modules array
  
}
function loopModule(){  
 for(i = 0;i < availableModules.length;i++){  //loop through array of Module objects
   if (availableModules[i].name === "life-support"){ //find Module with name property "life-support"
     loadModule(i);   //load that module using its index in array 
   }
 }
}
loopModule(); //call loopModule
