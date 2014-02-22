'use strict';

Jay.directive('imageGallery', function() {
	return {
		restrict: 'E',
		replace: false,
		templateUrl: 'ng/directives/imageGallery.html',
		scope: true
		// scope: {
		// 	large: '@',
		// 	small: '@'
		// }
	}
});