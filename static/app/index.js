var myApp = angular.module('myApp', ['ui.router','pages']);
var pages = angular.module('pages',[]);

myApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    window.state=$rootScope.$stateParams = $stateParams;

    $rootScope.$state.cState = {};
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
myApp.controller("rootCtrl",function($scope, $rootScope){
    console.log("--> in rootCtrl");
    $rootScope.$state.cState.stateName = "home";

    $scope.MenuInfo = {
        User: {Name:"Mr.P",Img:"/static/img/bobo/bb-bixin.png"},
        Menus:[
            {Name: "Home",Id:"home",State:"home"},
            {Name: "Gallery",Id:"gallery",State:"gallery",Menus:[
                {Name: "大信",Id:"daxin",State:"daxin"},
            ]},
            {Name: "Markdown",Id:"markdown",Menus:[]},
        ]
    };
})