app.controller('productController', ['$scope', 'productFactory', function ($scope, data) {
    data.products().then(function(success){

    });    
    $scope.getProduct = function () {
            $scope.products = data.products(); 
            $scope.products.then(function (items) {
                $scope.products = items;
    console.log(items);
            }, function (status) {
                console.log(status);
            });
        };
        $scope.getProduct();
}]);
