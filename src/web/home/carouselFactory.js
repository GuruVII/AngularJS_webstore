app.factory('carouselFactory', function($resource) {
    return $resource("http://smartninja.betoo.si/api/eshop/products");
});

