/*
Crеate a function that gets the value of <input type="color"> and sets the background of the body to this value
*/

function setBodyColor(){
	var newColor = document.getElementsByName('body-color')[0].value;
	document.body.style.backgroundColor = newColor;
}