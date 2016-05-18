app.controller('navbarController', ['$scope', 'categoryFactory', function ($scope, data) {
    data.categories().then(function(success){

    });    
    $scope.getNavbar = function () {
            $scope.categories = data.categories(); 
            $scope.categories.then(function (items) {
                $scope.items = items;
    console.log(items);
            }, function (status) {
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
		template: '<h1>Homepage</h1>'
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
		template: '<h1>Parameter state with a name parameter</h1><p>Name is : {{ id }}</p>',
		controller: function($scope, $stateParams, $state, productFactory){
			$scope.product = productFactory.query ({id:$stateParams.id})
			console.log($stateParams.id);
			console.log($scope.product);
            //  Use $stateParams to get url parameters
            $scope.id = $stateParams.id;



            //  If you want to redirect to a state
            //  $state.go('login');

            //  If you want to reload a state
			//  $state.reload();

            //  Check if the current active state is...
            // $state.is('login');
		}
	});

});

app.controller("categoriesController", function($scope){

$scope.test = "potato"

    


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
app.controller('productController', ['$scope', 'productFactory', function ($scope, data) {
   
    $scope.getProduct = function () {
            $scope.products = data.query({}); };
           
}]);

/*app.factory('productFactory', function ($http, $q) {
    return {
        products: function () {
            var deferred = $q.defer();
            $http({ method: "get", url: "http://smartninja.betoo.si/api/eshop/products" })
                .success(function (products, status, headers, config) {
                    deferred.resolve(products);
                    console.log(products);

                }).error(function (products, status, headers, config) {
                    deferred.reject(status);
                });
            return deferred.promise;
        }
    }
});*/


app.factory('productFactory', function($resource) {
    return $resource("http://smartninja.betoo.si/api/eshop/categories/:id/products");
});



