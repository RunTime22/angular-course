(function() {

  /* @ngInject */
  function NewUserConfig($stateProvider) {
    var section = {
      name: 'app.users.new',
      url: 'new/',
//    abstract: true,
      data: {
      },
      views: {
        'main@': {
          controllerAs: 'user',
          templateUrl: '/partials/users/NewUser.html',
          controller: 'NewUserCtrl'
        }
      }
    };

    $stateProvider
      .state(section);
  }

  /* @ngInject */
  function NewUserCtrl($scope, USERS, UserService) {
    var vm = this;
    vm.roles = [];
    vm.formState = 0;

    vm.fields = {
      username: '',
      password: '',
      country: '',
      role: '',
      email: '',
      firstName: '',
      lastName: ''
    };


    try {
      vm.roles = Object.keys(USERS.ROLES);
    } catch(e) {}

    vm.fields.role = vm.roles[0];

    vm.create = function(event, form) {
      vm.formState = 0;
      event.preventDefault();

      if(form.$invalid || form.$pristine) {

      }

      var fields = angular.copy(vm.fields);

      console.log('Send user.create', event, fields);

      UserService
        .create(fields)
        .then(
        function(user) {
          console.log('New User Created: ', user);
          vm.formState = 1;
        },
        function(error) {
          console.log('Cannot create user: ', error);
          vm.formState = 2;
        }
      );
    };
  }

  angular
    .module('esis.angular-course.users')
    .config(NewUserConfig)
    .controller('NewUserCtrl', NewUserCtrl)
  ;
}).call(this);

