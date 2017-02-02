(function () {
  'use strict';

  angular
    .module('core.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.path();
      var hasTrailingSlash = path.length > 1 && path[path.length - 1] === '/';

      if (hasTrailingSlash) {
        // if last character is a slash, return the same url without the slash
        var newPath = path.substr(0, path.length - 1);
        $location.replace().path(newPath);
      }
    });

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/modules/core/client/views/home.client.view.html',
        controller: 'HomeController',
        controllerAs: 'vm',
        ncyBreadcrumb: {
          label: 'Home'
        }
      })
      .state('not-found', {
        url: '/not-found',
        templateUrl: '/modules/core/client/views/404.client.view.html',
        controller: 'ErrorController',
        controllerAs: 'vm',
        params: {
          message: function($stateParams) {
            return $stateParams.message;
          }
        },
        data: {
          ignoreState: true,
          pageTitle: 'Not Found'
        },
        ncyBreadcrumb: {
          label: 'Not Found'
        }
      })
      .state('bad-request', {
        url: '/bad-request',
        templateUrl: '/modules/core/client/views/400.client.view.html',
        controller: 'ErrorController',
        controllerAs: 'vm',
        params: {
          message: function($stateParams) {
            return $stateParams.message;
          }
        },
        data: {
          ignoreState: true,
          pageTitle: 'Bad Request'
        },
        ncyBreadcrumb: {
          label: 'Bad Request'
        }
      })
      .state('forbidden', {
        url: '/forbidden',
        templateUrl: '/modules/core/client/views/403.client.view.html',
        data: {
          ignoreState: true,
          pageTitle: 'Forbidden'
        }
      })
      .state('disclaimer', {
        url: '/disclaimer',
        templateUrl: '/modules/core/client/views/disclaimer.client.view.html',
        data: {
          ignoreState: true,
          pageTitle: 'Disclaimer'
        }
      })
      .state('privacy', {
        url: '/privacy',
        templateUrl: '/modules/core/client/views/privacy.client.view.html',
        data: {
          ignoreState: true,
          pageTitle: 'Privacy'
        }
      })
      .state('accessibility', {
        url: '/accessibility',
        templateUrl: '/modules/core/client/views/accessibility.client.view.html',
        data: {
          ignoreState: true,
          pageTitle: 'Accessibility'
        }
      })
      .state('codewithus', {
        url: '/codewithus',
        templateUrl: '/modules/core/client/views/codewithus.view.html',
        data: {
          ignoreState: true,
          pageTitle: 'Code With Us'
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: '/modules/core/client/views/about.view.html',
        data: {
          ignoreState: true,
          pageTitle: 'About Us'
        }
      })
      .state('copyright', {
        url: '/copyright',
        templateUrl: '/modules/core/client/views/copyright.client.view.html',
        data: {
          ignoreState: true,
          pageTitle: 'Copyright'
        }
      })
      ;
  }
}());
