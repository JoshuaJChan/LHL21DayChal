//Write and call a function called configureBroadcast()
//Your function will need to follow a precise order:
/*
set the frequency on the radio
set the antenna to active
send your announcement
*/

function configureBroadcast(){
  setFrequency();
  activateAntenna();
  sendBroadcast();
}
configureBroadcast();
