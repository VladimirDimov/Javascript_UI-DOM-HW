/*
1.Write a script that selects all the div nodes that are directly inside other div elements
Create a function using querySelectorAll()
Create a function using getElementsByTagName()
*/

HTMLCollection.prototype.toArray = Array.prototype.slice;
NodeList.prototype.toArray = Array.prototype.slice;

function addButton(label, functionOnClick) {
	var newButton = document.createElement('button');
	newButton.textContent = label;
	newButton.onclick = functionOnClick;
	newButton.style.display = 'block';
	document.getElementById('task-1').appendChild(newButton);
}

task1 = (function() {

	// Creating a function using querySelectorAll()
	addButton('Task 1 - First solution', firstSolution);
	var taskScope = document.getElementById('task-1');
	function firstSolution() {
		var innerDivs = taskScope.querySelectorAll('#task-1 div>div').toArray();
		for (var i in innerDivs) {
			innerDivs[i].style.color = 'red';
		}
	}

	// Creating a function using getElementsByTagName()
	addButton('Taskk 1 - Second solution', secondSolution);

	function secondSolution() {
		var allDivs = taskScope.getElementsByTagName('div');
		allDivs = Array.prototype.slice.call(allDivs);
		allDivs.forEach(function(element) {
			var innerDivs = element.getElementsByTagName('div').toArray();
			innerDivs.forEach(function(innerElement) {
				innerElement.style.color = 'blue';
			});
		});
	}
})();