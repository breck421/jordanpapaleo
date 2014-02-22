'use strict';

Jay.controller('HomeController', function HomeController($scope, $rootScope) {
	$rootScope.isHome = true;

	$scope.menuItems = [
		{
			name: 'Human',
			link: '#/human'
		},
		{
			name: 'Olympian',
			link: '#/olympian'
		},
		{
			name: 'Outdoorsman',
			link: '#/outdoorsman'
		},
		{
			name: 'Adventures',
			link: '#/http://blog.jaysonhale.com'
		},
		{
			name: 'Causes',
			link: '#/causes'
		}
	];
});