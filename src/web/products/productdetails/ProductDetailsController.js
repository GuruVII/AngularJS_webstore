app.controller('productDetailsController', ['$scope', '$stateParams', '$state', 'productDetailsFactory', function($scope, $stateParams, $state, productDetailsFactory){
			$scope.item = productDetailsFactory.get ({id:$stateParams.id})
			console.log($stateParams.id);
			console.log($scope.productdetails);
            $scope.id = $stateParams.id;

        }]);
