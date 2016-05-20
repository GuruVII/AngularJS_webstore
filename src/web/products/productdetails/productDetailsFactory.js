app.factory('productDetailsFactory', function($resource) {
    return $resource("http://smartninja.betoo.si/api/eshop/products/:id");
});