function calibrateX(){
  var signal;
  for(i=1;i<=12;i++){
    signal = checkSignal() 
    if(signal !== undefined){
      navigation.x = signal;
      break;
    }
  }
}
calibrateX();
