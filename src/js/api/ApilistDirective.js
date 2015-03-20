(function() {
/**
 * @usage <apilist> ... </apilist>
**/

  /* @ngInject */
  function ApilistDirectiveFactory($http) {


    return {
      restrict: 'EA',
      templateUrl: '/partials/api/ApilistDirective.html',
      link: function ApilistPostLink(iScope, iElement, iAttrs) {
        iScope.endpoints = [];

        $http
          .get('/api/v1/documentation')
          .then(
          function(result) {
            iScope.endpoints = result.data;
          }
        );

      }
    };
  }


  angular
    .module('esis.angular-course.api')
    .directive('apilist', ApilistDirectiveFactory)
  ;
}).call(this);
