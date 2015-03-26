(function() {

  /* @ngInject */
  function CartConfig($stateProvider) {
    var section = {
      name: 'app.store.cart',
      url: 'cart/',
      data: {},
      views: {
        'main@': {
//        controllerAs: '',
          templateUrl: 'partials/store/Cart.html',
          controller: 'CartCtrl'
        }
      }
    };

    $stateProvider
      .state(section);
  }

  /* @ngInject */
  function CartCtrl() {
//  var vm = this;

  }

  angular
    .module('esis.angular-course.store')
    .config(CartConfig)
    .controller('CartCtrl', CartCtrl)
  ;
}).call(this);
