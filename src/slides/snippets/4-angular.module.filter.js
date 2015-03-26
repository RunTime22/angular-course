(function() {

  /**
   * @preserve
   * @params {String} - the factory name
   * @params {*}
   * @description register an Filter
   */
  angular.module('esis.angular-course.snippets')
    .filter('name', function FilterFactory( /* injectables */ ) {

    return FilterWorker = function(data, param, paramN) {
      var filteredData = [];

      // Logic

      return filteredData;
    };
  });

})();


