'use strict';

Jay.controller('CausesController', function CausesController ($scope, $rootScope) {
	$rootScope.isHome = false;

	$scope.pageText = "Jayson is currently involved with a number of non-profit organizations that benefit the community including speaking about Men’s responsibility in ending sexual assault and domestic violence in our communities, coaching young athletes, donating knitting projects to raise funds for various organizations including those focused on preserving ecosystems around the globe and he actively works with those around him teaching by example how to reducing ones carbon footprint when outdoors. More specific information on each of these programs is coming soon. Meanwhile please visit Jaysons blog which is updated regularly with his involvements or contact Jayson directly via the contact page for more information.";
	$scope.galleryTitle = 'Causes';
	$scope.imagePath = 'causes';
	$scope.images = {
		large: [
			'causes/imageLarge1.jpg',
			'causes/imageLarge2.jpg',
			'causes/imageLarge3.jpg',
			'causes/imageLarge4.jpg'
		],
		small: [
			'causes/imageSmall1.jpg',
			'causes/imageSmall2.jpg',
			'causes/imageSmall3.jpg',
			'causes/imageSmall4.jpg'
		]
	}

	setTimeout(function() {
		new Gallery().BindEvents();
	}, 1000);
});

