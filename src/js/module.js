(function() {

  /* @ngInject */
  function EsisAngularCourseConfig() {

  }

  /* @ngInject */
  function EsisAngularCourseRun($rootScope, $state, $stateParams, AuthService, $http, $injector) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;


    window.AuthService = AuthService;
    window.$http = $http;
    window.$state = $state;
    window.$injector = $injector.get;
  }


  var dependencies = [
    'ui.router',
    'hitmands.auth',
    'ngSanitize'
  ];


  angular
    .module('esis.angular-course', dependencies)
    .config(EsisAngularCourseConfig)
    .run(EsisAngularCourseRun)
  ;
}).call(this);
