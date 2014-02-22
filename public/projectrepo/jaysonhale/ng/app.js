'use strict';

var Jay = angular.module('Jay', [
	'ngRoute',
	'ngResource'
]);

Jay.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl : "ng/home/home.html",
			controller : 'HomeController'
		})
		.when('/human', {
			templateUrl : "ng/human/human.html",
			controller : 'HumanController'
		})
		.when('/olympian', {
			templateUrl : "ng/olympian/olympian.html",
			controller : 'OlympianController'
		})
		.when('/outdoorsman', {
			templateUrl : "ng/outdoorsman/outdoorsman.html",
			controller : 'OutdoorsmanController'
		})
		.when('/causes', {
			templateUrl : "ng/causes/causes.html",
			controller : 'CausesController'
		})
		.when('/contact', {
			templateUrl : "ng/contact/contact.html",
			controller : 'ContactController'
		})
		.otherwise({
			redirectTo: 'home'
		});
});

Jay.run(function ($rootScope) {
	$rootScope.isHome = true;
});