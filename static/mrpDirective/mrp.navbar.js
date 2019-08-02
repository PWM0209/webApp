/**
 * attrs:
 * 
 * restrict:String,                 
 * priority:Number,
 * terminal:Boolean,
 * template:String or Template Function,
 * templateUrl:String or Template Function,
 * replace:Boolean or String,
 * transclude:Boolean,
 * scope:Boolean or Object,
 * controller:String or function(scope, element, attrs, transclude, otherInjectables) { ... },
 * controllerAs:String,
 * require:String,
 * link: function(scope, iElement, iAttrs) { ... },
 * compile:function(tElement, tAttrs, transclude) {
 *    return {
 *        pre: function(scope, iElement, iAttrs, controller) { ... },
 *        post: function(scope, iElement, iAttrs, controller) { ... }
 *       }
 *      return function postLink(...) { ... }
 *    }
 * } 
 */

myApp.directive("mrpNavbar",navbar);

function navbar(){
    return {
        restrict: "EA",
        replace: true,
        templateUrl: "/static/mrpDirective/mrp.navbar.html",
        scope:{
            info : "="
        },
        controller: function($scope, $element, $attrs, $rootScope, $state){
            $scope.$state = $rootScope.$state;
            $scope.clickMenu = function(m1, m2){
                if(m1){
                    $rootScope.$state.cState.stateName = m1.State;
                    if(m1._hover){
                        m1._hover = false;
                    }
                }else{
                    return;
                }
                if(m2){
                    $rootScope.$state.cState.subState = {
                        stateName : m2.State
                    }
                }else if(m1.Menus && m1.Menus.length){
                    $rootScope.$state.cState.subState = {
                        stateName : m1.Menus[0].State
                    }
                }
            };
            $scope.plLogout = function(){
                delete $rootScope.MenuInfo.User;
                window.localStorage.removeItem("PL_User");
                $state.go("login");
            };
        },
        link: function(scope, element, attrs){
            scope.mouseEnter = function(mList,m){
                mList.forEach((el)=>{
                    el._hover = el == m;
                });
            }
            scope.mouseLeave = function(mList,m){
                setTimeout(()=>{
                    m._hover = false;
                    scope.$apply();
                },350);
            }
        }
    }
}