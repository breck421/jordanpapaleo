'use strict';

App.filter('noDecimal', function($filter) {
	return function(input) {
		if(input) {
			input = parseFloat(input);

			if(input % 1 === 0) {
				input = input.toFixed(0);
			}

			return input;
		}

		return null;
	};
});