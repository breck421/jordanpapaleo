'use strict';

App.controller('ProjectController', function ProjectController($scope, ProjectService) {

	ProjectService.get().then(function(data) {
		$scope.projects = data;
	});
});