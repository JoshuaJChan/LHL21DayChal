//Create function returnToEarth() that does this:
/* Call the built-in broadcast() function three times. Each of these calls should pass either "x", "y" or "z" as a parameter.
 * Store the response from each broadcast() call in it's own variable (The broadcast() function returns a coded-message from Earth with the correct coordinate to return home in HEX! Check out the hints for more on this)
 * Decode the returned message using the decodeMessage() function you wrote earlier
 * Change the decoded hex-coordinate to an integer using parseInt()
Set each of the navigation object's x, y and z parameters to the integer coordinates
 */
//PARSEINT FUNCTION: parseInt(String in a different base, that base) 
//^radix=that base;
//The radix parameter is used to specify which numeral system to be used, for example, a radix of 16 (hexadecimal) indicates that the number in the string should be parsed from a hexadecimal number to a decimal number.

function returnToEarth(){
	navigation.x = parseInt(decodeMessage(broadcast("x")),16);
	navigation.y = parseInt(decodeMessage(broadcast("y")),16);
	navigation.z = parseInt(decodeMessage(broadcast("z")),16);
}
returnToEarth();
