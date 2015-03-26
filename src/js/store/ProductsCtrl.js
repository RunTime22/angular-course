(function() {

  /* @ngInject */
  function OrdersConfig($stateProvider) {
    var page = {
      name: 'app.store.index',
      url: '',
      views: {
        'main@': {
          controllerAs: 'product',
          templateUrl: 'partials/store/Products.html',
          controller: 'OrdersCtrl'
        }
      }
    };

    $stateProvider
      .state(page);
  }

  /* @ngInject */
  function OrdersCtrl($scope, StoreService) {
  var vm = this;

    StoreService
      .loadProducts()
      .then(
      function(products) {
        console.log('Products Loaded: ', products);
        vm.list = products;

        try {
          $scope.orderProps = Object.keys(products[0]);
        } catch(e) {}
      },
      function(error) {
        console.log('Products NOT Loaded', error);
      }
    );

    StoreService
      .loadCategories()
      .then(
      function(categories) {
        console.log('Categories Loaded: ', categories);
        vm.categories = categories;
      },
      function(error) {
        console.log('Categories NOT Loaded', error);
      }
    );

    vm.addToCart = function(event, product) {};

    $scope.query = '';
    $scope.onQueryChange = function(event) {
      console.log('filtering elements by keyword: ', $scope.query);
    };
    $scope.currentOrderProp = null;
    $scope.setOrderProp = function(event, prop) {
      $scope.currentOrderProp = prop;
    };
    $scope.resetOrderProp = function(event) {
      $scope.currentOrderProp = null;
    };
  }

  angular
    .module('esis.angular-course.store')
    .config(OrdersConfig)
    .controller('OrdersCtrl', OrdersCtrl)
  ;
}).call(this);
