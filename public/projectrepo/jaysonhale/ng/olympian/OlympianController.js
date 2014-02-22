'use strict';

Jay.controller('OlympianController', function OlympianController ($scope, $rootScope) {
	$rootScope.isHome = false;
	$scope.isHome = false;
	$scope.pageText = "During a regular weekend trip to the slopes 4yr old Jayson Hale broke his skis and made his way down the mountain in less than high spirits. In an effort to cheer him up his much older cousin offered the little tyke his full-length snowboard and told him to take a run. Never one to be discouraged and always excited at the idea of a new adventure young Jayson Hale strapped himself into the snowboard, nearly stretching to capacity, and took his first run only to make it all the way down without falling. This must have given Jayson an inflated sense of confidence because no one has been able to get him off a snowboard since. By time Jayson hit JR High he had convinced his parents to let him go on Independent Study so he could spend time perfecting his snowboarding. Unknown to his parents, who thought Jayson had arranged rides, Jayson would then hitch hike his way to the ski resort every day and hitch hike home for dinner. By that time he was competing in Jr. World Championships and taking podiums in nearly every event. At the age of 17 Jayson was approached by the US Snowboarding team and became the youngest member of the US Snowboard Cross team. His fellow teammates had an average of 7 yrs on him and its no surprise his nickname on the team was “Jr”. In 2006 he took Bronze at the World Snowboard Cross Championships and later that year made the US Olympic team. During his US Snowboarding career Jayson Hale has won.";
	$scope.galleryTitle = 'Olympian';
	$scope.imagePath = 'olympian';
	$scope.images = {
		large: [
			'olympian/imageLarge1.jpg',
			'olympian/imageLarge2.jpg',
			'olympian/imageLarge3.jpg',
			'olympian/imageLarge4.jpg'
		],
		small: [
			'olympian/imageSmall1.jpg',
			'olympian/imageSmall2.jpg',
			'olympian/imageSmall3.jpg',
			'olympian/imageSmall4.jpg'
		]
	}

	setTimeout(function() {
		new Gallery().BindEvents();
	}, 1000);
});