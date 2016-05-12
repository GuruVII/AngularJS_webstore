angular.module("app").factory("ExampleResource", function($resource) {
    return $resource("http://www.example.com/api/examples/:id");
});
