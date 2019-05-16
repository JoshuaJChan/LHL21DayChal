/*
 * Speed needs to be a non-negative integer.
 * Write a function called setSpeed(speed) which will take in a string as a parameter, and set the speed in the navigation object (see globals above) to an integer.
*/

function setSpeed(speed){
  if(parseInt(speed)>=0){
    navigation.speed = parseInt(speed);
  }
}
