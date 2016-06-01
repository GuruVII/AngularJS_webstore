app.factory('carouselFactory', function ($http, $q) {
    return {
        carousel: function () {
            var deferred = $q.defer();
            $http({ method: "get", url: "http://smartninja.betoo.si/api/eshop/products" })
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);

                }).error(function (data, status, headers, config) {
                    deferred.reject(status);
                });
            return deferred.promise;
        }
    }
});