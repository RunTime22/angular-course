(function(window, angular) {
   'use strict';

   (function() {
      /* @ngInject */
      function EsisAngularCourseConfig() {}
      /* @ngInject */
      function EsisAngularCourseRun($rootScope, $state, $stateParams, AuthService, $http, $injector) {
         $rootScope.$state = $state;
         $rootScope.$stateParams = $stateParams;
         window.AuthService = AuthService;
         window.$http = $http;
         window.$state = $state;
         window.$injector = $injector.get;
      }
      EsisAngularCourseRun.$inject = ['$rootScope', '$state', '$stateParams', 'AuthService', '$http', '$injector'];
      var dependencies = [ "ui.router", "hitmands.auth", "ngSanitize" ];
      angular.module("esis.angular-course", dependencies).config(EsisAngularCourseConfig).run(EsisAngularCourseRun);
   }).call(this);

   (function() {
      /* @ngInject */
      function HitmandsAuthConfig(AuthServiceProvider) {
         AuthServiceProvider.useRoutes({
            "login": "/api/v1/users/login",
            "logout": "/api/v1/users/logout",
            "fetch": "/api/v1/users/current"
         }).tokenizeHttp().parseHttpAuthData(function(data, headers, statusCode) {
            return {
               "user": data.user,
               "token": data.token,
               "authLevel": data.authLevel
            };
         });
         var _session = session.read();
         _session && AuthServiceProvider.setLoggedUser(_session.user, _session.token, _session.authLevel);
      }
      HitmandsAuthConfig.$inject = ['AuthServiceProvider'];
      /* @ngInject */
      function HitmandsAuthRun(AuthService, $rootScope) {
         $rootScope.currentUser = AuthService.getCurrentUser();
         $rootScope.isUserLoggedIn = AuthService.isUserLoggedIn();
         $rootScope.$on("hitmands.auth:update", function(event) {
            $rootScope.currentUser = AuthService.getCurrentUser();
            $rootScope.isUserLoggedIn = AuthService.isUserLoggedIn();
            $rootScope.isUserLoggedIn || session.unstore();
         });
         $rootScope.$on("hitmands.auth:login.resolved", function(event, result) {
            session.unstore();
            session.store(result.data);
         });
         $rootScope.$on("hitmands.auth:fetch.resolved", function(event, result) {
            session.unstore();
            session.store(result.data);
         });
      }
      HitmandsAuthRun.$inject = ['AuthService', '$rootScope'];
      var session = {
         "_key": "Esis.Angular-Course.user.session",
         "store": function(value) {
            var res = !1;
            try {
               window.sessionStorage.setItem(this._key, angular.toJson(value));
               res = !0;
            } catch (e) {}
            return res;
         },
         "unstore": function() {
            var res = !1;
            try {
               window.sessionStorage.removeItem(this._key);
               res = !0;
            } catch (e) {}
            return res;
         },
         "read": function() {
            var res;
            try {
               res = angular.fromJson(window.sessionStorage.getItem(this._key));
            } catch (e) {}
            return res;
         }
      };
      angular.module("hitmands.auth").config(HitmandsAuthConfig).run(HitmandsAuthRun);
   }).call(this);
//# sourceMappingURL=application.js.map

})(window, angular);