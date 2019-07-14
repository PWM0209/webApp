var myApp = angular.module('myApp', ['ui.router']);

myApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

myApp.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true).hashPrefix("!");
    
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/static/app/home/home.html',
            controller:  'homeCtrl'
        })
        .state('test', {
            url: '/test',
            templateUrl: '/static/app/test/test.html',
            controller:  'testCtrl'
        });
});

myApp.controller("homeCtrl",function(){
    console.log("home");
})
myApp.controller("testCtrl",function(){
    console.log("test");
})