app.controller('carouselController', ["$scope", "carouselFactory", function($scope, carouselFactory){

  $scope.interval = 3000;
  $scope.noWrapSlides = false;
  $scope.activeSlide = 0;
  $scope.selectedSlides = [];
  //$scope.slides = carouselFactory.query();

   carouselFactory.carousel().then(function(success){

    }); 

    $scope.getSlides = function () {
        $scope.carousel = carouselFactory.carousel(); 
        $scope.carousel.then(function (items) {
	        $scope.slides = items;
			$scope.slides.forEach(function (currentValue){
				if (((currentValue.id%4) == 0) && (currentValue.onSale == true) ){
					$scope.selectedSlides.push(currentValue);
					console.log($scope.selectedSlides.length);
				}
			});
	        		console.log("potato")
		})
    };
    
             
        
    $scope.getSlides();
  //$scope.selectedSlides = [];
  //$scope.slides = [{image:"http://lorempixel.com/300/300/people/1", name:"potato"}];

//$scope.selectedSlides = [{image:"http://lorempixel.com/300/300/people/1", name:"potato"}]

}]);


