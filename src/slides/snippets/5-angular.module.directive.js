(function() {

  angular
    .module('esis.angular-course.snippets')
    .directive('myDir', function( /* injectables */ ) {
      // Use default DDO props
      return function postLink(iScope, iElement, iAttrs) {
        // Executed when template is compiled and the scope is linked.
      };
    })
    .directive('myDir', function( /* injectables */ ) {
      return /* DDO */ {
        restrict: 'A', // EACM
        template: '', // or function(tEl, tAttr)
        // or templateUrl: '', // or function(tEl, tAttr)
        priority: 0,
        transclude: false,
        templateNamespace: 'html',
        scope: false, // true or Object
        controller: function($scope, $element, $attrs, $transclude, otherInjectables) {  },
        controllerAs: 'stringIdentifier',
        bindToController: false,
        require: 'siblingDirectiveName', // or // ['^parentDirectiveName', '?optionalDirectiveName', '?^optionalParent'],
        compile: function compile(tElement, tAttrs, transclude) {
          return {
            pre: function preLink(scope, iElement, iAttrs, controller) {  },
            post: function postLink(scope, iElement, iAttrs, controller) {  }
          };
          // or
          // return function postLink( ... ) { ... }
        }
        // or
        // link: {
        //  pre: function preLink(scope, iElement, iAttrs, controller) { ... },
        //  post: function postLink(scope, iElement, iAttrs, controller) { ... }
        // }
        // or
        // link: function postLink( ... ) { ... }
      };
    });

})();
