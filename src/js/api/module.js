(function() {

  /* @ngInject */
  function ApiConfig() {

  }

  /* @ngInject */
  function ApiRun($rootScope) {

  }


  var dependencies = [
    'esis.angular-course'
  ];

  angular
    .module('esis.angular-course.api', dependencies)
    .config(ApiConfig)
    .run(ApiRun)
  ;
}).call(this);
