'use strict'

var FlipBook = angular.module('FlipBook', []);

FlipBook.controller('HomeController', function HomeController($scope, $location, $anchorScroll) {
	$scope.backgrounds = [
		'FF0000',
		'FF0033',
		'FF0066',
		'FF0099',
		'FF00CC',
		'FF00FF',
		'CC00FF',
		'9900FF',
		'6600FF',
		'3300FF',
		'0000FF',
		'0033FF',
		'0066FF',
		'0099FF',
		'00CCFF',
		'00FFFF',
		'00FFCC',
		'00FF99',
		'00FF66',
		'00FF33',
		'00FF00',
		'33FF00',
		'66FF00',
		'99FF00',
		'CCFF00',
		'FFFF00',
		'FFCC00',
		'FF9900',
		'FF6600',
		'FF3300'
	];

    $scope.gotoHash = function(hashId) {
    	console.log(hashId);
	    $location.hash(hashId);
	    $anchorScroll();
    }
});

FlipBook.directive('scrollEvent', function() {
	return {
		restrict: 'A',
		replace: false,
		link: function(scope, $el, attrs) {

			$el.bind('scroll', function() {
				console.log('scroll');
			});

			// var INTERVAL_DELAY = 150;
			// var fn = $parse(attr.ngScrollEvent);

			// var interval, el = element[0], scrollPosition = {
			// 	x: 0,
			// 	y: 0
			// };

			// var bindScroll = function() {
			// 	element.bind('scroll', function(event) {
			// 		scrollPosition.x = el.scrollLeft;
			// 		scrollPosition.y = el.scrollTop;

			// 		startInterval(event);
			// 		unbindScroll();
			// 		scrollTrigger(event, false);
			// 	});
			// };

			// var startInterval = function(event) {
			// 	interval = $window.setInterval(function() {
			// 		if(scrollPosition.x == el.scrollLeft && scrollPosition.y == el.scrollTop) {
			// 			$window.clearInterval(interval);
			// 			bindScroll();
			// 			scrollTrigger(event, true);
			// 		}
			// 		else {
			// 			scrollPosition.x = el.scrollLeft;
			// 			scrollPosition.y = el.scrollTop;
			// 		}
			// 	}, INTERVAL_DELAY);
			// };

			// var unbindScroll = function() {
			// 	element.unbind('scroll');
			// };

			// var scrollTrigger = function(event, isEndEvent) {
			// 	scope.$apply(function() {
			// 		fn(scope, {$event: event, isEndEvent: isEndEvent});
			// 	});
			// };

			// bindScroll();
		},
		scope: {}
	};
});