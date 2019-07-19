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
        controller: function($scope, $element, $attrs){
            console.log("--> mrp-navbar controller");
        },
        link: function(scope, element, attrs){
            console.log("--> mrp-navbar link");
        }
    }
}