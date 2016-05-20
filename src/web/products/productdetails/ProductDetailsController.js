app.controller('productDetailsController', ['$scope', 'productDetailsFactory', function ($scope, data) {
   
    $scope.getItem = function () {
            $scope.item = data.query({});

        };
    $scope.getItem();
           

}]);
