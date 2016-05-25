app.controller('productController', ['$scope', 'productFactory', function ($stateParama, $scope, $state, productFactory) {
   


   			$scope.product = productFactory.query ({id:$stateParams.id})
			console.log($stateParams.id);
			console.log($scope.product);
            $scope.id = $stateParams.id;

           

}]);
