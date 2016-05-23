app.controller('productDetailsController', ['$scope', 'productDetailsFactory', function ($scope, data) {
   console.log("data: "+data);
    $scope.getItem = function () {
            $scope.item = data.get({});

        };
    $scope.getItem();
           

}]);
