(function() {

  /* @ngInject */
  function ErrorConfig($stateProvider) {

    var err404 = {
      name: 'app.errors.404',
      url: '404/',
      views: {
        'main@': {
          controllerAs: 'error',
          templateUrl: '/partials/errors/Error404.html',
          controller: 'Error404Ctrl'
        }
      }
    };

    $stateProvider
      .state(err404);
  }

  /* @ngInject */
  function Error404Ctrl() {
  var vm = this;

    vm.text = 'This is not the web page you are looking for';
    vm.code = 404;
  }

  angular
    .module('esis.angular-course.errors')
    .config(ErrorConfig)
    .controller('Error404Ctrl', Error404Ctrl)
  ;
}).call(this);
