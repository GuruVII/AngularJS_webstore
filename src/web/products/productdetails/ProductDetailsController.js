app.controller('productDetailsController', ['$scope', '$stateParams', '$state', 'productDetailsFactory', function($scope, $stateParams, $state, productDetailsFactory){
			$scope.item = productDetailsFactory.get ({id:$stateParams.id})
            $scope.id = $stateParams.id;
        }]);
