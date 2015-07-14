/*
Create a function that gets the value of <input type="text"> ands prints its value to the console
*/
function printToConsole() {
	var inputField = document.getElementById('print-to-console');
	console.log(inputField.value);
	inputField.value = '';
}