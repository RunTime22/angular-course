(function() {

  var ENDPOINT = '/api/v1/store/';


  /* @ngInject */
  function StoreServiceFactory($q, $http) {
    var self = this;

    self.loadProducts = function StoreServiceLoadProducts() {
      return $http
        .get(ENDPOINT + 'products')
        .then(
        function(result) {

          return result.data || [];
        },
        function(rejection) {
          return $q.reject(rejection);
        }
      );
    };

    self.loadCategories = function StoreServiceLoadCategories() {
      return $http
        .get(ENDPOINT + 'categories')
        .then(
        function(result) {

          return result.data || [];
        },
        function(rejection) {
          return $q.reject(rejection);
        }
      );
    };

    self.loadOrders = function StoreServiceLoadOrders() {
      return $http
        .get(ENDPOINT + 'orders')
        .then(
        function(result) {

          return result.data || [];
        },
        function(rejection) {
          return $q.reject(rejection);
        }
      );
    };

  }

  angular
    .module('esis.angular-course.store')
    .service('StoreService', StoreServiceFactory)
  ;
}).call(this);
