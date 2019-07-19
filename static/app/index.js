var myApp = angular.module('myApp', ['ui.router','pages']);
var pages = angular.module('pages',[]);

myApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

/**
 * router
 */
myApp.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true).hashPrefix("!");

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            views:{
                "":{
                    templateUrl: '/static/app/home/home.html',
                    controller:  'homeCtrl',
                },
                "gallery@home":{
                    templateUrl: '/static/app/gallery/gallery.html',
                    controller: 'galleryCtrl'
                },
                "markdown@home":{
                    templateUrl: '/static/app/markdown/markdown.html',
                    controller: 'markdownCtrl'
                }
            }
        });
});

/**
 * root controller
 */
myApp.controller("rootCtrl",function(){
    console.log("--> in rootCtrl");
})