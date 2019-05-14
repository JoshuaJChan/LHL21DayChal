function calibrateY(){
  var signal;
  for(i=1;i<=60;i++){
    signal = checkSignal() 
    if(signal !== undefined){
      navigation.y = signal;
      break;
    }
  }
}
function calibrateZ(){
  var signal;
  for(i=1;i<=60;i++){
    signal = checkSignal() 
    if(signal !== undefined){
      navigation.z = signal;
      break;
    }
  }
}
calibrateY();
calibrateZ();
