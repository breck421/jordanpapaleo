'use strict';

Jay.controller('OutdoorsmanController', function OutdoorsmanController ($scope, $rootScope) {
	$rootScope.isHome = false;

	$scope.pageText = "If you visit the town of Sierraville, California today you wont find any fast food restaurants. You wont find even a grocery store. You will find one gas station and a lot of untamed woods. It only makes sense that a young boy with too much energy raised in Sierraville, CA would quickly learn the ways of nature and fall in love with its wonders. Jayson learned how to fish, hunt, track and trap all about the same time he was learning his letters and numbers. It was just what he did when he wasn’t in school or riding his snowboard. Jayson has always felt more comfortable living in nature than most humans do while driving on the streets. As a professional winter athlete Jayson has supported his competition career by spending his summers deep in the high sierras building trails for his Uncle Bob with days of hiking away from the closest trace of civilization. Most people would feel nervous that exposed to the elements and away from the comforts of modern life, but not Jayson Hale. Instead he will tell you that he can find his way around the woods to gather food better than most grocery stores and ways to mend wounds better in nature than in a clinic. That’s just how he has always done it, a true wild man as some call him. It only makes sense that a man like that would take his love of the outdoors to the next level. Jayson is currently working with film crews capturing a number of his outdoor survival adventures. Keep an eye on his blog for information about webisodes and upcoming television series following him and his crew through crazy parts of the earth.";
	$scope.galleryTitle = 'outdoorsman';
	$scope.imagePath = 'outdoorsman';
	$scope.images = {
		large: [
			'outdoorsman/imageLarge1.jpg',
			'outdoorsman/imageLarge2.jpg',
			'outdoorsman/imageLarge3.jpg',
			'outdoorsman/imageLarge4.jpg'
		],
		small: [
			'outdoorsman/imageSmall1.jpg',
			'outdoorsman/imageSmall2.jpg',
			'outdoorsman/imageSmall3.jpg',
			'outdoorsman/imageSmall4.jpg'
		]
	}

	setTimeout(function() {
		new Gallery().BindEvents();
	}, 1000);
});