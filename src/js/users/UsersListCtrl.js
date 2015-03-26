(function() {

  /* @ngInject */
  function UsersListConfig($stateProvider) {
    var section = {
      name: 'app.users.list',
      url: 'list/',
//    abstract: true,
      data: {},
      views: {
        'main@': {
//        controllerAs: '',
          templateUrl: 'partials/users/UsersList.html',
          controller: 'UsersListCtrl'
        }
      }
    };

    $stateProvider
      .state(section);
  }

  /* @ngInject */
  function UsersListCtrl() {
//  var vm = this;

  }

  angular
    .module('esis.angular-course')
    .config(UsersListConfig)
    .controller('UsersListCtrl', UsersListCtrl)
  ;
}).call(this);
