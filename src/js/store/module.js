(function() {

  /* @ngInject */
  function StoreConfig($stateProvider) {
    var section = {
      name: 'app.store',
      url: 'store/',
      abstract: true,
      data: {}
    };


    $stateProvider
      .state(section);
  }

  /* @ngInject */
  function StoreRun() {


  }


  var dependencies = [
    'esis.angular-course',
    'ui.router'
  ];

  angular
    .module('esis.angular-course.store', dependencies)
    .config(StoreConfig)
    .run(StoreRun)
  ;
}).call(this);
