var myMod = angular.module("myMod", []);

myMod.controller("capital", function ($scope, $http) {
    $scope.thing = "hi";

    $http.get("../content/services/capital.json")
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

myMod.controller("control", function ($scope, $http) {
    $scope.thing = "hi";

    $http.get("../content/services/control.json")
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

myMod.controller("finance", function ($scope, $http) {
    $scope.thing = "hi";

    $http.get("../content/services/finance.json")
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

myMod.controller("government", function ($scope, $http) {
    $scope.thing = "hi";

    $http.get("../content/services/government.json")
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

myMod.controller("headhunting", function ($scope, $http) {
    $scope.thing = "hi";

    $http.get("../content/services/headhunting.json")
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

myMod.controller("identity", function ($scope, $http) {
    $scope.thing = "hi";

    $http.get("../content/services/identity.json")
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
