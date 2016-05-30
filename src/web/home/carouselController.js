app.controller('carouselController', ["$scope", "carouselFactory", function($scope, carouselFactory){

 $scope.interval = 3000;
  $scope.noWrapSlides = false;
  $scope.activeSlide = 0;
  $scope.slides = carouselFactory.query();
	
/*	$scope.slides.forEach(function (currentValue){
		if ((currentValue.id % 4) == 0 
		){
		$scope.selectedSlides.push(currentValue)}
	});
*/
	



        }]);