angular.module('ionicApp', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('intro', {
        url: '/',
        templateUrl: 'templates/intro.html',
        controller: 'IntroCtrl'
    })
    .state('main', {
        url: '/main',
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
    })
    .state('map', {
        url: '/map',
        templateUrl: 'templates/map.html',
        controller: 'MapCtrl'
    });

    $urlRouterProvider.otherwise("/");

})

.controller('IntroCtrl', function ($scope, $state, $ionicSlideBoxDelegate) {

    // Called to navigate to the main app
    $scope.startApp = function () {
        $state.go('main');
    };
    
    $scope.next = function () {
        $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function () {
        $ionicSlideBoxDelegate.previous();
    };

    // Called each time the slide changes
    $scope.slideChanged = function (index) {
        $scope.slideIndex = index;
    };
    $scope.map = function () {
        $state.go('map');
    };
})

.controller('MainCtrl', function ($scope, $state) {
    console.log('MainCtrl');

    $scope.map = function () {
        $state.go('map');
    };

    $scope.toIntro = function () {
        $state.go('intro');
    }
});