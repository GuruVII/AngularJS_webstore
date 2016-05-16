app.factory('productFactory', function ($http, $q) {
    return {
        products: function () {
            var deferred = $q.defer();
            $http({ method: "get", url: "http://smartninja.betoo.si/api/eshop/products" })
                .success(function (products, status, headers, config) {
                    deferred.resolve(products);
                    console.log(products);

                }).error(function (products, status, headers, config) {
                    deferred.reject(status);
                });
            return deferred.promise;
        }
    }
});
