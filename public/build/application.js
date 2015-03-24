/**!
 * @Project: angular-course
 * @Authors: Hitmands <gius.mand.developer@gmail.com>
 * @Link: https://github.com/hitmands/angular-course
 * @License: MIT
 * @Date: 2015-03-24
 * @Version: 1.0.0
 * 
 * @ngdoc: module
 * @namespace: esis
 * @name: angular-course
 * @module: esis.angular-course
 * @description: Course on AngularJS.
***/

(function(window, angular) {
   'use strict';

   (function() {
      /* @ngInject */
      function EsisAngularCourseConfig($compileProvider, $locationProvider, $urlRouterProvider) {
         $compileProvider.debugInfoEnabled(!0);
         $locationProvider.html5Mode(!0);
         $urlRouterProvider.rule(function($injector, $location) {
            var path = $location.url();
            return "/" === path[path.length - 1] || path.indexOf("/?") > -1 ? void 0 : path.indexOf("?") > -1 ? path.replace("?", "/?") : path + "/";
         });
      }
      EsisAngularCourseConfig.$inject = ['$compileProvider', '$locationProvider', '$urlRouterProvider'];
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
      var dependencies = [ "esis.angular-course.ui", "esis.angular-course.errors", "esis.angular-course.users", "esis.angular-course.api", "ui.router", "hitmands.auth", "ngSanitize" ];
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
            session.store(result.data);
         });
         $rootScope.$on("hitmands.auth:fetch.resolved", function(event, result) {
            session.store(result.data);
         });
      }
      HitmandsAuthRun.$inject = ['AuthService', '$rootScope'];
      var session = {
         "_key": "Esis.Angular-Course.user.session",
         "store": function(value) {
            this.unstore();
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

   (function() {
      /* @ngInject */
      function UserInterfaceConfig() {}
      /* @ngInject */
      function UserInterfaceRun() {}
      var dependencies = [ "esis.angular-course", "ui.router" ];
      angular.module("esis.angular-course.ui", dependencies).config(UserInterfaceConfig).run(UserInterfaceRun);
   }).call(this);

   (function() {
      /* @ngInject */
      function EsisCedecraUIConfig($stateProvider) {
         var section = {
            "name": "app",
            "url": "^/",
            "abstract": !0,
            "data": {},
            "views": {
               "header": {
                  "templateUrl": "/partials/ui/header-base.html",
                  "controller": "UICtrl"
               },
               "sidebar": {
                  "templateUrl": "/partials/ui/sidebar-base.html",
                  "controller": "UICtrl"
               },
               "main": {
                  "templateUrl": "/partials/ui/main-base.html",
                  "controller": "UICtrl"
               },
               "footer": {
                  "templateUrl": "/partials/ui/footer-base.html",
                  "controller": "UICtrl"
               }
            }
         }, index = {
            "name": "app.index",
            "url": ""
         };
         $stateProvider.state(section).state(index);
      }
      EsisCedecraUIConfig.$inject = ['$stateProvider'];
      /* @ngInject */
      function EsisCedecraUICtrl($scope, $location, $state) {
         $scope.courseName = "AngularJS Course";
         $scope.summary = "/partials/ui/includes/summary.html";
         $scope.summarySectionId = "angular-summary";
         $scope.apiSectionId = "api-documentation";
         $scope.goToApi = function(event) {
            event.preventDefault();
            "app.index" !== $state.current.name ? $state.go("app.index").then(function() {
               $location.hash($scope.apiSectionId);
            }) : $location.hash($scope.apiSectionId);
         };
         $scope.goToSummary = function(event) {
            event.preventDefault();
            "app.index" !== $state.current.name ? $state.go("app.index").then(function() {
               $location.hash($scope.summarySectionId);
            }) : $location.hash($scope.summarySectionId);
         };
         $scope.esisLink = "http://www.esis-italia.com/";
         $scope.esisLogo = "http://www.esis-italia.com/wp-content/uploads/2013/07/LOGO-ESIS6.png";
         $scope.trainer = "Giuseppe Mandato";
         $scope.trainerLink = "http://it.linkedin.com/in/giuseppemandato";
      }
      EsisCedecraUICtrl.$inject = ['$scope', '$location', '$state'];
      angular.module("esis.angular-course.ui").config(EsisCedecraUIConfig).controller("UICtrl", EsisCedecraUICtrl);
   }).call(this);

   (function() {
      /* @ngInject */
      function ErrorConfig($urlRouterProvider, $stateProvider) {
         $urlRouterProvider.otherwise(function($injector, $location) {
            console.log("Requested PATH NOT-FOUND: ", $location.path());
            return "/errors/404";
         });
         var section = {
            "name": "app.errors",
            "url": "errors/",
            "abstract": !0,
            "data": {}
         };
         $stateProvider.state(section);
      }
      ErrorConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
      /* @ngInject */
      function ErrorRun($rootScope) {}
      ErrorRun.$inject = ['$rootScope'];
      var dependencies = [];
      angular.module("esis.angular-course.errors", dependencies).config(ErrorConfig).run(ErrorRun);
   }).call(this);

   (function() {
      /* @ngInject */
      function ErrorConfig($stateProvider) {
         var err404 = {
            "name": "app.errors.404",
            "url": "404/",
            "views": {
               "main@": {
                  "controllerAs": "error",
                  "templateUrl": "/partials/errors/Error404.html",
                  "controller": "Error404Ctrl"
               }
            }
         };
         $stateProvider.state(err404);
      }
      ErrorConfig.$inject = ['$stateProvider'];
      /* @ngInject */
      function Error404Ctrl() {
         var vm = this;
         vm.text = "This is not the web page you are looking for";
         vm.code = 404;
      }
      angular.module("esis.angular-course.errors").config(ErrorConfig).controller("Error404Ctrl", Error404Ctrl);
   }).call(this);

   (function() {
      /* @ngInject */
      function EsisAngularCourseUsersConfig() {}
      /* @ngInject */
      function EsisAngularCourseUsersRun($rootScope) {}
      EsisAngularCourseUsersRun.$inject = ['$rootScope'];
      var dependencies = [ "hitmands.auth" ], esisAngularCourseUsersConstant = {};
      esisAngularCourseUsersConstant.ROLES = {
         "public": [ "public" ],
         "customer": [ "public", "customer" ],
         "manager": [ "public", "customer", "manager" ],
         "admin": [ "public", "customer", "manager", "admin" ]
      };
      angular.module("esis.angular-course.users", dependencies).constant("USERS", esisAngularCourseUsersConstant).config(EsisAngularCourseUsersConfig).run(EsisAngularCourseUsersRun);
   }).call(this);

   (function() {
      /* @ngInject */
      function UserServiceFactory($q, $http) {
         var self = this;
         self.create = function(fields) {
            var configs = {};
            return $http.post("/api/v1/users/", fields, configs).then(function(result) {
               return new User(result.data);
            }, function(error) {
               return $q.reject(error);
            });
         };
      }
      UserServiceFactory.$inject = ['$q', '$http'];
      var User = function() {
         function User(data) {
            this.firstName = data.firstName;
            this.lastName = data.lastName;
            this.username = data.username;
            this.role = data.role;
            this.country = data.country;
            this.email = data.email;
         }
         return User;
      }.call(this);
      angular.module("esis.angular-course.users").service("UserService", UserServiceFactory);
   }).call(this);

   (function() {
      /* @ngInject */
      function LoginConfig($stateProvider) {
         var section = {
            "name": "app.users",
            "url": "users/",
            "abstract": !0,
            "data": {},
            "views": {
               "main@": {
                  "templateUrl": "/partials/users/Login.html",
                  "controller": "LoginCtrl"
               }
            }
         }, login = {
            "name": "app.users.login",
            "url": "login/"
         };
         $stateProvider.state(section).state(login);
      }
      LoginConfig.$inject = ['$stateProvider'];
      /* @ngInject */
      function LoginCtrl($scope) {
         $scope.formState = 0;
         $scope.credentials = {
            "username": "",
            "password": "",
            "rememberMe": !1
         };
         $scope.onLoginDone = function(result) {
            $scope.formState = 0;
            console.log("$scope.onLoginDone", result);
         };
         $scope.onLoginFail = function(error) {
            $scope.formState = 2;
            console.log("$scope.onLoginFail", error);
         };
      }
      LoginCtrl.$inject = ['$scope'];
      angular.module("esis.angular-course.users").config(LoginConfig).controller("LoginCtrl", LoginCtrl);
   }).call(this);

   (function() {
      /* @ngInject */
      function NewUserConfig($stateProvider) {
         var section = {
            "name": "app.users.new",
            "url": "new/",
            "data": {},
            "views": {
               "main@": {
                  "controllerAs": "user",
                  "templateUrl": "/partials/users/NewUser.html",
                  "controller": "NewUserCtrl"
               }
            }
         };
         $stateProvider.state(section);
      }
      NewUserConfig.$inject = ['$stateProvider'];
      /* @ngInject */
      function NewUserCtrl($scope, USERS, UserService) {
         var vm = this;
         vm.roles = [];
         vm.formState = 0;
         vm.fields = {
            "username": "",
            "password": "",
            "country": "",
            "role": "",
            "email": "",
            "firstName": "",
            "lastName": ""
         };
         try {
            vm.roles = Object.keys(USERS.ROLES);
         } catch (e) {}
         vm.fields.role = vm.roles[0];
         vm.create = function(event, form) {
            vm.formState = 0;
            event.preventDefault();
            form.$invalid || form.$pristine;
            var fields = angular.copy(vm.fields);
            console.log("Send user.create", event, fields);
            UserService.create(fields).then(function(user) {
               console.log("New User Created: ", user);
               vm.formState = 1;
            }, function(error) {
               console.log("Cannot create user: ", error);
               vm.formState = 2;
            });
         };
      }
      NewUserCtrl.$inject = ['$scope', 'USERS', 'UserService'];
      angular.module("esis.angular-course.users").config(NewUserConfig).controller("NewUserCtrl", NewUserCtrl);
   }).call(this);

   (function() {
      /* @ngInject */
      function ApiConfig() {}
      /* @ngInject */
      function ApiRun($rootScope) {}
      ApiRun.$inject = ['$rootScope'];
      var dependencies = [];
      angular.module("esis.angular-course.api", dependencies).config(ApiConfig).run(ApiRun);
   }).call(this);

   (function() {
      /* @ngInject */
      function ApilistDirectiveFactory($http) {
         return {
            "restrict": "EA",
            "templateUrl": "/partials/api/ApilistDirective.html",
            "link": function ApilistPostLink(iScope, iElement, iAttrs) {
               iScope.endpoints = [];
               $http.get("/api/v1/documentation").then(function(result) {
                  iScope.endpoints = result.data;
               });
            }
         };
      }
      ApilistDirectiveFactory.$inject = ['$http'];
      angular.module("esis.angular-course.api").directive("apilist", ApilistDirectiveFactory);
   }).call(this);
//# sourceMappingURL=application.js.map

})(window, angular);