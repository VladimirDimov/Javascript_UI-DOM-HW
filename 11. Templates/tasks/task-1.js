/* globals $ */
var data = {
	headers: ['Vendor', 'Model', 'OS'],
	items: [{
		col1: 'Nokia',
		col2: 'Lumia 920',
		col3: 'Windows Phone'
	}, {
		col1: 'LG',
		col2: 'Nexus 5',
		col3: 'Android'
	}, {
		col1: 'Apple',
		col2: 'iPhone 6',
		col3: 'iOS'
	}]
};

function solve() {

	return function(selector) {

		var template =
			'<table class="items-table">' +
			'<thead>' +
			'<tr>' +
			'<th>#</th>' +
			'{{#headers}}' +
			'<th>{{this}}</th>' +
			'{{/headers}}' +
			'</tr>' +
			'</thead>' +
			'<tbody>' +
			'{{#items}}' +
			'<tr>' +
			'<td>{{@index}}</td>' +
			'<td>{{col1}}</td>' +
			'<td>{{col2}}</td>' +
			'<td>{{col3}}</td>' +
			'{{/items}}' +
			'</tbody>' +
			'</table>';

		$(selector).html(template);
	};
}

module.exports = solve;