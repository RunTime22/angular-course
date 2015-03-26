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
  ] /* optional */, function ModuleConfig( /* providers and constants only */ ) {} /**/);

})();


(function() {

  /**
   * @preserve
   * @param {String} The name of the module
   * @description Module Getter
   */
  angular.module('esis.angular-course.snippets')

})();

