(function() {

  /* @ngInject */
  function ApiConfig() {

  }

  /* @ngInject */
  function ApiRun($rootScope) {

  }


  var dependencies = [

  ];

  angular
    .module('esis.angular-course.api', dependencies)
    .config(ApiConfig)
    .run(ApiRun)
  ;
}).call(this);
