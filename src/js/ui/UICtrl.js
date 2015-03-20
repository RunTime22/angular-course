(function() {

  /* @ngInject */
  function EsisCedecraUIConfig($stateProvider) {
    var section = {
      name: 'app',
      url: '^/',
      abstract: true,
      data: {},
      views: {
        'header': {
          templateUrl: '/partials/ui/header-base.html',
          controller: 'UICtrl'
        },
        'sidebar': {
          templateUrl: '/partials/ui/sidebar-base.html',
          controller: 'UICtrl'
        },
        'main': {
          templateUrl: '/partials/ui/main-base.html',
          controller: 'UICtrl'
        },
        'footer': {
          templateUrl: '/partials/ui/footer-base.html',
          controller: 'UICtrl'
        }
      }
    };
    var index = {
      name: 'app.index',
      url: ''
    };

    $stateProvider
      .state(section)
      .state(index);
  }

  /* @ngInject */
  function EsisCedecraUICtrl($scope, $location, $state) {
    $scope.courseName = 'AngularJS Course';

    $scope.summary = '/partials/ui/includes/summary.html';
    $scope.summarySectionId = 'angular-summary';
    $scope.apiSectionId = 'api-documentation';

    $scope.goToApi = function(event) {
      event.preventDefault();

      if($state.current.name !== 'app.index') {
        $state.go('app.index').then(function() {
            $location.hash($scope.apiSectionId);
        });
      } else {
        $location.hash($scope.apiSectionId);
      }
    };

    $scope.goToSummary = function(event) {
      event.preventDefault();

      if($state.current.name !== 'app.index') {
        $state.go('app.index').then(function() {
            $location.hash($scope.summarySectionId);
        });
      } else {
        $location.hash($scope.summarySectionId);
      }
    };

    // FOOTER
    $scope.esisLink = 'http://www.esis-italia.com/';
    $scope.esisLogo = 'http://www.esis-italia.com/wp-content/uploads/2013/07/LOGO-ESIS6.png';
    $scope.trainer = 'Giuseppe Mandato';
    $scope.trainerLink = 'http://it.linkedin.com/in/giuseppemandato';
  }

  angular
    .module('esis.angular-course.ui')
    .config(EsisCedecraUIConfig)
    .controller('UICtrl', EsisCedecraUICtrl)
  ;
}).call(this);
