/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

var contentsCreator = (function() {

	return function(element, contents) {
		if (!(element instanceof(HTMLElement))) {
			element = document.getElementById(element);
		}

		if (!(element instanceof(HTMLElement))) {
			throw new Error();
		}

		while (element.firstChild) {
			element.removeChild(element.firstChild);
		}

		var itemContainer = document.createElement('div');
		itemContainer.className += (' item-container');

		for (var i = 0; i < contents.length; i++) {
			var currentContentContainer = itemContainer.cloneNode(false);
			currentContentContainer.innerHTML = contents[i];
			element.appendChild(currentContentContainer);
		};
	};
}());

contentsCreator('container', ['Hello', 'world!']);


debugger;
module.exports(contentsCreator);