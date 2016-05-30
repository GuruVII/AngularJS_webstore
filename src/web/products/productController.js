app.controller('productController',  ['$scope', '$stateParams', '$state', 'productFactory', function ($scope, $stateParams, $state, productFactory){
      		$scope.product = productFactory.query ({id:$stateParams.id})
			console.log($stateParams.id);
			console.log($scope.product);
            $scope.id = $stateParams.id;
}]);
