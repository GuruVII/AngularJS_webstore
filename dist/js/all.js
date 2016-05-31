app.controller('navbarController', ['$scope', 'categoryFactory', function ($scope, data) {
    data.categories().then(function(success){

    });    
    $scope.getNavbar = function () {
            $scope.categories = data.categories(); 
            $scope.categories.then(function (items) {
                $scope.items = items;
    
            }, 
            function (status) {
            });
        };
    $scope.getNavbar();
}]);








app.config(function($stateProvider, $urlRouterProvider){

    //  If a user goes to an url that doesn't have a valid state assigned
	$urlRouterProvider.otherwise('/error');

	$stateProvider.state('home',
	{
		url: '/',
		templateUrl: "templates/home.html",
	});

	$stateProvider.state('error',
	{
		url: '/error',
		template: '<h2>Error 404</h2>'
	});

	$stateProvider.state('parent',
	{
		url: '/parent',
		template: '<h1>Parent state <span class="text-muted"><small>Has an additional ui-view.</small></span></h1><ui-view></ui-view>'
	});

	$stateProvider.state('parent.child', 
	{
		url: '/child',
		template: '<div class="well"><h4>Child state</h4></div>'
	})

	$stateProvider.state('category', {
		url: '/category/:id',
		templateUrl: "templates/product.html",
		controller: "productController"
	});

		$stateProvider.state('product', {
		url: '/product/:id',
		templateUrl: "templates/productdetails.html",
		controller: 'productDetailsController'
	});

});

app.controller("categoriesController", function($scope){



    


});

app.factory('categoryFactory', function ($http, $q) {
    return {
        categories: function () {
            var deferred = $q.defer();
            $http({ method: "get", url: "http://smartninja.betoo.si/api/eshop/categories" })
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);

                }).error(function (data, status, headers, config) {
                    deferred.reject(status);
                });
            return deferred.promise;
        }
    }
});
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
app.factory('carouselFactory', function($resource) {
    return $resource("http://smartninja.betoo.si/api/eshop/products");
});


app.controller('productController',  ['$scope', '$stateParams', '$state', 'productFactory', function ($scope, $stateParams, $state, productFactory){
      		$scope.product = productFactory.query ({id:$stateParams.id})
			console.log($stateParams.id);
			console.log($scope.product);
            $scope.id = $stateParams.id;
}]);

app.factory('productFactory', function($resource) {
    return $resource("http://smartninja.betoo.si/api/eshop/categories/:id/products");
});




app.controller('productDetailsController', ['$scope', '$stateParams', '$state', 'productDetailsFactory', function($scope, $stateParams, $state, productDetailsFactory){
			$scope.item = productDetailsFactory.get ({id:$stateParams.id})
            $scope.id = $stateParams.id;
        }]);

app.factory('productDetailsFactory', function($resource) {
    return $resource("http://smartninja.betoo.si/api/eshop/products/:id");
});