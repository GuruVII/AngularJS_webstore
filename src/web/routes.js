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
