(function() {

  /**
   * @preserve
   * @params {String} - the name of the controller
   * @params {*}
   * @description register a new Controller
   * @usage <div ng-controller="FruitCtrl as fruit"> ... </div>
   */
  angular.module('esis.angular-course.snippets')
    .controller('FruitCtrl', function( $scope /* injectables */ ) {
      var vm = this; // vm is ViewModel, the variable exposed to the view by the controllerAs Syntax.

      vm.list = ['banana', 'potato', 'apple'];
      vm.addToList = function(event, fruit) {
        vm.list.push(fruit);
      };

      $scope // a new child scope!
        .myCustomProperty = 'HELLO ESIS';

    });

})();
