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
        .state('login', {
            url: '/login',
            templateUrl: '/static/app/login/login.html',
            controller: 'loginCtrl'
        })
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
myApp.controller("rootCtrl",function($scope, $rootScope, $state){
    console.log("--> in rootCtrl");
    $rootScope.$state.cState.stateName = "home";
    $rootScope.UserMap = {
        "Mr.P":{
            Name:"Mr.P",
            Img:"/static/img/bobo/bb-bixin.png"
        },
        "Mrs.L":{
            Name:"Mrs.L",
            Img:"/static/img/bobo/pink-lueluelue.png"
        },
    }

    $rootScope.MenuInfo = {
        Logo:{Name:"P&L",Img:""},
        Menus:[
            {Name: "Home",Id:"home",State:"home"},
            {Name: "Gallery",Id:"gallery",State:"gallery",Menus:[
                {Name: "大信",Id:"daxin",State:"daxin"},
            ]},
            {Name: "Markdown",Id:"markdown",Menus:[]},
        ]
    };

    $rootScope.currentUser = JSON.parse(window.localStorage.getItem("PL_User"));
    if ($rootScope.currentUser) {
        $rootScope.MenuInfo.User = $rootScope.currentUser;
        console.log($rootScope.currentUser);
    };
})