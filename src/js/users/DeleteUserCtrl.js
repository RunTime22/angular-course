(function() {

  /* @ngInject */
  function DeleteUserConfig($stateProvider) {
    var section = {
      name: 'app.users.delete',
      url: 'delete/',
//    abstract: true,
      data: {},
      views: {
        'main@': {
//        controllerAs: '',
          templateUrl: 'partials/users/DeleteUser.html',
          controller: 'DeleteUserCtrl'
        }
      }
    };

    $stateProvider
      .state(section);
  }

  /* @ngInject */
  function DeleteUserCtrl() {
//  var vm = this;
    
  }


  angular
    .module('esis.angular-course.users')
    .config(DeleteUserConfig)
    .controller('DeleteUserCtrl', DeleteUserCtrl)
  ;
}).call(this);
