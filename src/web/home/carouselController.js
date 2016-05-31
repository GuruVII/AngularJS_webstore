app.controller('carouselController', ["$scope", "carouselFactory", function($scope, carouselFactory){

  $scope.interval = 3000;
  $scope.noWrapSlides = false;
  $scope.activeSlide = 0;
  $scope.slides = carouselFactory.query();

//$scope.selectedSlides = [{image:"http://lorempixel.com/300/300/people/1", name:"potato"}]

$scope.slides.forEach(function (currentValue){
	console.log("potato")
		//if ((currentValue.id % 4) == 0 
		//){
		//}
		console.log(currentValue);
		$scope.selectedSlides.push(currentValue);
		console.log($scope.selectedSlides);
	});



 

        }]);