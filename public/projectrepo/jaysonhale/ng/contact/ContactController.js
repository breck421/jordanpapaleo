'use strict';

Jay.controller('ContactController', function ContactController ($scope, $rootScope, EmailService) {
	$rootScope.isHome = false;

	$scope.formSubmit = function(form) {
		EmailService.send(form).then(function(data, status) {
			console.log('data', data);
			console.log('status', status);
		});
	}
});