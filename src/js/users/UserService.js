(function() {

  var User = (function() {
    function User(data) {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.username = data.username;
      this.role = data.role;
      this.country = data.country;
      this.email = data.email;
    }

    return User;
  }).call(this);

  /* @ngInject */
  function UserServiceFactory($q, $http) {
    var self = this;

    self.create = function(fields) {
      var configs = {};

      return $http
        .post('/api/v1/users/', fields, configs)
        .then(
        function(result) {

          return new User(result.data);
        },
        function(error) {

          return $q.reject(error);
        }
      );
    };
  }

  angular
    .module('esis.angular-course.users')
    .service('UserService', UserServiceFactory)
  ;
}).call(this);
