(function() {

  /* @ngInject */
  function EsisAngularCourseConfig($compileProvider, $locationProvider, $urlRouterProvider) {
    $compileProvider.debugInfoEnabled(true);
    $locationProvider.html5Mode(true);
    $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.url();

      if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
        return;
      }

      if (path.indexOf('?') > -1) {
        return path.replace('?', '/?');
      }

      return path + '/';
    });
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
    'esis.angular-course.ui',
    'esis.angular-course.errors',
    'esis.angular-course.users',
    'esis.angular-course.store',
    'esis.angular-course.api',
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
