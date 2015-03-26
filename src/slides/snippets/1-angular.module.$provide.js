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
  angular.module('esis.angular-course.snippets').provider('name', function( /* constants and providers only */ ) {

    this.$get = function( /* injectables */ ) {}
  });

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
