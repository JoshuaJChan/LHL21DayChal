function setFrequency(){  //frequency must be set to avg of low and high f
  radio.frequency = (radio.range.low + radio.range.high)/2;
}
