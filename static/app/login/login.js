/**
 * login controller
 */
pages.controller("loginCtrl",function($rootScope, $scope, $timeout, $state){
    console.log("--> loginCtrl");
    var snowTimer;
    snowInit();
    angular.element(window).resize(function(){
        if(snowTimer){
            $timeout.cancel(snowTimer);
        }
        snowTimer = $timeout(()=>{
            snowInit();    
        },200);
    });
    
    $scope.selectLoginUser = function(u){
        console.log("0000");
        if(!u){
            return
        }
        $rootScope.MenuInfo.User = u;
        $rootScope.currentUser = u;
        window.localStorage.setItem("PL_User",JSON.stringify(u));
        $state.go("home");
    }
});