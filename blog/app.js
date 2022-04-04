var myMod = angular.module("myMod", []);

myMod.controller("operation", function ($scope, $http) {
    $scope.thing = "hi";

    $http.get("../content/services/operation.json")
        .success(function (data) {
            $scope.title = data.title;
            $scope.description = data.description;
            $scope.image = data.image;
            $scope.seo = data.seoDescription;


        })
        .error(function (data) {
            console.log("there was an error");
        });
});
