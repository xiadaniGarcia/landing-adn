var myMod = angular.module("myMod", []);

myMod.controller("operation", function ($scope, $http) {
    $scope.thing = "hi";

    $http.get("test.json")
        .success(function (data) {
            $scope.publishedAt = data.publishedAt;
            $scope.title = data.title;
            $scope.content = data.content;
            $scope.image = data.featuredImage;
            $scope.seo = data.seoDescription;


        })
        .error(function (data) {
            console.log("there was an error");
        });
});