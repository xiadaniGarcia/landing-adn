var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/blog/:blogId',
            {
                templateUrl: "hello.html",
                controller: "HelloCtrl"
            })
        .when('/address/:country/:state/:city',
            {
                templateUrl: "address.html",
                controller: "CityController"
            })
});

app.controller("HelloCtrl", function ($scope, $routeParams, $http)
{
    $http.get("../content/services/identity.json")
        .success(function (data) {

            $scope.model = {
                blogId: data.title,
                state: $routeParams.state,
                city: $routeParams.city
            }



        })
        .error(function (data) {
            console.log("there was an error");
        });

});

app.controller("CityController", function ($scope, $routeParams) {
    $scope.model = {
        country: $routeParams.country,
        state: $routeParams.state,
        city: $routeParams.city
    }
});