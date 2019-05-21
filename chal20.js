/* Example message to decode: "th1s 1s 4 t3st. th1s 1s 0nl5 4 t3st. 1f th1s w3r3 4 r34l m3ss4g3, 502 w021d g3t s0m3th1ng m34n1ngf2l."
 * Write a function called decodeMessage(message). This function takes in a coded message and changes all the numbers back to their respective vowels before returning the newly decoded message.
 */

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
