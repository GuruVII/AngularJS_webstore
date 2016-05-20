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
		templateUrl: "templates/product.html",
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

		$stateProvider.state('product', {
		url: '/product/:id',
		templateUrl: "templates/productdetails.html",
		controller: function($scope, $stateParams, $state, productDetailsFactory){
			$scope.productDetails = productDetailsFactory.get ({id:$stateParams.id})
			console.log($stateParams.id);
			console.log($scope.productdetails);
            $scope.id = $stateParams.id;
		}
	});

});
