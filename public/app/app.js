'use strict';

var App = angular.module('App', ['ngResource', 'ngRoute', 'ngSanitize']);

App.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
//	$routeProvider.when("/", templateUrl: '/')
});