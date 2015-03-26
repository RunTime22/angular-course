(function() {
   
  /* @ngInject */
  function EsisAngularCourseUsersConfig() {
    
  }
   
  /* @ngInject */
  function EsisAngularCourseUsersRun($rootScope) {


  }
   
   
  var dependencies = [
    'hitmands.auth',
    'esis.angular-course'
  ];

  var esisAngularCourseUsersConstant = {};

  esisAngularCourseUsersConstant.ROLES = {
    "public": ["public"],
    "customer": ["public", "customer"],
    "manager": ["public", "customer", "manager"],
    "admin": ["public", "customer", "manager", "admin"]
  };

  angular
    .module('esis.angular-course.users', dependencies)
    .constant('USERS', esisAngularCourseUsersConstant)
    .config(EsisAngularCourseUsersConfig)
    .run(EsisAngularCourseUsersRun)
  ;
}).call(this);
