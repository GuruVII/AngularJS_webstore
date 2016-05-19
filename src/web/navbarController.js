app.controller('navbarController', ['$scope', 'categoryFactory', function ($scope, data) {
    data.categories().then(function(success){

    });    
    $scope.getNavbar = function () {
            $scope.categories = data.categories(); 
            $scope.categories.then(function (items) {
                $scope.items = items;
    console.log(items);
            }, function (status) {
            });
        };
    $scope.getNavbar();
}]);



