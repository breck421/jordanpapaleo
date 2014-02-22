'use strict';

Jay.controller('HumanController', function HumanController ($scope, $rootScope, $location) {
	$rootScope.isHome = false;

	$scope.pageText = "On June 26th, 1985 Jayson Hale was born in Sierra City, CA, to a strong willed mother with the help of a family friend, in a room filled with incense, and a very supportive father ready to catch him on his way out. If you ever have the pleasure of meeting Jayson Hale this will make complete sense to you. Like his mother’s, Jayson’s methods are ever unorthodox yet effective. He has little understanding of the term “impossible”. At the age most kids were busy worrying about passing their drivers license exams, Jayson Hale was busy standing on the podium at World Championships for Team USA. And at the age other kids were starting to gain entrance into bars to buy alcohol, Jayson was making his way into the opening ceremonies of the Olympic Games to represent his country in front of the world. When Jayson isn’t on his snowboard he can be found living in the woods, flyfishing and exploring nature with his Labrador Retriever, Finn, following closely behind. Jayson is a next level natural outdoorsman who is known for his extreme levels of outdoor survival skills in winter or summer, forest or desert, mountain or valley. It is no exaggeration to say that situations Jayson seeks for fun and tranquility, others would be lucky to maybe survive a night in. He is passionate about protecting our environment and takes regular trips into lesser-known parts of the earth to generate and share his knowledge of the outdoors in the name of exploration and conservation. The man models, attends college, coaches the next generation of athletes and donates a large amount of his time giving back to his community. Weird doesn’t begin to describe the anomaly that is the fear-lacking Olympian, Outdoorsman that is Jayson Hale, but that is all part of his charm. We invite you to learn more about him via the information on the rest of this site and follow his adventures live on his blog and social media as he continues to define the term “free spirit”. He is after all an all-natural, organic product of California.";
	$scope.galleryTitle = 'Human';
	$scope.imagePath = 'human';
	$scope.images = {
		large: [
			'human/imageLarge1.jpg',
			'human/imageLarge2.jpg',
			'human/imageLarge3.jpg',
			'human/imageLarge4.jpg'
		],
		small: [
			'human/imageSmall1.jpg',
			'human/imageSmall2.jpg',
			'human/imageSmall3.jpg',
			'human/imageSmall4.jpg'
		]
	}

	setTimeout(function() {
		new Gallery().BindEvents();
	}, 1000);
});