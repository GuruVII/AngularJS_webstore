app.controller('productController', ['$scope', 'productFactory', function ($scope, data) {
   
    $scope.getProduct = function () {
            $scope.products = data.query({});

        };
    $scope.getProduct();
           

}]);
