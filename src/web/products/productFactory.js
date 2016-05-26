app.factory('productFactory', function($resource) {
    return $resource("http://smartninja.betoo.si/api/eshop/categories/:id/products");
});



