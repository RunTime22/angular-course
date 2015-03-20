(function() {

  /* @ngInject */
  function LoginConfig($stateProvider) {
    var section = {
      name: 'app.users',
      url: 'users/',
      abstract: true,
      data: {},
      views: {
        'main@': {
          templateUrl: '/partials/users/Login.html',
          controller: 'LoginCtrl'
        }
      }
    };

    var login = {
      name: 'app.users.login',
      url: 'login/'
    };

    $stateProvider
      .state(section)
      .state(login);
  }

  /* @ngInject */
  function LoginCtrl($scope) {

    $scope.formState = 0;
    $scope.credentials = {
      username: '',
      password: '',
      rememberMe: false
    };

    $scope.onLoginDone = function(result) {
      $scope.formState = 0;
      console.log('$scope.onLoginDone', result);
    };

    $scope.onLoginFail = function(error) {
      $scope.formState = 2;
      console.log('$scope.onLoginFail', error);
    };
  }

  angular
    .module('esis.angular-course.users')
    .config(LoginConfig)
    .controller('LoginCtrl', LoginCtrl)
  ;
}).call(this);
