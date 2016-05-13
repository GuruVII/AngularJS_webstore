app.factory('categoryFactory', function ($http, $q) {
    return {
        categories: function () {
            var deferred = $q.defer();
            $http({ method: "get", url: "http://smartninja.betoo.si/api/eshop/categories" })
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);

                }).error(function (data, status, headers, config) {
                    deferred.reject(status);
                });
            return deferred.promise;
        }
    }
});

app.controller('navbarController', ['$scope', 'categoryFactory', function ($scope, data) {
    data.categories().then(function(success){

    });    
    $scope.get = function () {
            $scope.categories = categoryFactory.categories(); 
            $scope.categories.then(function (items) {
                $scope.items = items;
    console.log(items);
            }, function (status) {
                console.log(status);
            });
        };
        $scope.get();
}]);

