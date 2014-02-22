'use strict';

Jay.directive('contentText', function() {
	var template = '<div class="content">{{pageText}}</div>';

	return {
		restrict: 'E',
		replace: true,
		template: template,
		scope: true
	}
});