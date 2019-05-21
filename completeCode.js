function powerOn() {
  ship.powerOn = true;
}
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
  if(availableModules[index].essential !== true){
    availableModules[index].essential = true;
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

function setMessage(){
  radio.message = JSON.stringify(navigation);
}
setMessage();

function activateBeacon(){
  radio.beacon = true;
}

function setFrequency(){  //frequency must be set to avg of 88-108 MHz
  radio.frequency = (radio.range.low + radio.range.high)/2;
}

function initialize(){
  navigation.x=navigation.y=navigation.z = 0;
}

function calibrateX(){
  var signal;
  for(i=1;i<=12;i++){
    signal = checkSignal();
    if(signal !== undefined){
      navigation.x = signal;
      break;
    }
  }
}

function calibrateY(){
  var signal;
  for(i=1;i<=60;i++){
    signal = checkSignal();
    if(signal !== undefined){
      navigation.y = signal;
      break;
    }
  }
}
function calibrateZ(){
  var signal;
  for(i=1;i<=60;i++){
    signal = checkSignal(); 
    if(signal !== undefined){
      navigation.z = signal;
      break;
    }
  }
}
function calibrate(){
  calibrateX();
  calibrateY();
  calibrateZ();
}

function setSpeed(speed){
  if(parseInt(speed)>=0){
    navigation.speed = parseInt(speed);
  }
}

function activateAntenna(){
  ship.antenna.active = true;
}

function sendBroadcast(){
  for(i = 0;i<100;i++){
    broadcast();
  }
}


function configureBroadcast(){
  setFrequency();
  activateAntenna();
  sendBroadcast();
}
configureBroadcast();

function decodeMessage(message){
  var splitMessage = message.split("");
  for(i=0;i<splitMessage.length;i++){
    if(splitMessage[i] === "1")
      splitMessage[i] = "i";
    else if(splitMessage[i] === "4")
      splitMessage[i] = "a";
    else if(splitMessage[i] === "3")
      splitMessage[i] = "e";
    else if(splitMessage[i] === "0")
      splitMessage[i] = "o";
    else if(splitMessage[i] === "2")
      splitMessage[i] = "u";
    else if(splitMessage[i] === "5")
      splitMessage[i] = "y";
  }
  return splitMessage.join("");
}

function returnToEarth(){
  navigation.x = parseInt(decodeMessage(broadcast("x")),16);
  navigation.y = parseInt(decodeMessage(broadcast("y")),16);
  navigation.z = parseInt(decodeMessage(broadcast("z")),16);
}
returnToEarth();

