'use strict';

App.directive('testDirective', function() {
	return {
		restrict: 'A',
		templateUrl: 'js/directives/TestTemplate.html',
		replace: false,
		scope: {
			test: '=test'
		}
	};
});