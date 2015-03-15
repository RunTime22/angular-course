(function() {

  var session = {
    _key: 'Esis.Angular-Course.user.session',
    store: function(value) {
      var res = false;
      try {
        window.sessionStorage.setItem(this._key, angular.toJson(value));
        res = true;
      } catch(e) {}

      return res;
    },
    unstore: function() {
      var res = false;
      try {
        window.sessionStorage.removeItem(this._key);
        res = true;
      } catch(e) {}
      return res;
    },
    read: function() {
      var res;
      try {
        res = angular.fromJson(window.sessionStorage.getItem(this._key))
      } catch(e) {}

      return res;
    }
  };

  /* @ngInject */
  function HitmandsAuthConfig(AuthServiceProvider) {

    AuthServiceProvider
      .useRoutes({
        login: '/api/v1/users/login',
        logout: '/api/v1/users/logout',
        fetch: '/api/v1/users/current'
      })
      .tokenizeHttp()
      .parseHttpAuthData(function(data, headers, statusCode) {

        return {
          user: data.user,
          token: data.token,
          authLevel: data.authLevel
        };
      });

    var _session = session.read();
    if(_session) {
      AuthServiceProvider.setLoggedUser(_session.user, _session.token, _session.authLevel);
    }

  }

  /* @ngInject */
  function HitmandsAuthRun(AuthService, $rootScope) {
    $rootScope.currentUser = AuthService.getCurrentUser();
    $rootScope.isUserLoggedIn = AuthService.isUserLoggedIn();

    $rootScope.$on('hitmands.auth:update', function(event) {
      $rootScope.currentUser = AuthService.getCurrentUser();
      $rootScope.isUserLoggedIn = AuthService.isUserLoggedIn();

      if(!$rootScope.isUserLoggedIn) {
        session.unstore();
      }
    });


    $rootScope.$on('hitmands.auth:login.resolved', function(event, result) {
      session.unstore();
      session.store(result.data);
    });
    $rootScope.$on('hitmands.auth:fetch.resolved', function(event, result) {
      session.unstore();
      session.store(result.data);
    });
  }

  angular
    .module('hitmands.auth')
    .config(HitmandsAuthConfig)
    .run(HitmandsAuthRun)
  ;

}).call(this);
