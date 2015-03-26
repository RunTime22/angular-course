(function() {

  /* @ngInject */
  function OrdersConfig($stateProvider) {
    var section = {
      name: 'app.store.orders',
      url: 'orders/',
      data: {},
      views: {
        'main@': {
//        controllerAs: '',
          templateUrl: 'partials/store/Orders.html',
          controller: 'OrdersCtrl'
        }
      }
    };

    $stateProvider
      .state(section);
  }

  /* @ngInject */
  function OrdersCtrl() {
//  var vm = this;

  }

  angular
    .module('esis.angular-course.store')
    .config(OrdersConfig)
    .controller('OrdersCtrl', OrdersCtrl)
  ;
}).call(this);
