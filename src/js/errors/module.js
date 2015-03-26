(function() {
   
  /* @ngInject */
  function ErrorConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider
      .otherwise(function($injector, $location) {
        console.log('Requested PATH NOT-FOUND: ', $location.path());

        //Logic

        return '/errors/404';
      });

    var section = {
      name: 'app.errors',
      url: 'errors/',
      abstract: true,
      data: {}
    };

    $stateProvider
      .state(section);
  }
   
  /* @ngInject */
  function ErrorRun($rootScope) {

  }
   
   
  var dependencies = [
    'esis.angular-course'
  ];
  
  angular
    .module('esis.angular-course.errors', dependencies)
    .config(ErrorConfig)
    .run(ErrorRun)
  ;
}).call(this);
