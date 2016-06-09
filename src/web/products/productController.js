app.controller('productController',  ['$scope', '$stateParams', '$state', 'productFactory', function ($scope, $stateParams, $state, productFactory){
      		$scope.product = productFactory.query ({id:$stateParams.id})
            $scope.id = $stateParams.id;
            $scope.basketArray = [];
			

			$scope.removeProduct = function(x) {
        		var index = $scope.basketArray.indexOf(x)
        		$scope.basketArray.splice(index, 1);}

			$scope.addProduct = function(input){
				
				$scope.totalProductsArray = {id:input, quantity:1};

                $scope.basketArray.push($scope.totalProductsArray);
               	console.log($scope.basketArray);
               
            };
}]);
