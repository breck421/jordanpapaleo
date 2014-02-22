'use strict'

App.controller('FooterController', function FooterController($scope, ContactService) {
	// http://davidwalsh.name/web-service-php-mysql-xml-json
	// http://jakesankey.com/blog/2012/09/php-simple-rest-server/
	ContactService.getSources().then(function(data) {
		$scope.socialmedia = data.socialMedia;
	});
});