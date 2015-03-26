(function() {

  /**
   * @preserve
   * @param {String} - The name of the module
   * @param {Array} - Array of dependencies (as {String} name of the required module)
   * @param {Function} - [Config Function]
   * @description Module Setter
   */
  angular.module('esis.angular-course.snippets', [
    'esis.angular-course',
    'dep[1]',
    'dep[2]',
    'dep[n]'
  ] /* optional */, function ModuleConfig( /* injectables */ ) {} /**/);

})();


(function() {

  /**
   * @preserve
   * @param {String} The name of the module
   * @description Module Getter
   */
  angular.module('esis.angular-course.snippets')

})();

(function() {

  /**
   * @preserve
   * @param {String} The name of the constant
   * @param {*} The assignable value, can create primitives
   * @description a {*} injectable in configuration and runtime phases
   */
  angular.module('esis.angular-course.snippets').constant('name', '*');

})();

(function() {

  /**
   * @preserve
   * @param {String} The name of the Provider
   * @param {Function} The Constructor, can return primitives
   * @description A function invoked with the new operator in the $injector configuration phase.
   * @note By default Angular appends the Provider suffix, ex: nameProvider.
   */
  angular.module('esis.angular-course.snippets').provider('name', function( /* constant and providers only */ ) {

    this.$get = function( /* injectables */ ) {}
  });

})();


(function() {

  /**
   * @preserve
   * @params {Function} - Callback
   * @description A function fired in the $injector configuration phase
   */
  angular.module('esis.angular-course.snippets').config(function ModuleConfig( /* constant and providers only */ ) {});

})();


(function() {

  /**
   * @preserve
   * @params {String} - the service name
   * @params {Function} - Callback
   * @description A function invoked with the new operator
   */
  angular.module('esis.angular-course.snippets').service('ServiceName', function( /* injectables */ ) {
    this.sayHello = function() {
      console.log('Hello')
    };
  });

})();


(function() {

  /**
   * @preserve
   * @params {String} - the factory name
   * @params {Function} - $getFn
   * @description register the value returned by de Factory function
   */
  angular.module('esis.angular-course.snippets').factory('name', function() {

    return 'Giuseppe Mandato';
  });

})();



(function() {

  /**
   * @preserve
   * @params {String} - the value name
   * @params {*}
   * @description register an injectable object
   */
  angular.module('esis.angular-course.snippets').value('name', '*');

})();

(function() {

  angular.module('esis.angular-course.snippets').config(function($provide) {
    $provide.decorator('ServiceName', function($delegate) {

      $delegate.customBehavior = function() { /* What We Want */ };

      return $delegate;
    });
  });

})();


(function() {

  /**
   * @preserve
   * @params {String} - the factory name
   * @params {*}
   * @description register an Filter
   */
  angular.module('esis.angular-course.snippets').filter('name', function FilterFactory( /* injectables */ ) {

    return FilterWorker = function(data, param) {
      var filteredData = [];

      // Logic

      return filteredData;
    };
  });

})();

(function() {

  /**
   * @preserve
   * @params {String} - the name of the controller
   * @params {*}
   * @description register a new Controller
   * @usage <div ng-controller="FruitCtrl as fruit"> ... </div>
   */
  angular.module('esis.angular-course.snippets').controller('FruitCtrl', function( /* injectables */ ) {
    var vm = this; // vm is ViewModel, the variable exposed to the view by the controllerAs Syntax. 

    vm.list = ['banana', 'potato', 'apple'];
    vm.addToList = function(event, fruit) {
      vm.list.push(fruit);
    };

  });

})();

(function() {

  /**
   * @preserve
   * @params {String} - the name of the directive
   * @params {*}
   * @description register a new directive
   * @usage <fruit></fruit>
   */
  angular.module('esis.angular-course.snippets').directive('fruit', function( /* injectables */ ) {
    var ddo /* Directive Definition Object */ = {
      restrict: 'EACM', // ELEMENT, ATTRIBUTE, CLASSNAME, COMMENT
      templateUrl: '', // or Function that returns a url
      scope: false, // false|true|Object => noScope|newChildScope|newIsolatedScope
      link: function(iScope, iElement, iAttrs) {},
      controller: function( /* injectables */ ) {}
      // ... https://docs.angularjs.org/guide/directive
    };

    return ddo;
  });

})();



    angular
      .module('esis.angular-course.snippets')
      .filter('myCustomFilter', function myCustomFilterFactory( /* injectables */ ) {
        return function myCustomFilterWorker( dataToFormat, param, paramN ) {
          var formattedData;

          // Filters can break app!
          if(!angular.isArray(dataToFormat)) {
            return dataToFormat;
          }

          formattedData = dataToFormat.shift();


          return formattedData;
        }
    });





