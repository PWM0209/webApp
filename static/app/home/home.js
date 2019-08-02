/**
 * home controller
 */
pages.controller("homeCtrl",function($rootScope, $state){
    console.log("--> homeCtrl");
    
    if (!$rootScope.currentUser) {
        $state.go("login");
    };
});