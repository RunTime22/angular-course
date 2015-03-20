(function() {

  /* @ngInject */
  function UserInterfaceConfig() {

  }

  /* @ngInject */
  function UserInterfaceRun() {


  }


  var dependencies = [
    'esis.angular-course',
    'ui.router'
  ];

  angular
    .module('esis.angular-course.ui', dependencies)
    .config(UserInterfaceConfig)
    .run(UserInterfaceRun)
  ;
}).call(this);
